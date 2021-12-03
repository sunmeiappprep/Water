# [WaterBNB](https://waterbnb.herokuapp.com/#/)

WaterBnb is a clone of airbnb with filled with water destination as its theme.

# Overview
- A user should be able to login and book a listing
- A user can create a review for listing
- Calendar will be grayed out for non available dates
- User should be able to edit review and rating
- Rating will be adjusted after edit
- Search results are Miami,Cancun,Maui,Virginia Beach,Honolulu,Phuket,Virginia Beach,North Bergen,Renaissance Island

# Core Features
- Creating a booking for a listing
![Booking](https://github.com/sunmeiappprep/Water/blob/main/booking2.gif)
- Creating and editing a review
![Review](https://github.com/sunmeiappprep/Water/blob/main/reivew2.gif)

<!-- <img width="1440" alt="CreateBooking" src="">

<img width="1440" alt="CreateReview" src="> -->

# Code Snippet

- Had to gray out multiple booking ranges for react calendar and this was the logic.

```javascript
  for (let x = 0; x < bookings.length; x++){
    finalarr2.push(
      new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) 
      >= new Date(bookings[x][0], bookings[x][1]-1,bookings[x][2]) 
      && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) 
      <= new Date(bookings[x][3], bookings[x][4]-1,bookings[x][5]))
  }
```

- Grayed out multiple booking ranges a selection for react calendar


# Technologies used

- Ruby on Rails
- PostgreSQL
- Rails Active Storage with Amazon's S3
- React.js
- Redux
- Node JS
- HTML, CSS

