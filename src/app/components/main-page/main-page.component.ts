import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { skills } from './../models/skills'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  bpList = [
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletPortrait,
    Breakpoints.WebPortrait]
  isPhone: boolean;
  skillsList: skills[];

  
  
  constructor(public bo: BreakpointObserver) {
    this.skillsList = [
      {name:'Angular',source:"./assets/Imported_Components/icons8/angular.png"},
      {name:'JavaScript',source:"./assets/Imported_Components/icons8/js.png"},
      {name:'html5',source:"./assets/Imported_Components/icons8/html.png"},
      {name:'css3',source:"./assets/Imported_Components/icons8/css.png"},
      {name:'Python',source:"./assets/Imported_Components/icons8/python.png"},
      {name:'Adobe XD',source:"./assets/Imported_Components/icons8/xd.png"},
      {name:'Photoshop',source:"./assets/Imported_Components/icons8/photoshop.png"},
      {name:'Github',source:"./assets/Imported_Components/icons8/github.png"}
    ]
    if (this.bo.isMatched(this.bpList)) {
        this.isPhone = true;
      }
      else {
        this.isPhone = false;
      }
    }
    
    ngOnInit() {
    this.bo.observe(this.bpList)
      .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isPhone = true;
      } 
      else {
        this.isPhone = false;
      }
    })
    

  }

}
