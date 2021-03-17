module Types
  class EvidenceClinicalSignificanceType < Types::BaseEnum
    value 'SENSITIVITYRESPONSE', value: 'Sensitivity/Response'
    value 'RESISTANCE', value: 'Resistance'
    value 'BETTEROUTCOME', value: 'Better Outcome'
    value 'POOROUTCOME', value: 'Poor Outcome'
    value 'POSITIVE', value: 'Positive'
    value 'NEGATIVE', value: 'Negative'
    value 'NA', value: 'N/A'
    value 'ADVERSERESPONSE', value: 'Adverse Response'
    value 'PATHOGENIC', value: 'Pathogenic'
    value 'LIKELYPATHOGENIC', value: 'Likely Pathogenic'
    value 'BENIGN', value: 'Benign'
    value 'LIKELYBENIGN', value: 'Likely Benign'
    value 'UNCERTAINSIGNIFICANCE', value: 'Uncertain Significance'
    value 'REDUCEDSENSITIVITY', value: 'Reduced Sensitivity'
    value 'GAINOFFUNCTION', value: 'Gain of Function'
    value 'LOSSOFFUNCTION', value: 'Loss of Function'
    value 'UNALTEREDFUNCTION', value: 'Unaltered Function'
    value 'NEOMORPHIC', value: 'Neomorphic'
    value 'UNKNOWN', value: 'Unknown'
    value 'DOMINANTNEGATIVE', value: 'Dominant Negative'
  end
end
