module LinkAdaptors
  class Gene < Base
    def display_name
      obj.name
    end

    def base_path
      "/genes/#{obj.id}"
    end
  end
end
