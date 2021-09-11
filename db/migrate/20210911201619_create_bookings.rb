class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.date :check_in, null: false
      t.date :check_out, null: false 
      t.integer :renter_id, null: false 
      t.integer :listing_id, null: false
      t.timestamps
    end
    add_index :bookings, :renter_id
  end
end
