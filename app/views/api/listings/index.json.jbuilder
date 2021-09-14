@listings.each do |listing|
    json.set! listing.id do 
        json.partial! 'listing', listing: listing 
        # json.photoUrl url_for(@listing.photo)
    end
    
end