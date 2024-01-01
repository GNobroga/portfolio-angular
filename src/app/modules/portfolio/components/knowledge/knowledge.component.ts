import { Component, signal } from '@angular/core';
import IKnowledge from '../../models/IKnowledge';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.png',
      alt: 'Icone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css.png',
      alt: 'Icone de conhecimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/js.png',
      alt: 'Icone de conhecimento de JavaScript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento de NodeJS'
    },
    {
      src: 'assets/icons/knowledge/c-sharp.png',
      alt: 'Icone de conhecimento de C#'
    },
  ]);
}
