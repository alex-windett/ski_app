class Marker < ActiveRecord::Base
  attr_accessible :point_created_at, :elevation, :latitude, :longitude, :run_id, :description

  belongs_to :segment
end
