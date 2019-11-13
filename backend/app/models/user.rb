class User < ApplicationRecord
  belongs_to :team
  validates :username, uniqueness: { case_sensitive: false }
end
