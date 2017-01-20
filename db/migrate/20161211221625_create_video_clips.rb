class CreateVideoClips < ActiveRecord::Migration[5.0]
  def change
    create_table :video_clips do |t|
			t.string  :slug, index: true
			t.time    :start
			t.time    :end	
		 	t.string :url
    	t.string :title    	
      t.timestamps
    end
  end
end