module Types::Revisions
  class LinkoutData < Types::BaseObject
    field :name, String, null: false
    field :current_value,  Types::Revisions::ModeratedFieldType, null: false
    field :suggested_value, Types::Revisions::ModeratedFieldType, null: false

    def self.from_revision(r)
      if r.field_name.ends_with?('_id') || r.field_name.ends_with?('_ids')
        {
          name: display_name(r),
          current_value: { objects: value_for_field(r, method_name: :current_value) },
          suggested_value: { objects: value_for_field(r, method_name: :suggested_value) }
        }
      else
        {
          name: display_name(r),
          current_value: { value: r.current_value },
          suggested_value: { value: r.suggested_value }
        }
      end
    end

    private
    def self.display_name(r)
      display_name = r.field_name
      if display_name.ends_with?('_ids')
        display_name.singularize.titleize.pluralize
      else
        display_name.titleize
      end
    end

    def self.value_for_field(r, method_name:)
      field_class = display_name(r).singularize.constantize
      field_class.find(Array(r.send(method_name))).map do |obj|
        {
          id: obj.id,
          entity_type: obj.class.to_s,
          display_name: obj.display_name,
          display_type: obj.display_type
        }
      end
    end
  end
end
