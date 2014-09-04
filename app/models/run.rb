class Run < ActiveRecord::Base
  attr_accessible :description, :name, :image, :rating, :resort_id, :video

  belongs_to :resort
  belongs_to :user
  has_many :markers
  has_many :comments

  mount_uploader :image, RunImageUploader
end
