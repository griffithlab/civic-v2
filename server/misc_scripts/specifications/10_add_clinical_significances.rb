spec = Specification.find_by(name: "ClinGen/CGC/VICC Codes")
spec.clinical_significances = {
  10 => "Oncogenic",
  9 => "Likely Oncogenic",
  8 => "Likely Oncogenic",
  7 => "Likely Oncogenic",
  6 => "Likely Oncogenic",
  5 => "Uncertain Significance",
  4 => "Uncertain Significance",
  3 => "Uncertain Significance",
  2 => "Uncertain Significance",
  1 => "Uncertain Significance",
  0 => "Uncertain Significance",
  -1 => "Likely Benign",
  -2 => "Likely Benign",
  -3 => "Likely Benign",
  -4 => "Likely Benign",
  -5 => "Likely Benign",
  -6 => "Likely Benign",
  -7 => "Benign",
}
spec.save

spec = Specification.find_by(name: "FGFR SC-VCEP Oncogenicity specifications")
spec.clinical_significances = {
  10 => "Oncogenic",
  9 => "Likely Oncogenic",
  8 => "Likely Oncogenic",
  7 => "Likely Oncogenic",
  6 => "Likely Oncogenic",
  5 => "Uncertain Significance",
  4 => "Uncertain Significance",
  3 => "Uncertain Significance",
  2 => "Uncertain Significance",
  1 => "Uncertain Significance",
  0 => "Uncertain Significance",
  -1 => "Likely Benign",
  -2 => "Likely Benign",
  -3 => "Likely Benign",
  -4 => "Likely Benign",
  -5 => "Likely Benign",
  -6 => "Likely Benign",
  -7 => "Benign",
}
spec.save
