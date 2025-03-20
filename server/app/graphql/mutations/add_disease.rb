class Mutations::AddDisease < Mutations::BaseMutation
  description "Add a new disease to the database."

  argument :name, String, required: true,
    description: "The name of the disease.",
    validates: { length: { minimum: 5 } }

  argument :doid, String, required: false,
    description: "The DOID of the disease, if the disease is present in the Disease Ontology.",
    validates: { format: { with: /\A\d{1,7}\z/ }  }

  field :disease, Types::Entities::DiseaseType, null: false,
    description: "The newly created disease."

  field :new, Boolean, null: false,
    description: "True if the disease was newly created. False if the returned disease was already in the database."

  def ready?(**kwargs)
    validate_user_logged_in
    return true
  end

  def resolve(name:, doid: nil)
    display_name = Disease.capitalize_name(name)
    if doid
      if d = Disease.find_by(doid: doid)
        return { disease: d, new: false }
      else
        d = Disease.where(name: display_name, display_name: display_name, doid: doid).create!
        return { disease: d, new: true }
      end
    elsif d = Disease.where("name ILIKE ?", name).first
      return { disease: d, new: false }
    else
      d = Disease.where(name: display_name, display_name: display_name).create!
      return { disease: d, new: true }
    end
  end
end
