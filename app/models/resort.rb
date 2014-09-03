class Resort < ActiveRecord::Base
  attr_accessible :country_id, :description, :image, :name

  belongs_to :country
  has_many :runs
end
