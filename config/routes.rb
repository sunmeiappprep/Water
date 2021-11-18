Rails.application.routes.draw do  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
    resources :bookings
  end

  root to: "static_pages#root"
end
