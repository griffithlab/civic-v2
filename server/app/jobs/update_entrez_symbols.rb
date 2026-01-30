class UpdateEntrezSymbols < EntrezJob
  def execute
    importer = Importer::EntrezSymbols.new(entrez_file)
    importer.import
  end
end
