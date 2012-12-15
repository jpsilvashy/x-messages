class TasksController < ApplicationController

  respond_to :html, :json

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.all
    respond_with @tasks
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
    @task = Task.find(params[:id])
    respond_with @task
  end

  # GET /tasks/new
  # GET /tasks/new.json
  def new
    @task = Task.new
    respond_with @task
  end

  # GET /tasks/1/edit
  def edit
    @task = Task.find(params[:id])
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(params[:task])
    @task.save

    flash[:success] = "You created a new task" if @task.save
    respond_with @task
  end

  # PUT /tasks/1
  # PUT /tasks/1.json
  def update
    @task = Task.find(params[:id])

    if @task.update_attributes(params[:task])
      flash[:success] = "You updated a new task"
    end

    respond_with @task
  end

  def destroy
    article = Article.destroy(params[:id])
      redirect_to articles_path, :notice => "Article '#{article.title}' was deleted."

  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task = Task.destroy(params[:id])
  end
end

