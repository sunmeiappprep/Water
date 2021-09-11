# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  check_in   :date             not null
#  check_out  :date             not null
#  renter_id  :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
