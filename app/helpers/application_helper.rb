module ApplicationHelper

  def render_x_messages

    if x_messages

      content_tag :ul, :class => 'x-messages' do
        x_messages.collect do |type, message|
          concat content_tag(:li, message, :class => "message-#{type}")
        end
      end

    end
  end
end


