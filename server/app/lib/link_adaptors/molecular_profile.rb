module LinkAdaptors
  class MolecularProfile < Base
    def display_name
      obj.display_name
    end

    def base_path
      "/molecular-profiles/#{obj.id}"
    end
  end
end
