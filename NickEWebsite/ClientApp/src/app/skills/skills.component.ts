import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {
      skill_name: 'Angular',
      proficency: 'Beginner'
    },
    {
      skill_name: 'C#',
      proficency: 'Beginner'
    },
    {
      skill_name: 'Java',
      proficency:'Proficent'
    },
    {
      skill_name: 'Python',
      proficency: 'Proficent'
    },
    {
      skill_name: 'C++',
      proficency: 'Intermideate'
    },
    {
      skill_name: 'HTML/CSS',
      proficency: 'Intermideate'
    },
    {
      skill_name: 'React',
      proficency: 'Intermideate'
    },
    {
      skill_name: 'NodeJS',
      proficency: 'Intermideate'
    },
    {
      skill_name: 'ExpressJS',
      proficency: 'Intermideate'
    },
    {
      skill_name: 'SQL',
      proficency: 'Intermideate'
    },
    {
      skill_name: 'AWS',
      proficency: 'Intermideate'
    },
  ]
   

}
