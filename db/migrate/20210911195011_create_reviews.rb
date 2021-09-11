class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :description, null:false
      t.integer :rating, null: false
      t.integer :reviewer_id, null: false
      t.integer :listing_id, null: false
      t.integer :booking_id, null: false
      t.timestamps
    end
    add_index :reviews, :listing_id
  end
end
