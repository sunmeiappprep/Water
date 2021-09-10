# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :text             not null
#  price       :integer          not null
#  address     :text             not null
#  city        :text             not null
#  description :text             not null
#  num_guest   :integer          not null
#  num_beds    :integer          not null
#  longitude   :float            not null
#  latitude    :float            not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
