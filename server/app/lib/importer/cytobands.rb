require "csv"
module Importer
  class Cytobands
    attr_reader :file_path, :build
    def initialize(file_path, build)
      @file_path = file_path
      @build = build
    end

    def import
      import_cytobands
    end

    private
    def import_cytobands
      ActiveRecord::Base.transaction do
        File.open(file_path, "r") do |file|
          reader = Zlib::GzipReader.new(file, encoding: "iso-8859-1:UTF-8")
          chromosome_first_line = nil
          arm_first_line = nil
          band_first_line = nil
          chromosome_last_line = nil
          arm_last_line = nil
          band_last_line = nil
          CSV.new(reader, col_sep: "\t", headers: false, liberal_parsing: true).each do |line|
            next if line[0].include?("_") || line[0] == 'chrM'
            parsed_line = parse_line(line)
            if chromosome_first_line.nil?
              chromosome_first_line = parsed_line
              arm_first_line = parsed_line
              band_first_line = parsed_line
            else
              if parsed_line[:chromosome] != chromosome_first_line[:chromosome]
                region = CytogeneticRegion.where(
                  chromosome: chromosome_first_line[:chromosome],
                  band: nil,
                  name: chromosome_first_line[:chromosome]
                ).first_or_create
                CytogeneticCoordinate.create(
                  cytogenetic_region_id: region.id,
                  reference_build: CytogeneticCoordinate.reference_builds[build],
                  chromosome: chromosome_first_line[:chromosome],
                  start: chromosome_first_line[:start],
                  stop: chromosome_last_line[:stop],
                )
                chromosome_first_line = parsed_line
              end
              if parsed_line[:arm] != arm_first_line[:arm]
                region = CytogeneticRegion.where(
                  chromosome: arm_first_line[:chromosome],
                  band: arm_first_line[:arm],
                  name: arm_first_line[:chromosome] + arm_first_line[:arm]
                ).first_or_create
                CytogeneticCoordinate.create(
                  cytogenetic_region_id: region.id,
                  reference_build: CytogeneticCoordinate.reference_builds[build],
                  chromosome: arm_first_line[:chromosome],
                  start: arm_first_line[:start],
                  stop: arm_last_line[:stop],
                )
                arm_first_line = parsed_line
              end
              if parsed_line[:band] != band_first_line[:band]
                region = CytogeneticRegion.where(
                  chromosome: band_first_line[:chromosome],
                  band: band_first_line[:arm] + band_first_line[:band],
                  name: band_first_line[:chromosome] + band_first_line[:arm] + band_first_line[:band]
                ).first_or_create
                CytogeneticCoordinate.create(
                  cytogenetic_region_id: region.id,
                  reference_build: CytogeneticCoordinate.reference_builds[build],
                  chromosome: band_first_line[:chromosome],
                  start: band_first_line[:start],
                  stop: band_last_line[:stop],
                )
                band_first_line = parsed_line
              end
            end
            if !parsed_line[:subband].nil?
              region = CytogeneticRegion.where(
                chromosome: parsed_line[:chromosome],
                band: parsed_line[:cytoband],
                name: parsed_line[:chromosome] + parsed_line[:cytoband]
              ).first_or_create
              CytogeneticCoordinate.create(
                cytogenetic_region_id: region.id,
                reference_build: CytogeneticCoordinate.reference_builds[build],
                chromosome: parsed_line[:chromosome],
                start: parsed_line[:start],
                stop: parsed_line[:stop],
              )
            end

            chromosome_last_line = parsed_line
            arm_last_line = parsed_line
            band_last_line = parsed_line
          end
          region = CytogeneticRegion.where(
            chromosome: chromosome_first_line[:chromosome],
            band: nil,
            name: chromosome_first_line[:chromosome]
          ).first_or_create
          CytogeneticCoordinate.create(
            cytogenetic_region_id: region.id,
            reference_build: CytogeneticCoordinate.reference_builds[build],
            chromosome: chromosome_first_line[:chromosome],
            start: chromosome_first_line[:start],
            stop: chromosome_last_line[:stop],
          )
          region = CytogeneticRegion.where(
            chromosome: arm_first_line[:chromosome],
            band: arm_first_line[:arm],
            name: arm_first_line[:chromosome] + arm_first_line[:arm]
          ).first_or_create
          CytogeneticCoordinate.create(
            cytogenetic_region_id: region.id,
            reference_build: CytogeneticCoordinate.reference_builds[build],
            chromosome: arm_first_line[:chromosome],
            start: arm_first_line[:start],
            stop: arm_last_line[:stop],
          )
          region = CytogeneticRegion.where(
            chromosome: band_first_line[:chromosome],
            band: band_first_line[:arm] + band_first_line[:band],
            name: band_first_line[:chromosome] + band_first_line[:arm] + band_first_line[:band]
          ).first_or_create
          CytogeneticCoordinate.create(
            cytogenetic_region_id: region.id,
            reference_build: CytogeneticCoordinate.reference_builds[build],
            chromosome: band_first_line[:chromosome],
            start: band_first_line[:start],
            stop: band_last_line[:stop],
          )
          reader.close
        end
      end
    end

    def parse_line(line)
      parsed_line = {
        'chromosome': line[0].sub('chr', ''),
        'start': line[1],
        'stop': line[2],
        'cytoband': line[3]
      }
      arm, band, subband = parsed_line[:cytoband].match(/(q|p)(\d+)\.?(\d*)/i).captures
      parsed_line[:arm] = arm
      parsed_line[:band] = band
      parsed_line[:subband] = subband
      return parsed_line
    end
  end
end
