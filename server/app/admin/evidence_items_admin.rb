Trestle.resource(:evidence_items) do
  collection do
    EvidenceItem.eager_load(:flags, molecular_profile: {variants: [:feature]}).order(id: :asc)
  end

  remove_action :destroy
  remove_action :new

  menu do
    item :evidence_items, icon: "fa fa-file-alt"
  end

  scope :all
  scope :accepted, -> { EvidenceItem.where(status: 'accepted') }, default: true
  scope :submitted, -> { EvidenceItem.where(status: 'submitted') }
  scope :rejected, -> { EvidenceItem.where(status: 'rejected') }
  scope :flagged, -> { EvidenceItem.where(flagged: true) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :molecular_profile do |evidence_item|
      evidence_item.molecular_profile.display_name
    end
    column :description
    column :evidence_type do |evidence_item|
      status_tag(evidence_item.evidence_type)
    end
    column :status do |evidence_item|
      status_tag(evidence_item.status)
    end
    column :flagged
  end

  # Customize the form fields shown on the new/edit views.
  form do |evidence_item|
    tab :evidence_item do
      row do
        col(sm: 1) { static_field :id }
        col(sm: 1) { evidence_item.molecular_profile.display_name }
        col(sm: 2) do
          variant_origins = EvidenceItem.variant_origins.keys.map { |variant_origin| [variant_origin, variant_origin] }
          select :variant_origin, variant_origins
        end
        col(sm: 2) do
          evidence_levels = EvidenceItem.evidence_levels.keys.map { |evidence_level| [evidence_level, evidence_level] }
          select :evidence_level, evidence_levels
        end
        col(sm: 1) do
          evidence_ratings = [[1,1],[2,2],[3,3],[4,4],[5,5]]
          select :rating, evidence_ratings
        end
        col(sm: 2) do
          evidence_statuses = ["suggested", "accepted", "rejected", "deleted"]
          select :status, evidence_statuses
        end
        if evidence_item.flagged
          col(sm: 1) do
            static_field :flagged do
              status_tag(icon("fa fa-flag"), :danger)
            end
          end
        end
      end

      row do
        col(sm: 5) do
          evidence_types = EvidenceItem.evidence_types.keys.map { |evidence_type| [evidence_type, evidence_type] }
          select :evidence_type, evidence_types
        end
        col(sm: 2) do
          evidence_directions = EvidenceItem.evidence_directions.keys.map { |evidence_direction| [evidence_direction, evidence_direction] }
          select :evidence_direction, evidence_directions
        end
        col(sm: 5) do
          significances = EvidenceItem.significances.keys.map { |significance| [significance, significance] }
          select :significance, significances
        end
      end

      text_area :description

      collection_select :disease_id, Disease.order(:name), :id, :name

      row do
        col(sm: 10) do
          select :therapy_ids, Therapy.order(:name), { label: "Therapies" }, multiple: true
        end
        col(sm: 2) do
          therapy_interaction_types = EvidenceItem.therapy_interaction_types.keys.map { |interaction_type| [interaction_type, interaction_type] }
          therapy_interaction_types << ["None", nil]
          select :therapy_interaction_type, therapy_interaction_types
        end
      end

      select :phenotype_ids, Phenotype.order(:hpo_class), { label: "Phenotypes" }, multiple: true

      collection_select :source_id, Source.order(:citation), :id, :display_name

      divider

      row do
        col { datetime_field :created_at, readonly: true }
        col { datetime_field :updated_at, readonly: true }
      end
    end

    tab :comments, badge: evidence_item.comments.size do
      table evidence_item.comments do
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

    tab :flags, badge: evidence_item.flags.where(state: 'open').exists? do
      table evidence_item.flags do
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

    tab :revisions, badge: evidence_item.revisions.where(status: 'new').exists? do
      table evidence_item.revisions do
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
  #   params.require(:evidence_item).permit(:name, ...)
  # end
end
