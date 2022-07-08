module LinkAdaptors
  class Variant < Base
    def display_name
      "#{obj.name} (#{obj.gene.name})"
    end

    def base_path
      "/variants/#{obj.id}"
    end
  end
end
