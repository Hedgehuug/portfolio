import { Component, OnInit } from '@angular/core';
import { AnimationImportService } from './../../services/animation-import.service'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  } from '@angular/animations'

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.sass'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ]),
    trigger('openClose',[
      state('open',style({
        height:'300px',
        width:'100px',
        opacity:1,
        backgroundColor:'yellow'
      })),
      state('close',style({
        height:'100px',
        width:'300px',
        opacity:0,
        backgroundColor:'green'
      })),
      transition('* => *', [
        animate('1s', keyframes([
          style({opacity:0.7, offset: 0.2}),
          style({opacity:0.3, offset: 0.4}),
          style({opacity:0.6, offset: 0.6}),
          style({opacity:0.3, offset: 0.8}),
        ]))
      ])
    ])
  ]
})
export class PopUpComponent implements OnInit {
  isOpen = true;
  isShown = true;
  constructor() { }

  ngOnInit() {
  }

  transitionOver(){
    if (this.isOpen == true) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

}
