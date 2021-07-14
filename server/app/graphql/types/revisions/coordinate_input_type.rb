module Types::Revisions
  class CoordinateInputType < Types::BaseInputObject
    argument :representative_transcript, String, required: false
    argument :chromosome, String, required: false,
      validates: { inclusion: { in: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
        '14', '15', '16', '17', '18', '19', '20', '21', '22', 'X', 'Y', 'MT' ]
    }}
    argument :start, Int, required: false
    argument :stop, Int, required: false
  end
end
