require "csv"
require "ostruct"

module BrowseTableDownloads
  PAGINATION_KEYS = %w[first last before after].freeze
  IGNORED_KEYS = (PAGINATION_KEYS + %w[sort_by sortBy]).freeze
  MULTI_VALUE_SEPARATOR = "; "

  Entry = Struct.new(:resolver, :formatter, keyword_init: true)

  module Formatting
    def bool(value)
      value.nil? ? nil : value
    end

    def names(values)
      Array(values).map { |value| name_for(value) }.compact.join(MULTI_VALUE_SEPARATOR)
    end

    def name_for(value)
      case value
      when nil
        nil
      when Hash
        value["name"] || value[:name] ||
          value["display_name"] || value[:display_name] ||
          value["child_name"] || value[:child_name]
      else
        if value.respond_to?(:display_name)
          value.display_name
        elsif value.respond_to?(:name)
          value.name
        elsif value.respond_to?(:hpo_class)
          value.hpo_class
        else
          value.to_s
        end
      end
    end

    def ids(values)
      Array(values).map { |value| value.respond_to?(:id) ? value.id : value }.compact.join(MULTI_VALUE_SEPARATOR)
    end
  end

  class Formatter
    extend Formatting

    class << self
      def headers
        columns.map(&:first)
      end

      def row(record)
        columns.map { |_header, value| instance_exec(record, &value) }
      end

      def scoped_records?
        false
      end
    end
  end

  module Formatters
    class Features < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "full_name", ->(r) { r.full_name } ],
          [ "feature_type", ->(r) { r.feature_instance_type } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "diseases", ->(r) { names(r.diseases) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "molecular_profile_count", ->(r) { r.molecular_profile_count } ],
          [ "deprecated", ->(r) { bool(r.deprecated) } ],
          [ "flagged", ->(r) { bool(r.flagged) } ],
        ]
      end
    end

    class Variants < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "feature_id", ->(r) { r.feature_id } ],
          [ "feature_name", ->(r) { r.feature_name } ],
          [ "category", ->(r) { r.category } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "variant_types", ->(r) { names(r.variant_types) } ],
          [ "diseases", ->(r) { names(r.diseases) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "deprecated", ->(r) { bool(r.deprecated) } ],
          [ "flagged", ->(r) { bool(r.flagged) } ],
        ]
      end
    end

    class MolecularProfiles < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "variants", ->(r) { names(r.variants) } ],
          [ "diseases", ->(r) { names(r.diseases) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "molecular_profile_score", ->(r) { r.evidence_score } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "deprecated", ->(r) { bool(r.deprecated) } ],
        ]
      end
    end

    class VariantGroups < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "features", ->(r) { names(r.feature_names) } ],
          [ "variants", ->(r) { names(r.variant_names) } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
        ]
      end
    end

    class Sources < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "citation", ->(r) { r.description } ],
          [ "name", ->(r) { r.title } ],
          [ "authors", ->(r) { names(r.authors) } ],
          [ "source_type", ->(r) { r.source_type } ],
          [ "citation_id", ->(r) { r.citation_id } ],
          [ "publication_year", ->(r) { r.publication_year } ],
          [ "journal", ->(r) { r.journal } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "source_suggestion_count", ->(r) { r.source_suggestion_count } ],
          [ "open_access", ->(r) { bool(r.open_access) } ],
          [ "deprecated", ->(r) { bool(r.retraction_nature == "Retraction") } ],
        ]
      end
    end

    class Diseases < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.display_name || r.name } ],
          [ "doid", ->(r) { r.doid } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "features", ->(r) { names(r.features) } ],
          [ "feature_count", ->(r) { r.feature_count } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "deprecated", ->(r) { bool(r.deprecated) } ],
        ]
      end
    end

    class Therapies < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "ncit_id", ->(r) { r.ncit_id } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "deprecated", ->(r) { bool(r.deprecated) } ],
        ]
      end
    end

    class Phenotypes < Formatter
      def self.scoped_records?
        true
      end

      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.hpo_class } ],
          [ "hpo_id", ->(r) { r.hpo_id } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
        ]
      end
    end

    class Organizations < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "description", ->(r) { r.description } ],
          [ "url", ->(r) { r.url } ],
          [ "member_count", ->(r) { r.member_count } ],
          [ "activity_count", ->(r) { r.activity_count } ],
          [ "child_organizations", ->(r) { names(r.child_organizations) } ],
          [ "most_recent_activity_timestamp", ->(r) { r.most_recent_activity_timestamp } ],
        ]
      end
    end

    class Users < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "display_name", ->(r) { r.display_name } ],
          [ "name", ->(r) { r.name } ],
          [ "username", ->(r) { r.username } ],
          [ "role", ->(r) { r.role } ],
          [ "organizations", ->(r) { names(r.organizations) } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
          [ "revision_count", ->(r) { r.revision_count } ],
          [ "most_recent_activity_timestamp", ->(r) { r.most_recent_activity_timestamp } ],
        ]
      end
    end

    class EvidenceItems < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "molecular_profile", ->(r) { name_for(r.molecular_profile) } ],
          [ "disease", ->(r) { name_for(r.disease) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "therapy_interaction_type", ->(r) { r.respond_to?(:therapy_interaction_type) ? r.therapy_interaction_type : nil } ],
          [ "description", ->(r) { r.description } ],
          [ "evidence_level", ->(r) { r.evidence_level } ],
          [ "evidence_type", ->(r) { r.evidence_type } ],
          [ "evidence_direction", ->(r) { r.evidence_direction } ],
          [ "significance", ->(r) { r.significance } ],
          [ "variant_origin", ->(r) { r.variant_origin } ],
          [ "rating", ->(r) { r.rating } ],
          [ "status", ->(r) { r.status } ],
        ]
      end
    end

    class Assertions < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "molecular_profile", ->(r) { name_for(r.molecular_profile) } ],
          [ "disease", ->(r) { name_for(r.disease) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "therapy_interaction_type", ->(r) { r.respond_to?(:therapy_interaction_type) ? r.therapy_interaction_type : nil } ],
          [ "summary", ->(r) { r.summary } ],
          [ "assertion_type", ->(r) { r.assertion_type } ],
          [ "assertion_direction", ->(r) { r.assertion_direction } ],
          [ "significance", ->(r) { r.significance } ],
          [ "amp_level", ->(r) { r.amp_level } ],
          [ "evidence_items_count", ->(r) { r.evidence_items_count } ],
          [ "status", ->(r) { r.status } ],
        ]
      end
    end

    class ClinicalTrials < Formatter
      def self.scoped_records?
        true
      end

      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "nct_id", ->(r) { r.nct_id } ],
          [ "name", ->(r) { r.name } ],
          [ "source_count", ->(r) { r.source_count } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
        ]
      end
    end

    class VariantTypes < Formatter
      def self.scoped_records?
        true
      end

      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.display_name } ],
          [ "soid", ->(r) { r.soid } ],
          [ "variant_count", ->(r) { r.variant_count } ],
        ]
      end
    end

    class SourceSuggestions < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "source_id", ->(r) { r.source_id } ],
          [ "source", ->(r) { r.source&.display_name } ],
          [ "source_type", ->(r) { r.source&.source_type } ],
          [ "citation_id", ->(r) { r.source&.citation_id } ],
          [ "molecular_profile", ->(r) { name_for(r.molecular_profile) } ],
          [ "disease", ->(r) { name_for(r.disease) } ],
          [ "submitter", ->(r) { name_for(r.user) } ],
          [ "status", ->(r) { r.status } ],
          [ "reason", ->(r) { r.reason } ],
          [ "initial_comment", ->(r) { r.initial_comment } ],
          [ "created_at", ->(r) { r.created_at } ],
        ]
      end
    end
  end

  REGISTRY = {
    "features" => Entry.new(resolver: Resolvers::BrowseFeatures, formatter: Formatters::Features),
    "variants" => Entry.new(resolver: Resolvers::BrowseVariants, formatter: Formatters::Variants),
    "molecular_profiles" => Entry.new(resolver: Resolvers::BrowseMolecularProfiles, formatter: Formatters::MolecularProfiles),
    "variant_groups" => Entry.new(resolver: Resolvers::BrowseVariantGroups, formatter: Formatters::VariantGroups),
    "sources" => Entry.new(resolver: Resolvers::BrowseSources, formatter: Formatters::Sources),
    "diseases" => Entry.new(resolver: Resolvers::BrowseDiseases, formatter: Formatters::Diseases),
    "therapies" => Entry.new(resolver: Resolvers::BrowseTherapies, formatter: Formatters::Therapies),
    "phenotypes" => Entry.new(resolver: Resolvers::BrowsePhenotypes, formatter: Formatters::Phenotypes),
    "organizations" => Entry.new(resolver: Resolvers::BrowseOrganizations, formatter: Formatters::Organizations),
    "users" => Entry.new(resolver: Resolvers::BrowseUsers, formatter: Formatters::Users),
    "evidence" => Entry.new(resolver: Resolvers::TopLevelEvidenceItems, formatter: Formatters::EvidenceItems),
    "assertions" => Entry.new(resolver: Resolvers::TopLevelAssertions, formatter: Formatters::Assertions),
    "clinical_trials" => Entry.new(resolver: Resolvers::TopLevelClinicalTrials, formatter: Formatters::ClinicalTrials),
    "variant_types" => Entry.new(resolver: Resolvers::TopLevelVariantTypes, formatter: Formatters::VariantTypes),
    "source_suggestions" => Entry.new(resolver: Resolvers::BrowseSourceSuggestions, formatter: Formatters::SourceSuggestions),
  }.freeze

  def self.downloadable?(table_name)
    REGISTRY.key?(table_name.to_s)
  end

  class Exporter
    def initialize(table_name:, variables:)
      @entry = REGISTRY.fetch(table_name.to_s)
      @variables = self.class.normalize_variables(variables)
    end

    def each_line
      yield CSV.generate_line(@entry.formatter.headers, col_sep: "\t")

      each_record do |record|
        yield CSV.generate_line(@entry.formatter.row(record), col_sep: "\t")
      end
    end

    def each_record
      scope = @entry.resolver.new(filters: @variables).results

      if @entry.formatter.scoped_records?
        scope.each { |record| yield record }
      else
        each_record_by_id(scope) { |record| yield record }
      end
    end

    def each_record_by_id(scope)
      primary_key = scope.klass.primary_key
      primary_key_column = "#{scope.klass.quoted_table_name}.#{primary_key}"
      id_scope = scope
        .unscope(:select, :order)
        .distinct
        .select(primary_key_column)

      id_scope.find_in_batches(batch_size: 1000) do |batch|
        ids = batch.map { |record| record.public_send(primary_key) }
        scope.klass.where(primary_key => ids).find_each do |record|
          yield record
        end
      end
    end

    def self.normalize_variables(variables)
      variables
        .to_h
        .deep_transform_keys { |key| GraphQL::Schema::Member::BuildType.underscore(key.to_s) }
        .except(*IGNORED_KEYS)
        .reject { |_key, value| value.nil? }
        .transform_values { |value| normalize_value(value) }
    end

    def self.normalize_value(value)
      case value
      when Hash
        OpenStruct.new(
          value
            .deep_transform_keys { |key| GraphQL::Schema::Member::BuildType.underscore(key.to_s) }
            .transform_values { |nested_value| normalize_value(nested_value) }
        )
      when Array
        value.map { |nested_value| normalize_value(nested_value) }
      else
        value
      end
    end
  end
end
