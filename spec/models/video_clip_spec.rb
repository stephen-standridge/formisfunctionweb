# == Schema Information
#
# Table name: video_clips
#
#  id         :integer          not null, primary key
#  slug       :string
#  start      :time
#  end        :time
#  url        :string
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe VideoClip, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end