module LinkAdaptors
  class EvidenceItem < Base
    def display_name
      "EID#{obj.id}"
    end

    def base_path
      "/evidence/#{obj.id}"
    end
  end
end
