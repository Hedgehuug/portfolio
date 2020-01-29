import { BreakpointsService } from './services/breakpoints.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportModule } from './materialImport/material-import/material-import.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    FlexLayoutModule
  ],
  providers: [
    BreakpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
