import { Component, signal } from '@angular/core';
import IGraduation from '../../models/IGraduation';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrl: './graduation.component.scss'
})
export class GraduationComponent {

  public graduations = signal<IGraduation[]>([
    {
      university: 'Ifes - Instituto Federal do Espírito Santo',
      level: 'Bacharelado',
      course: 'Sistemas de Informação',
      start: 'maio de 2021',
      end: 'dezembro de 2024',
      situation: 'Em andamento',
      description: 'Estou atualmente cursando Sistemas de Informação no Instituto Federal do Espírito Santo, adquirindo conhecimentos sólidos em áreas como programação, análise de sistemas e gestão de projetos. Meu curso abrange uma ampla gama de disciplinas, proporcionando uma compreensão abrangente dos princípios fundamentais e das últimas tendências em tecnologia da informação. Estou comprometido em aplicar esses conhecimentos de forma prática, buscando constantemente aprimorar minhas habilidades para contribuir efetivamente para projetos e desafios na área de tecnologia.',
    }
  ]);
}
