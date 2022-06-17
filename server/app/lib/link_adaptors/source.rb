module LinkAdaptors
  class Source < Base
    def display_name
      obj.display_name
    end

    def base_path
      "/sources/#{obj.id}"
    end
  end
end
