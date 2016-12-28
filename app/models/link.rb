# == Schema Information
#
# Table name: links
#
#  id     :integer          not null, primary key
#  href   :string           not null
#  anchor :string           not null
#

class Link < ApplicationRecord
	has_and_belongs_to_many :sites  
end
