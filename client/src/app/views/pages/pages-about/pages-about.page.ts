import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-pages-about',
  templateUrl: './pages-about.page.html',
  styleUrls: ['./pages-about.page.less'],
})
export class PagesAboutPage implements OnInit {
  funding = [
    {
      awardee: 'Malachi Griffith',
      org: 'National Human Genome Research Institute (NHGRI) of the National Institutes of Health (NIH)',
      award: 'R00HG007940',
    },
    {
      awardee: 'Obi Lee Griffith',
      org: 'National Cancer Institute (NCI) of NIH',
      award: 'K22CA188163',
    },
    {
      awardee: 'Obi Lee Griffith (with Malachi Griffith as co-PI)',
      org: 'NCI including a funding supplement from the Childhood Cancer Data Initiative (CCDI)',
      award: 'U24CA237719 (previously: U01CA209936)',
    },
    {
      awardee: 'CIViC',
      org: 'Washington University Institute of Clinical and Translational Sciences from National Center for Advancing Translational Sciences (NCATS) of NIH',
      award: 'UL1TR002345',
    },
    {
      awardee: 'Obi Griffith, Malachi Griffith, Gordana Raca',
      org: 'National Cancer Institute (NCI) of NIH',
      award: 'U24CA258115',
    },
    {
      awardee: 'Malachi Griffith, Obi Griffith',
      org: 'National Cancer Institute (NCI) of NIH',
      award: 'U24CA275783',
    },
    {
      awardee: 'CIViC',
      org: 'Children’s Discovery Institute (CDI) of the St. Louis Children’s Hospital and Washington University School of Medicine.',
      award: '',
    },
    {
      awardee: 'CIViC (awarded in cloud credits)',
      org: 'NIH Cloud Credits Model Pilot of the NIH Big Data to Knowledge (BD2K) program',
      award: '',
    },
    {
      awardee: 'CIViC (integration with Google BigQuery)',
      org: 'Google',
      award: '',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
