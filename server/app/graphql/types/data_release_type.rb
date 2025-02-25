module Types
  class DownloadableFile < Types::BaseObject
    field :filename, String, null: false
    field :path, String, null: false

    def filename
      File.basename(object[:path])
    end
  end

  class DataReleaseType < Types::BaseObject
    field :name, String, null: false
    field :feature_tsv, DownloadableFile, null: true
    field :variant_tsv, DownloadableFile, null: true
    field :variant_group_tsv, DownloadableFile, null: true
    field :evidence_tsv, DownloadableFile, null: true
    field :assertion_tsv, DownloadableFile, null: true
    field :molecular_profile_tsv, DownloadableFile, null: true
    field :accepted_variants_vcf, DownloadableFile, null: true
    field :accepted_and_submitted_variants_vcf, DownloadableFile, null: true
  end
end
