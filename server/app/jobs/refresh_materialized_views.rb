class RefreshMaterializedViews < ApplicationJob

  def perform(kwargs)
    views = kwargs.with_indifferent_access['views']
    to_refresh = if views == 'all'
                   [
                     DiseaseBrowseTableRow,
                     GeneBrowseTableRow,
                     SourceBrowseTableRow,
                     VariantBrowseTableRow,
                     VariantGroupBrowseTableRow,
                     MolecularProfileBrowseTableRow
                   ]
                 elsif views == 'gene_only'
                   [
                     GeneBrowseTableRow
                   ]
                 elsif views == 'except_genes'
                   [
                     DiseaseBrowseTableRow,
                     SourceBrowseTableRow,
                     VariantBrowseTableRow,
                     VariantGroupBrowseTableRow,
                     MolecularProfileBrowseTableRow
                   ]
                 else
                   []
                 end

    to_refresh.each { |klass| klass.refresh }
  end
end
