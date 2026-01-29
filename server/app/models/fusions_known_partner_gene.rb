class FusionsKnownPartnerGene < ApplicationRecord
  belongs_to :gene, class_name: "Features::Gene"
  belongs_to :fusion, class_name: "Features::Fusion"
end
