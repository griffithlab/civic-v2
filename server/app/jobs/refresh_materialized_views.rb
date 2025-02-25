class RefreshMaterializedViews < ApplicationJob
  def perform(kwargs)
    views = kwargs.with_indifferent_access["views"]
    to_refresh = if views == "all"
                   [
                     MaterializedViews::DiseaseBrowseTableRow,
                     MaterializedViews::TherapyBrowseTableRow,
                     MaterializedViews::FeatureBrowseTableRow,
                     MaterializedViews::SourceBrowseTableRow,
                     MaterializedViews::VariantBrowseTableRow,
                     MaterializedViews::VariantGroupBrowseTableRow,
                     MaterializedViews::MolecularProfileBrowseTableRow,
                     MaterializedViews::UserBrowseTableRow,
                     MaterializedViews::OrganizationBrowseTableRow
                   ]
    elsif views == "features_only"
                   [
                     MaterializedViews::FeatureBrowseTableRow
                   ]
    elsif views == "except_features"
                   [
                     MaterializedViews::DiseaseBrowseTableRow,
                     MaterializedViews::TherapyBrowseTableRow,
                     MaterializedViews::SourceBrowseTableRow,
                     MaterializedViews::VariantBrowseTableRow,
                     MaterializedViews::VariantGroupBrowseTableRow,
                     MaterializedViews::MolecularProfileBrowseTableRow,
                     MaterializedViews::UserBrowseTableRow,
                     MaterializedViews::OrganizationBrowseTableRow
                   ]
    else
                   []
    end

    to_refresh.each { |klass| klass.refresh }
  end
end
