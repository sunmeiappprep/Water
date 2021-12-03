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

```javascript
    componentWillMount() {
        this.setState({ randomDescriptions: [
            [
             `A newly renovated large studio apartment located in a safe centralized urban neighborhood
             15 mins away from the ${this.state.listings.city}, which are a short bus ride or Uber away.
             Private entrance with electronic door lock. You will also have access to shared backyard 
             with outdoor seating.`
            ],
            [
            `Experience this exclusive retreat nestled on the quiet, lush slopes of near the 
            ${this.state.listings.city}. Minutes to the airport, and to the city, but a world apart. 
            The sunsets and stargazing over the ocean, are truly breathtaking. Enjoy an afternoon 
            cocktail, looking out over your private pool, perfect for yoga, meditation, or morning 
            coffee. From charging station/blender/grill/coffee grinder SO many details! Rear sliding 
            door entrance has 0 steps, front has 1. ALL TAXES INCLUDED`
            ],
            [
             `Freshly renovated modern place 20 min from the ${this.state.listings.city}, with FREE 
             parking. avenue(the main strip in ${this.state.listings.city}) and is a perfect base for 
             you Hawaii getaway. Within walking distance to many popular attractions. The beach, popular 
             surf, boutique shopping, grocery, convention center, and dining are all within walking 
             distance. Public transportation, rental car, and bike share are easily accessible. This 
             condo is the perfect location to start your ${this.state.listings.city} getaway.`   
            ]
        ] });
```

- Using the normal componentDidMount method didn't allow {$this.state.listings.city} to be render and threw and error on refresh.
- The code above solve this problem by setting the state before componentDidMount


# Technologies used

- Ruby on Rails
- PostgreSQL
- Rails Active Storage with Amazon's S3
- React.js
- Redux
- Node JS
- HTML, CSS

