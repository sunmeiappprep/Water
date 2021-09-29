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
class Listing < ApplicationRecord
    validates :title, :price,:address, :city,:description, :num_guest, :num_beds, :longitude, :latitude, :host_id, presence: true

    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

    has_many :reviews,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Review

    has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Booking

    has_one_attached :photo
    
    def self.search(searchparams)

        arr = []
        listings = Listing.all
        listings.each do |listing|
            if listing.city.downcase === searchparams.downcase
                arr.push(listing)
            end
        end
        return arr
    end
    

    def self.reviews(listing_id)
        arr = []
    
        reviews = Review.all 
        reviews.each do |review|
            if review.listing_id == listing_id.to_i
                arr.push(review)
            end
            
        end
        return arr
     
      end
end
