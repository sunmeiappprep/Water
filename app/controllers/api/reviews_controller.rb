class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :single]
    
    def create 
        @review = Review.new(review_params)

        if @review.save 


            render "api/reviews/show"
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
        render :index
    end  

    def destroy 
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    def update
        @review = Review.find_by(id: params[:id])
        
        if @review && @review.update(review_params)
          render :show
        else
          render json: @review.errors.full_messages, status: 401
        end
      end


    def review_params
        params.require(:review).permit(:id,:description, :rating, :reviewer_id, :listing_id,)
    end

end