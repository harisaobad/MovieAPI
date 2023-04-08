import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  genres: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.fetchGenres();
  }

  fetchGenres() {
    this.dataService.getGenres().subscribe(response => { this.genres = response });
    console.log(this.genres);
  }
}
