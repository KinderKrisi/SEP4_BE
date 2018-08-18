import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Movie } from '../_models/movie';
import { MovieService } from '../_services/movie/movie.service';

@Component({
  selector: 'app-admin-create-movie',
  templateUrl: './admin-create-movie.component.html',
  styleUrls: ['./admin-create-movie.component.css']
})
export class AdminCreateMovieComponent implements OnInit {
  
 
  createMovieForm: FormGroup;
  submitted = false;
  minDateValue = new Date();
  dummyDate = new Date();
  

  movie: Movie;
  startTimeMill: number;
  startTime = new Date();

  constructor(private movieService: MovieService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.minDateValue.setDate(this.minDateValue.getDate() + 1);
    this.createMovieForm = this.formBuilder.group({
      name: ['', Validators.required],
      length: ['', [Validators.required, Validators.pattern('[1-9]+[0-9]*')]],
      language: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      startTime: [Date, Validators.required] ,
      price: ['', [Validators.required, Validators.pattern('[1-9]+[0-9]*')]]
    });
  }

  createUser(movie: Movie): void {
    this.movieService.createMovie(this.movie).subscribe();
  }
  // convenience getter for easy access to form fields
  get f() { return this.createMovieForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createMovieForm.invalid) {
      return;
    }

    console.log("time inside submit form", this.startTimeMill);
    
    this.movie = {
      'name': this.createMovieForm.value.name,
      "length": this.createMovieForm.value.length,
      'language': this.createMovieForm.value.language,
      'startTimeMill': this.startTimeMill,
      'price': this.createMovieForm.value.price
      }
    console.log('movie created ', this.movie);
    this.createUser(this.movie);
  }
  setDate(selectedDate: Date): void {
    this.startTime = selectedDate;
    this.startTimeMill = this.startTime.getTime();
    console.log("selected Date Milliseconds", this.startTimeMill);
  }
}
