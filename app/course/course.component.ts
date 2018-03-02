import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
      <h2>Title: {{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
      </ul>
      `
})
export class CourseComponent {
  title = "Listt of courses:";
  courses;

  // logic to call a http service

}