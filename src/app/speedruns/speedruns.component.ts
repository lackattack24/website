import {
  Component,
  OnInit
} from '@angular/core';

import { ConfigService } from './speedruns.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  ListSortFieldSelectorModel
} from '@blackbaud/skyux/dist/core';

@Component({
  selector: 'my-speedruns',
  templateUrl: './speedruns.component.html',
  providers: [ConfigService]
})
export class SpeedrunsComponent implements OnInit {
  public service: any;
  public config: Config;
  public items: any[] = [
    { id: '1', event: 'AGDQ 2015', game: 'The Legend of Zelda', category: 'any% no up+a', notes: 'Race vs. Darkwing Duck' },
    { id: '2', event: 'AGDQ 2016', game: 'The Legend of Zelda', category: 'any% no up+a'},
    { id: '3', event: 'AGDQ 2016', game: 'Super Mario Bros.', category: 'warps (race)', notes: 'Race vs. darbian/GreenDeathFlavor' },
    {
      id: '4', event: 'SGDQ 2016', game: 'Super Mario RPG: Legend of the Seven Stars', category: 'any%',
      notes: 'English Version, SGDQ Finale'
    },
    { id: '5', event: 'AGDQ 2017', game: 'Big Nose the Caveman', category: 'any%', notes: 'Awful Games Done Quick Block' },
    { id: '6', event: 'SGDQ 2017', game: 'Super Mario Bros.', category: 'warpless', notes: 'Super Mario Bros. 2D Relay Race' },
    { id: '7', event: 'SGDQ 2018', game: 'The Legend of Zelda', category: 'Low% (race)', notes: 'Race vs. EunosXX/BeeTeas' },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '9',
      event: 'Southern Speedrunners Summit',
      game: 'Big 20 Race',
      category: 'Beat the games'
    },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Super Marihour Challenge',
      category: 'Beat the games'
    },
    {
      id: '9',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '8',
      event: 'Southern Speedrunners Summit',
      game: 'The Legend of Zelda',
      category: 'Low%'
    },
    {
      id: '10',
      event: 'Seaside Speed Bash 2018',
      game: 'The Legend of Zelda: A Link to the Past',
      category: 'NMG'
    }
  ];

  public asyncHeading = new BehaviorSubject<string>('');

  constructor(service: ConfigService) {
    this.service = service.getPersonalBests();
  }

  public ngOnInit() {
    // Simulate async request:
    setTimeout(() => {
      this.asyncHeading.next('Column1');
    }, 1000);
  }

  public showConfig() {
    console.log('Show personal bests');
    console.log(this.service);
  }

  public sortChanged(activeSort: ListSortFieldSelectorModel) {
    const sortField = activeSort.fieldSelector;
    const descending = activeSort.descending;

    this.items = this.items.sort((a: any, b: any) => {
      let value1 = a[sortField];
      let value2 = b[sortField];

      if (value1 && typeof value1 === 'string') {
        value1 = value1.toLowerCase();
      }

      if (value2 && typeof value2 === 'string') {
        value2 = value2.toLowerCase();
      }

      if (value1 === value2) {
        return 0;
      }

      let result = value1 > value2 ? 1 : -1;

      if (descending) {
        result *= -1;
      }

      return result;
    }).slice();
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
