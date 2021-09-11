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
require "test_helper"

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
