module LinkAdaptors
  class Disease < Base
    def display_name
      obj.name
    end

    def base_path
      "/diseases/#{obj.id}"
    end
  end
end
