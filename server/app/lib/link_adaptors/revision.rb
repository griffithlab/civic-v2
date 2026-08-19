module LinkAdaptors
  class Revision < Base
    def display_name
      "#RID#{obj.id}"
    end

    def base_path
      subject = obj.subject
      adaptor = if [ "Variants::GeneVariant", "Variants::FactorVariant", "Variants::FusionVariant", "Variants::RegionVariant" ].include? (subject.class.to_s)
        "Variant"
      else
        subject.class
      end
      subject_adaptor = "LinkAdaptors::#{adaptor}".constantize.new(subject)
      subject_adaptor.base_path + "/revisions"
    end
  end
end
