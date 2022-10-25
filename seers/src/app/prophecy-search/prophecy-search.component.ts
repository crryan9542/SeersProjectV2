import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Prophecy } from '../prophecy';
import { ProphecyService } from '../prophecy.service';

@Component({
  selector: 'app-prophecy-search',
  templateUrl: './prophecy-search.component.html',
  styleUrls: ['./prophecy-search.component.css']
})
export class ProphecySearchComponent implements OnInit {
  prophecies$!: Observable<Prophecy[]>;
  private searchTerms = new Subject<string>();

search(term: string): void {
  this.searchTerms.next(term);
}

 ngOnInit(): void {
    this.prophecies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.prophecyService.searchProphecies(term)),
    );
  }
  

  constructor(private prophecyService: ProphecyService) { }

 

}
