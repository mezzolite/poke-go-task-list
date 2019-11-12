class TeamsController < ApplicationController

    def index
        teams = Team.all 
        render json: teams, include: :tasks 
    end

    def show
        team = Team.find(params[:id])
        render json: team, include: :tasks
    end
    
end
