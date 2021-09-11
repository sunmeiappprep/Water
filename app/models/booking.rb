class Booking < ApplicationRecord

    validates :check_in, :check_out, :renter_id, :listing_id, presence: true

    belongs_to :renter,
      primary_key: :id,
      foreign_key: :renter_id,
      class_name: :User

    belongs_to :listing,
      primary_key: :id,
      foreign_key: :listing_id,
      class_name: :Listing


end
