class Gene < ActiveRecord::Base
  include Moderated
  include Commentable

  has_many :variants
  has_many :assertions
  has_and_belongs_to_many :sources
  has_and_belongs_to_many :gene_aliases

  #i think we can ditch the whole state params thing in v2?
  def state_params
    {
      gene: {
        id: self.id,
        name: self.name
      }
    }
  end
end
