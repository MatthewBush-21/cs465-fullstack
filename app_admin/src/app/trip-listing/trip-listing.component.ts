import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips$!: Observable<Trip[]>;

  constructor(
    private tripService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.trips$ = this.tripService.getTrips();
  }

  public goToAddTrip(): void {
    this.router.navigate(['/add-trip']);
  }
}