class Mutations::AddDrug < Mutations::BaseMutation
  description 'Add a new drug to the database.'

  argument :name, String, required: true,
    description: 'The name of the drug.',
    validates: { length: { minimum: 3 } }

  argument :ncit_id, String, required: false,
    description: 'The NCIt ID of the drug, if the drug is present in the NCIthesaurus.'

  field :drug, Types::Entities::DrugType, null: false,
    description: 'The newly created drug.'

  field :new, Boolean, null: false,
    description: 'True if the drug was newly created. False if the returned drug was already in the database.'

  def ready?(**kwargs)
    validate_user_logged_in
    return true
  end

  def resolve(name: , ncit_id: nil)
    display_name = Drug.capitalize_name(name)
    if ncit_id
      parsed_ncit_id = ncit_id.upcase.sub('NCIT:', '')
      if d = Drug.find_by(ncit_id: parsed_ncit_id)
        return {drug: d, new: false}
      else
        d = Drug.where(name: display_name, ncit_id: parsed_ncit_id).create!
        return {drug: d, new: true}
      end
    elsif d = Drug.where("name ILIKE ?", name).first
      return {drug: d, new: false}
    else
      d = Drug.where(name: display_name).create!
      return {drug: d, new: true}
    end
  end
end
