require "csv"
class GenerateTsvs < ApplicationJob
  def perform
    ensure_downloads_directory_exists
    tsvs_to_generate.each do |e|
      begin
        tmp_file = tmp_file(e.file_name)
        tmp_file.puts CSV.generate_line(e.headers, col_sep: "\t")
        e.objects.find_each do |object|
          row = e.row_from_object(object).map { |col| col.is_a?(String) ? col.squish : col }
          tmp_file.puts CSV.generate_line(row, col_sep: "\t", quote_empty: false)
        end
        tmp_file.close
        public_path = public_file_path(e.file_name)
        FileUtils.cp(tmp_file.path, public_path)
        File.chmod(0644, public_path)

        # symlink in legacy TSV names for backwards compatibility
        if e.respond_to?(:file_aliases)
          e.file_aliases.each do |fa|
            permanent_path = permanent_file_path(e.file_name)
            link_path = public_file_path(fa)
            FileUtils.ln_s(permanent_path, link_path, force: true)
            File.chmod(0644, link_path)
          end
        end
      ensure
        tmp_file.unlink
      end
    end
  end

  def tsvs_to_generate
    [
      FeatureTsvFormatter,
      VariantTsvFormatter,
      AcceptedEvidenceItemTsvFormatter,
      AcceptedAndSubmittedEvidenceItemTsvFormatter,
      VariantGroupTsvFormatter,
      AcceptedAssertionTsvFormatter,
      AcceptedAndSubmittedAssertionTsvFormatter,
      MolecularProfileTsvFormatter,
    ]
  end

  private
  def tmp_file(filename)
    Tempfile.new(filename, File.join(Rails.root, "tmp"))
  end

  def ensure_downloads_directory_exists
    FileUtils.mkdir_p(downloads_dir_path)
  end

  def public_file_path(filename)
    desination_filename = [ filename_prefix, filename ].join("-")
    File.join(downloads_dir_path, desination_filename)
  end

  def permanent_file_path(filename)
    desination_filename = [ filename_prefix, filename ].join("-")
    File.join(permanent_dir_path, desination_filename)
  end

  def downloads_dir_path
    File.join(Rails.root, "public", "downloads", release_path)
  end

  def permanent_dir_path
    File.join("/var/www/civic/shared/public/downloads", release_path)
  end

  def release_path
    raise "Implement in subclass!"
  end

  def filename_prefix
    raise "Implement in subclass!"
  end
end
