module Scrapers
  class EnsemblApiHelpers
    ENSEMBL_DOMAIN = "https://grch37.rest.ensembl.org"
    EnsemblResult = Data.define(:value, :error, :warning)

    def self.call_api(url)
      Rails.cache.fetch(url, expires_in: 24.hours) do
        resp = Scrapers::Util.make_get_request(url)
        JSON.parse(resp)
      end
    end

    def self.get_exons_for_ensembl_id(ensembl_id, warning = nil)
      t = ensembl_id.split('.').first
      url = "#{ENSEMBL_DOMAIN}/overlap/id/#{ensembl_id}?content-type=application/json;feature=exon"
        begin
          data = call_api(url)
        rescue StandardError => e
          error_message = JSON.parse(e.message)['error']
          if error_message == "No object found for ID #{ensembl_id}"
            t = ensembl_id.split('.').first
            res = get_exons_for_ensembl_id(t, "Transcript ID Version not found in GRCh37: #{ensembl_id}")
              if res.error
                return EnsemblResult.new(nil, res.error, warning)
              end
          elsif error_message == "ID '#{ensembl_id}' not found"
            return EnsemblResult.new(nil, "Transcript doesn't exist in GRCh37 at any version: #{ensembl_id}", warning)
          else
            return EnsemblResult.new(nil, error_message, warning)
          end
        end
      if data.nil?
        return EnsemblResult.new(nil, "No data returned for transcript: #{ensembl_id}", warning)
      end
      EnsemblResult.new(data.sort_by { |exon| exon['start'] }, nil, warning)
    end

    def self.get_fusion_exon(transcript, position, position_type, variant)
      res = get_exons_for_ensembl_id(transcript, variant)

      if res.value.nil?
        return res
      end

      exons = res.value

      t = transcript.split('.').first
      e = exons.select{ |e| e['Parent'] == t && e[position_type] == position }

      if e.size > 1
        return EnsemblResult.new(nil, "More than one exon match found", warning)
      elsif e.size == 0
        return EnsemblResult.new(nil, "No exon matches found.", warning)
      end

      EnsemblResult.new(e.first, nil, warning)
    end
  end
end
