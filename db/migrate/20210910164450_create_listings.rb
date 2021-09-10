class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.text :title, null: false
      t.integer :price, null: false
      t.text :address, null: false
      t.text :city, null: false
      t.text :description, null: false
      t.integer :num_guest, null: false       
      t.integer :num_beds, null: false
      t.float :longitude, null: false 
      t.float :latitude, null: false
      t.integer :host_id, null: false
      t.timestamps      
    end
    add_index :listings, :host_id
  end
end
