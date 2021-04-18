import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Botnets {
  uuid: string;
  displayName: string;
  osName: string;
  arch: string;
  kernel: string;
  ipv4: string;
  exe: string;
  memory: number;
  uptime: number;
  created_at: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root', // <---- Adiciona isto ao serviço
})

export class BotnetsPanelService {

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  listAllBotnets() {
    return this.http
      .get<Botnets[]>('http://localhost:8000/');
  }
}
