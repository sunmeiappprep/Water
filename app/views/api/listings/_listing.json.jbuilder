json.extract! listing, :id, :title, :price,:address, :city,:description, :num_guest, :num_beds, :longitude, :latitude, :host_id ,:reviews , :bookings , :host

json.photoAWS url_for(listing.photo) if listing.photo.attached?
