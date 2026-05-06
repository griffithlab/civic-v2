class AddNewCodes < ActiveRecord::Migration[6.1]
  def up
    # Add tiering for Clingen Codes. Issue#873
    ClingenCode.where.not(code: [ 'OP3', 'OM3', 'OS3', 'N/A' ]).find_each do |code|
      modifiers = [
        'Very-strong',
        'Strong',
        'Moderate',
        'Supporting',
      ]

      if code.code =~ /VS\d/
        modifiers.delete('Very-strong')
      elsif code.code =~ /S\d/
        modifiers.delete('Strong')
      elsif code.code =~ /M\d/
        modifiers.delete('Moderate')
      elsif code.code =~ /P\d/
        modifiers.delete('Supporting')
      end

      modifiers.each do |m|
        ClingenCode.create!(code: "#{code.code}_#{m}", description: '')
      end
    end

    ClingenCode.create!(code: "OS3_Very-strong", description: '')
  end

  def down
    ClingenCode.where("code LIKE '%^_%' ESCAPE '^'").destroy_all
  end
end
