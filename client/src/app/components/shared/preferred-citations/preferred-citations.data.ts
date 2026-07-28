export interface CivicPreferredCitation {
  readonly id: string
  readonly label: string
  readonly authors: string
  readonly title: string
  readonly publicationDetails: string
  readonly doi: string
  readonly doiUrl: string
  readonly pmid: string
  readonly pubmedUrl: string
}

export const CIVIC_CITATIONS_PAGE_URL =
  'https://civic.readthedocs.io/en/latest/about/citations.html'

export const CIVIC_PREFERRED_CITATIONS = [
  {
    id: 'civicdb-2022',
    label: 'CIViC update 2022 (NAR)',
    authors:
      'Krysiak K, Danos AM, Saliba J, McMichael JF, Coffman AC, Kiwala S, et al.',
    title:
      'CIViCdb 2022: evolution of an open-access cancer variant interpretation knowledgebase.',
    publicationDetails: 'Nucleic Acids Res. 2023;51(D1):D1230–D1241.',
    doi: '10.1093/nar/gkac979',
    doiUrl: 'https://doi.org/10.1093/nar/gkac979',
    pmid: '36373660',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/36373660/',
  },
  {
    id: 'civic-original',
    label: 'Original CIViC publication',
    authors:
      'Griffith M, Spies NC, Krysiak K, McMichael JF, Coffman AC, Danos AM, et al.',
    title:
      'CIViC is a community knowledgebase for expert crowdsourcing the clinical interpretation of variants in cancer.',
    publicationDetails: 'Nat Genet. 2017;49(2):170–174.',
    doi: '10.1038/ng.3774',
    doiUrl: 'https://doi.org/10.1038/ng.3774',
    pmid: '28138153',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/28138153/',
  },
] as const satisfies readonly CivicPreferredCitation[]
