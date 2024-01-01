import { Component, Input } from '@angular/core';
import IProject from '../../../models/IProject';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('{{ duration }}', style({ opacity: '*' })),
      ]),
    ]),
  ],
})
export class ProjectComponent {

  @Input({ required: true, })
  public project!: IProject;
}
