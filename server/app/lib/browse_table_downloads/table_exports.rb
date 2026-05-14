module BrowseTableDownloads
  class TableExports
    def self.all
      @all ||= {
        "features" => TableExport.new(resolver: Resolvers::BrowseFeatures, formatter: Formatters::Features),
        "variants" => TableExport.new(resolver: Resolvers::BrowseVariants, formatter: Formatters::Variants),
        "molecular_profiles" => TableExport.new(resolver: Resolvers::BrowseMolecularProfiles, formatter: Formatters::MolecularProfiles),
        "variant_groups" => TableExport.new(resolver: Resolvers::BrowseVariantGroups, formatter: Formatters::VariantGroups),
        "sources" => TableExport.new(resolver: Resolvers::BrowseSources, formatter: Formatters::Sources),
        "diseases" => TableExport.new(resolver: Resolvers::BrowseDiseases, formatter: Formatters::Diseases),
        "therapies" => TableExport.new(resolver: Resolvers::BrowseTherapies, formatter: Formatters::Therapies),
        "phenotypes" => TableExport.new(resolver: Resolvers::BrowsePhenotypes, formatter: Formatters::Phenotypes),
        "organizations" => TableExport.new(resolver: Resolvers::BrowseOrganizations, formatter: Formatters::Organizations),
        "users" => TableExport.new(resolver: Resolvers::BrowseUsers, formatter: Formatters::Users),
        "evidence" => TableExport.new(resolver: Resolvers::TopLevelEvidenceItems, formatter: Formatters::EvidenceItems),
        "assertions" => TableExport.new(resolver: Resolvers::TopLevelAssertions, formatter: Formatters::Assertions),
        "clinical_trials" => TableExport.new(resolver: Resolvers::TopLevelClinicalTrials, formatter: Formatters::ClinicalTrials),
        "variant_types" => TableExport.new(resolver: Resolvers::TopLevelVariantTypes, formatter: Formatters::VariantTypes),
        "source_suggestions" => TableExport.new(resolver: Resolvers::BrowseSourceSuggestions, formatter: Formatters::SourceSuggestions),
      }
    end
  end
end
