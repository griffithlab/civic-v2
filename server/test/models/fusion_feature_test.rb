require "test_helper"

class FusionFeatureTest < ActiveSupport::TestCase
  setup do
    feature = features(:braf_fusion)
    @braf_vhl_fusion = feature_fusions(:braf_vhl_fusion)
    @braf_vhl_fusion.feature = feature
    @braf_fusion = feature_fusions(:braf_fusion)
    @braf_fusion.feature = feature
    @vhl_fusion = feature_fusions(:vhl_fusion)
    @vhl_fusion.feature = feature
    @regulatory_fusion = feature_fusions(:regulatory_fusion)
    @regulatory_fusion.feature = feature
  end

  test "valid fusion with both genes set and known partner status" do
    assert @braf_vhl_fusion.valid?
  end

  test "invalid fusion with one gene set and known partner status" do
    @braf_fusion.three_prime_partner_status = 'known'
    assert_not @braf_fusion.valid?
    assert_includes @braf_fusion.errors[:three_prime_gene], "Partner status cannot be 'known' or 'regulatory' if the gene isn't set"
  end

  test "invalid fusion with both genes unset" do
    @braf_fusion.five_prime_gene = nil
    assert_not @braf_fusion.valid?
    assert_includes @braf_fusion.errors[:base], "One or both of the genes need to be set"
  end

  test "invalid fusion with both partners marked as regulatory" do
    @regulatory_fusion.three_prime_partner_status = 'regulatory'
    assert_not @regulatory_fusion.valid?
    assert_includes @regulatory_fusion.errors[:base], "Only one fusion partner may be marked as regulatory"
  end

  test "invalid fusion with regulatory partner but no regulatory fusion type" do
    @regulatory_fusion.regulatory_fusion_type = nil
    assert_not @regulatory_fusion.valid?
    assert_includes @regulatory_fusion.errors[:regulatory_fusion_type], "You must select a regulatory fusion type if one of the fusion partners is marked as regulatory"
  end

  test "valid fusion with regulatory partner and regulatory fusion type" do
    assert @regulatory_fusion.valid?
  end
end
