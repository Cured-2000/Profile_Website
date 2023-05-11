import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expir',
  templateUrl: './expir.component.html',
  styleUrls: ['./expir.component.css']
})
export class ExpirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {
      name: 'Coderator.io',
      description: 'A website that allows users to program with each other live on the same document (Google Docs but for Pair Programming). It is currently in the end stages of development. The project is primarily programmed in Typescript with React components and a Node.js framework with Socket.io to support live editing. We used the Monaco editor to handle highlighting “keywords” within a user selected programming language. We utilized a Scrum team structure so a team of people would be assigned to develop specific webpages or components within a sprint.',
      image_data: 'assets/Home_ex.png',
      acomplishments: ['helped',''],
      github_link:'',
      date: 'August 2022 - December 2022',
      tech_list:''
    },
    {
      name: 'Voice App',
      description: 'Sponsored Project, an app that trains upcoming singers and allows users to record their voices and receive critical feedback. We utilized a Scrum team structure with sprints through the semester to finish components and any corresponding documentation. ',
      image_data: '',
      acomplishments: ['helped', ''],
      github_link: '',
      date: 'January 2022 - May 2022',
      tech_list: ''
    },
    {
      name: 'Bella La Padula Implementation',
      description: 'Python program that demonstrated controlled access system using the Bell-LaPadula Model that reads a csv file.',
      image_data: '',
      acomplishments: ['helped', ''],
      github_link: '',
      date: 'Febuary 2022 - March 2022',
      tech_list: ''
    },
    {
      name: 'Child care Center Sort',
      description: 'This program takes a csv. file of all the childcare centers in the US and sorts them alphabetically. The purpose of this assignment was to show the power of Query Languages by not being able to use them for these assignments. The sorting was done manually using various sorting implementations i.e., quick sort, bubble sort, insertion sort etc.  ',
      image_data: '',
      acomplishments: ['helped', ''],
      github_link: '',
      date: 'March 2021 - May 2021',
      tech_list: ''
    },


  ]

}
