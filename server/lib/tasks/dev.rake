require "open-uri"
require "net/http"

module DevImageRestore
  GRAVATAR_STYLE = "identicon".freeze
  LIVE_API_URL = "https://civicdb.org/api/graphql".freeze
  AVATAR_CACHE_DIR = Rails.root.join("tmp", "avatar_cache")
  ORG_IMAGES_DIR = Rails.root.join("misc_scripts", "dev_image_restore", "org_images")
  EXTENSION_CONTENT_TYPES = {
    ".png" => "image/png",
    ".jpg" => "image/jpeg",
    ".jpeg" => "image/jpeg",
  }.freeze

  module_function

  def force? = ENV["FORCE"] == "1"

  # A DB dump restored after a reset carries attachment/blob rows whose files
  # were never on this machine's disk, so attached? alone is not enough.
  def image_intact?(record)
    image = record.profile_image
    image.attached? && image.blob.service.exist?(image.blob.key)
  end

  def gravatar_hash(user)
    seed =
      if user.email.present?
        user.email.downcase.strip
      elsif user.username.present?
        user.username.downcase.strip
      else
        "user-#{user.id}"
      end
    Digest::MD5.hexdigest(seed)
  end

  def cached_avatar_path(hash)
    Dir.glob(AVATAR_CACHE_DIR.join("#{hash}.*").to_s).first
  end

  # Returns the cache path, fetching from gravatar when not already cached.
  # d=<style> means gravatar returns the user's real avatar when one exists
  # and a deterministic generated image otherwise, so one request covers all.
  def fetch_avatar(hash)
    cached = cached_avatar_path(hash)
    return [ cached, false ] if cached

    url = "https://www.gravatar.com/avatar/#{hash}?s=256&d=#{GRAVATAR_STYLE}"
    URI.open(url) do |response|
      ext = EXTENSION_CONTENT_TYPES.key(response.content_type) || ".png"
      path = AVATAR_CACHE_DIR.join("#{hash}#{ext}").to_s
      File.binwrite(path, response.read)
      return [ path, true ]
    end
  end

  def live_org_images
    @live_org_images ||= begin
      query = "{ organizations(first: 100) { nodes { name profileImagePath(size: 256) } } }"
      response = Net::HTTP.post(
        URI(LIVE_API_URL),
        { query: query }.to_json,
        "Content-Type" => "application/json"
      )
      nodes = JSON.parse(response.body).dig("data", "organizations", "nodes") || []
      nodes.to_h { |n| [ n["name"].strip, n["profileImagePath"] ] }
    rescue StandardError => e
      puts "  WARNING: could not fetch org images from live CIViC API: #{e.class}: #{e.message}"
      {}
    end
  end

  # Downloads the live site's image for the org into ORG_IMAGES_DIR (named by
  # parameterized org name, so later runs find it locally) and returns the path.
  def download_live_org_image(org)
    url = live_org_images[org.name.strip]
    return nil if url.blank?

    ext = File.extname(URI(url).path).downcase
    ext = ".png" unless EXTENSION_CONTENT_TYPES.key?(ext)
    path = ORG_IMAGES_DIR.join("#{org.name.parameterize}#{ext}").to_s
    URI.open(url) { |io| File.binwrite(path, io.read) }
    path
  end

  def attach_image(record, path)
    filename = File.basename(path)
    record.profile_image.attach(
      io: File.open(path, "rb"),
      filename: filename,
      content_type: EXTENSION_CONTENT_TYPES.fetch(File.extname(filename).downcase)
    )
    return true if record.valid?

    # Some dumped records have pre-existing invalid profile data (e.g. a full
    # URL in the linkedin field), which blocks the save attach performs.
    # Persist the attachment anyway; fixing profile data isn't this task's job.
    record.save(validate: false)
    puts "  NOTE: #{record.class.name} #{record.id} has invalid profile data (#{record.errors.full_messages.join('; ')}); image attached anyway"
    true
  end
end

