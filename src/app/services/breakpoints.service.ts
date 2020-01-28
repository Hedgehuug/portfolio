import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  bpList = [
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletPortrait,
    Breakpoints.WebPortrait]
  isPhone: boolean;

  constructor(public bo: BreakpointObserver) {
  }

  public getList(){
    return this.bpList
  }
  public getMatch(state:BreakpointState){
    if(state.matches){
    this.isPhone = true;
      } 
    else {
      this.isPhone = false;
    }
    return this.isPhone
  }

  public getBreakpoints(){
    const returned = this.bo.observe(this.bpList)
    return returned;
  }
}

