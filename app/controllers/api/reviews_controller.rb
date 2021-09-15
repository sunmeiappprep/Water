class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in

    def create 
        @review = Review.new(review_params)
        if @review.save 
            render "api/reviews/index"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        listing = Listing.find(params[:id])
        @reviews = listing.reviews
        render "api/reviews/index"
    end

    def index 
        currentuser = current_user 
        @reviews = currentuser.reviews 
        render "api/reviews/index"
    end

    
end

 
    

    def review_params
        params.require(:review).permit(:description, :rating, :reviewer_id, :listing_id,)
    end

end