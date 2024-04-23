require "test_helper"

class LinksControllerTest < ActionDispatch::IntegrationTest
  test "it should 404 rather than redirect when the entity isn't found" do
    get "/links/features/999999"
    assert_response :not_found
  end

  test 'it should 400 bad request when its an invalid link type' do
    get '/links/footures/9999'
    assert_response :bad_request
  end

  test 'gene, feature, factor permalinks work' do
    feature = features.first
    feature_path = "/features/#{feature.id}"
    check_redirect "/links/features/#{feature.id}", feature_path
    check_redirect "/links/id/FID#{feature.id}", feature_path

    gene = feature_genes.first
    gene_path = "/features/#{gene.feature.id}"
    check_redirect "/links/genes/#{gene.id}", gene_path
    check_redirect "/links/id/GID#{gene.id}", gene_path
    check_redirect "/links/entrez_id/#{gene.entrez_id}", gene_path
    check_redirect "/links/entrez_name/#{gene.name}", gene_path
  end

  test 'variant links work' do
    variant = variants(:v600e)
    variant_path = "/variants/#{variant.id}"

    check_redirect "/links/id/VID#{variant.id}", variant_path
    check_redirect "/links/allele_registry/#{variant.allele_registry_id}", variant_path
    check_redirect "/links/variants/#{variant.id}", variant_path
  end

  test 'redirect legacy frontend gene route to corresponding feature' do
    gene = feature_genes.first
    check_redirect "/genes/#{gene.id}", "/features/#{gene.feature.id}"
  end

  def check_redirect(input_path, output_path)
    get input_path
    assert_response :redirect
    redirect_url = URI.parse(@response['Location']).path
    assert_equal output_path, redirect_url
  end
end
