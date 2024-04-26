module Types
  class LinkableTag < Types::BaseObject
    field :id, Int, null: false
    field :link, String, null: false
    field :name, String, null: false
    field :deprecated, Boolean, null: false
  end

  class LinkableDisease < LinkableTag
  end

  class LinkableTherapy < LinkableTag
  end

  class LinkableFeature < LinkableTag
  end

  class LinkableVariant < LinkableTag
    field :match_text, String, null: true
    field :feature, LinkableFeature, null: true
  end
end
