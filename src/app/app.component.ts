import {Component, OnInit} from '@angular/core';
import {Botnets, BotnetsPanelService} from './components/botnets-panel/botnets-panel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'botnets';

  botnets: Botnets[] = [];

  constructor(private botnetService: BotnetsPanelService) {}

  ngOnInit(): void {
    this.botnetService
      .listAllBotnets()
      .subscribe(botnets => {
        console.log(botnets);
        this.botnets = botnets;
      });
  }
}
