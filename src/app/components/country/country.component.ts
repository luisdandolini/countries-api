import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryPreview: Country[] = [];

  constructor(
    public country: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.country.getCountries().subscribe((data: any) => {
      this.countryPreview = data;
      console.log(this.countryPreview);
    })
  }

}
