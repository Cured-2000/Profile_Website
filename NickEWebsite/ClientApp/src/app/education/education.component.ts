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
      degree:'Bachelors of Science in Computer Science',
      description:'After gaining a substantial amount of credits from community college I chose to enroll at the University of North Texas because the engineering department had a decent reputation and I appreciated the campus culture. Most of my software development knowlege was gained here. While I was enrolled at UNT the primary focus of my degree was cybersecurity.'
    },
    {
      school_name: 'Dallas Community College',
      date: 'May 2020 - August 2021',
      degree: 'Not Applicable',
      description: 'I enrolled at DCCCD and gained knowlege of basic programming fundementals and took some upper level math courses like linear algebra and calculus.'
    },
    {
      school_name: 'Navarro Community College',
      date: 'August 2018 - January 2020',
      degree: 'Associates of Science FOS Computer Science',
      description: 'During my studies at Navarro I aquired my basics and gained exposure to some core computer science mathematical fundementals. '
    },
  ]

}
