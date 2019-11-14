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
            name: params[:name],
            description: params[:description],
            reward: params[:reward],
            reward_image: params[:reward_image],
            team_id: params[:team_id]
        })

        redirect_to "http://localhost:3001/team.html?id=#{@task.team_id}"
    end

    def update
        @task = Task.find(params[:id])
        @task.update({
            name: params[:name],
            description: params[:description],
            reward: params[:reward],
            reward_image: params[:reward_image]
        })

        render json: @task
    end

    def destroy
        @task = Task.find(params[:id])
        @task.delete

        render status: 204
    end
end
