require "rbconfig"

class AlleleRegistryIds < ApplicationJob
  def delete_allele_registry_link(allele_registry_id)
    run_allele_registry_script("delete", allele_registry_id)
  end

  def add_allele_registry_link(allele_registry_id)
    run_allele_registry_script("put", allele_registry_id)
  end

  # Pass each argument to the script as-is, without a shell, so that a
  # password with spaces or shell characters reaches it unchanged.
  def run_allele_registry_script(method, allele_registry_id)
    system(
      ruby_executable,
      script_path,
      method,
      "reg.genome.network/allele/#{allele_registry_id}/externalSource/civic",
      "p1=#{allele_registry_id}",
      allele_registry_username.to_s,
      allele_registry_password.to_s
    )
  end

  def ruby_executable
    RbConfig.ruby
  end

  def script_path
    File.join(Rails.root, "misc_scripts", "add_allele_registry_link.rb")
  end

  def get_allele_registry_id(variant)
    response = response(variant)
    JSON.parse(response)["@id"].split("/")[-1] rescue nil
  end

  def response(variant)
    if hgvs = HgvsDescription.allele_registry_hgvs(variant)
      make_request(hgvs)
    else
      {}
    end
  end

  private
  def make_request(hgvs)
    Scrapers::Util.make_get_request(allele_registry_url(hgvs))
  rescue StandardError
    {}
  end

  def allele_registry_url(coordinate_string)
    "http://reg.genome.network/allele?hgvs=#{CGI.escape(coordinate_string)}"
  end

  def allele_registry_username
    ENV["ALLELE_REGISTRY_USERNAME"] || Rails.application.credentials.allele_registry_username
  end

  def allele_registry_password
    ENV["ALLELE_REGISTRY_PASSWORD"] || Rails.application.credentials.allele_registry_password
  end
end
