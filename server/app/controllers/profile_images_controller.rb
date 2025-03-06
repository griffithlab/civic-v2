class ProfileImagesController < ApplicationController
  def upload
   unless signed_in?
    return head(:forbidden)
   end

   if current_user.profile_image.attach(params[:image])
     return head(:ok)
   else
     return head(:bad_request)
   end
  end
end
