module LinkAdaptors
  class Revision < Base

    def display_name
      "#RID#{obj.id}"
    end

    def base_path
      moderated = obj.moderated
      moderated_adaptor = "LinkAdaptors::#{moderated.class}".constantize.new(moderated)
      moderated_adaptor.base_path + "/revisions"
    end
  end
end
