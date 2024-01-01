import { Component, Input } from '@angular/core';
import IProject from '../../../models/IProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input({ required: true, })
  public project!: IProject;
}
