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
      description:'A website that allows users to program with each other live on the same document (Google Docs but for Pair Programming). It is currently in the end stages of development. The project is primarily programmed in Typescript with React components and a Node.js framework with Socket.io to support live editing. We used the Monaco editor to handle highlighting “keywords” within a user selected programming language. We utilized a Scrum team structure so a team of people would be assigned to develop specific webpages or components within a sprint.'
    }
  ]

}
