module LinkAdaptors
  class VariantGroup < Base
    def display_name
      obj.name
    end

    def base_path
      "/variant-groups/#{obj.id}"
    end
  end
end
