import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  data = 
    {
      title: 'About Me:',
      about_description: 'Hello my name is Nicholas Espinosa I recently graduated from the University of North Texas. Go mean green! Currenly I am looking for full time entry level software enginner oprotunities. I have experience in full stack development primarily using react however I am currently learning the .NET framework to get familair with Angular. I am currently based in the Dallas-Fort Worth Metroplex but I am 100% open to relocation.'
    }
  
  constructor() { }

  ngOnInit(): void {
  }


}
