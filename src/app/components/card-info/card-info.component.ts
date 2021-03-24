import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input() className;
  @Input() iconName;
  @Input() title;
  @Input() valueToCard;
  @Input() suffix = false;
  @Input() prefix = false;
  @Input() subValue;
  @Input() iconFooterName;
  @Input() footerDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
