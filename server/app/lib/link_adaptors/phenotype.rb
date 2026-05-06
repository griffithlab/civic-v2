module LinkAdaptors
  class Phenotype < Base
    def display_name
      obj.name
    end

    def base_path
      "/phenotypes/#{obj.id}"
    end
  end
end
