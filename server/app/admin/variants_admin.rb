Trestle.resource(:variants) do
  collection do
    Variant.eager_load(:flags, :variant_aliases).order(name: :asc)
  end

  search do |q|
    if q
      query_id = q.to_i.to_s == q ? q.to_i : nil
      if query_id
        collection.where("variants.name ILIKE ? OR variants.id = ?", "#{q}%", query_id)
          .or(collection.where("variant_aliases.name ILIKE ?", "#{q}%"))
      else
        collection.where("variants.name ILIKE ?", "#{q}%")
          .or(collection.where("variant_aliases.name ILIKE ?", "#{q}%"))
      end
    else
      collection
    end
  end

  remove_action :destroy

  menu do
    item :variants, icon: "fa fa-adjust"
  end

  scope :all
  scope :flagged, -> { Variant.where(flagged: true) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :name
    column :feature
    column :variant_aliases do |variant|
      variant.variant_aliases.map { |a| a.name }.join(", ")
    end
    column :variant_types do |variant|
      variant.variant_types.map { |t| status_tag(t.name) }
    end
    column :flagged
  end

  # Customize the form fields shown on the new/edit views.
  form do |variant|
    tab :variant do
      row do
        col(sm: 1) { static_field :id }
        col(sm: 1) { static_field :name }
        col(sm: 1) do
          static_field :variant do
            link_to variant.feature.name, FeaturesAdmin.instance_path(variant.feature)
          end
        end
        if variant.flagged
          col do
            static_field :flagged do
              status_tag(icon("fa fa-flag"), :danger)
            end
          end
        end
      end

      select :variant_alias_ids, VariantAlias.order(:name), { label: "Variant Aliases" }, multiple: true


      row do
        col(sm: 4) { text_field :allele_registry_id }
        col(sm: 8) do
          select :clinvar_entry_ids, ClinvarEntry.order(:clinvar_id), { label: "ClinVar IDs" }, multiple: true
        end
      end

      select :variant_type_ids, VariantType.order(:name), { label: "Variant Types" }, multiple: true

      select :hgvs_description_ids, HgvsDescription.order(:description), { label: "HGVS Descriptions" }, multiple: true

      row do
        col(sm: 6) do
          references = Variant.reference_builds.keys.map { |b| [ b, b ] }
          select :reference_build, references
        end
        col(sm: 6) { text_field :ensembl_version }
      end
      row do
        col(sm: 2) { text_field :chromosome }
        col(sm: 4) { text_field :representative_transcript }
        col(sm: 2) { text_field :start }
        col(sm: 2) { text_field :stop }
      end
      row do
        col(sm: 2) { text_field :chromosome2 }
        col(sm: 4) { text_field :representative_transcript2 }
        col(sm: 2) { text_field :start2 }
        col(sm: 2) { text_field :stop2 }
      end

      divider

      row do
        col(sm: 6) { datetime_field :created_at, readonly: true }
        col(sm: 6) { datetime_field :updated_at, readonly: true }
      end
    end

    tab :comments, badge: variant.comments.size do
      table variant.comments do
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

    tab :flags, badge: variant.flags.where(state: "open").exists? do
      table variant.flags do
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

    tab :revisions, badge: variant.revisions.where(status: "new").exists? do
      table variant.revisions do
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
  #   params.require(:variant).permit(:name, ...)
  # end
end
