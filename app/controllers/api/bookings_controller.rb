class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in
    
    def create 
        @booking = Booking.new(booking_params)        
        if @booking.save! 
            render :show 
        else  
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def show 
        @booking = Booking.find(params[:id])
        render :show
    end



    def index 
        user = current_user
        @bookings = Booking.all

        render '/api/bookings/index'
    end

    def destroy 
        @booking = Booking.find(params[:id])
        @booking.destroy
        render :show 
    end

    def update         
        @booking = Booking.find(params[:id])
        if @booking.update_attributes(booking_params)
            render :show
        else
            render json: ["Booking cannot be changed"], status: 404
        end
    end


    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :listing_id, :renter_id) 
    end
end