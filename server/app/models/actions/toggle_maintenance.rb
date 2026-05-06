require "fileutils"

module Actions
  class ToggleMaintenance
    include Actions::Transactional

    attr_reader :maintenance_mode_enabled, :maintenance_page, :backed_up_index_page, :index_file_path

    def initialize(maintenance_mode_enabled:)
      @maintenance_mode_enabled = maintenance_mode_enabled

      base_path = File.join(Rails.root, "public")

      @maintenance_page = File.join(base_path, "maintenance.html")
      @backed_up_index_page = File.join(base_path, "index.html.actual")
      @index_file_path =  File.join(base_path, "index.html")
    end

    def execute
      if !File.exist?(index_file_path)
        raise StandardError.new("index.html does not exist. Unknown state.")
      end

      if maintenance_mode_enabled
        put_in_maintenance_mode
      else
        restore_production_mode
      end
    end

    private
    def put_in_maintenance_mode
      if !File.exist?(maintenance_page)
        raise StandardError.new("There doesn't seem to be a maintenance page available to use.")
      end
      if File.exist?(backed_up_index_page)
        raise StandardError.new("Site appears to already be in maintenance mode.")
      end

      FileUtils.mv(index_file_path, backed_up_index_page)
      FileUtils.cp(maintenance_page, index_file_path)
    end

    def restore_production_mode
      if !File.exist?(backed_up_index_page)
        raise StandardError.new("No backed up index.html found. Either the site is already live or we cannot restore.")
      end

      FileUtils.rm(index_file_path)
      FileUtils.mv(backed_up_index_page, index_file_path)
    end
  end
end
