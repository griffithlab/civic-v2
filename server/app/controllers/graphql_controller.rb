class GraphqlController < ApplicationController
  include WithGraphqlVariables

  # An uncapped multiplex endpoint lets a single request ask for an unbounded
  # number of operations, which is a cheap denial-of-service. The client's
  # batchMax is configured well below this.
  MAX_BATCH_SIZE = 25

  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  protect_from_forgery with: :null_session, if: :from_external_domain

  def execute
    # A batching client (Apollo's BatchHttpLink) POSTs a top-level JSON array
    # rather than an object; Rails exposes that as params[:_json]. Anything else
    # is a single operation and behaves exactly as it always has.
    if params[:_json].present?
      execute_multiplex(params[:_json])
    else
      execute_single
    end
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  private
  def execute_single
    result = Civic2Schema.execute(
      params[:query],
      variables: prepare_variables(params[:variables]),
      context: graphql_context,
      operation_name: params[:operationName]
    )
    render json: result
  end

  # Runs a batch as one multiplex. Results come back in request order, which is
  # what the client matches its operations up by.
  def execute_multiplex(batch)
    if batch.size > MAX_BATCH_SIZE
      render json: {
        errors: [ { message: "Batch of #{batch.size} operations exceeds the maximum of #{MAX_BATCH_SIZE}." } ]
      }, status: :payload_too_large
      return
    end

    queries = batch.map do |query|
      {
        query: query[:query],
        variables: prepare_variables(query[:variables]),
        operation_name: query[:operationName],
        # a fresh context per operation: they are unrelated queries that happen
        # to share a transport, and must not share per-query bookkeeping
        context: graphql_context,
      }
    end

    render json: Civic2Schema.multiplex(queries)
  end

  def graphql_context
    {
      current_user: current_user,
      trace_mode: analytics_trace_mode,
      request_ip: request.remote_ip,
      request: request,
    }
  end

  # one determination per request, shared by every operation in a batch
  def analytics_trace_mode
    return @analytics_trace_mode if defined?(@analytics_trace_mode)
    @analytics_trace_mode = Analytics.should_submit?(request) ? :analytics : nil
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { errors: [ { message: e.message, backtrace: e.backtrace } ], data: {} }, status: 500
  end

  def from_external_domain
    request.headers["HTTP_X_XSRF_TOKEN"].blank?
  end
end
