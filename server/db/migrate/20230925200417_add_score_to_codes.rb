class AddScoreToCodes < ActiveRecord::Migration[6.1]
  def change
    add_column :clingen_codes, :score, :integer, null: false, default: -1
    add_column :acmg_codes, :score, :integer, null: false, default: -1

    AcmgCode.all.find_each do |code|
      if code.code.include?('Very-strong')
        code.score = 8
      elsif code.code.include?('Strong')
        code.score = 4
      elsif code.code.include?('Moderate')
        code.score = 2
      elsif code.code.include?('Supporting')
        code.score = 1
      end
      code.save!
    end

    ClingenCode.all.find_each do |code|
      if code.code.include?('Very-strong')
        code.score = 8
      elsif code.code.include?('Strong')
        code.score = 4
      elsif code.code.include?('Moderate')
        code.score = 2
      elsif code.code.include?('Supporting')
        code.score = 1
      end
      code.save!
    end
  end
end
