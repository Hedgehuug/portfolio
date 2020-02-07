import { BreakpointState } from '@angular/cdk/layout';
import { BreakpointsService } from './../../services/breakpoints.service';
import { projects } from './../models/projects';
import { Component, OnInit } from '@angular/core';
import * as data from './../../projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projectsList: projects[];
  isPhone: boolean;
  viewType: String;

  constructor(public bs: BreakpointsService) {
  }
  
  ngOnInit() {
    this.viewType = 'blank-project-state'
    this.makePhone();
    
  }

  public makePhone(){
    this.bs.getBreakpoints()
    .subscribe((state: BreakpointState) => {
      this.isPhone = this.bs.getMatch(state);
      return this.isPhone
    })
}

  public makeProjects(){
    this.projectsList = data["default"];
    return this.projectsList;
    }
  
  public openedPortrait(){
    if (this.isPhone) {
      this.viewType = 'opened-portrait-state'
    }
    console.log(this.viewType);
    

  }
    
  

}
