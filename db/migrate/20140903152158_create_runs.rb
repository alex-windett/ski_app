class CreateRuns < ActiveRecord::Migration
  def change
    create_table :runs do |t|
      t.string :name
      t.text :description
      t.text :picture
      t.text :video
      t.integer :resort_id
      t.float :rating

      t.timestamps
    end
  end
end
