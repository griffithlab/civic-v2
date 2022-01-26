module LinkAdaptors
  class Assertion < Base
    def display_name
      "AID#{obj.id}"
    end

    def raw_name
      "A#{obj.id}"
    end

    def base_path
      "/assertions/#{obj.id}"
    end
  end
end
