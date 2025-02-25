class Mutations::AddTherapy < Mutations::BaseMutation
  description "Add a new therapy to the database."

  argument :name, String, required: true,
    description: "The name of the therapy.",
    validates: { length: { minimum: 3 } }

  argument :ncit_id, String, required: false,
    description: "The NCIt ID of the therapy, if the therapy is present in the NCIthesaurus."

  field :therapy, Types::Entities::TherapyType, null: false,
    description: "The newly created therapy."

  field :new, Boolean, null: false,
    description: "True if the therapy was newly created. False if the returned therapy was already in the database."

  def ready?(**kwargs)
    validate_user_logged_in
    true
  end

  def resolve(name:, ncit_id: nil)
    display_name = Therapy.capitalize_name(name)
    if ncit_id
      parsed_ncit_id = ncit_id.upcase.sub("NCIT:", "")
      if t = Therapy.find_by(ncit_id: parsed_ncit_id)
        { therapy: t, new: false }
      else
        t = Therapy.where(name: display_name, ncit_id: parsed_ncit_id).create!
        { therapy: t, new: true }
      end
    elsif t = Therapy.where("name ILIKE ?", name).first
      { therapy: t, new: false }
    else
      t = Therapy.where(name: display_name).create!
      { therapy: t, new: true }
    end
  end
end
