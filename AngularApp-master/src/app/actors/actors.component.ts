import { Component, OnInit } from '@angular/core';
import { IActors } from './actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent {
  actors: IActors[] = [
    {
      Ime: 'Tom',
      Prezime: 'Cruise',
      Datum: '5.10.',
      Slika: 'assets/glumac1.jpg',
      ImageWidth: 318,
    },
    {
      Ime: 'Jennifer',
      Prezime: 'Connelly',
      Datum: '5.11.',
      Slika: 'assets/glumac2.jpg',
      ImageWidth: 318,
    },
    {
      Ime: 'Miles',
      Prezime: 'Teller',
      Datum: '10.12.',
      Slika: 'assets/glumac3.jpg',
      ImageWidth: 318,
    },
    {
      Ime: 'Val',
      Prezime: 'Kilmer',
      Datum: '4.4.',
      Slika: 'assets/gluma4.jpg',
      ImageWidth: 318,
    },
  ];
}
