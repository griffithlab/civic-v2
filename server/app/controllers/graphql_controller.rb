class GraphqlController < ApplicationController
  include WithGraphqlVariables
  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  protect_from_forgery with: :null_session, if: :from_external_domain

  def execute
    ActiveStorage::Current.host = request.base_url
    variables = prepare_variables(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]

    context = {
      current_user: current_user,
      tracers: [GraphqlAnalyticsTracer.for_request(request)]
    }

    result = Civic2Schema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  private
  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { errors: [{ message: e.message, backtrace: e.backtrace }], data: {} }, status: 500
  end

  def from_external_domain
    request.headers["HTTP_X_XSRF_TOKEN"].blank?
  end
end
