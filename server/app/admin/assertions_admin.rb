Trestle.resource(:assertions) do
  collection do
    Assertion.eager_load(:flags, molecular_profile: { variants: [ :feature ] }).order(id: :asc)
  end

  search do |q|
    if q
      query_id = q.to_i.to_s == q ? q.to_i : nil
      if query_id
        collection.where("assertions.id = ?", query_id)
          .or(collection.where("features.name ILIKE ?", "#{q}%"))
          .or(collection.where("variants.name ILIKE ?", "#{q}%"))
      else
        collection.where("features.name ILIKE ?", "#{q}%")
          .or(collection.where("variants.name ILIKE ?", "#{q}%"))
      end
    else
      collection
    end
  end

  remove_action :destroy
  remove_action :new

  menu do
    item :assertions, icon: "fa fa-file-signature"
  end

  scope :all
  scope :accepted, -> { Assertion.where(status: "accepted") }, default: true
  scope :submitted, -> { Assertion.where(status: "submitted") }
  scope :rejected, -> { Assertion.where(status: "rejected") }
  scope :flagged, -> { Assertion.where(flagged: true) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :molecular_profile do |assertion|
      assertion.molecular_profile.display_name
    end
    column :summary
    column :assertion_type do |assertion|
      status_tag(assertion.assertion_type)
    end
    column :status do |assertion|
      status_tag(assertion.status)
    end
    column :flagged
  end

  # Customize the form fields shown on the new/edit views.
  form do |assertion|
    tab :assertion do
      row do
        col(sm: 1) { static_field :id }
        col(sm: 1) { status_field assertion.molecular_profile.display_name }
        col(sm: 2) do
          variant_origins = Assertion.variant_origins.keys.map { |variant_origin| [ variant_origin, variant_origin ] }
          select :variant_origin, variant_origins
        end
        col(sm: 2) do
          assertion_statuses = [ "suggested", "accepted", "rejected", "deleted" ]
          select :status, assertion_statuses
        end
        if assertion.flagged
          col do
            static_field :flagged do
              status_tag(icon("fa fa-flag"), :danger)
            end
          end
        end
      end

      row do
        col(sm: 5) do
          assertion_types = Assertion.assertion_types.keys.map { |assertion_type| [ assertion_type, assertion_type ] }
          select :assertion_type, assertion_types
        end
        col(sm: 2) do
          evidence_directions = Assertion.evidence_directions.keys.map { |evidence_direction| [ evidence_direction, evidence_direction ] }
          select :evidence_direction, evidence_directions
        end
        col(sm: 5) do
          significances = Assertion.significances.keys.map { |significance| [ significance, significance ] }
          select :significance, significances
        end
      end

      text_field :summary
      text_area :description

      collection_select :disease_id, Disease.order(:name), :id, :name

      row do
        col(sm: 10) do
          select :therapy_ids, Therapy.order(:name), { label: "Therapies" }, multiple: true
        end
        col(sm: 2) do
          therapy_interaction_types = Assertion.therapy_interaction_types.keys.map { |interaction_type| [ interaction_type, interaction_type ] }
          therapy_interaction_types << [ "None", nil ]
          select :therapy_interaction_type, therapy_interaction_types
        end
      end

      row do
        col(sm: 10) do
          collection_select :nccn_guideline_id, NccnGuideline.order(:name), :id, :name
        end
        col(sm: 2) do
          text_field :nccn_guideline_version
        end
      end

      row do
        col(sm: 6) do
          select :acmg_code_ids, AcmgCode.order(:code), { label: "ACMG Codes" }, multiple: true
        end
        col(sm: 6) do
          amp_levels = Assertion.amp_levels.keys.map { |amp_level| [ amp_level, amp_level ] }
          select :amp_level, amp_levels
        end
      end

      row do
        col(sm: 3) { check_box :fda_companion_test }
        col(sm: 3) { check_box :fda_regulatory_approval }
      end

      select :phenotype_ids, Phenotype.order(:hpo_class), { label: "Phenotypes" }, multiple: true

      divider

      row do
        col { datetime_field :created_at, readonly: true }
        col { datetime_field :updated_at, readonly: true }
      end
    end

    tab :comments, badge: assertion.comments.size do
      table assertion.comments do
        column :id do |comment|
          link_to comment.id, CommentsAdmin.instance_path(comment)
        end
        column :title
        column :comment
        column :user do |comment|
          comment.user.username
        end
      end
    end

    tab :flags, badge: assertion.flags.where(state: "open").exists? do
      table assertion.flags do
        column :id do |flag|
          link_to flag.id, FlagsAdmin.instance_path(flag)
        end
        column :flagging_user do |flag|
          flag.flagging_user.username
        end
        column :state
        column :resolving_user do |flag|
          flag.resolving_user&.username
        end
      end
    end

    tab :revisions, badge: assertion.revisions.where(status: "new").exists? do
      table assertion.revisions do
        column :id do |revision|
          link_to revision.id, RevisionsAdmin.instance_path(revision)
        end
        column :field_name
        column :current_value
        column :suggested_value
        column :revision_set_id
        column :status
        column :revisor do |revision|
          revision.revisor.username
        end
      end
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:assertion).permit(:name, ...)
  # end
end
