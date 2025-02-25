require "csv"
module Importer
  class EntrezSymbols
    attr_reader :file_path
    def initialize(file_path)
      @file_path = file_path
    end

    def import
      import_symbols
    end

    private
    def import_symbols
      ActiveRecord::Base.transaction do
        File.open(file_path, "r") do |file|
          reader = Zlib::GzipReader.new(file, encoding: "iso-8859-1:UTF-8")
          CSV.new(reader, col_sep: "\t", headers: true, liberal_parsing: true).each do |line|
            next unless valid_line?(line)
            process_line(line)
          end
          reader.close
        end
      end
    end

    def valid_line?(line)
      line["GeneID"].present? &&
        line["Symbol_from_nomenclature_authority"].present? &&
        line["Symbol_from_nomenclature_authority"].strip != "-" &&
        line["#tax_id"] == "9606"
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
        # TODO delete when we remove this column
        gene.name = line["Symbol_from_nomenclature_authority"]
        gene.save!
      else
        feature = gene.feature
        feature.name = line["Symbol_from_nomenclature_authority"]
        feature.full_name = line["description"]
        feature.save!
      end

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

      gene.save!
      feature.save!
    end
  end
end
