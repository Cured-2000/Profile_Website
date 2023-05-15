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
      name: 'Personal Website',
      description: 'A website that displays my personal projects and eduacation to prospective employers. This will eventually turn into a blog site where I can vent about SWE related topics and other tech related topics',
      image_data: '',
      acomplishments: ['Developed functional and reusable components ', 'Learned MVC architecture', ],
      github_link: 'https://github.com/Cured-2000/Profile_Website',
      date: 'March 2022 - Current',
      tech_list: 'C#, .NET, Typescript, Angular, HTML, CSS, Digital Ocean, Apache',
      demo_link:'https://nickespinosa.net'
    },
    {
      name: 'Coderator.io',
      description: 'A website that allows users to program with each other live on the same document (Google Docs but for Pair Programming). It is currently in the end stages of development. The project is primarily programmed in Typescript with React components and a Node.js framework with Socket.io to support live editing. We used the Monaco editor to handle highlighting “keywords” within a user selected programming language. We utilized a Scrum team structure so a team of people would be assigned to develop specific webpages or components within a sprint.',
      image_data: 'assets/Home_ex.png',
      acomplishments: ['Developed functional and reusable React components', 'Added Google and GitHub OAuth integrations to ourweb app', 'Created API routes and functionalties','Developed a Homepage with corresponding sponsor requiremnts ','Created Swagger Documentation for React components and their REST functionalities (if any)','Learned about websockes how they comunicate with the server','Tested database reponses via SQL querys'],
      github_link: 'https://github.com/codecatchllc',
      date: 'August 2022 - December 2022',
      tech_list: 'ExpressJS, NodeJS, ReactJS, Jest, Typescript, Docker, PostgreSQL, Swagger',
      demo_link: 'https://codecatch.net'
    },
    {
      name: 'Voice App',
      description: 'Sponsored Project, an app that trains upcoming singers and allows users to record their voices and receive critical feedback. We utilized a Scrum team structure with sprints through the semester to finish components and any corresponding documentation. ',
      image_data: '',
      acomplishments: ['Designed a pitch analysis android component', 'Elicted requirements from our client', 'Created Kanban charts and flow models for our app'],
      github_link: 'https://github.com/rajugrj510/Vocal-App/tree/Tone-Analyzer',
      date: 'January 2022 - May 2022',
      tech_list: 'Flutter, Dart, Android Studio',
      demo_link: "https://www.youtube.com/watch?v=EOAj44zIrfY"
    },
    {
      name: 'Bella La Padula Implementation',
      description: 'Python program that demonstrated a controlled access system using the Bell-LaPadula Model that reads a csv file. This was done by using two seperate classes one called "Subjects" and another called "Objects". Subjects woudld have an atribute such as confidential, secret, and top secret. The object would have the same lables and could only be accessed by subjects with a coresponding label. A refernce monitor would store these "objects" and detrmine if the subject can accsess the desired "object".',
      image_data: '',
      acomplishments: ['Developed a funtioning acess contol matrix', 'Utilied traqulity priniples to implememt a reference model'],
      github_link: 'https://github.com/Cured-2000/3550_project_1',
      date: 'Febuary 2022 - March 2022',
      tech_list: 'Python',
      demo_link: 'Instructions on GitHub'
    },
    {
      name: 'Child care Center Sort',
      description: 'This program takes a csv. file of all the childcare centers in the US and sorts them alphabetically. The purpose of this assignment was to show the power of Query Languages by not being able to use them for these assignments. The sorting was done manually using various sorting implementations i.e., quick sort, bubble sort, insertion sort etc.  ',
      image_data: '',
      acomplishments: ['Utilized Google Cloud platform resources to run the large amounts of data in a timely manner.', 'Learned various sorting algorithims and thier complexity','Gained expirence with virtual machines in Google Cloud Platform'],
      github_link: 'https://github.com/Cured-2000/CS-Child_care_sorts',
      date: 'March 2021 - May 2021',
      tech_list: 'C++, Google Cloud Platform',
      demo_link: 'Instructions on GitHub'
    },


  ]


}
