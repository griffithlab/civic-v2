require "csv"

module Importer
  class EntrezSymbols
    include EntrezHelpers

    attr_reader :file_path

    def initialize(file_path)
      @file_path = file_path
    end

    def import
      CleanupEntrezSymbols.new.execute(file_path)
      import_symbols
    end

    private
    def import_symbols
      ActiveRecord::Base.transaction do
        process_gzipped_entrez_file(file_path) do |line|
          next unless valid_line?(line)
          process_line(line)
        end
      end
      update_fusion_names
    end

    def process_line(line)
      gene = Features::Gene.where(entrez_id: line["GeneID"]).first_or_initialize

      if gene.feature.nil?
        feature = Feature.create!(
          name: line["Symbol_from_nomenclature_authority"],
          full_name: line["description"],
          description: "",
          feature_instance: gene
        )
        feature.save(validate: false)
        gene.reload_feature
      else
        feature = gene.feature
        feature.name = line["Symbol_from_nomenclature_authority"]
        feature.full_name = line["description"]
        feature.save(validate: false)
      end

      gene.save(validate: false)

      if line["Synonyms"].present?
        synonyms = line["Synonyms"].split("|").map do |synonym|
          if synonym.strip == "-"
            nil
          else
            FeatureAlias.where(name: synonym).first_or_create
          end
        end.compact
        synonyms << FeatureAlias.where(name: line["Symbol"]).first_or_create
        gene.feature.feature_aliases = synonyms.uniq
      end

      if feature.description.blank?
        feature.description = ""
      end

      gene.save(validate: false)
      feature.save(validate: false)
    end

    def update_fusion_names
      # TODO change to point to Feature, not Instance
      Features::Fusion.find_each do |fi|
        fi.feature.name = fi.generate_name
        fi.feature.save!
      end
    end
  end
end
