# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Listing.destroy_all

demo1 = User.create!(email: 'Jane@gmail.com', first_name: 'Jane', last_name: 'Doe', username: 'asd', password: 'asdasd')
demo2 = User.create!(email: 'John@gmail.com', first_name: 'John', last_name: 'Doe', username: 'qwe', password: 'qweqwe')
demo3 = User.create!(email: 'Sun@gmail.com', first_name: 'Sun', last_name: 'Mei', username: 'Sun', password: 'qweqwe')

listing1 = Listing.create!(
    title: "House 1",
    price: 100,
    address: "8451 ave",
    city: "Brooklyn",
    num_guest: 5,
    description: "firstlisting",
    num_beds: 3,
    latitude: 40.830610,
    longitude: -73.935242,
    host_id: demo1.id,
)

listing2 = Listing.create!(
    title: "My house 2",
    price: 200,
    address: "8451 ave",
    city: "Queens",
    num_guest: 25,
    description: "firstlisting",
    num_beds: 3,
    latitude: 402.830610,
    longitude: -73.935242,
    host_id: demo3.id,
)