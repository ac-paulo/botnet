import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-botnets',
  templateUrl: './list-botnets.component.html',
  styleUrls: ['./list-botnets.component.css']
})
export class ListBotnetsComponent implements OnInit {

  dateLast = new Date();
  botnets: any = [
    {
      id: 1,
      nickname: 'node-win-1',
      uuid: '5faf-43de-b4c5',
      ipv4: '142.41.2.101',
      exe: {
        'version': 'Win x64',
        'link': 'http://exploit.com',
        'name': 'Win-Malware_x64.exe'
      }
    },
    {
      id: 2,
      nickname: 'node-linux-1',
      uuid: '4b51-4752-90ef',
      ipv4: '32.1.122.45',
      exe: {
        'version': 'Linux x64',
        'link': 'http://exploit.com',
        'name': 'Linux-Centos7-Malware_x64.exe'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
