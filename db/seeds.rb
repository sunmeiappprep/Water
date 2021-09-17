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
Booking.destroy_all

demo1 = User.create!(email: 'Jane@gmail.com', first_name: 'Jane', last_name: 'Doe', username: 'asd', password: 'asdasd')
demo2 = User.create!(email: 'John@gmail.com', first_name: 'John', last_name: 'Doe', username: 'qwe', password: 'qweqwe')
demo3 = User.create!(email: 'Sun@gmail.com', first_name: 'Sun', last_name: 'Mei', username: 'Sun', password: 'qweqwe')

listing1 = Listing.create!(
    title: "Bright and Spacious 1-Bedroom with Full Kitchen!",
    price: 61,
    address: "8451 ave",
    city: "Honolulu",
    num_guest: 3,
    description: "Entire rental unit hosted by Ian",
    num_beds: 1,    
    latitude: 21.304269656397935,
    longitude: -158.0455535752059,
    host_id: demo1.id,
)


listing2 = Listing.create!(
    title: "Luxury Bi-Level in Heart of Center City",
    price: 85,
    address: "8451 ave",
    city: "Phuket",
    num_guest: 2,
    description: "Entire rental unit hosted by Patrick",
    num_beds: 1,   
    latitude: 7.861337697551124,
    longitude:  98.40059249307171,
    host_id: demo1.id,
)



listing3 = Listing.create!(
    title: "Beautiful private room 20min to Times Square NYC",
    price: 200,
    address: "8451 ave",
    city: "Virginia Beach",
    num_guest: 2,
    description: "Private room in residential home hosted by Julian Camilo",
    num_beds: 1, 
    latitude: 25.783981315764517,
    longitude: -80.12781938977339,
    host_id: demo1.id,
)



listing4 = Listing.create!(
    title: "Four Sails - X-tra Large Oceanfront Balcony!",
    price: 450,
    address: "8451 ave",
    city: "North Bergen",
    num_guest: 2,
    description: "Entire condominium (condo) hosted by Bruce",
    num_beds: 1, 
    latitude: 25.783981315794517,
    longitude: 89.12781938977339,
    host_id: demo2.id,
)


listing5 = Listing.create!(
    title: "Beach Quarters - Oceanfront Unit on the Boardwalk",
    price: 201,
    address: "8451 ave",
    city: "Miami",
    num_guest: 2,
    description: "Entire condominium (condo) hosted by Ryan",
    num_beds: 1, 
    latitude: 25.783981315764517,
    longitude: -800.12781938977339,
    host_id: demo3.id,
)


listing6 = Listing.create!(
    title: "We have it all",
    price: 321,
    address: "8451 ave",
    city: "Miami",
    num_guest: 2,
    description: "Entire rental unit hosted by Len",
    num_beds: 1, 
    latitude: 40.783981315764517,
    longitude: -80.12781938977339,
    host_id: demo2.id,
)

listing6 = Listing.create!(
    title: "Easy 3 min walk to the beach from Lagoon Studio 2",
    price: 321,
    address: "8451 ave",
    city: "Renaissance Island",
    num_guest: 2,
    description: "Entire place hosted by Sharon",
    num_beds: 1, 
    latitude: 40.783981315764517,
    longitude: -80.12781938977339,
    host_id: demo2.id,
)

listing7 = Listing.create!(
    title: "Elegant & Bright | 2 BDR | 4",
    price: 381,
    address: "8451 ave",
    city: "Renaissance Island",
    num_guest: 2,
    description: "Entire rental unit hosted by Genoveva G",
    num_beds: 1, 
    latitude: 12.51017275673494,
    longitude:  -70.02705444842414,
    host_id: demo2.id,
)


listing8 = Listing.create!(
    title: "MODERN GETAWAY DREAM VACATION IN A BEAUTIFUL CONDO",
    price: 321,
    address: "8451 ave",
    city: "Renaissance Island",
    num_guest: 2,
    description: "Entire condominium (condo) hosted by Marina",
    num_beds: 1, 
    latitude: 12.516783434784026,
    longitude: -70.03418553451282,
    host_id: demo2.id,
)

