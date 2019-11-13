class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, include: :team
    end 

    def show
        @user = User.find(params[:id])
        render json: @user, include: :team
    end

    def create
        @user = User.create({
            username: params[:username],
            team_id: params[:team_id]
        })
        redirect_to "http://localhost:3001"
    end

end
