import { Component, OnInit } from '@angular/core';
import { EventFeedMode } from '@app/generated/civic.apollo';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  feedMode =  EventFeedMode.Unscoped

  constructor() {
  }


  ngOnInit() {
  }

}
