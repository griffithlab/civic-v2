module Types
  class AssertionSignificanceType < Types::BaseEnum
    value "SENSITIVITYRESPONSE", value: "Sensitivity/Response"
    value "RESISTANCE", value: "Resistance"
    value "ADVERSE_RESPONSE", value: "Adverse Response"
    value "REDUCED_SENSITIVITY", value: "Reduced Sensitivity"
    value "NA", value: "N/A"
    value "POSITIVE", value: "Positive"
    value "NEGATIVE", value: "Negative"
    value "BETTER_OUTCOME", value: "Better Outcome"
    value "POOR_OUTCOME", value: "Poor Outcome"
    value "PATHOGENIC", value: "Pathogenic"
    value "LIKELY_PATHOGENIC", value: "Likely Pathogenic"
    value "BENIGN", value: "Benign"
    value "LIKELY_BENIGN", value: "Likely Benign"
    value "UNCERTAIN_SIGNIFICANCE", value: "Uncertain Significance"
    value "ONCOGENIC", value: "Oncogenic"
    value "LIKELY_ONCOGENIC", value: "Likely Oncogenic"
  end
end
