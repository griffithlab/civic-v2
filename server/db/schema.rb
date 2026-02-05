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

ActiveRecord::Schema[8.0].define(version: 2026_01_28_154154) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  # Custom types defined in this database.
  # Note that some types may not work with other database engines. Be careful if changing database.
  create_enum "approval_status", ["active", "revoked", "requires_review"]
  create_enum "exon_coordinate_record_state", ["stub", "exons_provided", "fully_curated"]
  create_enum "exon_offset_direction", ["positive", "negative"]
  create_enum "fusion_partner_status", ["known", "unknown", "multiple"]
  create_enum "source_link_reason", ["same_clinical_trial", "overlapping_data_or_patients", "related_abstract", "other"]
  create_enum "variant_coordinate_record_state", ["stub", "fully_curated"]

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

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
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
    t.string "checksum"
    t.datetime "created_at", precision: nil, null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.text "type", null: false
    t.bigint "user_id", null: false
    t.bigint "organization_id"
    t.string "subject_type", null: false
    t.bigint "subject_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "verbiage"
    t.text "note"
    t.index ["organization_id"], name: "index_activities_on_organization_id"
    t.index ["subject_type", "subject_id"], name: "index_activities_on_subject"
    t.index ["type"], name: "index_activities_on_type"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "activity_linked_entities", force: :cascade do |t|
    t.string "entity_type", null: false
    t.bigint "entity_id", null: false
    t.bigint "activity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_activity_linked_entities_on_activity_id"
    t.index ["entity_type", "entity_id"], name: "index_activity_linked_entities_on_entity"
  end

  create_table "advanced_searches", id: :serial, force: :cascade do |t|
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.text "params"
    t.text "search_type"
    t.text "token"
    t.index ["token", "search_type"], name: "index_advanced_searches_on_token_and_search_type"
  end

  create_table "affiliations", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "organization_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "can_approve", default: false, null: false
    t.index ["organization_id"], name: "index_affiliations_on_organization_id"
    t.index ["user_id"], name: "index_affiliations_on_user_id"
  end

  create_table "api_keys", force: :cascade do |t|
    t.string "bearer_type"
    t.bigint "bearer_id"
    t.text "token_prefix", null: false
    t.text "token_suffix", null: false
    t.text "token_digest", null: false
    t.boolean "revoked", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bearer_type", "bearer_id"], name: "index_api_keys_on_bearer"
    t.index ["revoked"], name: "index_api_keys_on_revoked"
    t.index ["token_digest"], name: "index_api_keys_on_token_digest", unique: true
  end

  create_table "approvals", force: :cascade do |t|
    t.bigint "organization_id", null: false
    t.bigint "user_id", null: false
    t.bigint "assertion_id", null: false
    t.enum "status", default: "active", null: false, enum_type: "approval_status"
    t.datetime "last_reviewed", precision: nil, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assertion_id"], name: "index_approvals_on_assertion_id"
    t.index ["organization_id"], name: "index_approvals_on_organization_id"
    t.index ["user_id"], name: "index_approvals_on_user_id"
  end

  create_table "assertions", id: :serial, force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.boolean "deleted", default: false
    t.text "status", default: "submitted", null: false
    t.integer "nccn_guideline_old"
    t.text "nccn_guideline_version"
    t.integer "amp_level"
    t.integer "significance"
    t.integer "disease_id"
    t.integer "assertion_type"
    t.boolean "fda_companion_test"
    t.boolean "fda_regulatory_approval"
    t.integer "therapy_interaction_type"
    t.integer "assertion_direction"
    t.text "summary"
    t.integer "variant_origin"
    t.bigint "nccn_guideline_id"
    t.boolean "flagged", default: false, null: false
    t.integer "evidence_items_count"
    t.bigint "molecular_profile_id"
    t.index ["description"], name: "index_assertions_on_description"
    t.index ["disease_id"], name: "index_assertions_on_disease_id"
    t.index ["molecular_profile_id"], name: "index_assertions_on_molecular_profile_id"
    t.index ["nccn_guideline_id"], name: "index_assertions_on_nccn_guideline_id"
    t.index ["therapy_interaction_type"], name: "index_assertions_on_therapy_interaction_type"
    t.index ["variant_origin"], name: "index_assertions_on_variant_origin"
  end

  create_table "assertions_clingen_codes", id: false, force: :cascade do |t|
    t.bigint "assertion_id", null: false
    t.bigint "clingen_code_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assertion_id"], name: "index_assertions_clingen_codes_on_assertion_id"
    t.index ["clingen_code_id", "assertion_id"], name: "idx_clingencodes_assertions"
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

  create_table "assertions_therapies", id: false, force: :cascade do |t|
    t.integer "assertion_id", null: false
    t.integer "therapy_id", null: false
    t.index ["assertion_id", "therapy_id"], name: "index_assertions_therapies_on_assertion_id_and_therapy_id"
    t.index ["therapy_id"], name: "index_assertions_therapies_on_therapy_id"
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
    t.datetime "created_at", precision: nil
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["user_id"], name: "index_authorizations_on_user_id"
  end

  create_table "authors", id: :serial, force: :cascade do |t|
    t.text "last_name"
    t.text "fore_name"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
  end

  create_table "authors_sources", id: false, force: :cascade do |t|
    t.integer "source_id"
    t.integer "author_id"
    t.integer "author_position"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["author_id", "source_id"], name: "index_authors_sources_on_author_id_and_source_id"
    t.index ["source_id", "author_id"], name: "idx_author_source_id"
    t.index ["source_id"], name: "index_authors_sources_on_source_id"
  end

  create_table "badge_awards", id: :serial, force: :cascade do |t|
    t.integer "badge_id"
    t.integer "user_id"
    t.text "tier"
    t.text "message"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["badge_id", "user_id"], name: "index_badge_awards_on_badge_id_and_user_id"
    t.index ["user_id", "badge_id"], name: "index_badge_awards_on_user_id_and_badge_id"
  end

  create_table "badge_claims", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "badge_id"
    t.string "redemption_code"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["badge_id"], name: "index_badge_claims_on_badge_id"
    t.index ["user_id"], name: "index_badge_claims_on_user_id"
  end

  create_table "badges", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.text "description", null: false
    t.text "additional_fields"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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

  create_table "clinvar_accessions", force: :cascade do |t|
    t.string "clinvar_accession"
    t.bigint "assertion_id", null: false
    t.bigint "organization_id", null: false
    t.integer "clinvar_star_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assertion_id"], name: "index_clinvar_accessions_on_assertion_id"
    t.index ["clinvar_accession"], name: "index_clinvar_accessions_on_clinvar_accession", unique: true
    t.index ["organization_id"], name: "index_clinvar_accessions_on_organization_id"
  end

  create_table "clinvar_api_keys", force: :cascade do |t|
    t.text "api_key", null: false
    t.integer "star_rating"
    t.text "note"
    t.bigint "organization_id", null: false
    t.boolean "active", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["api_key"], name: "index_clinvar_api_keys_on_api_key", unique: true
    t.index ["organization_id"], name: "index_clinvar_api_keys_on_organization_id"
  end

  create_table "clinvar_batch_entries", force: :cascade do |t|
    t.bigint "clinvar_batch_submission_id", null: false
    t.bigint "assertion_id", null: false
    t.string "clinvar_accession"
    t.string "status", null: false
    t.datetime "date_last_evaluated", null: false
    t.jsonb "errors"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assertion_id"], name: "index_clinvar_batch_entries_on_assertion_id"
    t.index ["clinvar_accession"], name: "index_clinvar_batch_entries_on_clinvar_accession"
    t.index ["clinvar_batch_submission_id"], name: "index_clinvar_entries_on_batch_submission_id"
    t.index ["status"], name: "index_clinvar_batch_entries_on_status"
  end

  create_table "clinvar_batch_submissions", force: :cascade do |t|
    t.bigint "clinvar_api_key_id", null: false
    t.bigint "organization_id", null: false
    t.datetime "submitted_at"
    t.string "status"
    t.string "batch_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clinvar_api_key_id"], name: "index_clinvar_batch_submissions_on_clinvar_api_key_id"
    t.index ["organization_id"], name: "index_clinvar_batch_submissions_on_organization_id"
    t.index ["status"], name: "index_clinvar_batch_submissions_on_status"
  end

  create_table "clinvar_entries", id: :serial, force: :cascade do |t|
    t.string "clinvar_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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

  create_table "clinvar_submission_responses", force: :cascade do |t|
    t.bigint "clinvar_batch_submission_id", null: false
    t.jsonb "api_response"
    t.datetime "queried_at"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clinvar_batch_submission_id"], name: "index_clinvar_responses_on_batch_submission_id"
    t.index ["status"], name: "index_clinvar_submission_responses_on_status"
  end

  create_table "comments", id: :serial, force: :cascade do |t|
    t.text "title", default: ""
    t.text "comment"
    t.string "commentable_type"
    t.integer "commentable_id"
    t.integer "user_id"
    t.string "role", default: "comments"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.datetime "deleted_at"
    t.index ["commentable_id"], name: "index_comments_on_commentable_id"
    t.index ["commentable_type"], name: "index_comments_on_commentable_type"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "conflict_of_interest_statements", force: :cascade do |t|
    t.integer "user_id", null: false
    t.boolean "coi_present", null: false
    t.text "coi_statement"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "countries", id: :serial, force: :cascade do |t|
    t.text "iso", null: false
    t.text "name", null: false
  end

  create_table "cytogenetic_coordinates", force: :cascade do |t|
    t.bigint "cytogenetic_region_id", null: false
    t.integer "reference_build", null: false
    t.text "chromosome", null: false
    t.integer "start", null: false
    t.integer "stop", null: false
    t.index ["chromosome"], name: "index_cytogenetic_coordinates_on_chromosome"
    t.index ["cytogenetic_region_id"], name: "index_cytogenetic_coordinates_on_cytogenetic_region_id"
    t.index ["reference_build"], name: "index_cytogenetic_coordinates_on_reference_build"
    t.index ["start"], name: "index_cytogenetic_coordinates_on_start"
    t.index ["stop"], name: "index_cytogenetic_coordinates_on_stop"
  end

  create_table "cytogenetic_regions", force: :cascade do |t|
    t.text "name", null: false
    t.text "chromosome", null: false
    t.text "band"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["band"], name: "index_cytogenetic_regions_on_band"
    t.index ["chromosome"], name: "index_cytogenetic_regions_on_chromosome"
    t.index ["name"], name: "index_cytogenetic_regions_on_name"
  end

  create_table "data_versions", id: :serial, force: :cascade do |t|
    t.integer "version", default: 0
  end

  create_table "definitions", id: :serial, force: :cascade do |t|
    t.string "term", null: false
    t.text "text", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.string "name"
    t.boolean "deprecated", default: false, null: false
    t.index ["name"], name: "index_diseases_on_name"
  end

  create_table "domain_expert_tags", id: :serial, force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.string "domain_of_expertise_type"
    t.integer "domain_of_expertise_id"
    t.integer "user_id"
    t.index ["description"], name: "index_domain_expert_tags_on_description"
    t.index ["domain_of_expertise_id", "domain_of_expertise_type"], name: "idx_domain_of_expertise"
    t.index ["user_id"], name: "index_domain_expert_tags_on_user_id"
  end

  create_table "edges", force: :cascade do |t|
    t.bigint "previous_node_id", null: false
    t.bigint "next_node_id", null: false
    t.text "edge_type", null: false
    t.index ["edge_type"], name: "index_edges_on_edge_type"
    t.index ["next_node_id"], name: "index_edges_on_next_node_id"
    t.index ["previous_node_id"], name: "index_edges_on_previous_node_id"
  end

  create_table "entity_mentions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "entity_type"
    t.bigint "entity_id"
    t.bigint "comment_id"
    t.index ["comment_id"], name: "index_entity_mentions_on_comment_id"
    t.index ["entity_type", "entity_id"], name: "index_entity_mentions_on_entity"
  end

  create_table "events", id: :serial, force: :cascade do |t|
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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
    t.integer "activity_id"
    t.index ["action"], name: "index_events_on_action"
    t.index ["activity_id"], name: "index_events_on_activity_id"
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.integer "rating"
    t.string "status"
    t.string "variant_hgvs"
    t.integer "evidence_level"
    t.integer "evidence_type"
    t.integer "variant_origin"
    t.integer "evidence_direction"
    t.integer "significance"
    t.boolean "deleted", default: false
    t.datetime "deleted_at", precision: nil
    t.integer "therapy_interaction_type"
    t.boolean "flagged", default: false, null: false
    t.bigint "molecular_profile_id"
    t.index ["deleted"], name: "index_evidence_items_on_deleted"
    t.index ["disease_id"], name: "index_evidence_items_on_disease_id"
    t.index ["evidence_direction"], name: "index_evidence_items_on_evidence_direction"
    t.index ["evidence_level"], name: "index_evidence_items_on_evidence_level"
    t.index ["evidence_type"], name: "index_evidence_items_on_evidence_type"
    t.index ["molecular_profile_id"], name: "index_evidence_items_on_molecular_profile_id"
    t.index ["significance"], name: "index_evidence_items_on_significance"
    t.index ["source_id"], name: "index_evidence_items_on_source_id"
    t.index ["status"], name: "index_evidence_items_on_status"
    t.index ["therapy_interaction_type"], name: "index_evidence_items_on_therapy_interaction_type"
    t.index ["variant_origin"], name: "index_evidence_items_on_variant_origin"
  end

  create_table "evidence_items_phenotypes", id: false, force: :cascade do |t|
    t.integer "evidence_item_id", null: false
    t.integer "phenotype_id", null: false
    t.index ["evidence_item_id", "phenotype_id"], name: "index_evidence_item_id_phenotype_id"
    t.index ["phenotype_id"], name: "index_evidence_items_phenotypes_on_phenotype_id"
  end

  create_table "evidence_items_therapies", id: false, force: :cascade do |t|
    t.integer "therapy_id", null: false
    t.integer "evidence_item_id", null: false
    t.index ["evidence_item_id"], name: "index_evidence_items_therapies_on_evidence_item_id"
    t.index ["therapy_id", "evidence_item_id"], name: "idx_therapy_eid_bridge_table"
  end

  create_table "exon_coordinates", force: :cascade do |t|
    t.text "chromosome"
    t.enum "strand", enum_type: "exon_offset_direction"
    t.bigint "start"
    t.bigint "stop"
    t.integer "exon"
    t.text "ensembl_id"
    t.integer "exon_offset"
    t.enum "exon_offset_direction", enum_type: "exon_offset_direction"
    t.integer "ensembl_version"
    t.text "representative_transcript"
    t.integer "reference_build"
    t.bigint "variant_id", null: false
    t.text "coordinate_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.enum "record_state", default: "stub", null: false, enum_type: "exon_coordinate_record_state"
    t.index ["chromosome"], name: "index_exon_coordinates_on_chromosome"
    t.index ["representative_transcript"], name: "index_exon_coordinates_on_representative_transcript"
    t.index ["start"], name: "index_exon_coordinates_on_start"
    t.index ["stop"], name: "index_exon_coordinates_on_stop"
    t.index ["variant_id"], name: "index_exon_coordinates_on_variant_id"
  end

  create_table "factors", force: :cascade do |t|
    t.text "ncit_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "feature_aliases", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_feature_aliases_on_name"
  end

  create_table "feature_aliases_features", force: :cascade do |t|
    t.bigint "feature_id", null: false
    t.bigint "feature_alias_id", null: false
    t.index ["feature_alias_id"], name: "index_feature_aliases_features_on_feature_alias_id"
    t.index ["feature_id", "feature_alias_id"], name: "idx_feature_alias"
    t.index ["feature_id"], name: "index_feature_aliases_features_on_feature_id"
  end

  create_table "features", force: :cascade do |t|
    t.text "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "feature_instance_type", null: false
    t.bigint "feature_instance_id", null: false
    t.boolean "flagged", default: false, null: false
    t.text "full_name"
    t.boolean "deprecated", default: false, null: false
    t.integer "deprecation_reason"
    t.index ["feature_instance_type", "feature_instance_id"], name: "index_features_on_feature_instance"
  end

  create_table "features_sources", force: :cascade do |t|
    t.bigint "source_id", null: false
    t.bigint "feature_id", null: false
    t.index ["feature_id"], name: "index_features_sources_on_feature_id"
    t.index ["source_id"], name: "index_features_sources_on_source_id"
  end

  create_table "flags", id: :serial, force: :cascade do |t|
    t.integer "flagging_user_id"
    t.integer "resolving_user_id"
    t.string "flaggable_type"
    t.integer "flaggable_id"
    t.text "state"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["flaggable_type", "flaggable_id"], name: "index_flags_on_flaggable_type_and_flaggable_id"
    t.index ["flagging_user_id"], name: "index_flags_on_flagging_user_id"
    t.index ["resolving_user_id"], name: "index_flags_on_resolving_user_id"
    t.index ["state"], name: "index_flags_on_state"
  end

  create_table "fusions", force: :cascade do |t|
    t.bigint "five_prime_gene_id"
    t.bigint "three_prime_gene_id"
    t.enum "five_prime_partner_status", default: "unknown", null: false, enum_type: "fusion_partner_status"
    t.enum "three_prime_partner_status", default: "unknown", null: false, enum_type: "fusion_partner_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["five_prime_gene_id"], name: "index_fusions_on_five_prime_gene_id"
    t.index ["three_prime_gene_id"], name: "index_fusions_on_three_prime_gene_id"
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.text "uniprot_ids", default: [], array: true
  end

  create_table "genes_sources", id: false, force: :cascade do |t|
    t.integer "gene_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["gene_id", "source_id"], name: "index_genes_sources_on_gene_id_and_source_id"
  end

  create_table "hgvs_descriptions", id: :serial, force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["description"], name: "index_hgvs_descriptions_on_description"
  end

  create_table "hgvs_descriptions_variants", id: false, force: :cascade do |t|
    t.integer "hgvs_description_id", null: false
    t.integer "variant_id", null: false
    t.integer "variants_id"
    t.integer "hgvs_expressions_id"
    t.index ["hgvs_description_id"], name: "index_hgvs_descriptions_variants_on_hgvs_description_id"
    t.index ["variant_id", "hgvs_description_id"], name: "idx_variant_id_hgvs_id"
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.boolean "flagged", default: false, null: false
    t.float "evidence_score", null: false
    t.boolean "deprecated", default: false, null: false
    t.integer "deprecation_reason"
    t.index ["description"], name: "index_molecular_profiles_on_description"
    t.index ["name"], name: "index_molecular_profiles_on_name", unique: true
  end

  create_table "molecular_profiles_sources", id: false, force: :cascade do |t|
    t.bigint "molecular_profile_id", null: false
    t.bigint "source_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "news_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "published_at"
    t.text "title", null: false
    t.boolean "published", default: false, null: false
  end

  create_table "nodes", force: :cascade do |t|
    t.string "term_type", null: false
    t.bigint "term_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id", "term_type"], name: "index_nodes_on_id_and_term_type"
    t.index ["term_id", "term_type"], name: "index_nodes_on_term_id_and_term_type"
    t.index ["term_type", "term_id"], name: "index_nodes_on_term"
  end

  create_table "notifications", id: :serial, force: :cascade do |t|
    t.integer "notified_user_id"
    t.integer "originating_user_id"
    t.integer "event_id"
    t.integer "subscription_id"
    t.boolean "seen", default: false
    t.integer "type"
    t.text "description"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["created_at"], name: "index_notifications_on_created_at"
    t.index ["notified_user_id"], name: "index_notifications_on_notified_user_id"
  end

  create_table "ontologies", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "version"
    t.datetime "import_date", precision: nil
    t.string "permalink_format"
    t.string "civic_class"
    t.string "id_name"
  end

  create_table "organizations", id: :serial, force: :cascade do |t|
    t.text "name"
    t.text "url"
    t.text "description"
    t.integer "parent_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "most_recent_activity_timestamp", precision: nil
    t.boolean "can_approve", default: false, null: false
    t.boolean "is_approved_vcep", default: false, null: false
    t.index ["most_recent_activity_timestamp"], name: "index_organizations_on_most_recent_activity_timestamp"
  end

  create_table "phenotypes", id: :serial, force: :cascade do |t|
    t.text "hpo_id"
    t.text "hpo_class"
    t.text "description"
    t.index ["hpo_id"], name: "index_phenotypes_on_hpo_id"
  end

  create_table "pipeline_types", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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

  create_table "region_members", force: :cascade do |t|
    t.bigint "region_id", null: false
    t.bigint "cytogenetic_region_id", null: false
    t.integer "position", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cytogenetic_region_id"], name: "index_region_members_on_cytogenetic_region_id"
    t.index ["position"], name: "index_region_members_on_position"
    t.index ["region_id"], name: "index_region_members_on_region_id"
  end

  create_table "regions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regulatory_agencies", id: :serial, force: :cascade do |t|
    t.text "abbreviation"
    t.text "name"
    t.integer "country_id"
    t.index ["abbreviation"], name: "index_regulatory_agencies_on_abbreviation"
  end

  create_table "revision_sets", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "revisions", force: :cascade do |t|
    t.string "subject_type"
    t.bigint "subject_id"
    t.text "status", default: "new", null: false
    t.text "field_name", null: false
    t.jsonb "current_value"
    t.jsonb "suggested_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "revisionset_id"
    t.integer "revision_set_id"
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "comment_id"
    t.index ["comment_id"], name: "index_role_mentions_on_comment_id"
  end

  create_table "solid_errors", force: :cascade do |t|
    t.text "exception_class", null: false
    t.text "message", null: false
    t.text "severity", null: false
    t.text "source"
    t.datetime "resolved_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fingerprint", limit: 64, null: false
    t.index ["fingerprint"], name: "index_solid_errors_on_fingerprint", unique: true
    t.index ["resolved_at"], name: "index_solid_errors_on_resolved_at"
  end

  create_table "solid_errors_occurrences", force: :cascade do |t|
    t.bigint "error_id", null: false
    t.text "backtrace"
    t.json "context"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["error_id"], name: "index_solid_errors_occurrences_on_error_id"
  end

  create_table "source_links", force: :cascade do |t|
    t.enum "reason", null: false, enum_type: "source_link_reason"
    t.bigint "source_id", null: false
    t.bigint "linked_source_id", null: false
    t.text "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["linked_source_id"], name: "index_source_links_on_linked_source_id"
    t.index ["source_id"], name: "index_source_links_on_source_id"
  end

  create_table "source_suggestions", id: :serial, force: :cascade do |t|
    t.integer "source_id"
    t.integer "user_id"
    t.text "initial_comment"
    t.text "status"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.text "reason"
    t.integer "disease_id"
    t.bigint "molecular_profile_id"
    t.index ["molecular_profile_id"], name: "index_source_suggestions_on_molecular_profile_id"
  end

  create_table "sources", id: :serial, force: :cascade do |t|
    t.string "citation_id", null: false
    t.string "study_type"
    t.text "citation"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.text "abstract"
    t.boolean "open_access"
    t.text "pmc_id"
    t.integer "publication_year"
    t.integer "publication_month"
    t.integer "publication_day"
    t.text "journal"
    t.string "full_journal_title"
    t.text "title"
    t.boolean "is_review"
    t.integer "source_type", null: false
    t.integer "asco_abstract_id"
    t.text "asco_presenter"
    t.boolean "fully_curated", default: false, null: false
    t.boolean "retracted", default: false, null: false
    t.string "retraction_nature"
    t.datetime "retraction_date"
    t.string "retraction_reasons"
    t.index ["asco_abstract_id"], name: "index_sources_on_asco_abstract_id"
    t.index ["asco_presenter"], name: "index_sources_on_asco_presenter"
    t.index ["citation_id"], name: "index_sources_on_citation_id"
    t.index ["retracted"], name: "index_sources_on_retracted"
  end

  create_table "sources_variant_groups", id: false, force: :cascade do |t|
    t.integer "variant_group_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
  end

  create_table "subscriptions", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "subscribable_type"
    t.integer "subscribable_id"
    t.string "type"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["created_at"], name: "index_suggested_changes_on_created_at"
    t.index ["moderated_id", "moderated_type"], name: "index_suggested_changes_on_moderated_id_and_moderated_type"
    t.index ["status"], name: "index_suggested_changes_on_status"
    t.index ["updated_at"], name: "index_suggested_changes_on_updated_at"
  end

  create_table "therapies", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.text "ncit_id"
    t.boolean "deprecated", default: false, null: false
    t.text "description"
    t.index ["name"], name: "index_therapies_on_name"
    t.index ["ncit_id"], name: "index_therapies_on_ncit_id", unique: true
  end

  create_table "therapies_therapy_aliases", id: :serial, force: :cascade do |t|
    t.integer "therapy_id"
    t.integer "therapy_alias_id"
    t.index ["therapy_alias_id"], name: "index_therapies_therapy_aliases_on_therapy_alias_id"
    t.index ["therapy_id"], name: "index_therapies_therapy_aliases_on_therapy_id"
  end

  create_table "therapy_aliases", id: :serial, force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_therapy_aliases_on_name"
  end

  create_table "tsv_releases", id: :serial, force: :cascade do |t|
    t.text "path", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
  end

  create_table "user_mentions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.string "orcid"
    t.integer "area_of_expertise"
    t.boolean "deleted", default: false
    t.datetime "deleted_at", precision: nil
    t.integer "role", default: 0
    t.datetime "last_seen_at", precision: nil
    t.text "twitter_handle"
    t.text "facebook_profile"
    t.text "linkedin_profile"
    t.boolean "accepted_license"
    t.boolean "featured_expert", default: false
    t.text "bio"
    t.boolean "signup_complete"
    t.integer "country_id"
    t.integer "most_recent_organization_id"
    t.datetime "most_recent_activity_timestamp", precision: nil
    t.index ["country_id"], name: "index_users_on_country_id"
    t.index ["deleted"], name: "index_users_on_deleted"
    t.index ["last_seen_at"], name: "index_users_on_last_seen_at"
    t.index ["most_recent_activity_timestamp"], name: "index_users_on_most_recent_activity_timestamp"
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

  create_table "variant_coordinates", force: :cascade do |t|
    t.text "chromosome"
    t.bigint "start"
    t.bigint "stop"
    t.text "reference_bases"
    t.text "variant_bases"
    t.integer "ensembl_version"
    t.text "representative_transcript"
    t.integer "reference_build"
    t.bigint "variant_id", null: false
    t.text "coordinate_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.enum "record_state", default: "stub", null: false, enum_type: "variant_coordinate_record_state"
    t.enum "exon_offset_direction", enum_type: "exon_offset_direction"
    t.index ["chromosome"], name: "index_variant_coordinates_on_chromosome"
    t.index ["reference_build"], name: "index_variant_coordinates_on_reference_build"
    t.index ["representative_transcript"], name: "index_variant_coordinates_on_representative_transcript"
    t.index ["start"], name: "index_variant_coordinates_on_start"
    t.index ["stop"], name: "index_variant_coordinates_on_stop"
    t.index ["variant_id"], name: "index_variant_coordinates_on_variant_id"
  end

  create_table "variant_group_variants", id: false, force: :cascade do |t|
    t.integer "variant_id", null: false
    t.integer "variant_group_id", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["variant_id", "variant_group_id"], name: "index_variant_group_variants_on_variant_id_and_variant_group_id"
  end

  create_table "variant_groups", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.boolean "deleted", default: false
    t.datetime "deleted_at", precision: nil
    t.boolean "flagged", default: false, null: false
    t.index ["deleted"], name: "index_variant_groups_on_deleted"
  end

  create_table "variant_types", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.text "display_name", null: false
    t.text "description", null: false
    t.text "soid", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["display_name"], name: "index_variant_types_on_display_name"
    t.index ["name"], name: "index_variant_types_on_name"
    t.index ["soid"], name: "index_variant_types_on_soid"
  end

  create_table "variant_types_variants", id: false, force: :cascade do |t|
    t.integer "variant_id", null: false
    t.integer "variant_type_id", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["variant_id", "variant_type_id"], name: "index_variant_types_variants_on_variant_id_and_variant_type_id"
  end

  create_table "variants", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.integer "reference_build"
    t.text "representative_transcript2"
    t.integer "ensembl_version"
    t.text "allele_registry_id"
    t.boolean "flagged", default: false, null: false
    t.integer "single_variant_molecular_profile_id"
    t.boolean "deprecated", default: false, null: false
    t.integer "deprecation_reason"
    t.text "open_cravat_url_parameters"
    t.bigint "feature_id"
    t.string "type", null: false
    t.string "ncit_id"
    t.string "vicc_compliant_name"
    t.string "iscn_name"
    t.index "lower((name)::text) varchar_pattern_ops", name: "idx_case_insensitive_variant_name"
    t.index "lower((name)::text)", name: "variant_lower_name_idx"
    t.index ["feature_id"], name: "index_variants_on_feature_id"
    t.index ["iscn_name"], name: "index_variants_on_iscn_name"
    t.index ["name"], name: "index_variants_on_name"
    t.index ["single_variant_molecular_profile_id"], name: "index_variants_on_single_variant_molecular_profile_id"
    t.index ["vicc_compliant_name"], name: "index_variants_on_vicc_compliant_name"
  end

  create_table "view_last_updated_timestamps", force: :cascade do |t|
    t.text "view_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["view_name"], name: "index_view_last_updated_timestamps_on_view_name"
  end

  add_foreign_key "acmg_codes_assertions", "acmg_codes"
  add_foreign_key "acmg_codes_assertions", "assertions"
  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "activities", "organizations"
  add_foreign_key "activities", "users"
  add_foreign_key "assertions", "nccn_guidelines"
  add_foreign_key "assertions_clingen_codes", "assertions"
  add_foreign_key "assertions_clingen_codes", "clingen_codes"
  add_foreign_key "assertions_evidence_items", "assertions"
  add_foreign_key "assertions_evidence_items", "evidence_items"
  add_foreign_key "assertions_molecular_profiles", "assertions"
  add_foreign_key "assertions_molecular_profiles", "molecular_profiles"
  add_foreign_key "assertions_phenotypes", "assertions"
  add_foreign_key "assertions_phenotypes", "phenotypes"
  add_foreign_key "assertions_therapies", "assertions"
  add_foreign_key "assertions_therapies", "therapies"
  add_foreign_key "audits", "users"
  add_foreign_key "authorizations", "users"
  add_foreign_key "authors_sources", "authors"
  add_foreign_key "authors_sources", "sources"
  add_foreign_key "badge_claims", "badges"
  add_foreign_key "badge_claims", "users"
  add_foreign_key "clinvar_accessions", "assertions"
  add_foreign_key "clinvar_accessions", "organizations"
  add_foreign_key "clinvar_api_keys", "organizations"
  add_foreign_key "clinvar_batch_entries", "assertions"
  add_foreign_key "clinvar_batch_entries", "clinvar_batch_submissions"
  add_foreign_key "clinvar_batch_submissions", "clinvar_api_keys"
  add_foreign_key "clinvar_batch_submissions", "organizations"
  add_foreign_key "clinvar_submission_responses", "clinvar_batch_submissions"
  add_foreign_key "comments", "users"
  add_foreign_key "conflict_of_interest_statements", "users"
  add_foreign_key "cytogenetic_coordinates", "cytogenetic_regions"
  add_foreign_key "disease_aliases_diseases", "disease_aliases"
  add_foreign_key "disease_aliases_diseases", "diseases"
  add_foreign_key "domain_expert_tags", "users"
  add_foreign_key "edges", "nodes", column: "next_node_id"
  add_foreign_key "edges", "nodes", column: "previous_node_id"
  add_foreign_key "entity_mentions", "comments"
  add_foreign_key "events", "activities"
  add_foreign_key "events", "organizations"
  add_foreign_key "events", "users", column: "originating_user_id"
  add_foreign_key "evidence_items", "diseases"
  add_foreign_key "evidence_items", "sources"
  add_foreign_key "evidence_items_phenotypes", "evidence_items"
  add_foreign_key "evidence_items_phenotypes", "phenotypes"
  add_foreign_key "evidence_items_therapies", "evidence_items"
  add_foreign_key "evidence_items_therapies", "therapies"
  add_foreign_key "exon_coordinates", "variants"
  add_foreign_key "feature_aliases_features", "feature_aliases"
  add_foreign_key "feature_aliases_features", "features"
  add_foreign_key "features_sources", "features"
  add_foreign_key "features_sources", "sources"
  add_foreign_key "fusions", "genes", column: "five_prime_gene_id"
  add_foreign_key "fusions", "genes", column: "three_prime_gene_id"
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
  add_foreign_key "region_members", "cytogenetic_regions"
  add_foreign_key "region_members", "regions"
  add_foreign_key "regulatory_agencies", "countries"
  add_foreign_key "revisions", "revision_sets"
  add_foreign_key "role_mentions", "comments"
  add_foreign_key "solid_errors_occurrences", "solid_errors", column: "error_id"
  add_foreign_key "source_links", "sources"
  add_foreign_key "source_links", "sources", column: "linked_source_id"
  add_foreign_key "source_suggestions", "diseases"
  add_foreign_key "source_suggestions", "molecular_profiles"
  add_foreign_key "subscriptions", "users"
  add_foreign_key "suggested_changes", "users"
  add_foreign_key "user_mentions", "comments"
  add_foreign_key "user_mentions", "users"
  add_foreign_key "users", "organizations", column: "most_recent_organization_id"
  add_foreign_key "variant_aliases_variants", "variant_aliases"
  add_foreign_key "variant_aliases_variants", "variants"
  add_foreign_key "variant_coordinates", "variants"
  add_foreign_key "variant_group_variants", "variant_groups"
  add_foreign_key "variant_group_variants", "variants"
  add_foreign_key "variants", "features"
  add_foreign_key "variants", "molecular_profiles", column: "single_variant_molecular_profile_id"

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
  create_view "evidence_items_by_types", sql_definition: <<-SQL
      SELECT mp.id AS molecular_profile_id,
      sum(
          CASE
              WHEN (ei.evidence_type = 0) THEN 1
              ELSE 0
          END) AS diagnostic_count,
      sum(
          CASE
              WHEN (ei.evidence_type = 1) THEN 1
              ELSE 0
          END) AS prognostic_count,
      sum(
          CASE
              WHEN (ei.evidence_type = 2) THEN 1
              ELSE 0
          END) AS predictive_count,
      sum(
          CASE
              WHEN (ei.evidence_type = 3) THEN 1
              ELSE 0
          END) AS predisposing_count,
      sum(
          CASE
              WHEN (ei.evidence_type = 4) THEN 1
              ELSE 0
          END) AS functional_count,
      sum(
          CASE
              WHEN (ei.evidence_type = 5) THEN 1
              ELSE 0
          END) AS oncogenic_count
     FROM (molecular_profiles mp
       JOIN evidence_items ei ON (((mp.id = ei.molecular_profile_id) AND (ei.deleted = false) AND ((ei.status)::text <> 'rejected'::text))))
    GROUP BY mp.id;
  SQL
  create_view "variant_group_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT variant_groups.id,
      variant_groups.name,
      array_agg(DISTINCT variants.name) AS variant_names,
      array_agg(DISTINCT features.name) AS feature_names,
      count(DISTINCT variants.id) AS variant_count,
      count(DISTINCT evidence_items.id) AS evidence_item_count
     FROM ((((((variant_groups
       JOIN variant_group_variants ON ((variant_group_variants.variant_group_id = variant_groups.id)))
       JOIN variants ON ((variant_group_variants.variant_id = variants.id)))
       JOIN features ON ((variants.feature_id = features.id)))
       LEFT JOIN molecular_profiles_variants ON ((molecular_profiles_variants.variant_id = variants.id)))
       LEFT JOIN molecular_profiles ON ((molecular_profiles.id = molecular_profiles_variants.molecular_profile_id)))
       LEFT JOIN evidence_items ON ((evidence_items.molecular_profile_id = molecular_profiles.id)))
    WHERE ((evidence_items.status)::text <> 'rejected'::text)
    GROUP BY variant_groups.id, variant_groups.name;
  SQL
  add_index "variant_group_browse_table_rows", ["id"], name: "index_variant_group_browse_table_rows_on_id", unique: true

  create_view "source_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT sources.id,
      sources.source_type,
      sources.citation_id,
      array_agg(DISTINCT concat(authors.last_name, ', ', authors.fore_name)) FILTER (WHERE ((authors.fore_name <> ''::text) OR (authors.last_name <> ''::text))) AS authors,
      sources.publication_year,
      sources.asco_presenter,
      sources.journal,
      sources.title,
      sources.citation,
      sources.open_access,
      sources.retraction_nature,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      count(DISTINCT source_suggestions.id) AS source_suggestion_count
     FROM ((((sources
       LEFT JOIN authors_sources ON ((sources.id = authors_sources.source_id)))
       LEFT JOIN authors ON ((authors.id = authors_sources.author_id)))
       LEFT JOIN evidence_items ON ((evidence_items.source_id = sources.id)))
       LEFT JOIN source_suggestions ON ((source_suggestions.source_id = sources.id)))
    GROUP BY sources.id, sources.source_type, sources.publication_year, sources.journal, sources.title;
  SQL
  add_index "source_browse_table_rows", ["id"], name: "index_source_browse_table_rows_on_id", unique: true

  create_view "molecular_profile_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT outer_mps.id,
      outer_mps.name,
      outer_mps.deprecated,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      array_agg(DISTINCT molecular_profile_aliases.name ORDER BY molecular_profile_aliases.name) AS alias_names,
      json_agg(DISTINCT jsonb_build_object('name', features.name, 'id', features.id, 'deprecated', features.deprecated)) FILTER (WHERE (features.name IS NOT NULL)) AS features,
      json_agg(DISTINCT jsonb_build_object('name', variants.name, 'id', variants.id, 'deprecated', variants.deprecated, 'feature_id', variants.feature_id)) FILTER (WHERE (variants.name IS NOT NULL)) AS variants,
      json_agg(DISTINCT jsonb_build_object('name', diseases.name, 'id', diseases.id, 'deprecated', diseases.deprecated, 'total', disease_count.total)) FILTER (WHERE (diseases.name IS NOT NULL)) AS diseases,
      json_agg(DISTINCT jsonb_build_object('name', therapies.name, 'id', therapies.id, 'deprecated', therapies.deprecated, 'total', therapy_count.total)) FILTER (WHERE (therapies.name IS NOT NULL)) AS therapies,
      count(DISTINCT assertions.id) AS assertion_count,
      count(DISTINCT variants.id) AS variant_count,
      outer_mps.evidence_score
     FROM ((((((((((((molecular_profiles outer_mps
       LEFT JOIN evidence_items ON ((evidence_items.molecular_profile_id = outer_mps.id)))
       JOIN molecular_profiles_variants ON ((outer_mps.id = molecular_profiles_variants.molecular_profile_id)))
       JOIN variants ON ((molecular_profiles_variants.variant_id = variants.id)))
       JOIN features ON ((features.id = variants.feature_id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN evidence_items_therapies ON ((evidence_items_therapies.evidence_item_id = evidence_items.id)))
       LEFT JOIN therapies ON ((therapies.id = evidence_items_therapies.therapy_id)))
       LEFT JOIN assertions ON ((assertions.molecular_profile_id = outer_mps.id)))
       LEFT JOIN molecular_profile_aliases_molecular_profiles ON ((molecular_profile_aliases_molecular_profiles.molecular_profile_id = outer_mps.id)))
       LEFT JOIN molecular_profile_aliases ON ((molecular_profile_aliases.id = molecular_profile_aliases_molecular_profiles.molecular_profile_alias_id)))
       LEFT JOIN LATERAL ( SELECT therapies_1.id AS therapy_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM ((evidence_items evidence_items_1
               JOIN evidence_items_therapies evidence_items_therapies_1 ON ((evidence_items_therapies_1.evidence_item_id = evidence_items_1.id)))
               JOIN therapies therapies_1 ON ((therapies_1.id = evidence_items_therapies_1.therapy_id)))
            WHERE (evidence_items_1.molecular_profile_id = outer_mps.id)
            GROUP BY therapies_1.id) therapy_count ON ((therapies.id = therapy_count.therapy_id)))
       LEFT JOIN LATERAL ( SELECT diseases_1.id AS disease_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM (evidence_items evidence_items_1
               JOIN diseases diseases_1 ON ((diseases_1.id = evidence_items_1.disease_id)))
            WHERE (evidence_items_1.molecular_profile_id = outer_mps.id)
            GROUP BY diseases_1.id) disease_count ON ((diseases.id = disease_count.disease_id)))
    WHERE (outer_mps.deprecated = false)
    GROUP BY outer_mps.id, outer_mps.name, outer_mps.evidence_score;
  SQL
  add_index "molecular_profile_browse_table_rows", ["id"], name: "index_molecular_profile_browse_table_rows_on_id", unique: true

  create_view "variant_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT outer_variants.id,
      outer_variants.name,
      outer_variants.deprecated,
      outer_variants.type AS category,
      outer_variants.flagged,
      features.id AS feature_id,
      features.name AS feature_name,
      features.deprecated AS feature_deprecated,
      features.flagged AS feature_flagged,
      array_agg(DISTINCT variant_aliases.name ORDER BY variant_aliases.name) AS alias_names,
      array_agg(DISTINCT variant_types.id) AS variant_type_ids,
      json_agg(DISTINCT jsonb_build_object('name', variant_types.display_name, 'id', variant_types.id)) FILTER (WHERE (variant_types.* IS NOT NULL)) AS variant_types,
      count(DISTINCT variant_types.id) AS variant_type_count,
      count(DISTINCT evidence_items.id) FILTER (WHERE (evidence_items.id IS NOT NULL)) AS evidence_item_count,
      json_agg(DISTINCT jsonb_build_object('name', diseases.name, 'id', diseases.id, 'deprecated', diseases.deprecated, 'total', disease_count.total)) FILTER (WHERE (diseases.name IS NOT NULL)) AS diseases,
      json_agg(DISTINCT jsonb_build_object('name', therapies.name, 'id', therapies.id, 'deprecated', therapies.deprecated, 'total', therapy_count.total)) FILTER (WHERE (therapies.name IS NOT NULL)) AS therapies,
      count(DISTINCT assertions.id) AS assertion_count
     FROM ((((((((((((((variants outer_variants
       LEFT JOIN variant_aliases_variants ON ((variant_aliases_variants.variant_id = outer_variants.id)))
       LEFT JOIN variant_aliases ON ((variant_aliases.id = variant_aliases_variants.variant_alias_id)))
       JOIN molecular_profiles_variants ON ((molecular_profiles_variants.variant_id = outer_variants.id)))
       JOIN molecular_profiles ON ((molecular_profiles.id = molecular_profiles_variants.molecular_profile_id)))
       LEFT JOIN evidence_items ON ((evidence_items.molecular_profile_id = molecular_profiles.id)))
       JOIN features ON ((features.id = outer_variants.feature_id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN evidence_items_therapies ON ((evidence_items_therapies.evidence_item_id = evidence_items.id)))
       LEFT JOIN therapies ON ((therapies.id = evidence_items_therapies.therapy_id)))
       LEFT JOIN assertions ON ((assertions.molecular_profile_id = molecular_profiles.id)))
       LEFT JOIN variant_types_variants ON ((variant_types_variants.variant_id = outer_variants.id)))
       LEFT JOIN variant_types ON ((variant_types_variants.variant_type_id = variant_types.id)))
       LEFT JOIN LATERAL ( SELECT therapies_1.id AS therapy_id,
              count(DISTINCT evidence_items_1.id) FILTER (WHERE (evidence_items_1.id IS NOT NULL)) AS total
             FROM ((((evidence_items evidence_items_1
               LEFT JOIN evidence_items_therapies evidence_items_therapies_1 ON ((evidence_items_therapies_1.evidence_item_id = evidence_items_1.id)))
               LEFT JOIN therapies therapies_1 ON ((therapies_1.id = evidence_items_therapies_1.therapy_id)))
               LEFT JOIN molecular_profiles molecular_profiles_1 ON ((molecular_profiles_1.id = evidence_items_1.molecular_profile_id)))
               LEFT JOIN molecular_profiles_variants molecular_profiles_variants_1 ON ((molecular_profiles_variants_1.molecular_profile_id = molecular_profiles_1.id)))
            WHERE ((molecular_profiles_variants_1.variant_id = outer_variants.id) AND (evidence_items_1.id IS NOT NULL))
            GROUP BY therapies_1.id) therapy_count ON ((therapies.id = therapy_count.therapy_id)))
       LEFT JOIN LATERAL ( SELECT diseases_1.id AS disease_id,
              count(DISTINCT evidence_items_1.id) FILTER (WHERE (evidence_items_1.id IS NOT NULL)) AS total
             FROM (((evidence_items evidence_items_1
               LEFT JOIN diseases diseases_1 ON ((diseases_1.id = evidence_items_1.disease_id)))
               LEFT JOIN molecular_profiles molecular_profiles_1 ON ((molecular_profiles_1.id = evidence_items_1.molecular_profile_id)))
               LEFT JOIN molecular_profiles_variants molecular_profiles_variants_1 ON ((molecular_profiles_variants_1.molecular_profile_id = molecular_profiles_1.id)))
            WHERE ((molecular_profiles_variants_1.variant_id = outer_variants.id) AND (evidence_items_1.id IS NOT NULL))
            GROUP BY diseases_1.id) disease_count ON ((diseases.id = disease_count.disease_id)))
    WHERE ((((evidence_items.status)::text <> 'rejected'::text) OR (evidence_items.status IS NULL)) AND (outer_variants.deprecated = false))
    GROUP BY outer_variants.id, outer_variants.name, features.id, features.name;
  SQL
  add_index "variant_browse_table_rows", ["id"], name: "index_variant_browse_table_rows_on_id", unique: true

  create_view "organization_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT organizations.id,
      organizations.name,
      organizations.url,
      organizations.description,
      organizations.parent_id,
      organizations.created_at,
      organizations.updated_at,
      organizations.most_recent_activity_timestamp,
      count(DISTINCT activities.id) AS activity_count,
      count(DISTINCT affiliations.user_id) AS member_count,
      json_agg(DISTINCT jsonb_build_object('child_id', child.id, 'child_name', child.name)) FILTER (WHERE (child.id IS NOT NULL)) AS child_organizations
     FROM (((organizations
       LEFT JOIN activities ON ((activities.organization_id = organizations.id)))
       LEFT JOIN affiliations ON ((affiliations.organization_id = organizations.id)))
       LEFT JOIN organizations child ON ((child.parent_id = organizations.id)))
    GROUP BY organizations.id;
  SQL
  add_index "organization_browse_table_rows", ["id"], name: "index_organization_browse_table_rows_on_id", unique: true

  create_view "user_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT users.id,
      users.email,
      users.name,
      users.url,
      users.username,
      users.created_at,
      users.updated_at,
      users.orcid,
      users.area_of_expertise,
      users.deleted,
      users.deleted_at,
      users.role,
      users.last_seen_at,
      users.twitter_handle,
      users.facebook_profile,
      users.linkedin_profile,
      users.accepted_license,
      users.featured_expert,
      users.bio,
      users.signup_complete,
      users.country_id,
      users.most_recent_organization_id,
      users.most_recent_activity_timestamp,
      count(DISTINCT events.id) FILTER (WHERE (events.action = 'revision suggested'::text)) AS revision_count,
      count(DISTINCT events.id) FILTER (WHERE (events.action = 'submitted'::text)) AS evidence_count
     FROM (users
       LEFT JOIN events ON ((events.originating_user_id = users.id)))
    GROUP BY users.id;
  SQL
  add_index "user_browse_table_rows", ["id"], name: "index_user_browse_table_rows_on_id", unique: true

  create_view "feature_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT outer_features.id,
      outer_features.name,
      outer_features.flagged,
      outer_features.deprecated,
      outer_features.feature_instance_type,
      outer_features.feature_instance_id,
      outer_features.full_name,
      array_agg(DISTINCT feature_aliases.name ORDER BY feature_aliases.name) AS alias_names,
      json_agg(DISTINCT jsonb_build_object('name', diseases.name, 'id', diseases.id, 'deprecated', diseases.deprecated, 'total', disease_count.total)) FILTER (WHERE (diseases.name IS NOT NULL)) AS diseases,
      json_agg(DISTINCT jsonb_build_object('name', therapies.name, 'id', therapies.id, 'deprecated', therapies.deprecated, 'total', therapy_count.total)) FILTER (WHERE (therapies.name IS NOT NULL)) AS therapies,
      count(DISTINCT variants.id) AS variant_count,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      count(DISTINCT assertions.id) AS assertion_count,
      count(DISTINCT molecular_profiles.id) AS molecular_profile_count
     FROM ((((((((((((features outer_features
       LEFT JOIN feature_aliases_features ON ((feature_aliases_features.feature_id = outer_features.id)))
       LEFT JOIN feature_aliases ON ((feature_aliases.id = feature_aliases_features.feature_alias_id)))
       JOIN variants ON ((variants.feature_id = outer_features.id)))
       JOIN molecular_profiles_variants ON ((molecular_profiles_variants.variant_id = variants.id)))
       JOIN molecular_profiles ON ((molecular_profiles.id = molecular_profiles_variants.molecular_profile_id)))
       LEFT JOIN evidence_items ON ((evidence_items.molecular_profile_id = molecular_profiles.id)))
       LEFT JOIN diseases ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN evidence_items_therapies ON ((evidence_items_therapies.evidence_item_id = evidence_items.id)))
       LEFT JOIN therapies ON ((therapies.id = evidence_items_therapies.therapy_id)))
       LEFT JOIN assertions ON ((assertions.molecular_profile_id = molecular_profiles.id)))
       LEFT JOIN LATERAL ( SELECT therapies_1.id AS therapy_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM (((((evidence_items evidence_items_1
               LEFT JOIN molecular_profiles molecular_profiles_1 ON ((molecular_profiles_1.id = evidence_items_1.molecular_profile_id)))
               LEFT JOIN molecular_profiles_variants molecular_profiles_variants_1 ON ((molecular_profiles_variants_1.molecular_profile_id = molecular_profiles_1.id)))
               LEFT JOIN variants variants_1 ON ((variants_1.id = molecular_profiles_variants_1.variant_id)))
               LEFT JOIN evidence_items_therapies evidence_items_therapies_1 ON ((evidence_items_therapies_1.evidence_item_id = evidence_items_1.id)))
               LEFT JOIN therapies therapies_1 ON ((therapies_1.id = evidence_items_therapies_1.therapy_id)))
            WHERE ((variants_1.feature_id = outer_features.id) AND (molecular_profiles_1.id IS NOT NULL))
            GROUP BY therapies_1.id) therapy_count ON ((therapies.id = therapy_count.therapy_id)))
       LEFT JOIN LATERAL ( SELECT diseases_1.id AS disease_id,
              count(DISTINCT evidence_items_1.id) AS total
             FROM ((((evidence_items evidence_items_1
               LEFT JOIN molecular_profiles molecular_profiles_1 ON ((molecular_profiles_1.id = evidence_items_1.molecular_profile_id)))
               LEFT JOIN molecular_profiles_variants molecular_profiles_variants_1 ON ((molecular_profiles_variants_1.molecular_profile_id = molecular_profiles_1.id)))
               LEFT JOIN variants variants_1 ON ((variants_1.id = molecular_profiles_variants_1.variant_id)))
               LEFT JOIN diseases diseases_1 ON ((diseases_1.id = evidence_items_1.disease_id)))
            WHERE ((variants_1.feature_id = outer_features.id) AND (molecular_profiles_1.id IS NOT NULL))
            GROUP BY diseases_1.id) disease_count ON ((diseases.id = disease_count.disease_id)))
    WHERE (((evidence_items.status)::text <> 'rejected'::text) OR ((evidence_items.status IS NULL) AND (molecular_profiles.deprecated = false) AND (variants.deprecated = false)))
    GROUP BY outer_features.id, outer_features.name;
  SQL
  add_index "feature_browse_table_rows", ["id"], name: "index_feature_browse_table_rows_on_id", unique: true

  create_view "disease_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT diseases.id,
      diseases.name,
      diseases.display_name,
      diseases.doid,
      diseases.deprecated,
      array_agg(DISTINCT disease_aliases.name ORDER BY disease_aliases.name) AS alias_names,
      json_agg(DISTINCT jsonb_build_object('name', features.name, 'id', features.id)) FILTER (WHERE (features.name IS NOT NULL)) AS features,
      count(DISTINCT evidence_items.id) AS evidence_item_count,
      count(DISTINCT variants.id) AS variant_count,
      count(DISTINCT assertions.id) AS assertion_count,
      count(DISTINCT features.id) AS feature_count
     FROM (((((((((diseases
       JOIN evidence_items ON ((diseases.id = evidence_items.disease_id)))
       LEFT JOIN assertions_evidence_items ON ((assertions_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN assertions ON ((assertions_evidence_items.assertion_id = assertions.id)))
       LEFT JOIN disease_aliases_diseases ON ((disease_aliases_diseases.disease_id = diseases.id)))
       LEFT JOIN disease_aliases ON ((disease_aliases.id = disease_aliases_diseases.disease_alias_id)))
       JOIN molecular_profiles ON ((molecular_profiles.id = evidence_items.molecular_profile_id)))
       JOIN molecular_profiles_variants ON ((molecular_profiles_variants.molecular_profile_id = molecular_profiles.id)))
       JOIN variants ON ((variants.id = molecular_profiles_variants.variant_id)))
       JOIN features ON ((features.id = variants.feature_id)))
    WHERE (((evidence_items.status)::text <> 'rejected'::text) AND (diseases.deprecated = false))
    GROUP BY diseases.id, diseases.name, diseases.doid;
  SQL
  add_index "disease_browse_table_rows", ["id"], name: "index_disease_browse_table_rows_on_id", unique: true

  create_view "therapy_browse_table_rows", materialized: true, sql_definition: <<-SQL
      SELECT therapies.id,
      therapies.name,
      therapies.deprecated,
      therapies.ncit_id,
      count(DISTINCT assertions.id) AS assertion_count,
      count(DISTINCT evidence_items.id) AS evidence_count,
      array_agg(DISTINCT therapy_aliases.name ORDER BY therapy_aliases.name) AS alias_names
     FROM ((((((therapies
       JOIN evidence_items_therapies ON ((evidence_items_therapies.therapy_id = therapies.id)))
       JOIN evidence_items ON ((evidence_items_therapies.evidence_item_id = evidence_items.id)))
       LEFT JOIN assertions_evidence_items ON ((assertions_evidence_items.evidence_item_id = evidence_items.id)))
       LEFT JOIN assertions ON ((assertions_evidence_items.assertion_id = assertions.id)))
       LEFT JOIN therapies_therapy_aliases ON ((therapies_therapy_aliases.therapy_id = therapies.id)))
       LEFT JOIN therapy_aliases ON ((therapy_aliases.id = therapies_therapy_aliases.therapy_alias_id)))
    WHERE ((((evidence_items.status)::text <> 'rejected'::text) OR (assertions.status <> 'rejected'::text)) AND (therapies.deprecated = false))
    GROUP BY therapies.id, therapies.name, therapies.deprecated, therapies.ncit_id
   HAVING ((count(evidence_items.id) > 0) OR (count(assertions.id) > 0))
    ORDER BY (count(DISTINCT evidence_items.id)) DESC, therapies.id;
  SQL
  add_index "therapy_browse_table_rows", ["id"], name: "index_therapy_browse_table_rows_on_id", unique: true

end
