import { BreakpointsService } from './../../services/breakpoints.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { skills } from './../models/skills'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  skillsList: skills[];
  isPhone: boolean;


  
  
  constructor(public bo: BreakpointObserver, public bs: BreakpointsService) {
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
    }
    
    ngOnInit() {
      this.makePhone();
    }
    
    public makePhone(){
      this.bs.getBreakpoints()
      .subscribe((state: BreakpointState) => {
        this.isPhone = this.bs.getMatch(state);
      })
    }
    public openResume(){
      window.open('./assets/Resume.pdf','_blank');
    }
    public openGithub(){
      window.open('https://github.com/Hedgehuug','_blank')
    }

}
