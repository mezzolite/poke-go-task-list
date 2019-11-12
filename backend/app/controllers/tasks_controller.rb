class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks
    end 

    def show
        @task = Task.find(params[:id])
        render json: @task
    end

    def create
        @task = Task.create({
            name: params[:id],
            description: params[:description],
            reward: params[:reward],
            team_id: params[:team_id]
        })

        render json: @task
    end

    def update
        @task = Task.find(params[:id])
        @task.update({
            name: params[:id],
            description: params[:description],
            reward: params[:reward],
            team_id: params[:team_id]
        })

        render json: @task
    end

    def destroy
        @task = Task.find(params[:id])
        @task.delete

        render status: 204
    end
end
