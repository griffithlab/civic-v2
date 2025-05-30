module Types
  class EvidenceSignificanceType < Types::BaseEnum
    value "SENSITIVITYRESPONSE", value: "Sensitivity/Response"
    value "RESISTANCE", value: "Resistance"
    value "BETTER_OUTCOME", value: "Better Outcome"
    value "POOR_OUTCOME", value: "Poor Outcome"
    value "POSITIVE", value: "Positive"
    value "NEGATIVE", value: "Negative"
    value "NA", value: "N/A"
    value "ADVERSE_RESPONSE", value: "Adverse Response"
    value "PATHOGENIC", value: "Pathogenic"
    value "LIKELY_PATHOGENIC", value: "Likely Pathogenic"
    value "BENIGN", value: "Benign"
    value "LIKELY_BENIGN", value: "Likely Benign"
    value "UNCERTAIN_SIGNIFICANCE", value: "Uncertain Significance"
    value "REDUCED_SENSITIVITY", value: "Reduced Sensitivity"
    value "GAIN_OF_FUNCTION", value: "Gain of Function"
    value "LOSS_OF_FUNCTION", value: "Loss of Function"
    value "UNALTERED_FUNCTION", value: "Unaltered Function"
    value "NEOMORPHIC", value: "Neomorphic"
    value "UNKNOWN", value: "Unknown"
    value "DOMINANT_NEGATIVE", value: "Dominant Negative"
    value "PREDISPOSITION", value: "Predisposition"
    value "PROTECTIVENESS", value: "Protectiveness"
    value "ONCOGENICITY", value: "Oncogenicity"
    value "LIKELY_ONCOGENIC", "Likely Oncogenic"
  end
end
