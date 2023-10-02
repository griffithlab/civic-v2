import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { EventFeedMode, Maybe } from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CvcNewsItem } from './news-item-list/news-item-list.component'

interface GithubRelease {
  html_url: string
  name: string
  published_at: string
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  release$?: Observable<GithubRelease>

  feedMode = EventFeedMode.Unscoped

  newsItems: CvcNewsItem[] = [
    {
      title: 'Introducting Molecular Profiles',
      date: '2023-01-09',
      text: `Today we have rolled out support for a new core concept in CIViC. Molecular Profiles are logical combinations of one or more CIViC Variants. While most Molecular Profiles will consist of a single Variant (“Simple”) they will also allow users to build “Complex” (multi-variant) Molecular Profiles to associate Evidence with. These complex profiles expand the CIViC data model to allow for clinical significance to be evaluated within contexts such as variant co-occurrence or mutual exclusivity. Going forward, Evidence will be associated with a Molecular Profile rather than directly with a Variant.`,
    },
    {
      title: 'Introducing Molecular Profiles (HTML)',
      date: '2023-01-09',
      htmlText: `Today we have rolled out support for a new core concept in CIViC: <a href="https://civic.readthedocs.io/en/latest/model/molecular_profiles.html" target="_blank"> Molecular Profiles</a>. Molecular Profiles are logical combinations of one or more CIViC Variants. While most Molecular Profiles will consist of a single Variant (“Simple”) they will also allow users to build “Complex” (multi-variant) Molecular Profiles to associate Evidence with. These complex profiles expand the CIViC data model to allow for clinical significance to be evaluated within contexts such as variant co-occurrence or mutual exclusivity. Going forward, Evidence will be associated with a Molecular Profile rather than directly with a Variant. If you have any questions about this change, please feel free to <a href="mailto:help@civicdb.org">contact us</a>. We have also prepared a <a href="https://www.youtube.com/watch?v=--i54jy746w" target="_blank" >video</a > explaining this new feature.`,
      imageUrl: 'https://i3.ytimg.com/vi/--i54jY746w/hqdefault.jpg',
      link: {
        url: 'https://www.youtube.com/watch?v=--i54jY746w',
        label: 'View Molecular Profiles Intro Video',
      },
    },
  ]
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.release$ = this.http
      .get<GithubRelease[]>(
        'https://api.github.com/repos/griffithlab/civic-v2/releases?per_page=1'
      )
      .pipe(map((data) => data[0]))
  }
}
