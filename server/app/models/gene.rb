class Gene < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Commentable

  has_many :variants
  has_many :assertions
  has_and_belongs_to_many :sources
  has_and_belongs_to_many :gene_aliases

  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object
end
