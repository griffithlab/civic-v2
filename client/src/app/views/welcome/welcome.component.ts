import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { EventFeedMode, Maybe } from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CvcNewsItem } from './news-item-list/news-item-list.component'
import { feedDefaultSettings } from '@app/components/activities/activity-feed/activity-feed.config'
import { ActivityFeedSettings } from '@app/components/activities/activity-feed/activity-feed.types'

interface GithubRelease {
  html_url: string
  name: string
  published_at: string
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  standalone: false,
})
export class WelcomeComponent implements OnInit {
  release$?: Observable<GithubRelease>

  feedMode = EventFeedMode.Unscoped

  newsItems: CvcNewsItem[] = [
    {
      title: 'Join us in Houston on August 2nd!',
      date: '2025-05-01',
      htmlText: `Please join the CIViC team for the annual <a href="https://www.cancergenomics.org/meetings/2025_variant_interpretation_un.php" target="_blank">Variant Interpretation Unconference</a> attached as a pre-meeting to the Cancer Genomics Consortium's <a href="https://cancergenomics.org/meetings/cgc_2025_annual_meeting.php" target="_blank">Annual Meeting</a> in Houston! <br/><br/>

          This event, hosted by The Variant Interpretation for Cancer Consortium (VICC), The CGC, ClinGen, and CIViC is a chance to engage with the CIViC team directly and collaborate with clinical experts, laboratory directors, variant scientists, software developers, and bioinformaticians from industry, government, and academia on projects related to variant interpretation, curation, and tool building.`,
    },
    {
      title: 'Spring Development Updates',
      date: '2025-04-22',
      htmlText: `Its been a busy year already for CIViC development, and we wanted to highlight some recent improvements and upcoming features! <br/><br/>

        <ul>
          <li><a href="https://www.opencravat.org/" target="_blank">OpenCRAVAT</a> calibrated variant effect predictor scores are now integrated directly into <a href="https://civicdb.org/variants/12/summary" target="_blank">CIViC Variant Pages</a>.</li>
            <br/>
          <li>CIViC users can now generate and manage API Keys, allowing for programatic submission of Evidence from their own internal repositories.</li>
            <br/>
          <li>We have launched an entirely redesigned <a href="https://civicdb.org/curation/activity/curation-timeline" target="_blank">Activity Feed</a> backed by an even more robust data provenance system under the hood. This strengthens CIViC's commitment to transparency and makes the full history of each piece of Evidence more discoverable.</li>
            <br/>
          <li>Coming Soon: We are actively testing a new feature that allows approved Organizations (e.g., ClinGen SC-VCEPs) to Endorse Assertions. These Endorsed Assertions will be automatically submitted to ClinVar under the corresponding organization.</li>
        </ul>
        <br/>
        If you have any questions about these new features, our development roadmap, or require assistance using CIViC feel free to reach out to us at <a href="mailto:help@civicdb.org">help@civicdb.org</a>!
      `,
    },
    {
      title: 'Moving Beyond the Gene-Variant Data Model',
      date: '2024-09-16',
      htmlText: `Since its inception, CIViC’s data model has revolved around curating variants present on specific genes. While this was simple and worked well, it did not allow us to capture the full breadth of clinically relevant variants in cancer. In order to support additional variant types, we have updated the data model to include what we are calling “Features.” <br/><br/>

    Instead of only being associated with a Gene, variants are now associated with a Feature. The first and most common Feature is still the Gene, but we are rolling out support for two additional Feature types: Factors and Fusions. <br/></br>

    Factors can include genomic events that are not specific mutations such as <a href="https://civicdb.org/features/61746/summary" target="_blank">Microsatellite Instability</a> or <a href="https://civicdb.org/features/61745/" target="_blank">Tumor Mutational Burden</a>. Factors can be associated with terms from the <a href="https://ncithesaurus.nci.nih.gov/ncitbrowser/pages/home.jsf?version=24.07e" target="_blank">NCI Thesaurus</a>. <br/> <br/>

    Meanwhile, our new Fusions model allows us to capture richer, more structured, data about the fusion partners and the fusion site at the exon level. Initially, we support a subset of the <a href="https://fusions.cancervariants.org/en/latest/" target="blank">VICC Gene Fusion Specification</a> with plans to support additional parts of the spec in the near future.`,
    },
    {
      title:
        '2024 VICC/CIViC/ClinGen Cancer Variant Curation and Coding Unconference',
      date: '2024-08-04',
      imageUrl: 'assets/images/cgc-hackathon-2024.jpg',
      htmlText: `CIViC, alongside VICC and ClinGen Somatic hosted the 5th Cancer Variant Curation and Coding Unconference before the <a href="https://www.cancergenomics.org/meetings/registration.php" target="_blank">Annual Cancer Genomics Consortium Conference</a> in St. Louis. Scientists and developers gathered to discuss data standards, software improvements, and resource interoperability. Topics and summaries were <a href="https://github.com/griffithlab/civic-meeting/issues?q=is%3Aissue+is%3Aopen+label%3A2024" target="_blank">posted online</a>.`,
    },
    {
      title: 'PUBLIC NOTICE: CIViC v1 API TO BE DEPRECATED',
      date: '2023-10-01',
      htmlText: `<strong style="color: red;"><i>The CIViC V1 REST API will officially be retired on November 1st, 2023.</i></strong> All CIViC integrations should transition to our new V2 GraphQL API. The new API is more powerful and provides access to the newest CIViC data model, features, and data. The easiest way to get started is to try out queries and browse the documentation in the <a href="https://civicdb.org/api/graphiql" target="_blank">GraphiQL sandbox</a>.`,
      link: {
        url: 'https://civicdb.org/api/graphiql',
        label: 'Try the CIViC GraphiQL Sandbox',
      },
    },
    {
      title: 'CIViC Online Training Now Open!',
      date: '2023-10-01',
      htmlText: `A new course was developed by the CIViC team covering an introduction to somatic variants, including the rapid development of this field over the last decade with the introduction of next generation sequencing into clinical practice. The course was created using the <a href="https://www.itcrtraining.org/">ITCR training network’s</a> Open-source Tools for Training Resources (OTTR), which allows co-publication on multiple platforms, including <a href="https://course.civicdb.org">bookdown</a> and <a href="https://leanpub.com/c/introcivic">leanpub</a>.`,
      link: {
        url: 'https://course.civicdb.org',
        label: 'Take the CIViC Intro Course',
      },
    },
    {
      title: '2023 CGC Hackathon Report',
      date: '2023-08-14',
      htmlText: `CIViC together with VICC and ClinGen Somatic hosted the 4th Cancer Variant Interpretation Hackathon and Jamboree as a <a href="https://www.cancergenomics.org/meetings/2023_vicc_civic_clingen_hackat.php" target="_blank">pre-meeting of the Annual Cancer Genomics Consortium Conference</a>. Over 50 variant scientists and developers gathered in St Louis to discuss and code resources for the clinical interpretation of cancer variants including ClinGen/CGC/VICC Oncogenicity classification, new CIViC Variant Classes, and more.`,
      imageUrl: 'assets/images/2023-CGC-hackathon-attendees.jpg',
    },
    {
      title: 'Introducing Molecular Profiles',
      date: '2023-01-09',
      htmlText: `Today we have rolled out support for a new core concept in CIViC: <a href="https://civic.readthedocs.io/en/latest/model/molecular_profiles.html" target="_blank"> Molecular Profiles</a>. Molecular Profiles are logical combinations of one or more CIViC Variants. While most Molecular Profiles will consist of a single Variant (“Simple”) they will also allow users to build “Complex” (multi-variant) Molecular Profiles to associate Evidence with. These complex profiles expand the CIViC data model to allow for clinical significance to be evaluated within contexts such as variant co-occurrence or mutual exclusivity. Going forward, Evidence will be associated with a Molecular Profile rather than directly with a Variant. If you have any questions about this change, please feel free to <a href="mailto:help@civicdb.org">contact us</a>. We have also prepared a <a href="https://www.youtube.com/watch?v=--i54jy746w" target="_blank" >video</a > explaining this new feature.`,
      link: {
        url: 'https://www.youtube.com/watch?v=--i54jY746w',
        label: 'View Molecular Profiles Intro Video',
      },
    },
    {
      title: 'Announcing Support for ASH Abstracts',
      date: '2023-01-09',
      htmlText: `ASH Annual Meeting Abstracts can now be used as Sources when submitting Evidence Items to CIViC. They can be specified by DOI in the 'Add Source' section of the Evidence form.`,
    },
    {
      title: 'CIViC named as a Global Core Biodata Resource',
      date: '2022-12-15',
      htmlText: `CIViC has been named in a <a href="https://globalbiodata.org/scientific-activities/global-core-biodata-resources/" title="Global Core Biodata Resources List" target="_blank" >list of 37 Global Core Biodata Resources</a> alongside other important resources such as Ensembl, ClinGen and Gnomad. The GCBR includes <a href="https://globalbiodata.org/scientific-activities/global-core-biodata-resources/gcbr-selection-2022/" title="GCBR Selection Process Overview, 2022" target="_blank" >select resources</a> that ensure the long term preservation of biological data, and are of fundamental importance to the biological and life sciences community.`,
      link: {
        url: 'https://globalbiodata.org/scientific-activities/global-core-biodata-resources/',
        label: 'View the GCBR List',
      },
    },
  ]
  feedSettings: ActivityFeedSettings = {
    ...feedDefaultSettings,
    showOrganization: false,
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.release$ = this.http
      .get<
        GithubRelease[]
      >('https://api.github.com/repos/griffithlab/civic-v2/releases?per_page=1')
      .pipe(map((data) => data[0]))
  }
}
