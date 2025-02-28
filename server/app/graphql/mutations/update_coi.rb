class Mutations::UpdateCoi < Mutations::BaseMutation
  description "Update the currently logged in User's Conflict of Interest statement"

  argument :coi_present, Boolean, required: true,
    description: "Does the user report having a conflict of interest? Mark true if so."

  argument :statement, String, required: false,
    description: "If the user reports a potential conflict of interest please provide a brief summary of it."

  field :coi_statement, Types::Entities::CoiType, null: false

  def ready?(coi_present:, statement: nil)
    validate_user_logged_in

    if coi_present && statement.blank?
      raise GraphQL::ExecutionError, "If you indicate a potential conflict of interest, you must provide a statement."
    elsif !coi_present && statement.present?
      raise GraphQL::ExecutionError, "If you indicate no conflict of interest is present, there is no need for a statement."
    elsif statement.present? && statement.squish.size < 10
      raise GraphQL::ExecutionError, "If a conflict of interest statement is provided, it must be greater than 10 characters in length."
    end

    return true
  end

  def resolve(coi_present:, statement: nil)
    coi = ConflictOfInterestStatement.create!(
      user: context[:current_user],
      coi_present: coi_present,
      coi_statement: statement
    )

    return {
      coi_statement: coi,
    }
  end
end
