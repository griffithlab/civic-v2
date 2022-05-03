class LinksController < ApplicationController
  include Analytics

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
end
