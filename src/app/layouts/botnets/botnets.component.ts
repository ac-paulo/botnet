import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botnets',
  templateUrl: './botnets.component.html',
  styleUrls: ['./botnets.component.css']
})
export class BotnetsComponent implements OnInit {

  currentDatetime = 'Last 24 Hours';

  constructor() { }

  ngOnInit(): void {
  }

}
