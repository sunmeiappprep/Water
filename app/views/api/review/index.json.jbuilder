json.array! @reviews do |review|
    json.extract! review, :id, :description, :rating, :listing_id, :reviewer_id, :reviewer, :listing 
end