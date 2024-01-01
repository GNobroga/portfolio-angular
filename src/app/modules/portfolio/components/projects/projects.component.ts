import { Component, signal } from '@angular/core';
import IProject from '../../models/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects = signal<IProject[]>([]);
}
