class AddNewCodes < ActiveRecord::Migration[6.1]
  def up
    #Add column for "met" vs "not met" status. Issue#874
    add_column :acmg_codes, :met, :boolean, null: true
    add_column :clingen_codes, :met, :boolean, null: true

    #Add tiering for Clingen Codes. Issue#873
    ClingenCode.where.not(code: ['OP3', 'OM3', 'OS3', 'N/A']).find_each do |code|
      modifiers = [
        'Very-strong',
        'Strong',
        'Moderate',
        'Supporting',
        'Not-met'
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

    #Add "Unable to be applied" codes. Issue#877
    AcmgCode.where("code NOT LIKE '%^_%' ESCAPE '^'").find_each do |code|
      AcmgCode.where(
        code: "#{code.code}_Unable-to-be-applied",
        description: "The evidence may support application of #{code.code} but it is unable to be applied due to a conflict."
      ).first_or_create!
    end

    ClingenCode.where("code NOT LIKE '%^_%' ESCAPE '^'").find_each do |code|
      ClingenCode.where(
        code: "#{code.code}_Unable-to-be-applied",
        description: "The evidence may support application of #{code.code} but it is unable to be applied due to a conflict."
      ).first_or_create!
    end

    AcmgCode.all.find_each do |code|
      if code.code =~ /unable/i || code.code =~ /not-met/i 
        code.met = false
      else
        code.met = true
      end
      code.save!
    end

    ClingenCode.all.find_each do |code|
      if code.code =~ /unable/i || code.code =~ /not-met/i 
        code.met = false
      else
        code.met = true
      end
      code.save!
    end


    change_column_null :acmg_codes, :met, false
    change_column_null :clingen_codes, :met, false
  end

  def down
    ClingenCode.where("code LIKE '%^_%' ESCAPE '^'").destroy_all
    AcmgCode.where("code ILIKE '%Unable-to-be-applied%'").destroy_all
    ClingenCode.where("code ILIKE '%Unable-to-be-applied%'").destroy_all

    remove_column :acmg_codes, :met
    remove_column :clingen_codes, :met

  end
end
