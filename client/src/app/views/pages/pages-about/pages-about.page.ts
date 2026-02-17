import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-pages-about',
  templateUrl: './pages-about.page.html',
  styleUrls: ['./pages-about.page.less'],
  standalone: false,
})
export class PagesAboutPage implements OnInit {
  currentFunding = [
    {
      awardee: 'Obi Griffith; Malachi Griffith; Alex Wagner',
      source: 'NCI Informatics Technology for Cancer Research (ITCR)',
      description: 'Sustained Support Award for CIViC',
      awardNumber: '1U24CA305456',
      timeframe: '2025-2030',
    },
    {
      awardee: 'Adam Coffman',
      source: 'National Cancer Institute (NCI)',
      description:
        'Research Software Engineer (RSE) Award to Support CIViC Development Effort',
      awardNumber: '1R50CA305824',
      timeframe: '2025-2028',
    },
    {
      awardee: 'Malachi Griffith; Obi Griffith (Site PI Alex Wagner)',
      source: 'National Cancer Institute (NCI)',
      description:
        'Biomedical Knowledgebase Award for ClinGen Somatic Cancer Knowledgebase Expansion',
      awardNumber: 'U24CA275783',
      timeframe: '2023-2028',
    },
    {
      awardee: 'Malachi Griffith; Obi Griffith',
      source: 'NIH Office of Data Science Strategy (ODSS)',
      description:
        'Admin Suppl. Award to Develop Text Mining and Large Language Models for Evidence-Based Functional Annotation of Clinical Variants',
      awardNumber: 'U24CA275783-S1',
      timeframe: '2024-2028',
    },
    {
      awardee: 'William Powderly',
      source: 'National Center for Advancing Translational Sciences (NCATS)',
      description:
        'Clinical and Translational Science Award (CTSA) for Institute of Clinical and Translational Sciences (ICTS) with Support for CIViC Curation at Washington University',
      awardNumber: 'UL1TR002345',
      timeframe: '2019-2027',
    },
  ]

  pastFunding = [
    {
      awardee: 'Obi Griffith; Malachi Griffith; Gordana Raca',
      source: 'National Cancer Institute (NCI)',
      description:
        'Genomic Curation Expert Panels Award to Support SC-VCEP Activities',
      awardNumber: 'U24CA258115',
      timeframe: '2022-2025',
    },
    {
      awardee: 'Jonathan Berg (Site PI Malachi Griffith)',
      source: 'National Human Genome Research Institute (NHGRI)',
      description:
        'Genomic Community Resource Award to Pilot ClinGen Somatic Working Groups',
      awardNumber: 'U24HG009650',
      timeframe: '2022-2025',
    },
    {
      awardee: 'Obi Griffith (Co-I Malachi Griffith)',
      source:
        'National Cancer Institute (NCI) Informatics Technology for Cancer Research (ITCR)',
      description: 'Advanced Stage Development Award for CIViC',
      awardNumber: 'U24CA237719',
      timeframe: '2019-2023',
    },
    {
      awardee: 'Obi Griffith (Co-I Malachi Griffith)',
      source:
        'National Cancer Institute (NCI), Childhood Cancer Data Initiative (CCDI)',
      description:
        'Admin Suppl. Award to Improve Support for Childhood Cancer Variant Curation',
      awardNumber: '3U24CA237719-02S1',
      timeframe: '2020-2023',
    },
    {
      awardee: 'Malachi Griffith',
      source: 'Google',
      description: 'Funding to Support Integration with Google BigQuery',
      awardNumber: 'N/A',
      timeframe: '2019-2020',
    },
    {
      awardee: 'Obi Griffith (Co-I Malachi Griffith)',
      source:
        'National Cancer Institute (NCI), Cancer Moonshot, Activities to Promote Technology Research Collaborations (APTRC) for Cancer Research',
      description:
        'Admin Suppl. Award to Support Development of CIViC-guided smMIPs Targeted Panel',
      awardNumber: 'U01CA209936-S1',
      timeframe: '2017-2021',
    },
    {
      awardee: 'Obi Griffith (Co-I Malachi Griffith)',
      source:
        'NIH Cloud Credits Model Pilot of the NIH Big Data to Knowledge (BD2K) Program',
      description: 'Cloud Credits to Develop CIViC Cloud-Based Infrastructure',
      awardNumber: 'N/A',
      timeframe: '2017-2018',
    },
    {
      awardee: 'Obi Griffith (Co-I Malachi Griffith)',
      source:
        'National Cancer Institute (NCI) Informatics Technology for Cancer Research (ITCR)',
      description: 'Early Stage Development Award for CIViC',
      awardNumber: 'U01CA209936',
      timeframe: '2016-2021',
    },
    {
      awardee: 'Malachi Griffith',
      source: 'National Human Genome Research Institute (NHGRI)',
      description: 'Pathway to Independence Award',
      awardNumber: 'R00HG007940',
      timeframe: '2017-2019',
    },
    {
      awardee: 'Obi Griffith',
      source: 'National Cancer Institute (NCI)',
      description: 'Career Development Award',
      awardNumber: 'K22CA188163',
      timeframe: '2014-2016',
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
