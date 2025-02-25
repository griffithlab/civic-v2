module LinkAdaptors
  class Revision < Base
    def display_name
      "#RID#{obj.id}"
    end

    def base_path
      subject = obj.subject
      subject_adaptor = "LinkAdaptors::#{subject.class}".constantize.new(subject)
      subject_adaptor.base_path + "/revisions"
    end
  end
end
