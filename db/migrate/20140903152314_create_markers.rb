class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.decimal :latitude
      t.decimal :longitude
      t.decimal :elevation
      t.datetime :datetime
      t.integer :run_id

      t.timestamps
    end
  end
end
