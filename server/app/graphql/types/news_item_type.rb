module Types
  class NewsItemType < Types::BaseObject
    field :id, Int, null: false
    field :title, String, null: false
    field :published_at, GraphQL::Types::ISO8601DateTime, null: true
    field :content_html, String

    def content_html
      # This feels a little hacky, but it allows us to render the
      # rich text as HTML inside this otherwise JSON/GraphQL context
      if object&.content&.body
         renderer = ApplicationController.new()
         renderer.request = context[:request]
         renderer.view_context.render(object.content.body)
      else
        ""
      end
    end
  end
end
