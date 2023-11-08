class RefreshMaterializedViews < ApplicationJob

  def perform(kwargs)
    views = kwargs.with_indifferent_access['views']
    to_refresh = if views == 'all'
                   [
                     MaterializedViews::DiseaseBrowseTableRow,
                     MaterializedViews::GeneBrowseTableRow,
                     MaterializedViews::SourceBrowseTableRow,
                     MaterializedViews::VariantBrowseTableRow,
                     MaterializedViews::VariantGroupBrowseTableRow,
                     MaterializedViews::MolecularProfileBrowseTableRow
                   ]
                 elsif views == 'gene_only'
                   [
                     MaterializedViews::GeneBrowseTableRow
                   ]
                 elsif views == 'except_genes'
                   [
                     MaterializedViews::DiseaseBrowseTableRow,
                     MaterializedViews::SourceBrowseTableRow,
                     MaterializedViews::VariantBrowseTableRow,
                     MaterializedViews::VariantGroupBrowseTableRow,
                     MaterializedViews::MolecularProfileBrowseTableRow
                   ]
                 else
                   []
                 end

    to_refresh.each { |klass| klass.refresh }
  end
end
