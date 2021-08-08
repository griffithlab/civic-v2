import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evidence-home',
  templateUrl: './evidence-home.page.html',
  styleUrls: ['./evidence-home.page.less']
})
export class EvidenceHomePage implements OnInit {

  tableView: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
