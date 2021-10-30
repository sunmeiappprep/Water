class Api::ListingsController < ApplicationController

    def create 
        @listing = Listing.create!(listing_params)
        if @listing
            render :show
        else 
            render json: @listing.errors.full_messages
        end 
    end

    def show 
        @listing = Listing.find(params[:id])
        render :show
    end

    def update 
        @listing = Listing.find(params[:id])
        if @listing.update
            render :show
        else 
            render json: @listing.errors.full_messages
        end

    end

    def search
        @search = Listing.search(params[:searchparams])
        if @search
            render :index
        end
    end


    def destroy
        @listing = Listing.find(params[:id])
        @listing.destroy
        render :index
    end

    def index 
        @listings = Listing.all
        if @listings
            render :index
        end
        
    end

    private 
    def listing_params 
        params.require(:listing).permit(:title, :price,:address, :city,:description, :num_guest, :num_beds, :longitude, :latitude, :host_id)
    end
end