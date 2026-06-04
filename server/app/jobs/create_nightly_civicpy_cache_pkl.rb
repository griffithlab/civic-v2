require "fileutils"

class CreateNightlyCivicpyCachePkl < CreateCivicpyCachePkl
  private
  def civicpy_cache_file_location
    File.join(Rails.root, "public", "downloads", "nightly", "nightly-civicpy_cache.pkl")
  end

  def create_versioned_path
    civicpy_version = `pip show civicpy | grep Version`.split(":").last.strip
    versioned_path = File.join(Rails.root, "public", "downloads", "nightly", "nightly-civicpy_cache-#{civicpy_version}.pkl")
    FileUtils.cp(civicpy_cache_file_location, versioned_path)
  end
end
