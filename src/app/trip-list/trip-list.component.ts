import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TripListComponent {
  start = '';
  end = '';
  trips: { start: string; end: string }[] = [];
  cities: string[] = [
    'Pune', 'Punjab', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata'
  ];

  startSearch: string = '';
  endSearch: string = '';
  filteredStartCities: string[] = [];
  filteredEndCities: string[] = [];
  showStartDropdown = false;
  showEndDropdown = false;


  filterCities(type: 'start' | 'end') {
    const searchValue = type === 'start' ? this.startSearch : this.endSearch;
    const filtered = this.cities.filter(city =>
      city.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (type === 'start') {
      this.filteredStartCities = filtered;
    } else {
      this.filteredEndCities = filtered;
    }
  }

  selectCity(type: 'start' | 'end', city: string) {
    if (type === 'start') {
      this.start = city;
      this.startSearch = city;
      this.end = '';
      this.endSearch = '';
      this.filteredEndCities = [];
      this.filteredStartCities = [];
    } else {
      this.end = city;
      this.endSearch = city;
      this.filteredEndCities = [];
    }
  }

  showDropdown(type: 'start' | 'end') {
    if (type === 'start') this.showStartDropdown = true;
    else this.showEndDropdown = true;
  }

  hideDropdown(type: 'start' | 'end') {
    setTimeout(() => {
      if (type === 'start') this.showStartDropdown = false;
      else this.showEndDropdown = false;
    }, 150); // delay to allow click before hiding
  }

  // cities: string[] = [
  //   'New York',
  //   'London',
  //   'Tokyo',
  //   'Paris',
  //   'Berlin',
  //   'Singapore',
  //   'Dubai',
  //   'Sydney'
  // ];


  addTrip() {
    if (this.start && this.end) {
      this.trips.push({ start: this.start.trim(), end: this.end.trim() });
      this.start = '';
      this.end = '';
    }
  }

  getCode(city: string): string {
    return city.slice(0, 3).toUpperCase();
  }

  getCircleColor(index: number): string {
    if (index < this.trips.length - 1) {
      const current = this.trips[index];
      const next = this.trips[index + 1];

      if (current.end === next.start) {
        return '#28a745'; // Green
      }

      if (current.start === next.start && current.end === next.end) {
        return '#888'; // Gray
      }

      return '#f90'; // Orange
    }

    return '#333'; // Final/default circle
  }

}