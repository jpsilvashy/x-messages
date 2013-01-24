class TasksController < ApplicationController

  respond_to :html, :js

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.all
    respond_with @tasks
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(params[:task])
    @task.save

    flash[:success] = "You created a new task" if @task.save
    respond_with @task
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task = Task.destroy(params[:id])
  end
end

