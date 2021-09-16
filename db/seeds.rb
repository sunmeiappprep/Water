# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'

# User.delete_all
# Listing.destroy_all
# Review.destroy_all
# Booking.destroy_all

# demo1 = User.create!(email: 'Jane@gmail.com', first_name: 'Jane', last_name: 'Doe', username: 'asd', password: 'asdasd')
# demo2 = User.create!(email: 'John@gmail.com', first_name: 'John', last_name: 'Doe', username: 'qwe', password: 'qweqwe')
# demo3 = User.create!(email: 'Sun@gmail.com', first_name: 'Sun', last_name: 'Mei', username: 'Sun', password: 'qweqwe')

# listing1 = Listing.create!(
#     title: "Bright and Spacious 1-Bedroom with Full Kitchen!",
#     price: 61,
#     address: "8451 ave",
#     city: "Honolulu",
#     num_guest: 3,
#     description: "Entire rental unit hosted by Ian",
#     num_beds: 1,    
#     latitude: 21.304269656397935,
#     longitude: -158.0455535752059,
#     host_id: demo1.id,
# )


# listing2 = Listing.create!(
#     title: "Luxury Bi-Level in Heart of Center City",
#     price: 85,
#     address: "8451 ave",
#     city: "Phuket",
#     num_guest: 2,
#     description: "Entire rental unit hosted by Patrick",
#     num_beds: 1,   
#     latitude: 7.861337697551124,
#     longitude:  98.40059249307171,
#     host_id: demo1.id,
# )



# listing3 = Listing.create!(
#     title: "Beautiful private room 20min to Times Square NYC",
#     price: 200,
#     address: "8451 ave",
#     city: "Miami",
#     num_guest: 2,
#     description: "Private room in residential home hosted by Julian Camilo",
#     num_beds: 1, 
#     latitude: 25.783981315764517,
#     longitude: -80.12781938977339,
#     host_id: demo1.id,
# )



# listing4 = Listing.create!(
#     title: "Four Sails - X-tra Large Oceanfront Balcony!",
#     price: 450,
#     address: "8451 ave",
#     city: "Miami",
#     num_guest: 2,
#     description: "Entire condominium (condo) hosted by Bruce",
#     num_beds: 1, 
#     latitude: 250.783981315764517,
#     longitude: 89.12781938977339,
#     host_id: demo2.id,
# )


# listing5 = Listing.create!(
#     title: "Beach Quarters - Oceanfront Unit on the Boardwalk",
#     price: 201,
#     address: "8451 ave",
#     city: "Miami",
#     num_guest: 2,
#     description: "Entire condominium (condo) hosted by Ryan",
#     num_beds: 1, 
#     latitude: 25.783981315764517,
#     longitude: -800.12781938977339,
#     host_id: demo3.id,
# )


# listing6 = Listing.create!(
#     title: "We have it all",
#     price: 321,
#     address: "8451 ave",
#     city: "Miami",
#     num_guest: 2,
#     description: "Entire rental unit hosted by Len",
#     num_beds: 1, 
#     latitude: 40.783981315764517,
#     longitude: -80.12781938977339,
#     host_id: demo2.id,
# )





# file1 = URI.open('app/assets/images/listing1.jpg')
# file2 = URI.open('app/assets/images/listing23.jpeg')
# file3 = URI.open('app/assets/images/listing3.jpg')
# file4 = URI.open('app/assets/images/listing4.jpg')
# file5 = URI.open('app/assets/images/listing5.jpeg')
# file6 = URI.open('app/assets/images/listing6.jpeg')
# # file7 = URI.open('app/assets/images/listing7')
# # file8 = URI.open('app/assets/images/listing8')
# # file9 = URI.open('app/assets/images/listing9')
# # file10 = URI.open('app/assets/images/listing10')


# listing1.photo.attach(io: file1, filename: 'listing1')
# listing2.photo.attach(io: file2, filename: 'listing2')
# listing3.photo.attach(io: file3, filename: 'listing3')
# listing4.photo.attach(io: file4, filename: 'listing4')
# listing5.photo.attach(io: file5, filename: 'listing5')
# listing6.photo.attach(io: file6, filename: 'listing6')

# review1 = Review.create!(
#     description:"Review1",
#     rating:5 ,
#     reviewer_id: demo1.id, 
#     listing_id: listing1.id)

# review2 = Review.create!(
#     description:"Review2",
#     rating:5 ,
#     reviewer_id: demo2.id, 
#     listing_id: listing2.id)

# review3 = Review.create!(
# description:"Review1",
# rating:5 ,
# reviewer_id: demo1.id, 
# listing_id: listing3.id)


# booking1 = Booking.create!(
#     check_in: "01/02/2018",
#     check_out:"01/02/2019",
#     renter_id: demo1.id, 
#     listing_id: listing1.id)

# booking2 = Booking.create!(
#     check_in:'02/02/2018',
#     check_out:'02/02/2019',
#     renter_id: demo2.id, 
#     listing_id: listing2.id)

# booking3 = Booking.create!(
#     check_in:'03/12/2020',
#     check_out:'03/10/2021',
#     renter_id: demo3.id, 
#     listing_id: listing3.id)  

# booking3 = Booking.create!(
#     check_in:'03/12/2020',
#     check_out:'03/10/2021',
#     renter_id: demo3.id, 
#     listing_id: listing3.id)  



# booking4 = Booking.create!(
#     check_in:'03/12/2020',
#     check_out:'03/10/2021',
#     renter_id: demo2.id, 
#     listing_id: listing2.id)  

        
        
# booking5 = Booking.create!(
#     check_in:'03/4/2020',
#     check_out:'03/4/2021',
#     renter_id: demo3.id, 
#     listing_id: listing3.id)  



# booking6 = Booking.create!(
#     check_in:'03/5/2020',
#     check_out:'03/5/2021',
#     renter_id: demo3.id, 
#     listing_id: listing3.id)  

# booking7 = Booking.create!(
#     check_in:'03/6/2020',
#     check_out:'03/6/2021',
#     renter_id: demo3.id, 
#     listing_id: listing3.id)  
        
    