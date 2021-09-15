json.booking do 
    json.extract! @booking, :id, :check_in, :check_out, :listing_id, :renter_id, :renter, :listing 
end