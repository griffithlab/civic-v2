module LinkAdaptors
  class Gene < Base
    def display_name
      obj.name
    end

    def base_path
      "/features/#{obj.feature.id}"
    end
  end
end
