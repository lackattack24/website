import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  private configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {

  }
  public getConfig() {
    return this.http.get(this.configUrl);
  }
  public getPersonalBests() {
    console.log('get personal bests called in service');
    return console.log(this.http.get('https://www.speedrun.com/api/v1/users/qj233nxk/personal-bests'));
  }
}
