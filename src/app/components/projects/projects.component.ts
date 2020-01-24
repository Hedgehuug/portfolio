import { projects } from './../models/projects';
import { Component, OnInit } from '@angular/core';
import * as data from './../../projects.json';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projectsList: projects[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.makeProjects());
    
  }
  public makeProjects(){
    this.projectsList = data["default"];
    
    return this.projectsList;
    }
  

}
