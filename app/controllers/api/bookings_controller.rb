class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in
    
    def create 
        @booking = Booking.new(booking_params)        
        if @booking.save! 
            render 'api/bookings/index'
        else  
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def index 
        @bookings = Booking.all
        if @bookings
            render :index        
        end
        
    end

    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :listing_id, :renter_id) 
    end
end