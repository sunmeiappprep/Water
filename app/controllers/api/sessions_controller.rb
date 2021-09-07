class Api::SessionsController < ApplicationController

    def create
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
      if @user
        login!(@user)
        redirect_to api_user_url(@user)
      else
        render json: {log_in: 'Wrong Cred'},
          status: 422
      end
    end
  
    def destroy
        logout
    end
  
  end