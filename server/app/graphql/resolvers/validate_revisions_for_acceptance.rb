class Resolvers::ValidateRevisionsForAcceptance < GraphQL::Schema::Resolver
  type Types::ValidationErrorsType, null: false

  argument :revision_ids, [Int], required: true,
    description: 'A list of CIViC Revisions IDs to validate'

  def resolve(revision_ids:)
    if revision_ids.empty?
      return {
        'validation_errors': []
      }
    end
    errors = []
    revisions = revision_ids.map do |id|
      revision = Revision.find_by(id: id)
      if revision.nil?
        errors << "Revision with id #{id} doesn't exist."
      elsif revision.status != 'new'
        errors << "Revision with id #{id} is already #{revision.status}."
      end
      revision
    end

    if !revisions.empty?
      subjects = revisions.compact.map(&:subject).uniq

      if subjects.size > 1
        errors << "Revisions span multiple subjects"
      end

      revisors = revisions.compact.map(&:revisor).uniq
      revisors.each do |user|
        if user.id == context[:current_user]&.id
          errors << "Users cannot accept their own revisions."
        end
      end

      revisions.compact.group_by{|r| r.field_name}.each do |field_name, rs|
        if rs.size > 1
          errors << "Multiple revisions with the same field_name #{field_name}: #{rs.map(&:id).join(', ')}"
        end
      end

      #validate applying revisions generates valid entity
      subject = subjects.first
      revisions.each do |revision|
        subject.send("#{revision.field_name}=", revision.suggested_value)
      end
      if !subject.valid?
        subject.errors.each do |attribute, message|
          errors << "#{attribute}: #{message}"
        end
      end
    end

    return {
      'validation_errors': errors
    }
  end
end