listing9 = Listing.create!(
    title: "Newly renovated 1 bed. 5 min walk to beach & shops",
    price: 123,
    address: "8451 ave",
    city: "Renaissance Island",
    num_guest: 2,
    description: "Entire rental unit hosted by Lionel And Vanessa",
    num_beds: 1, 
    latitude: 12.526522495083244, 
    longitude: -70.04802165938288,
    host_id: demo2.id,
)

listing10 = Listing.create!(
    title: "Vistalmar King Suite with Ocean View Balcony",
    price: 123,
    address: "8451 ave",
    city: "Renaissance Island",
    num_guest: 2,
    description: "Room in aparthotel hosted by Esther",
    num_beds: 1, 
    latitude: 12.47912581657533,
    longitude:  -69.98422964261388, 
    host_id: demo2.id,
)





file1 = URI.open('https://water-seeds.s3.amazonaws.com/listing1.jpg')
file2 = URI.open('https://water-seeds.s3.amazonaws.com/listing23.jpeg')
file3 = URI.open('https://water-seeds.s3.amazonaws.com/listing3.jpg')
file4 = URI.open('https://water-seeds.s3.amazonaws.com/listing4.jpg')
file5 = URI.open('https://water-seeds.s3.amazonaws.com/listing5.jpeg')
file6 = URI.open('https://water-seeds.s3.amazonaws.com/listing6.jpeg')
file7 = URI.open('https://water-seeds.s3.amazonaws.com/listing7.jpg')
file8 = URI.open('https://water-seeds.s3.amazonaws.com/listing8.jpg')
file9 = URI.open('https://water-seeds.s3.amazonaws.com/listing9.jpg')
file10 = URI.open('https://water-seeds.s3.amazonaws.com/listing10.jpeg')


listing1.photo.attach(io: file1, filename: 'listing1')
listing2.photo.attach(io: file2, filename: 'listing2')
listing3.photo.attach(io: file3, filename: 'listing3')
listing4.photo.attach(io: file4, filename: 'listing4')
listing5.photo.attach(io: file5, filename: 'listing5')
listing6.photo.attach(io: file6, filename: 'listing6')
listing7.photo.attach(io: file7, filename: 'listing7')
listing8.photo.attach(io: file8, filename: 'listing8')
listing9.photo.attach(io: file9, filename: 'listing9')
listing10.photo.attach(io: file10, filename: 'listing10')


review1 = Review.create!(
    description:"Review1",
    rating:5 ,
    reviewer_id: demo1.id, 
    listing_id: listing1.id)

review2 = Review.create!(
    description:"Review2",
    rating:5 ,
    reviewer_id: demo2.id, 
    listing_id: listing2.id)

review3 = Review.create!(
description:"Review1",
rating:5 ,
reviewer_id: demo1.id, 
listing_id: listing3.id)


booking1 = Booking.create!(
    check_in: "01/02/2018",
    check_out:"01/02/2019",
    renter_id: demo1.id, 
    listing_id: listing1.id)

booking2 = Booking.create!(
    check_in:'02/02/2018',
    check_out:'02/02/2019',
    renter_id: demo2.id, 
    listing_id: listing2.id)

booking3 = Booking.create!(
    check_in:'03/12/2020',
    check_out:'03/10/2021',
    renter_id: demo3.id, 
    listing_id: listing3.id)  

booking4 = Booking.create!(
    check_in:'04/04/2020',
    check_out:'04/04/2021',
    renter_id: demo3.id, 
    listing_id: listing4.id)  



booking5 = Booking.create!(
    check_in:'03/05/2020',
    check_out:'03/05/2021',
    renter_id: demo2.id, 
    listing_id: listing5.id)  

        
        
booking6 = Booking.create!(
    check_in:'03/06/2020',
    check_out:'03/06/2021',
    renter_id: demo3.id, 
    listing_id: listing6.id)  



booking7 = Booking.create!(
    check_in:'07/7/2020',
    check_out:'07/7/2021',
    renter_id: demo3.id, 
    listing_id: listing7.id)  

booking8 = Booking.create!(
    check_in:'03/8/2020',
    check_out:'03/8/2021',
    renter_id: demo3.id, 
    listing_id: listing8.id)  
        
    