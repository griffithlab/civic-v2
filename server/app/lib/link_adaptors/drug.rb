module LinkAdaptors
  class Drug < Base
    def display_name
      obj.name
    end

    def base_path
      "/drugs/#{obj.id}"
    end
  end
end
