module Types::Interfaces
  module WithDescription
    include Types::BaseInterface

    description "A CIViC entity that has a description field."
    field :description, String, null: false
    field :description_replace_eid_with_source, String, null: false
    field :description_with_tags, [ Types::Commentable::CommentBodySegment ], null: false
    field :description_with_names, String, null: false
    field :description_with_tags_replace_eid_with_source, [ Types::Commentable::CommentBodySegment ], null: false
    field :description_with_names_replace_eid_with_source, String, null: false

    def description_replace_eid_with_source
      Rails.cache.fetch("description_replace_eid_with_source_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, mode: "curies", replace_eid_with_source: true, process_text: false).first
      end
    end

    def description_with_tags
      Rails.cache.fetch("description_with_tags_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description)
      end
    end

    def description_with_names
      Rails.cache.fetch("description_with_names_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, mode: "names", process_text: false).first
      end
    end

    def description_with_tags_replace_eid_with_source
      Rails.cache.fetch("description_with_tags_replace_eid_with_source_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, replace_eid_with_source: true)
      end
    end

    def description_with_names_replace_eid_with_source
      Rails.cache.fetch("description_with_names_replace_eid_with_source_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, mode: "names", replace_eid_with_source: true, process_text: false).first
      end
    end
  end
end
