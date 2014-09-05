class Marker < ActiveRecord::Base
  attr_accessible :datetime, :elevation, :latitude, :longitude, :run_id

  belongs_to :segments
end
