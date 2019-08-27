class Api::ListsController < ApplicationController
	def create
		@list = List.new(list_params)

		if @list.save
			render :create, status: :created
		else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :not_found
    end
    rescue ActionController::ParameterMissing
      @error = "Invalid list data provided"
      render 'api/shared/error', status: :unprocessable_entity
	end

	def update
		@list = List.find(params[:id])

		@list.title = params[:title]

		if @list.save
			render :update
		else
			@error = @list.errors.full_messages.join(', ')
			render 'api/shared/error', status: :not_found
		end

		rescue ActiveRecord::RecordNotFound
		 	@error = 'Invalid list ID provided'
			render 'api/shared/error', status: :not_found
	end

	private

	def list_params
		params.require(:list).permit(:title, :board_id)
	end
end
