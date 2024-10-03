module Types::BrowseTables
  class BrowseUserType < Types::Entities::UserType
    connection_type_class(Types::Connections::BrowseTableConnection)

    @@area_mapping = User.area_of_expertises.invert

    field :revision_count, Int, null: false
    field :evidence_count, Int, null: false

    def area_of_expertise
      @@area_mapping[object.area_of_expertise]
    end

    def organizations
      Loaders::AssociationLoader.for(MaterializedViews::UserBrowseTableRow, :affiliations).load(object).then do |affil|
        affil.map do |a|
          Loaders::AssociationLoader.for(Affiliation, :organization).load(a)
        end
      end
    end
  end
end
