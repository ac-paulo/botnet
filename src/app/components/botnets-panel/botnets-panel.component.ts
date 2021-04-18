import {Component, Input, OnInit} from '@angular/core';
import {Botnets, BotnetsPanelService} from './botnets-panel.service';


@Component({
  selector: 'app-botnets-panel',
  templateUrl: './botnets-panel.component.html',
  styleUrls: ['./botnets-panel.component.css']
})
export class BotnetsPanelComponent implements OnInit {

  panelOpenState = false;

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
