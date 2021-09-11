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
class Review < ApplicationRecord
    validates :body, :rating, :reviewer_id, :listing_id, presence: true
    validates :rating, inclusion: { in: (1..5) }


    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :reviewer_id,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :User 
    
end
