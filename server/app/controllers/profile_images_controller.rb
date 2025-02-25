class ProfileImagesController < ApplicationController
  def upload
   unless signed_in?
    return head(:forbidden)
   end

   if current_user.profile_image.attach(params[:image])
     head(:ok)
   else
     head(:bad_request)
   end
  end
end
