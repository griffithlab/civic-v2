module Importer
  module EntrezHelpers
    def valid_line?(line)
      line["GeneID"].present? &&
        line["Symbol_from_nomenclature_authority"].present? &&
        line["Symbol_from_nomenclature_authority"].strip != "-" &&
        line["#tax_id"] == "9606"
    end

    def process_gzipped_entrez_file(filename, &block)
      File.open(filename, "r") do |file|
        reader = Zlib::GzipReader.new(file, encoding: "iso-8859-1:UTF-8")
        CSV.new(reader, col_sep: "\t", headers: true, liberal_parsing: true).each do |line|
          yield line
        end
        reader.close
      end
    end
  end
end
