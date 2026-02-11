module Types::Queries
  module DataReleaseQuery
    def self.included(klass)
      klass.field :data_releases, [ Types::DataReleaseType ], null: false

      def data_releases
        Rails.cache.fetch("data-releases", expires_in: 12.hours) do
          download_path = File.join(Rails.root, "public", "downloads")
          releases = Dir.glob("#{download_path}/**")
            .select { |f| File.directory? f }

          release_objects = releases.map do |release|
            release_name = File.basename(release)
            {
              name: release_name,
              feature_tsv: file_or_nil(release, release_name, "FeatureSummaries.tsv"),
              variant_tsv: file_or_nil(release, release_name, "VariantSummaries.tsv"),
              variant_group_tsv: file_or_nil(release, release_name, "VariantGroupSummaries.tsv"),
              accepted_evidence_tsv: file_or_nil(release, release_name, "AcceptedClinicalEvidenceSummaries.tsv"),
              accepted_and_submitted_evidence_tsv: file_or_nil(release, release_name, "AcceptedAndSubmittedClinicalEvidenceSummaries.tsv"),
              accepted_assertion_tsv: file_or_nil(release, release_name, "AcceptedAssertionSummaries.tsv"),
              accepted_and_submitted_assertion_tsv: file_or_nil(release, release_name, "AcceptedAndSubmittedAssertionSummaries.tsv"),
              molecular_profile_tsv: file_or_nil(release, release_name, "MolecularProfileSummaries.tsv"),
              accepted_variants_vcf: file_or_nil(release, release_name, "civic_accepted.vcf"),
              accepted_and_submitted_variants_vcf: file_or_nil(release, release_name, "civic_accepted_and_submitted.vcf"),
            }
          end

          release_objects.sort_by do |ro|
            if ro[:name] == "nightly"
              Date.today
            else
              Date.parse(ro[:name])
            end
          end.reverse
        end
      end

      def file_or_nil(path, release, filename)
        release_filename = "#{release}-#{filename}"
        full_path = File.join(path, release_filename)
        if File.exist?(full_path)
          { path:  File.join("/downloads", release, release_filename) }
        else
          nil
        end
      end
    end
  end
end
