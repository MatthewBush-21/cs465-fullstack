import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  editForm!: FormGroup;
  submitted = false;
  tripCode!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    this.tripCode = this.route.snapshot.params['tripCode'];

    this.editForm = this.formBuilder.group({
      code: [{value: '', disabled: true}, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (this.tripCode) {
      this.tripDataService.getTrip(this.tripCode).subscribe({
        next: (data: any) => {
          const tripData = Array.isArray(data) ? data[0] : data;
          if (tripData && tripData.start) {
            tripData.start = new Date(tripData.start).toISOString().split('T')[0];
          }
          this.editForm.patchValue(tripData);
        },
        error: (err: any) => {
          console.error('Error fetching trip:', err);
        }
      });
    }
  }

  get f() { return this.editForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      // Use getRawValue() to include the disabled 'code' field
      this.tripDataService.updateTrip(this.tripCode, this.editForm.getRawValue()).subscribe({
        next: () => {
          this.router.navigate(['/trips']);
        },
        error: (error: any) => {
          console.error('Error updating trip:', error);
        }
      });
    }
  }
}