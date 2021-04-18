import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-botnet-add',
  templateUrl: './botnet-add.component.html',
  styleUrls: ['./botnet-add.component.css']
})
export class BotnetAddComponent implements OnInit {

  displayName = new FormControl('', [Validators.required]);
  ipv4 = new FormControl('', [Validators.required]);
  arch = new FormControl('', [Validators.required]);
  osName = new FormControl('', [Validators.required]);
  kernel = new FormControl('', [Validators.required]);
  memory = new FormControl('', [Validators.required]);
  uptime = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.displayName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.ipv4.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.arch.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.osName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.kernel.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.memory.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.uptime.hasError('required')) {
      return 'You must enter a value';
    }
  }

}
