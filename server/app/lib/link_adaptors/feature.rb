module LinkAdaptors
  class Feature < Base
    def display_name
      obj.name
    end

    def base_path
      "/features/#{obj.id}"
    end
  end
end
