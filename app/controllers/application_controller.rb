class ApplicationController < ActionController::Base
  protect_from_forgery

  # After filter to insert the headers in the response
  after_filter :x_messages

  # Also make available as a helper so we can render
  # the errors of the user doesn't have js
  helper_method :x_messages

  private

  # If there is a flash present, insert into header
  def x_messages
    if flash.present?
      response.headers['X-Messages'] = flash.to_hash.to_json
      flash.to_hash
    end
  end

end
