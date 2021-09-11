Rails.application.routes.draw do  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings
    resources :reviews
  end
  root to: "static_pages#root"
end
