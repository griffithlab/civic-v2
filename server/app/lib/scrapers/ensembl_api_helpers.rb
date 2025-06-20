module Scrapers
  class EnsemblApiHelpers
    GRCH37_ENSEMBL_DOMAIN = "https://grch37.rest.ensembl.org"
    GRCH38_ENSEMBL_DOMAIN = "https://rest.ensembl.org/"
    EnsemblResult = Data.define(:value, :error, :warning)

    def self.call_api(url)
      Rails.cache.fetch(url, expires_in: 24.hours) do
        resp = Scrapers::Util.make_get_request(url)
        JSON.parse(resp)
      end
    end

    def self.get_exons_for_build_and_ensembl_id(build, ensembl_id, warning = nil)
      t = ensembl_id.split(".").first
      if build == "GRCh37"
        url = "#{GRCH37_ENSEMBL_DOMAIN}/overlap/id/#{ensembl_id}?content-type=application/json;feature=exon"
      elsif build == "GRCh38"
        url = "#{GRCH38_ENSEMBL_DOMAIN}/overlap/id/#{t}?content-type=application/json;feature=exon"
      end
        begin
          data = call_api(url)
        rescue StandardError => e
          error_message = JSON.parse(e.message)["error"]
          if build == "GRCh37" && error_message == "No object found for ID #{ensembl_id}"
            t = ensembl_id.split(".").first
            res = get_exons_for_build_and_ensembl_id(build, t, "Transcript ID Version not found in #{build}: #{ensembl_id}")
              if res.error
                return EnsemblResult.new(nil, res.error, warning)
              else
                return res
              end
          elsif error_message == "ID '#{ensembl_id}' not found"
            return EnsemblResult.new(nil, "Transcript doesn't exist in #{build} at any version: #{ensembl_id}", warning)
          else
            return EnsemblResult.new(nil, error_message, warning)
          end
        end
      if data.nil?
        return EnsemblResult.new(nil, "No data returned for transcript: #{ensembl_id}", warning)
      end
      EnsemblResult.new(data.sort_by { |exon| exon["start"] }, nil, warning)
    end

    def self.get_fusion_exon(build, transcript, position, position_type, variant)
      res = get_exons_for_build_and_ensembl_id(build, transcript)

      if res.value.nil?
        return res
      end

      exons = res.value

      t = transcript.split(".").first
      e = exons.select { |e| e["Parent"] == t && e[position_type] == position }

      if e.size > 1
        return EnsemblResult.new(nil, "More than one exon match found", warning)
      elsif e.size == 0
        return EnsemblResult.new(nil, "No exon matches found.", warning)
      end

      EnsemblResult.new(e.first, nil, warning)
    end
  end
end
