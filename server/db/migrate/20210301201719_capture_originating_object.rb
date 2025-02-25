class CaptureOriginatingObject < ActiveRecord::Migration[6.1]
  def change
    add_reference :events, :originating_object, polymorphic: true
    add_index :events, [ :originating_object_id, :originating_object_type ], name: 'idx_event_originating_obj'
  end
end
