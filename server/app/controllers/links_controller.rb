class LinksController < ApplicationController
  after_action :submit_analytics

  def redirect
    router = FrontendRouter.new(
      params[:idtype] || params[:idType],
      params[:id],
      request.base_url
    )

    url = router.url
    if url.blank?
      head :bad_request
    else
      redirect_to url
    end
  end

  def redirect_legacy_gene_id
    params[:idtype] = 'genes'
    redirect
  end

  private
  def submit_analytics
    if Analytics.should_submit?(request)
      SubmitExternalLinkEvent.perform_later(
        path: request.path,
        referrer: request.referer,
        user_agent: request.user_agent,
        user_ip: request.remote_ip,
      )
    end
  end
end
