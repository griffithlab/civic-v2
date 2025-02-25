class Resolvers::ValidateRevisionsForAcceptance < GraphQL::Schema::Resolver
  type Types::ValidationErrorsType, null: false

  argument :revision_ids, [ Int ], required: true,
    description: "A list of CIViC Revisions IDs to validate"

  def resolve(revision_ids:)
    if revision_ids.empty?
      return {
        'validation_errors': [],
        'generic_errors': []
      }
    end
    validation_errors = []
    generic_errors = []
    revisions = revision_ids.map do |id|
      revision = Revision.find_by(id: id)
      if revision.nil?
        generic_errors << "Revision with id #{id} doesn't exist."
      elsif revision.status != "new"
        generic_errors << "Revision with id #{id} is already #{revision.status}."
      end
      revision
    end

    if !revisions.empty?
      subjects = revisions.compact.map(&:subject).uniq

      if subjects.size > 1
        generic_errors << "Revisions span multiple subjects"
      end

      revisors = revisions.compact.map(&:revisor).uniq

      if subjects.first.respond_to?(:submitter)
        user_editing_their_own_submission = [
          revisors.size == 1,
          subjects.first.submitter.id == context[:current_user]&.id,
          subjects.first.status == "submitted"
        ].all?

        if !user_editing_their_own_submission
          revisors.each do |user|
            if user.id == context[:current_user]&.id
              generic_errors << "Users cannot accept their own revisions on subjects that are already accepted or they did not originally submit."
            end
          end
        end
      else
        revisors.each do |user|
          if user.id == context[:current_user]&.id
            generic_errors << "Users cannot accept their own revisions."
          end
        end
      end

      revisions.compact.group_by { |r| r.field_name }.each do |field_name, rs|
        if rs.size > 1
          if field_name.ends_with?("_ids")
            formatted_field_name = field_name.singularize.humanize.pluralize
          else
            formatted_field_name = field_name.humanize
          end
          generic_errors << "Multiple revisions with the same field name #{formatted_field_name}: #{rs.map(&:id).join(', ')}"
        end
      end

      # validate applying revisions generates valid entity
      # wrap in a transaction and rollback at the end so that it doesn't
      # actually commit the tested changes
      ActiveRecord::Base.transaction do
        subject = subjects.first
        revisions.each do |revision|
          subject.send("#{revision.field_name}=", revision.suggested_value)
        end
        if !subject.valid?
          subject.errors.each do |attribute, message|
            attribute = attribute.to_s
            if attribute.ends_with?("_ids")
              formatted_attribute = attribute.singularize.humanize.pluralize
            else
              formatted_attribute = attribute.humanize
            end
            validation_errors << { 'field_name': formatted_attribute, 'error':  message }
          end
        end
        raise ActiveRecord::Rollback.new
      end
    end

    {
      'validation_errors': validation_errors,
      'generic_errors': generic_errors
    }
  end
end
