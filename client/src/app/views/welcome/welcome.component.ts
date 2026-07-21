import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
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
