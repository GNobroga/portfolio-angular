import { Component, signal } from '@angular/core';
import IExperience from '../../models/IExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {


  public experiences = signal([
    {
      title: 'Desenvolvedor Full Stack',
      subtitle: 'Fapes · Estágio - Atual cargo',
      description:
        'É uma bolsa oferecida pelo Tribunal de Justiça do Espírito Santo (TJES) em parceria com a FAPES, com o objetivo de substituir e aprimorar o antigo sistema de cartório utilizado pelo TJES. Nesse projeto, atuo como desenvolvedor full-stack, utilizando o framework Angular para a construção de páginas flexíveis e dinâmicas, e Java com Spring Boot para a criação de Web API, seguindo o padrão REST.',
      isOpen: false,
    },
    {
      title: 'Monitor de Programação Web',
      subtitle: 'Facto - 2023',
      description:
        'Atuei como monitor de programação web no projeto Reprograma-se. Esse programa tem como meta ensinar programação para pessoas que nunca tiveram contato com ela anteriormente, permitindo que possam adentrar no mundo da Tecnologia da Informação. Nele, pude aprimorar algumas das minhas habilidades como desenvolvedor, pois, ao mesmo tempo em que transmitia conhecimento, era incentivado a buscar mais para oferecer sempre os melhores recursos para criar aplicações modernas.',
      isOpen: false,
    },
  ] as IExperience[]);

  public openDetail(index: number) {
    console.log('oii')
    this.experiences().forEach((experience, i) => {
      if (i === index)
        experience.isOpen = !experience.isOpen;
    });
  }
}
