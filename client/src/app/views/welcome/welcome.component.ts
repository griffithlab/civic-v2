import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventFeedMode, Maybe } from '@app/generated/civic.apollo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface GithubRelease {
  html_url: string;
  name: string;
  published_at: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  release$?: Observable<GithubRelease>;

  feedMode = EventFeedMode.Unscoped;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.release$ = this.http
      .get<GithubRelease[]>(
        'https://api.github.com/repos/griffithlab/civic-v2/releases?per_page=1'
      )
      .pipe(map((data) => data[0]));
  }
}
