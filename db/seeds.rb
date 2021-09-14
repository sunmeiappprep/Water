# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Listing.destroy_all
Review.destroy_all

demo1 = User.create!(email: 'Jane@gmail.com', first_name: 'Jane', last_name: 'Doe', username: 'asd', password: 'asdasd')
demo2 = User.create!(email: 'John@gmail.com', first_name: 'John', last_name: 'Doe', username: 'qwe', password: 'qweqwe')
demo3 = User.create!(email: 'Sun@gmail.com', first_name: 'Sun', last_name: 'Mei', username: 'Sun', password: 'qweqwe')

listing1 = Listing.create!(
    title: "Bright and Spacious 1-Bedroom with Full Kitchen!",
    price: 61,
    address: "8451 ave",
    city: "Brooklyn",
    num_guest: 3,
    description: "Entire rental unit hosted by Ian",
    num_beds: 1,
    latitude: 40.830610,
    longitude: -73.935242,
    host_id: demo1.id,
)

listing2 = Listing.create!(
    title: "Luxury Bi-Level in Heart of Center City",
    price: 85,
    address: "8451 ave",
    city: "Queens",
    num_guest: 2,
    description: "Entire rental unit hosted by Patrick",
    num_beds: 1,
    latitude: 402.830610,
    longitude: -73.935242,
    host_id: demo1.id,
)



listing3 = Listing.create!(
    title: "Beautiful private room 20min to Times Square NYC",
    price: 200,
    address: "8451 ave",
    city: "Queens",
    num_guest: 2,
    description: "Private room in residential home hosted by Julian Camilo",
    num_beds: 1,
    latitude: 402.830610,
    longitude: -73.935242,
    host_id: demo1.id,
)
review1 = Review.create!(description:"Review1", rating:5 , reviewer_id: 1, listing_id: 1)

list2 = open("app/assets/images/listing2.jpg")
listing2.photo.attach(io: list2, filename: 'listing2.jpg')