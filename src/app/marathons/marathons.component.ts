import {
  Component,
  OnInit
} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  ListSortFieldSelectorModel
} from '@blackbaud/skyux/dist/core';

@Component({
  selector: 'my-marathons',
  templateUrl: './marathons.component.html'
})
export class MarathonsComponent implements OnInit {
  public searchText: string;
  public displayedItems: any;
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
      id: '10',
      event: 'Southern Speedrunners Summit',
      game: 'The Super Marihour Challenge',
      category: 'Beat the games'
    },
    {
      id: '11',
      event: 'Southern Speedrunners Summit',
      game: 'Super Mario All-Stars',
      category: 'All four warpless'
    },
    {
      id: '12',
      event: 'Southern Speedrunners Summit',
      game: 'Super Mario RPG: Legend of the Seven Stars',
      category: 'any%',
      notes: 'race with Millnium, Albrecht84'
    },
    {
      id: '13',
      event: 'Seaside Speed Bash 2018',
      game: 'The Legend of Zelda: A Link to the Past',
      category: 'NMG'
    },
    {
      id: '14',
      event: 'Seaside Speed Bash 2018',
      game: 'Yume Kojo: Doki Doki Panic!',
      category: 'All Levels'
    },
    {
      id: '15',
      event: 'Seaside Speed Bash 2018',
      game: 'Tetris',
      category: '100 lines, 0 start',
      notes: 'Best of 3 vs. Xarnax'
    },
    {
      id: '16',
      event: 'Seaside Speed Bash 2018',
      game: 'Yoshi\'s Island',
      category: 'warpless',
      notes: 'race vs. Albrecht84'
    },
    {
      id: '17',
      event: 'Seaside Speed Bash 2018',
      game: 'Super Mario 64',
      category: '70 star',
      notes: 'race vs. Millnium'
    },
    {
      id: '18',
      event: 'Southern Speedrunners Summit',
      game: 'Super Mario 64',
      category: '70 star',
      notes: 'race vs. Millnium'
    }
  ];

  public asyncHeading = new BehaviorSubject<string>('');

  public ngOnInit() {
    // Simulate async request:
    setTimeout(() => {
      this.asyncHeading.next('Column1');
    }, 1000);
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

  public searchApplied(searchText: string) {
    let filteredItems = this.items;
    this.searchText = searchText;

    if (searchText) {
      filteredItems = this.items.filter(function (item: any) {
        let property: any;

        for (property in item) {
          if (item.hasOwnProperty(property) && (property === 'title' || property === 'note')) {
            if (item[property].indexOf(searchText) > -1) {
              return true;
            }
          }
        }

        return false;
      });
    }
    this.displayedItems = filteredItems;
  }
}
