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
        @user = User.new({
            username: params[:username],
            team_id: params[:team_id]
        })
        if @user.valid?
            @user.save
            redirect_to "http://localhost:3001"
        else 
            redirect_to "http://localhost:3001?error=true"
        end
    end

end
