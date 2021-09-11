# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  rating      :integer          not null
#  reviewer_id :integer          not null
#  listing_id  :integer          not null
#  booking_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