namespace :dev do
  desc "Restore all user and organization profile images after a database reset"
  task restore_images: [ "restore_images:users", "restore_images:orgs" ]

  namespace :restore_images do
    desc <<~DESC
      Restore user avatars from gravatar (real image when one exists, generated
      identicon otherwise; users without email are seeded from their username).
      Downloads are cached in tmp/avatar_cache so repeat runs are offline/fast.
      Env: FORCE=1 re-attach users that already have an image; LIMIT=n stop
      after processing n users (smoke testing).
    DESC
    task users: :environment do
      FileUtils.mkdir_p(DevImageRestore::AVATAR_CACHE_DIR)
      limit = ENV["LIMIT"]&.to_i
      restored = skipped = failed = processed = 0

      User.find_each do |user|
        break if limit && processed >= limit

        if DevImageRestore.image_intact?(user) && !DevImageRestore.force?
          skipped += 1
          next
        end
        processed += 1

        begin
          path, fetched = DevImageRestore.fetch_avatar(DevImageRestore.gravatar_hash(user))
          if DevImageRestore.attach_image(user, path)
            restored += 1
          else
            failed += 1
          end
          sleep 0.25 if fetched
        rescue OpenURI::HTTPError, SocketError, Errno::ECONNRESET, Net::OpenTimeout, Net::ReadTimeout => e
          puts "  ERROR: user #{user.id} (#{user.display_name}): #{e.class}: #{e.message}"
          failed += 1
        end
      end

      puts "Users: #{restored} restored, #{skipped} skipped (image intact), #{failed} failed."
    end

    desc <<~DESC
      Restore organization images from misc_scripts/dev_image_restore/org_images/.
      Files are matched on parameterized org name (e.g. "The McDonnell Genome
      Institute" -> the-mcdonnell-genome-institute.jpg); .jpg/.jpeg/.png accepted.
      When an org has no local file, the live civicdb.org API is queried and the
      org's image (if any) is downloaded into org_images/ before attaching, so
      it is found locally on later runs. Reports orgs with no image anywhere and
      files matching no org.
      Env: FORCE=1 re-attach orgs that already have an image; SKIP_LIVE=1 don't
      query the live site for missing images.
    DESC
    task orgs: :environment do
      dir = DevImageRestore::ORG_IMAGES_DIR
      abort "Org images directory not found: #{dir}" unless Dir.exist?(dir)

      files_by_key = Dir.glob(dir.join("*.{jpg,jpeg,png}").to_s)
        .index_by { |f| File.basename(f, ".*") }
      matched_keys = Set.new
      restored = skipped = failed = 0
      missing = []
      downloaded = []

      Organization.find_each do |org|
        key = org.name.parameterize
        file = files_by_key[key]
        matched_keys << key if file

        if DevImageRestore.image_intact?(org) && !DevImageRestore.force?
          skipped += 1
          next
        end

        if file.nil? && ENV["SKIP_LIVE"] != "1"
          begin
            file = DevImageRestore.download_live_org_image(org)
            downloaded << "#{org.name} -> #{File.basename(file)}" if file
          rescue OpenURI::HTTPError, SocketError, Net::OpenTimeout, Net::ReadTimeout => e
            puts "  ERROR: downloading live image for #{org.name}: #{e.class}: #{e.message}"
          end
        end

        if file.nil?
          missing << "#{org.name} (expected #{key}.jpg)"
          next
        end

        if DevImageRestore.attach_image(org, file)
          restored += 1
        else
          failed += 1
        end
      end

      puts "Organizations: #{restored} restored, #{skipped} skipped (image intact), #{failed} failed."
      if downloaded.any?
        puts "Downloaded from live site into #{dir.relative_path_from(Rails.root)}:"
        downloaded.each { |d| puts "  #{d}" }
      end
      if missing.any?
        puts "Orgs with no image file locally or on the live site (drop into #{dir.relative_path_from(Rails.root)}):"
        missing.each { |m| puts "  #{m}" }
      end
      unmatched = files_by_key.keys - matched_keys.to_a
      if unmatched.any?
        puts "Image files matching no organization (check for typos):"
        unmatched.each { |f| puts "  #{f}" }
      end
    end
  end
end
