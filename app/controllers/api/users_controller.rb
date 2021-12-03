class Api::UsersController < ApplicationController
  
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render "api/users/show"
    else
      # debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show 
    @user = User.find(params[:id])
    render "api/users/show" 
  end

  def update 
    currentuser = current_user.id
    @user = User.find(params[:id])

    if @user.id === currentuser.id && @user.update_attributes(user_params)
      render :show
    else
      render json: ["Update user info did not work"], status: 422
    end
  end




  
  private 
  
  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
  end
end