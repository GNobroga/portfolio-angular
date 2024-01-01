import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    KnowledgeComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
  ]
})
export class PortfolioModule { }
