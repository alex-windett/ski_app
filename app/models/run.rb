class Run < ActiveRecord::Base
  attr_accessible :description, :name, :picture, :rating, :resort_id, :video

  belongs_to :resort
  belongs_to :user
  has_many :markers
  has_many :comments
end
