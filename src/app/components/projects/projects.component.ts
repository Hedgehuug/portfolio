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

  constructor(public bs: BreakpointsService) {
  }

  ngOnInit() {
    console.log(this.makeProjects());
    this.makePhone;
    console.log(this.isPhone);
    
  }

  private makePhone(){
    this.bs.getBreakpoints()
    .subscribe((state: BreakpointState) => {
      this.isPhone = this.bs.getMatch(state);
    })
}

  public makeProjects(){
    this.projectsList = data["default"];
    return this.projectsList;
    }
  

}
