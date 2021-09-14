class RemoveBookingfromReview < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :booking_id, :integer
  end
end
