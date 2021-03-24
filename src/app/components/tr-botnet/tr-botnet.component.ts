import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tr-botnet',
  templateUrl: './tr-botnet.component.html',
  styleUrls: ['./tr-botnet.component.css']
})
export class TrBotnetComponent implements OnInit {

  @Input() botnetID;
  @Input() botnetUUID;
  @Input() botnetNickname;
  @Input() botnetIpv4;
  @Input() botnetBinVersion;
  @Input() botnetBinName;
  @Input() botnetBinLink;

  constructor() { }

  ngOnInit(): void {
  }

}
