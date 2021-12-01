# README

# WaterBnb

WaterBnb is a clone of airbnb with filled with water destination as its theme.

# [Live Site](https://waterbnb.herokuapp.com/#/)

# Booking,Rating,Reviews,Search,Listings

- A user should be able to login and book a listing
- A user can create a review for listing
- Calendar will be grayed out for non available dates
- User should be able to edit review and rating
- Rating will be adjusted after edit
- Search results are Miami,Cancun,Maui,Virginia Beach,Honolulu,Phuket,Virginia Beach,North Bergen,Renaissance Island

<img width="1440" alt="CreateBooking" src="https://imgur.com/a/AHwauvR">

<img width="1440" alt="CreateReview" src="https://imgur.com/a/hsiYg2W">

# Code challenges

1. ## Gray out selectedb booking dates

```javascript
  for (let x = 0; x < bookings.length; x++){
    finalarr2.push( new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) >= new Date(bookings[x][0], bookings[x][1]-1,bookings[x][2]) 
    && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) <= new Date(bookings[x][3], bookings[x][4]-1,bookings[x][5]))
  }
```

- Grayed out multiple booking ranges a selection for react calendar


# Technologies used

- Ruby
- Rails
- Node
- PostgreSQL
- HTML, CSS, Javascript

