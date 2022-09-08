# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_22_180640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "acmg_codes", id: :serial, force: :cascade do |t|
    t.text "code"
    t.text "description"
    t.index ["code"], name: "index_acmg_codes_on_code"
  end

  create_table "acmg_codes_assertions", id: false, force: :cascade do |t|
    t.integer "acmg_code_id", null: false
    t.integer "assertion_id", null: false
    t.index ["acmg_code_id", "assertion_id"], name: "index_acmg_codes_assertions_on_acmg_code_id_and_assertion_id"
    t.index ["assertion_id"], name: "index_acmg_codes_assertions_on_assertion_id"
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "advanced_searches", id: :serial, force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "params"
    t.text "search_type"
    t.text "token"
    t.index ["token", "search_type"], name: "index_advanced_searches_on_token_and_search_type"
  end

  create_table "affiliations", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_affiliations_on_organization_id"
    t.index ["user_id"], name: "index_affiliations_on_user_id"
  end

  create_table "assertions", id: :serial, force: :cascade do |t|
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "deleted", default: false
    t.text "status", default: "submitted", null: false
    t.integer "nccn_guideline_old"
    t.text "nccn_guideline_version"
    t.integer "amp_level"
    t.integer "clinical_significance"
    t.integer "gene_id"
    t.integer "variant_id"
    t.integer "disease_id"
    t.integer "evidence_type"
    t.boolean "fda_companion_test"
    t.boolean "fda_regulatory_approval"
    t.integer "drug_interaction_type"
    t.integer "evidence_direction"
    t.text "summary"
    t.integer "variant_origin"
    t.bigint "nccn_guideline_id"
    t.boolean "flagged", default: false, null: false
    t.integer "evidence_items_count"
    t.bigint "molecular_profile_id"
    t.index ["description"], name: "index_assertions_on_description"
    t.index ["disease_id"], name: "index_assertions_on_disease_id"
    t.index ["drug_interaction_type"], name: "index_assertions_on_drug_interaction_type"
    t.index ["gene_id"], name: "index_assertions_on_gene_id"
    t.index ["molecular_profile_id"], name: "index_assertions_on_molecular_profile_id"
    t.index ["nccn_guideline_id"], name: "index_assertions_on_nccn_guideline_id"
    t.index ["variant_id"], name: "index_assertions_on_variant_id"
    t.index ["variant_origin"], name: "index_assertions_on_variant_origin"
  end

  create_table "assertions_clingen_codes", id: false, force: :cascade do |t|
    t.bigint "assertion_id", null: false
    t.bigint "clingen_code_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assertion_id"], name: "index_assertions_clingen_codes_on_assertion_id"
    t.index ["clingen_code_id", "assertion_id"], name: "idx_clingencodes_assertions"
  end

  create_table "assertions_drugs", id: false, force: :cascade do |t|
    t.integer "assertion_id", null: false
    t.integer "drug_id", null: false
    t.index ["assertion_id", "drug_id"], name: "index_assertions_drugs_on_assertion_id_and_drug_id"
    t.index ["drug_id"], name: "index_assertions_drugs_on_drug_id"
  end

  create_table "assertions_evidence_items", id: false, force: :cascade do |t|
    t.integer "assertion_id", null: false
    t.integer "evidence_item_id", null: false
    t.index ["assertion_id", "evidence_item_id"], name: "index_assertion_id_evidence_item_id"
    t.index ["evidence_item_id"], name: "index_assertions_evidence_items_on_evidence_item_id"
  end

  create_table "assertions_molecular_profiles", id: false, force: :cascade do |t|
    t.bigint "molecular_profile_id", null: false
    t.bigint "assertion_id", null: false
    t.index ["molecular_profile_id", "assertion_id"], name: "idx_molecular_profile_assertion_id"
  end

  create_table "assertions_phenotypes", id: false, force: :cascade do |t|
    t.integer "assertion_id", null: false
    t.integer "phenotype_id", null: false
    t.index ["assertion_id", "phenotype_id"], name: "index_assertions_phenotypes_on_assertion_id_and_phenotype_id"
    t.index ["phenotype_id"], name: "index_assertions_phenotypes_on_phenotype_id"
  end

  create_table "audits", id: :serial, force: :cascade do |t|
    t.integer "auditable_id"
    t.string "auditable_type"
    t.integer "associated_id"
    t.string "associated_type"
    t.integer "user_id"
    t.string "user_type"
    t.string "username"
    t.string "action"
    t.text "audited_changes"
    t.integer "version", default: 0
    t.string "comment"
    t.string "remote_address"
    t.string "request_uuid"
    t.datetime "created_at"
    t.index ["action"], name: "index_audits_on_action"
    t.index ["associated_id", "associated_type"], name: "associated_index"
    t.index ["auditable_id", "auditable_type"], name: "auditable_index"
    t.index ["created_at"], name: "index_audits_on_created_at"
    t.index ["request_uuid"], name: "index_audits_on_request_uuid"
    t.index ["user_id", "user_type"], name: "user_index"
  end

  create_table "authorizations", id: :serial, force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "provider", null: false
    t.string "uid", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["user_id"], name: "index_authorizations_on_user_id"
  end

  create_table "authors", id: :serial, force: :cascade do |t|
    t.text "last_name"
    t.text "fore_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "authors_sources", id: false, force: :cascade do |t|
    t.integer "source_id"
    t.integer "author_id"
    t.integer "author_position"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["author_id", "source_id"], name: "index_authors_sources_on_author_id_and_source_id"
    t.index ["source_id", "author_id"], name: "idx_author_source_id"
    t.index ["source_id"], name: "index_authors_sources_on_source_id"
  end

  create_table "badge_awards", id: :serial, force: :cascade do |t|
    t.integer "badge_id"
    t.integer "user_id"
    t.text "tier"
    t.text "message"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["badge_id", "user_id"], name: "index_badge_awards_on_badge_id_and_user_id"
    t.index ["user_id", "badge_id"], name: "index_badge_awards_on_user_id_and_badge_id"
  end

  create_table "badge_claims", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "badge_id"
    t.string "redemption_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["badge_id"], name: "index_badge_claims_on_badge_id"
    t.index ["user_id"], name: "index_badge_claims_on_user_id"
  end

  create_table "badges", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.text "description", null: false
    t.text "additional_fields"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "display_name"
    t.index ["name"], name: "index_badges_on_name"
  end

  create_table "clingen_codes", force: :cascade do |t|
    t.text "code"
    t.text "description"
    t.index ["code"], name: "index_clingen_codes_on_code"
    t.index ["description"], name: "index_clingen_codes_on_description"
  end

  create_table "clinical_trials", id: :serial, force: :cascade do |t|
    t.text "nct_id"
    t.text "name"
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["nct_id"], name: "index_clinical_trials_on_nct_id"
  end

  create_table "clinical_trials_sources", id: false, force: :cascade do |t|
    t.integer "clinical_trial_id", null: false
    t.integer "source_id", null: false
    t.integer "sources_id"
    t.integer "clinical_trials_id"
    t.index ["clinical_trial_id", "source_id"], name: "idx_clinical_trials_sources"
    t.index ["source_id"], name: "index_clinical_trials_sources_on_source_id"
  end

  create_table "clinvar_entries", id: :serial, force: :cascade do |t|
    t.string "clinvar_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["clinvar_id"], name: "index_clinvar_entries_on_clinvar_id"
  end

  create_table "clinvar_entries_variants", id: false, force: :cascade do |t|
    t.integer "clinvar_entry_id", null: false
    t.integer "variant_id", null: false
    t.integer "clinvar_entries_id"
    t.integer "variants_id"
    t.index ["clinvar_entry_id", "variant_id"], name: "idx_clinvar_variants"
    t.index ["variant_id"], name: "index_clinvar_entries_variants_on_variant_id"
  end

  create_table "comments", id: :serial, force: :cascade do |t|
    t.text "title", default: ""
    t.text "comment"
    t.string "commentable_type"
    t.integer "commentable_id"
    t.integer "user_id"
    t.string "role", default: "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["commentable_id"], name: "index_comments_on_commentable_id"
    t.index ["commentable_type"], name: "index_comments_on_commentable_type"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "conflict_of_interest_statements", force: :cascade do |t|
    t.integer "user_id", null: false
    t.boolean "coi_present", null: false
    t.text "coi_statement"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countries", id: :serial, force: :cascade do |t|
    t.text "iso", null: false
    t.text "name", null: false
  end

  create_table "data_versions", id: :serial, force: :cascade do |t|
    t.integer "version", default: 0
  end

  create_table "definitions", id: :serial, force: :cascade do |t|
    t.string "term", null: false
    t.text "text", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["term"], name: "index_definitions_on_term"
  end

  create_table "disease_aliases", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_disease_aliases_on_name"
  end

  create_table "disease_aliases_diseases", id: false, force: :cascade do |t|
    t.integer "disease_alias_id", null: false
    t.integer "disease_id", null: false
    t.index ["disease_alias_id", "disease_id"], name: "disease_alias_diseases_composite"
    t.index ["disease_id"], name: "index_disease_aliases_diseases_on_disease_id"
  end

  create_table "diseases", id: :serial, force: :cascade do |t|
    t.text "doid"
    t.string "display_name", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "name"
    t.index ["name"], name: "index_diseases_on_name"
  end

  create_table "domain_expert_tags", id: :serial, force: :cascade do |t|
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "domain_of_expertise_type"
    t.integer "domain_of_expertise_id"
    t.integer "user_id"
    t.index ["description"], name: "index_domain_expert_tags_on_description"
    t.index ["domain_of_expertise_id", "domain_of_expertise_type"], name: "idx_domain_of_expertise"
    t.index ["user_id"], name: "index_domain_expert_tags_on_user_id"
  end

  create_table "drug_aliases", id: :serial, force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_drug_aliases_on_name"
  end

  create_table "drug_aliases_drugs", id: :serial, force: :cascade do |t|
    t.integer "drug_id"
    t.integer "drug_alias_id"
    t.index ["drug_alias_id"], name: "index_drug_aliases_drugs_on_drug_alias_id"
    t.index ["drug_id"], name: "index_drug_aliases_drugs_on_drug_id"
  end

  create_table "drugs", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "ncit_id"
    t.index ["name"], name: "index_drugs_on_name"
    t.index ["ncit_id"], name: "index_drugs_on_ncit_id", unique: true
  end

  create_table "drugs_evidence_items", id: false, force: :cascade do |t|
    t.integer "drug_id", null: false
    t.integer "evidence_item_id", null: false
    t.index ["drug_id", "evidence_item_id"], name: "index_drugs_evidence_items_on_drug_id_and_evidence_item_id"
    t.index ["evidence_item_id"], name: "index_drugs_evidence_items_on_evidence_item_id"
  end

  create_table "entity_mentions", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "entity_type"
    t.bigint "entity_id"
    t.bigint "comment_id"
    t.index ["comment_id"], name: "index_entity_mentions_on_comment_id"
    t.index ["entity_type", "entity_id"], name: "index_entity_mentions_on_entity"
  end

  create_table "events", id: :serial, force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "action"
    t.text "description"
    t.integer "originating_user_id"
    t.string "subject_type", null: false
    t.integer "subject_id", null: false
    t.text "state_params"
    t.boolean "unlinkable", default: false
    t.integer "organization_id"
    t.text "user_role"
    t.string "originating_object_type"
    t.bigint "originating_object_id"
    t.index ["organization_id"], name: "index_events_on_organization_id"
    t.index ["originating_object_id", "originating_object_type"], name: "idx_event_originating_obj"
    t.index ["originating_object_type", "originating_object_id"], name: "index_events_on_originating_object"
    t.index ["originating_user_id"], name: "index_events_on_originating_user_id"
    t.index ["subject_id", "subject_type"], name: "index_events_on_subject_id_and_subject_type"
    t.index ["user_role"], name: "index_events_on_user_role"
  end

  create_table "evidence_items", id: :serial, force: :cascade do |t|
    t.text "description", null: false
    t.integer "disease_id"
    t.integer "source_id"
    t.integer "variant_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "rating"
    t.string "status"
    t.string "variant_hgvs"
    t.integer "evidence_level"
    t.integer "evidence_type"
    t.integer "variant_origin"
    t.integer "evidence_direction"
    t.integer "clinical_significance"
    t.boolean "deleted", default: false
    t.datetime "deleted_at"
    t.integer "drug_interaction_type"
    t.boolean "flagged", default: false, null: false
    t.bigint "molecular_profile_id"
    t.index ["clinical_significance"], name: "index_evidence_items_on_clinical_significance"
    t.index ["deleted"], name: "index_evidence_items_on_deleted"
    t.index ["disease_id"], name: "index_evidence_items_on_disease_id"
    t.index ["drug_interaction_type"], name: "index_evidence_items_on_drug_interaction_type"
    t.index ["evidence_direction"], name: "index_evidence_items_on_evidence_direction"
    t.index ["evidence_level"], name: "index_evidence_items_on_evidence_level"
    t.index ["evidence_type"], name: "index_evidence_items_on_evidence_type"
    t.index ["molecular_profile_id"], name: "index_evidence_items_on_molecular_profile_id"
    t.index ["source_id"], name: "index_evidence_items_on_source_id"
    t.index ["status"], name: "index_evidence_items_on_status"
    t.index ["variant_id"], name: "index_evidence_items_on_variant_id"
    t.index ["variant_origin"], name: "index_evidence_items_on_variant_origin"
  end

  create_table "evidence_items_phenotypes", id: false, force: :cascade do |t|
    t.integer "evidence_item_id", null: false
    t.integer "phenotype_id", null: false
    t.index ["evidence_item_id", "phenotype_id"], name: "index_evidence_item_id_phenotype_id"
    t.index ["phenotype_id"], name: "index_evidence_items_phenotypes_on_phenotype_id"
  end

  create_table "flags", id: :serial, force: :cascade do |t|
    t.integer "flagging_user_id"
    t.integer "resolving_user_id"
    t.string "flaggable_type"
    t.integer "flaggable_id"
    t.text "state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["flaggable_type", "flaggable_id"], name: "index_flags_on_flaggable_type_and_flaggable_id"
    t.index ["flagging_user_id"], name: "index_flags_on_flagging_user_id"
    t.index ["resolving_user_id"], name: "index_flags_on_resolving_user_id"
    t.index ["state"], name: "index_flags_on_state"
  end

  create_table "gene_aliases", id: :serial, force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_gene_aliases_on_name"
  end

  create_table "gene_aliases_genes", id: false, force: :cascade do |t|
    t.integer "gene_alias_id", null: false
    t.integer "gene_id", null: false
    t.index ["gene_alias_id", "gene_id"], name: "index_gene_aliases_genes_on_gene_alias_id_and_gene_id"
    t.index ["gene_id"], name: "index_gene_aliases_genes_on_gene_id"
  end

  create_table "genes", id: :serial, force: :cascade do |t|
    t.integer "entrez_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.text "official_name", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "clinical_description"
    t.boolean "deleted", default: false
    t.datetime "deleted_at"
    t.boolean "flagged", default: false, null: false
    t.index "char_length((name)::text)", name: "gene_name_size_idx"
    t.index ["deleted"], name: "index_genes_on_deleted"
    t.index ["name"], name: "index_genes_on_name"
  end

  create_table "genes_sources", id: false, force: :cascade do |t|
    t.integer "gene_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["gene_id", "source_id"], name: "index_genes_sources_on_gene_id_and_source_id"
  end

  create_table "hgvs_expressions", id: :serial, force: :cascade do |t|
    t.text "expression"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["expression"], name: "index_hgvs_expressions_on_expression"
  end

  create_table "hgvs_expressions_variants", id: false, force: :cascade do |t|
    t.integer "hgvs_expression_id", null: false
    t.integer "variant_id", null: false
    t.integer "variants_id"
    t.integer "hgvs_expressions_id"
    t.index ["hgvs_expression_id"], name: "index_hgvs_expressions_variants_on_hgvs_expression_id"
    t.index ["variant_id", "hgvs_expression_id"], name: "idx_variant_id_hgvs_id"
  end

  create_table "molecular_profile_aliases", force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_molecular_profile_aliases_on_name"
  end

  create_table "molecular_profile_aliases_molecular_profiles", id: false, force: :cascade do |t|
    t.bigint "molecular_profile_alias_id", null: false
    t.bigint "molecular_profile_id", null: false
    t.index ["molecular_profile_alias_id", "molecular_profile_id"], name: "idx_mp_alias_id_mp_id_on_mp_alias_join_table"
    t.index ["molecular_profile_id"], name: "idx_mp_id_on_mp_alias_join_table"
  end

  create_table "molecular_profiles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
    t.boolean "flagged", default: false, null: false
    t.boolean "deprecated", default: false, null: false
    t.float "evidence_score", null: false
    t.index ["description"], name: "index_molecular_profiles_on_description"
    t.index ["name"], name: "index_molecular_profiles_on_name", unique: true
  end

  create_table "molecular_profiles_sources", id: false, force: :cascade do |t|
    t.bigint "molecular_profile_id", null: false
    t.bigint "source_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["molecular_profile_id", "source_id"], name: "idx_mp_source_id"
  end

  create_table "molecular_profiles_variants", id: false, force: :cascade do |t|
    t.bigint "molecular_profile_id", null: false
    t.bigint "variant_id", null: false
    t.index ["molecular_profile_id", "variant_id"], name: "idx_molecular_profile_variant_id"
  end

  create_table "nccn_guidelines", force: :cascade do |t|
    t.text "name", null: false
  end

  create_table "notifications", id: :serial, force: :cascade do |t|
    t.integer "notified_user_id"
    t.integer "originating_user_id"
    t.integer "event_id"
    t.integer "subscription_id"
    t.boolean "seen", default: false
    t.integer "type"
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["created_at"], name: "index_notifications_on_created_at"
    t.index ["notified_user_id"], name: "index_notifications_on_notified_user_id"
  end

  create_table "ontologies", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "version"
    t.datetime "import_date"
    t.string "permalink_format"
    t.string "civic_class"
    t.string "id_name"
  end

  create_table "organizations", id: :serial, force: :cascade do |t|
    t.text "name"
    t.text "url"
    t.text "description"
    t.integer "parent_id"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "phenotypes", id: :serial, force: :cascade do |t|
    t.text "hpo_id"
    t.text "hpo_class"
    t.index ["hpo_id"], name: "index_phenotypes_on_hpo_id"
  end

  create_table "pipeline_types", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name"], name: "index_pipeline_types_on_name"
  end

  create_table "pipeline_types_variant_types", id: false, force: :cascade do |t|
    t.integer "pipeline_type_id", null: false
    t.integer "variant_type_id", null: false
    t.integer "variant_types_id"
    t.integer "pipeline_types_id"
    t.index ["pipeline_type_id"], name: "index_pipeline_types_variant_types_on_pipeline_type_id"
    t.index ["variant_type_id", "pipeline_type_id"], name: "idx_variant_type_pipeline_type"
  end

  create_table "regulatory_agencies", id: :serial, force: :cascade do |t|
    t.text "abbreviation"
    t.text "name"
    t.integer "country_id"
    t.index ["abbreviation"], name: "index_regulatory_agencies_on_abbreviation"
  end

  create_table "revisions", force: :cascade do |t|
    t.string "subject_type"
    t.bigint "subject_id"
    t.text "status", default: "new", null: false
    t.text "field_name", null: false
    t.jsonb "current_value"
    t.jsonb "suggested_value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.uuid "revisionset_id", null: false
    t.index ["created_at"], name: "index_revisions_on_created_at"
    t.index ["field_name"], name: "index_revisions_on_field_name"
    t.index ["revisionset_id"], name: "index_revisions_on_revisionset_id"
    t.index ["status"], name: "index_revisions_on_status"
    t.index ["subject_id", "subject_type"], name: "index_revisions_on_subject_id_and_subject_type"
    t.index ["subject_type", "subject_id"], name: "index_v2_suggested_changes_on_subject"
    t.index ["updated_at"], name: "index_revisions_on_updated_at"
  end

  create_table "role_mentions", force: :cascade do |t|
    t.integer "role", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "comment_id"
    t.index ["comment_id"], name: "index_role_mentions_on_comment_id"
  end

  create_table "source_suggestions", id: :serial, force: :cascade do |t|
    t.integer "source_id"
    t.integer "user_id"
    t.text "gene_name"
    t.text "disease_name"
    t.text "variant_name"
    t.text "initial_comment"
    t.text "status"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "reason"
    t.integer "gene_id"
    t.integer "variant_id"
    t.integer "disease_id"
    t.bigint "molecular_profile_id"
    t.index ["molecular_profile_id"], name: "index_source_suggestions_on_molecular_profile_id"
  end

  create_table "sources", id: :serial, force: :cascade do |t|
    t.string "citation_id", null: false
    t.string "study_type"
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "abstract"
    t.boolean "open_access"
    t.text "pmc_id"
    t.integer "publication_year"
    t.integer "publication_month"
    t.integer "publication_day"
    t.text "journal"
    t.string "full_journal_title"
    t.text "title"
    t.text "status", default: "fully curated", null: false
    t.boolean "is_review"
    t.integer "source_type", null: false
    t.integer "asco_abstract_id"
    t.text "asco_presenter"
    t.index ["asco_abstract_id"], name: "index_sources_on_asco_abstract_id"
    t.index ["asco_presenter"], name: "index_sources_on_asco_presenter"
    t.index ["citation_id"], name: "index_sources_on_citation_id"
  end

  create_table "sources_variant_groups", id: false, force: :cascade do |t|
    t.integer "variant_group_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sources_variants", id: false, force: :cascade do |t|
    t.integer "variant_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subscriptions", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "subscribable_type"
    t.integer "subscribable_id"
    t.string "type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "action_type"
    t.text "action_class"
    t.index ["action_type", "action_class"], name: "index_subscriptions_on_action_type_and_action_class"
    t.index ["subscribable_id", "subscribable_type"], name: "index_subscriptions_on_subscribable_id_and_subscribable_type"
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "suggested_changes", id: :serial, force: :cascade do |t|
    t.text "suggested_changes", null: false
    t.string "moderated_type"
    t.integer "moderated_id"
    t.integer "user_id", null: false
    t.string "status", default: "new", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["created_at"], name: "index_suggested_changes_on_created_at"
    t.index ["moderated_id", "moderated_type"], name: "index_suggested_changes_on_moderated_id_and_moderated_type"
    t.index ["status"], name: "index_suggested_changes_on_status"
    t.index ["updated_at"], name: "index_suggested_changes_on_updated_at"
  end

  create_table "tsv_releases", id: :serial, force: :cascade do |t|
    t.text "path", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_mentions", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.bigint "comment_id"
    t.index ["comment_id"], name: "index_user_mentions_on_comment_id"
    t.index ["user_id"], name: "index_user_mentions_on_user_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.string "url"
    t.string "username"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "orcid"
    t.integer "area_of_expertise"
    t.boolean "deleted", default: false
    t.datetime "deleted_at"
    t.integer "role", default: 0
    t.datetime "last_seen_at"
    t.text "twitter_handle"
    t.text "facebook_profile"
    t.text "linkedin_profile"
    t.boolean "accepted_license"
    t.boolean "featured_expert", default: false
    t.text "bio"
    t.boolean "signup_complete"
    t.integer "country_id"
    t.integer "most_recent_organization_id"
    t.datetime "most_recent_action_timestamp"
    t.index ["country_id"], name: "index_users_on_country_id"
    t.index ["deleted"], name: "index_users_on_deleted"
    t.index ["last_seen_at"], name: "index_users_on_last_seen_at"
    t.index ["most_recent_action_timestamp"], name: "index_users_on_most_recent_action_timestamp"
    t.index ["role"], name: "index_users_on_role"
  end

  create_table "variant_aliases", id: :serial, force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_variant_aliases_on_name"
  end

  create_table "variant_aliases_variants", id: false, force: :cascade do |t|
    t.integer "variant_alias_id", null: false
    t.integer "variant_id", null: false
    t.index ["variant_alias_id", "variant_id"], name: "idx_variant_alias_variant_id"
    t.index ["variant_id"], name: "index_variant_aliases_variants_on_variant_id"
  end

  create_table "variant_group_variants", id: false, force: :cascade do |t|
    t.integer "variant_id", null: false
    t.integer "variant_group_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["variant_id", "variant_group_id"], name: "index_variant_group_variants_on_variant_id_and_variant_group_id"
  end

  create_table "variant_groups", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "deleted", default: false
    t.datetime "deleted_at"
    t.boolean "flagged", default: false, null: false
    t.index ["deleted"], name: "index_variant_groups_on_deleted"
  end

  create_table "variant_types", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.text "display_name", null: false
    t.text "description", null: false
    t.text "soid", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "parent_id"
    t.integer "lft"
    t.integer "rgt"
    t.index ["display_name"], name: "index_variant_types_on_display_name"
    t.index ["name"], name: "index_variant_types_on_name"
    t.index ["soid"], name: "index_variant_types_on_soid"
  end

  create_table "variant_types_variants", id: false, force: :cascade do |t|
    t.integer "variant_id", null: false
    t.integer "variant_type_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["variant_id", "variant_type_id"], name: "index_variant_types_variants_on_variant_id_and_variant_type_id"
  end

  create_table "variants", id: :serial, force: :cascade do |t|
    t.integer "gene_id", null: false
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "deleted", default: false
    t.datetime "deleted_at"
    t.text "genome_build"
    t.text "chromosome"
    t.integer "start"
    t.integer "stop"
    t.text "reference_bases"
    t.text "variant_bases"
    t.text "representative_transcript"
    t.text "chromosome2"
    t.integer "start2"
    t.integer "stop2"
    t.integer "reference_build"
    t.text "representative_transcript2"
    t.integer "ensembl_version"
    t.integer "secondary_gene_id"
    t.text "allele_registry_id"
    t.boolean "flagged", default: false, null: false
    t.integer "single_variant_molecular_profile_id"
    t.boolean "deprecated", default: false, null: false
    t.integer "deprecation_reason"
    t.integer "deprecation_comment_id"
    t.index "lower((name)::text) varchar_pattern_ops", name: "idx_case_insensitive_variant_name"
    t.index "lower((name)::text)", name: "variant_lower_name_idx"
    t.index ["chromosome"], name: "index_variants_on_chromosome"
    t.index ["chromosome2"], name: "index_variants_on_chromosome2"
    t.index ["deleted"], name: "index_variants_on_deleted"
    t.index ["gene_id"], name: "index_variants_on_gene_id"
    t.index ["name"], name: "index_variants_on_name"
    t.index ["reference_bases"], name: "index_variants_on_reference_bases"
    t.index ["secondary_gene_id"], name: "index_variants_on_secondary_gene_id"
    t.index ["single_variant_molecular_profile_id"], name: "index_variants_on_single_variant_molecular_profile_id"
    t.index ["start"], name: "index_variants_on_start"
    t.index ["start2"], name: "index_variants_on_start2"
    t.index ["stop"], name: "index_variants_on_stop"
    t.index ["stop2"], name: "index_variants_on_stop2"
    t.index ["variant_bases"], name: "index_variants_on_variant_bases"
  end

  add_foreign_key "acmg_codes_assertions", "acmg_codes"
  add_foreign_key "acmg_codes_assertions", "assertions"
  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "assertions", "nccn_guidelines"
  add_foreign_key "assertions_clingen_codes", "assertions"
  add_foreign_key "assertions_clingen_codes", "clingen_codes"
  add_foreign_key "assertions_drugs", "assertions"
  add_foreign_key "assertions_drugs", "drugs"
  add_foreign_key "assertions_evidence_items", "assertions"
  add_foreign_key "assertions_evidence_items", "evidence_items"
  add_foreign_key "assertions_molecular_profiles", "assertions"
  add_foreign_key "assertions_molecular_profiles", "molecular_profiles"
  add_foreign_key "assertions_phenotypes", "assertions"
  add_foreign_key "assertions_phenotypes", "phenotypes"
  add_foreign_key "audits", "users"
  add_foreign_key "authorizations", "users"
  add_foreign_key "authors_sources", "authors"
  add_foreign_key "authors_sources", "sources"
  add_foreign_key "badge_claims", "badges"
  add_foreign_key "badge_claims", "users"
  add_foreign_key "comments", "users"
  add_foreign_key "conflict_of_interest_statements", "users"
  add_foreign_key "disease_aliases_diseases", "disease_aliases"
  add_foreign_key "disease_aliases_diseases", "diseases"
  add_foreign_key "domain_expert_tags", "users"
  add_foreign_key "drugs_evidence_items", "drugs"
  add_foreign_key "drugs_evidence_items", "evidence_items"
  add_foreign_key "entity_mentions", "comments"
  add_foreign_key "events", "organizations"
  add_foreign_key "events", "users", column: "originating_user_id"
  add_foreign_key "evidence_items", "diseases"
  add_foreign_key "evidence_items", "sources"
  add_foreign_key "evidence_items", "variants"
  add_foreign_key "evidence_items_phenotypes", "evidence_items"
  add_foreign_key "evidence_items_phenotypes", "phenotypes"
  add_foreign_key "gene_aliases_genes", "gene_aliases"
  add_foreign_key "gene_aliases_genes", "genes"
  add_foreign_key "genes_sources", "genes"
  add_foreign_key "genes_sources", "sources"
  add_foreign_key "molecular_profile_aliases_molecular_profiles", "molecular_profile_aliases"
  add_foreign_key "molecular_profile_aliases_molecular_profiles", "molecular_profiles"
  add_foreign_key "molecular_profiles_sources", "molecular_profiles"
  add_foreign_key "molecular_profiles_sources", "sources"
  add_foreign_key "molecular_profiles_variants", "molecular_profiles"
  add_foreign_key "molecular_profiles_variants", "variants"
  add_foreign_key "notifications", "events"
  add_foreign_key "notifications", "subscriptions"
  add_foreign_key "notifications", "users", column: "notified_user_id"
  add_foreign_key "notifications", "users", column: "originating_user_id"
  add_foreign_key "organizations", "organizations", column: "parent_id"
  add_foreign_key "regulatory_agencies", "countries"
  add_foreign_key "role_mentions", "comments"
  add_foreign_key "source_suggestions", "diseases"
  add_foreign_key "source_suggestions", "genes"
  add_foreign_key "source_suggestions", "molecular_profiles"
  add_foreign_key "source_suggestions", "variants"
  add_foreign_key "subscriptions", "users"
  add_foreign_key "suggested_changes", "users"
  add_foreign_key "user_mentions", "comments"
  add_foreign_key "user_mentions", "users"
  add_foreign_key "users", "organizations", column: "most_recent_organization_id"
  add_foreign_key "variant_aliases_variants", "variant_aliases"
  add_foreign_key "variant_aliases_variants", "variants"
  add_foreign_key "variant_group_variants", "variant_groups"
  add_foreign_key "variant_group_variants", "variants"
  add_foreign_key "variants", "comments", column: "deprecation_comment_id"
  add_foreign_key "variants", "genes"
  add_foreign_key "variants", "genes", column: "secondary_gene_id"
  add_foreign_key "variants", "molecular_profiles", column: "single_variant_molecular_profile_id"

  create_view "evidence_browse_table_rows", sql_definition: <<-SQL
      SELECT evidence_items.id,
      genes.name AS gene_name,
      variants.name AS variant_name,
      diseases.name AS disease_name,
      array_agg(DISTINCT drugs.name ORDER BY drugs.name) AS drug_names,
      evidence_items.status,
      evidence_items.description,
      evidence_items.evidence_direction,
      evidence_items.evidence_level,
      evidence_items.rating AS evidence_rating,
      evidence_items.evidence_type,
      evidence_items.variant_origin,
      evidence_items.clinical_significance
     FROM (((((evidence_items
       JOIN variants ON ((evidence_items.variant_id = variants.id)))
       JOIN genes ON ((variants.gene_id = genes.id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN drugs_evidence_items ON ((drugs_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN drugs ON ((drugs.id = drugs_evidence_items.drug_id)))
    WHERE ((evidence_items.status)::text <> 'rejected'::text)
    GROUP BY evidence_items.id, evidence_items.status, evidence_items.description, evidence_items.evidence_direction, evidence_items.evidence_level, evidence_items.rating, evidence_items.evidence_type, evidence_items.variant_origin, evidence_items.clinical_significance, genes.name, variants.name, diseases.name;
  SQL
  create_view "variant_group_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT variant_groups.id,
      variant_groups.name,
      array_agg(DISTINCT variants.name) AS variant_names,
      array_agg(DISTINCT genes.name) AS gene_names,
      count(DISTINCT variants.id) AS variant_count,
      count(DISTINCT evidence_items.id) AS evidence_item_count
     FROM ((((variant_groups
       JOIN variant_group_variants ON ((variant_group_variants.variant_group_id = variant_groups.id)))
       JOIN variants ON ((variant_group_variants.variant_id = variants.id)))
       JOIN genes ON ((variants.gene_id = genes.id)))
       LEFT JOIN evidence_items ON ((evidence_items.variant_id = variants.id)))
    WHERE ((evidence_items.status)::text <> 'rejected'::text)
    GROUP BY variant_groups.id, variant_groups.name;
  SQL
  add_index "variant_group_browse_table_rows", ["id"], name: "index_variant_group_browse_table_rows_on_id", unique: true

  create_view "gene_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT outer_genes.id,
      outer_genes.name,
      outer_genes.entrez_id,
      outer_genes.flagged,
      array_agg(DISTINCT gene_aliases.name ORDER BY gene_aliases.name) AS alias_names,
      json_agg(DISTINCT jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total)) FILTER (WHERE (diseases.name IS NOT NULL)) AS diseases,
      json_agg(DISTINCT jsonb_build_object('name', drugs.name, 'id', drugs.id, 'total', drug_count.total)) FILTER (WHERE (drugs.name IS NOT NULL)) AS drugs,
      count(DISTINCT variants.id) AS variant_count,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      count(DISTINCT assertions.id) AS assertion_count
     FROM ((((((((((genes outer_genes
       LEFT JOIN gene_aliases_genes ON ((gene_aliases_genes.gene_id = outer_genes.id)))
       LEFT JOIN gene_aliases ON ((gene_aliases.id = gene_aliases_genes.gene_alias_id)))
       JOIN variants ON ((variants.gene_id = outer_genes.id)))
       JOIN evidence_items ON ((evidence_items.variant_id = variants.id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN drugs_evidence_items ON ((drugs_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN drugs ON ((drugs.id = drugs_evidence_items.drug_id)))
       LEFT JOIN assertions ON ((assertions.gene_id = outer_genes.id)))
       LEFT JOIN LATERAL ( SELECT drugs_1.id AS drug_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM (((evidence_items evidence_items_1
               JOIN variants variants_1 ON ((variants_1.id = evidence_items_1.variant_id)))
               JOIN drugs_evidence_items drugs_evidence_items_1 ON ((drugs_evidence_items_1.evidence_item_id = evidence_items_1.id)))
               JOIN drugs drugs_1 ON ((drugs_1.id = drugs_evidence_items_1.drug_id)))
            WHERE (variants_1.gene_id = outer_genes.id)
            GROUP BY drugs_1.id) drug_count ON ((drugs.id = drug_count.drug_id)))
       LEFT JOIN LATERAL ( SELECT diseases_1.id AS disease_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM ((evidence_items evidence_items_1
               JOIN variants variants_1 ON ((variants_1.id = evidence_items_1.variant_id)))
               JOIN diseases diseases_1 ON ((diseases_1.id = evidence_items_1.disease_id)))
            WHERE (variants_1.gene_id = outer_genes.id)
            GROUP BY diseases_1.id) disease_count ON ((diseases.id = disease_count.disease_id)))
    WHERE ((evidence_items.status)::text <> 'rejected'::text)
    GROUP BY outer_genes.id, outer_genes.name, outer_genes.entrez_id;
  SQL
  add_index "gene_browse_table_rows", ["id"], name: "index_gene_browse_table_rows_on_id", unique: true

  create_view "disease_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT diseases.id,
      diseases.name,
      diseases.display_name,
      diseases.doid,
      array_agg(DISTINCT genes.name) AS gene_names,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      count(DISTINCT variants.id) AS variant_count,
      count(DISTINCT assertions.id) AS assertion_count,
      count(DISTINCT genes.id) AS gene_count
     FROM (((((diseases
       JOIN evidence_items ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN assertions_evidence_items ON ((assertions_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN assertions ON ((assertions_evidence_items.assertion_id = assertions.id)))
       JOIN variants ON ((variants.id = evidence_items.variant_id)))
       JOIN genes ON ((genes.id = variants.gene_id)))
    WHERE ((evidence_items.status)::text <> 'rejected'::text)
    GROUP BY diseases.id, diseases.name, diseases.doid;
  SQL
  add_index "disease_browse_table_rows", ["id"], name: "index_disease_browse_table_rows_on_id", unique: true

  create_view "evidence_items_by_statuses", sql_definition: <<-SQL
      SELECT mp.id AS molecular_profile_id,
      sum(
          CASE
              WHEN ((ei.status)::text = 'accepted'::text) THEN 1
              ELSE 0
          END) AS accepted_count,
      sum(
          CASE
              WHEN ((ei.status)::text = 'rejected'::text) THEN 1
              ELSE 0
          END) AS rejected_count,
      sum(
          CASE
              WHEN ((ei.status)::text = 'submitted'::text) THEN 1
              ELSE 0
          END) AS submitted_count
     FROM (molecular_profiles mp
       JOIN evidence_items ei ON (((mp.id = ei.molecular_profile_id) AND (ei.deleted = false))))
    GROUP BY mp.id;
  SQL
  create_view "source_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT sources.id,
      sources.source_type,
      sources.citation_id,
      array_agg(DISTINCT concat(authors.last_name, ', ', authors.fore_name)) FILTER (WHERE ((authors.fore_name <> ''::text) OR (authors.last_name <> ''::text))) AS authors,
      sources.publication_year,
      sources.journal,
      sources.title,
      sources.description,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      count(DISTINCT source_suggestions.id) AS source_suggestion_count
     FROM ((((sources
       LEFT JOIN authors_sources ON ((sources.id = authors_sources.source_id)))
       LEFT JOIN authors ON ((authors.id = authors_sources.author_id)))
       LEFT JOIN evidence_items ON ((evidence_items.source_id = sources.id)))
       LEFT JOIN source_suggestions ON ((source_suggestions.source_id = sources.id)))
    WHERE (((evidence_items.status)::text <> 'rejected'::text) OR ((source_suggestions.status = 'new'::text) OR (source_suggestions.status IS NULL)))
    GROUP BY sources.id, sources.source_type, sources.publication_year, sources.journal, sources.title
   HAVING ((count(DISTINCT evidence_items.id) > 0) OR (count(DISTINCT evidence_items.id) > 0));
  SQL
  add_index "source_browse_table_rows", ["id"], name: "index_source_browse_table_rows_on_id", unique: true

  create_view "variant_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT outer_variants.id,
      outer_variants.name,
      genes.id AS gene_id,
      genes.name AS gene_name,
      array_agg(DISTINCT variant_aliases.name ORDER BY variant_aliases.name) AS alias_names,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      array_agg(DISTINCT variant_types.id) AS variant_types,
      json_agg(DISTINCT jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total)) FILTER (WHERE (diseases.name IS NOT NULL)) AS diseases,
      json_agg(DISTINCT jsonb_build_object('name', drugs.name, 'id', drugs.id, 'total', drug_count.total)) FILTER (WHERE (drugs.name IS NOT NULL)) AS drugs,
      count(DISTINCT assertions.id) AS assertion_count
     FROM ((((((((((((variants outer_variants
       LEFT JOIN variant_aliases_variants ON ((variant_aliases_variants.variant_id = outer_variants.id)))
       LEFT JOIN variant_aliases ON ((variant_aliases.id = variant_aliases_variants.variant_alias_id)))
       JOIN evidence_items ON ((evidence_items.variant_id = outer_variants.id)))
       JOIN genes ON ((genes.id = outer_variants.gene_id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN drugs_evidence_items ON ((drugs_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN drugs ON ((drugs.id = drugs_evidence_items.drug_id)))
       LEFT JOIN assertions ON ((assertions.variant_id = outer_variants.id)))
       LEFT JOIN variant_types_variants ON ((variant_types_variants.variant_id = outer_variants.id)))
       LEFT JOIN variant_types ON ((variant_types_variants.variant_type_id = variant_types.id)))
       LEFT JOIN LATERAL ( SELECT drugs_1.id AS drug_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM ((evidence_items evidence_items_1
               JOIN drugs_evidence_items drugs_evidence_items_1 ON ((drugs_evidence_items_1.evidence_item_id = evidence_items_1.id)))
               JOIN drugs drugs_1 ON ((drugs_1.id = drugs_evidence_items_1.drug_id)))
            WHERE (evidence_items_1.variant_id = outer_variants.id)
            GROUP BY drugs_1.id) drug_count ON ((drugs.id = drug_count.drug_id)))
       LEFT JOIN LATERAL ( SELECT diseases_1.id AS disease_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM (evidence_items evidence_items_1
               JOIN diseases diseases_1 ON ((diseases_1.id = evidence_items_1.disease_id)))
            WHERE (evidence_items_1.variant_id = outer_variants.id)
            GROUP BY diseases_1.id) disease_count ON ((diseases.id = disease_count.disease_id)))
    WHERE (((evidence_items.status)::text <> 'rejected'::text) AND (outer_variants.deprecated = false))
    GROUP BY outer_variants.id, outer_variants.name, genes.id, genes.name;
  SQL
  add_index "variant_browse_table_rows", ["id"], name: "index_variant_browse_table_rows_on_id", unique: true

  create_view "molecular_profile_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT outer_mps.id,
      outer_mps.name,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      array_agg(DISTINCT molecular_profile_aliases.name ORDER BY molecular_profile_aliases.name) AS alias_names,
      json_agg(DISTINCT jsonb_build_object('name', genes.name, 'id', genes.id)) FILTER (WHERE (genes.name IS NOT NULL)) AS genes,
      json_agg(DISTINCT jsonb_build_object('name', variants.name, 'id', variants.id)) FILTER (WHERE (variants.name IS NOT NULL)) AS variants,
      json_agg(DISTINCT jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total)) FILTER (WHERE (diseases.name IS NOT NULL)) AS diseases,
      json_agg(DISTINCT jsonb_build_object('name', drugs.name, 'id', drugs.id, 'total', drug_count.total)) FILTER (WHERE (drugs.name IS NOT NULL)) AS drugs,
      count(DISTINCT assertions.id) AS assertion_count,
      outer_mps.evidence_score
     FROM ((((((((((((molecular_profiles outer_mps
       JOIN evidence_items ON ((evidence_items.molecular_profile_id = outer_mps.id)))
       JOIN molecular_profiles_variants ON ((outer_mps.id = molecular_profiles_variants.molecular_profile_id)))
       JOIN variants ON ((molecular_profiles_variants.variant_id = variants.id)))
       JOIN genes ON ((genes.id = variants.gene_id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN drugs_evidence_items ON ((drugs_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN drugs ON ((drugs.id = drugs_evidence_items.drug_id)))
       LEFT JOIN assertions ON ((assertions.molecular_profile_id = outer_mps.id)))
       LEFT JOIN molecular_profile_aliases_molecular_profiles ON ((molecular_profile_aliases_molecular_profiles.molecular_profile_id = outer_mps.id)))
       LEFT JOIN molecular_profile_aliases ON ((molecular_profile_aliases.id = molecular_profile_aliases_molecular_profiles.molecular_profile_alias_id)))
       LEFT JOIN LATERAL ( SELECT drugs_1.id AS drug_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM ((evidence_items evidence_items_1
               JOIN drugs_evidence_items drugs_evidence_items_1 ON ((drugs_evidence_items_1.evidence_item_id = evidence_items_1.id)))
               JOIN drugs drugs_1 ON ((drugs_1.id = drugs_evidence_items_1.drug_id)))
            WHERE (evidence_items_1.molecular_profile_id = outer_mps.id)
            GROUP BY drugs_1.id) drug_count ON ((drugs.id = drug_count.drug_id)))
       LEFT JOIN LATERAL ( SELECT diseases_1.id AS disease_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM (evidence_items evidence_items_1
               JOIN diseases diseases_1 ON ((diseases_1.id = evidence_items_1.disease_id)))
            WHERE (evidence_items_1.molecular_profile_id = outer_mps.id)
            GROUP BY diseases_1.id) disease_count ON ((diseases.id = disease_count.disease_id)))
    WHERE (((evidence_items.status)::text <> 'rejected'::text) AND (outer_mps.deprecated = false))
    GROUP BY outer_mps.id, outer_mps.name, outer_mps.evidence_score;
  SQL
  add_index "molecular_profile_browse_table_rows", ["id"], name: "index_molecular_profile_browse_table_rows_on_id", unique: true

end
