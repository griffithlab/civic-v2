require "set"

class CleanupEntrezSymbols < EntrezJob
  include Importer::EntrezHelpers

  def execute(entrez_file = @entrez_file)
    valid_entrez_ids = read_valid_entrez_ids(entrez_file)
    invalid_genes = find_invalid_genes(valid_entrez_ids)
    process_invalid_genes(invalid_genes)
  end

  private
  def read_valid_entrez_ids(file_path)
    valid_entrez_ids = Set.new
    process_gzipped_entrez_file(file_path) do |line|
      next unless valid_line?(line)
      valid_entrez_ids << line["GeneID"]
    end
    return valid_entrez_ids
  end

  def find_invalid_genes(valid_entrez_ids)
    Features::Gene.eager_load(:feature)
      .where(features: { deprecated: false })
      .where.not(entrez_id: valid_entrez_ids)
      .distinct
  end

  def process_invalid_genes(invalid_genes)
    civic_bot = User.find(Constants::CIVICBOT_USER_ID)

    invalid_genes.each do |gene_instance|
      feature = gene_instance.feature
      note = "Gene has been deprecated or replaced in Entrez"
      (can_deprecate, error) = feature.can_deprecate?

      if can_deprecate
        cmd = Activities::DeprecateFeature.new(
          deprecating_user: civic_bot,
          feature: feature,
          organization_id: nil,
          deprecation_reason: "other",
          note: note
        )
        res = cmd.perform

        if !res.succeeded?
          Rails.logger.error("Failed to deprecate Feature #{feature.id} (#{feature.name})")
          raise StandardError.new(res.errors.join(", "))
        end
      else
        existing_flags = feature.flags.where(state: "open").select do |f|
          f.open_activity.note.starts_with?(note) && f.open_activity.user_id == Constants::CIVICBOT_USER_ID
        end

        if existing_flags.size == 0
          flag_note = "#{note} but, we are unable to deprecate it automatically in CIViC. Reason: #{error}"
          cmd = Activities::FlagEntity.new(
            flagging_user: civic_bot,
            flaggable: feature,
            organization_id: nil,
            note: flag_note
          )

          res = cmd.perform

          if !res.succeeded?
            Rails.logger.error("Failed to flag Feature #{feature.id} (#{feature.name})")
            raise StandardError.new(res.errors.join(", "))
          end
        end
      end
    end
  end
end
