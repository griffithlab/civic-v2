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
      # Filter to this revision's set. Without it the revisions page opens on
      # its default "New" status filter, so the permalink of an accepted,
      # rejected or superseded revision lands on a list that doesn't show it.
      "#{subject_adaptor.base_path}/revisions?revisionSetId=#{obj.revision_set_id}"
    end
  end
end
