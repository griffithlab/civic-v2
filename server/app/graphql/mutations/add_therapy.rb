class Mutations::AddTherapy < Mutations::BaseMutation
  description 'Add a new therapy to the database.'

  argument :name, String, required: true,
    description: 'The name of the therapy.',
    validates: { length: { minimum: 3 } }

  argument :ncit_id, String, required: false,
    description: 'The NCIt ID of the therapy, if the therapy is present in the NCIthesaurus.'

  field :therapy, Types::Entities::TherapyType, null: false,
    description: 'The newly created therapy.'

  field :new, Boolean, null: false,
    description: 'True if the therapy was newly created. False if the returned therapy was already in the database.'

  def ready?(**kwargs)
    validate_user_logged_in
    return true
  end

  def resolve(name: , ncit_id: nil)
    display_name = Drug.capitalize_name(name)
    if ncit_id
      parsed_ncit_id = ncit_id.upcase.sub('NCIT:', '')
      if d = Drug.find_by(ncit_id: parsed_ncit_id)
        return {therapy: d, new: false}
      else
        d = Drug.where(name: display_name, ncit_id: parsed_ncit_id).create!
        return {therapy: d, new: true}
      end
    elsif d = Drug.where("name ILIKE ?", name).first
      return {therapy: d, new: false}
    else
      d = Drug.where(name: display_name).create!
      return {therapy: d, new: true}
    end
  end
end
