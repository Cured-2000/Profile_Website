import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {
      school_name: 'University of North Texas',
      date: 'January 2021 - December 2022',
      degree:'Bacheloers of Science in Computer Science',
      description:''
    },
    {
      school_name: 'Dallas Community College',
      date: 'May 2020 - August 2021',
      degree: 'Not Applicable',
      description: ''
    },
    {
      school_name: 'Navarro Community College',
      date: 'August 2018 - January 2020',
      degree: 'Associates of Science FOS Computer Science',
      description: ''
    },
  ]

}
