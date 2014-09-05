class Segment < ActiveRecord::Base
  
  # attr_accessible :title, :body
  belongs_to :run
  has_many :markers, :dependent => :destroy

end
