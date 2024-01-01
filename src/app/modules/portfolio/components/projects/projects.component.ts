import { AfterViewInit, Component, signal } from '@angular/core';
import IProject from '../../models/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projects = signal<IProject[]>([
    {
      title: 'Lojinha com microserviços C#',
      description: 'Nesse projeto eu aplico o conceito de microserviços, nele tem um client que consome alguns dos microserviços. A ideia é básica mas o conceito é o ponto chave desse projeto.',
      technologies: ['C#', 'Entity Framework', 'Auto Mapper', 'Swagger', 'Identity Server', 'Razor', 'Jwt', 'Duende Server',  'RabbitMQ'],
      link: 'https://github.com/GNobroga/LojinhaMicroServicesC-Sharp',
    },
    {
      title: 'API Team',
      description: 'É uma API para criar grupos de Pokemon com base em chamadas para o Pokemon API',
      technologies: ['C#', 'HttpClientFactory', 'Swagger', 'Docker'],
      link: 'https://github.com/GNobroga/Api-team',
    },
    {
      title: 'Projeto adoção fofa',
      description: 'Nesse projeto eu crio uma página web dinâmica utilizando o framework Angular, nele eu utilizo ideias da imaginação.',
      technologies: ['Angular', 'Bootstrap', 'Ngx-bootstrap'],
      link: 'https://github.com/GNobroga/ProjetoAdocaoFofa',
    },
    {
      title: 'Desafio UOL Backend',
      description: 'Nesse projeto eu crio uma página web dinâmica utilizando o framework Angular, nele eu utilizo ideias da imaginação.',
      technologies: ['C#', 'Entity Framework', 'Sqlite'],
      link: 'https://github.com/GNobroga/DesafioBackendUol',
    },
    {
      title: 'To do list com Razor MVC',
      description: 'Lista de tarefas feita utilizando Razor MVC, Entity framework, Boostrap e autenticação via Cookie.',
      technologies: ['C#', 'Entity Framework', 'Identity', 'Bootstrap', 'Sqlite'],
      link: 'https://github.com/GNobroga/ToDoListMelhorada',
    },
    {
      title: 'Sistemas de vendas API',
      description: 'É uma simples API feito em Java, utilizando JPA com a implementação do Hibernate para construir as entidades que irão compor a lógica do negócio.',
      technologies: ['Java', 'JPA', 'Hibernate', 'H2'],
      link: 'https://github.com/GNobroga/SistemasVendas',
    },
    {
      title: 'Desafio Backend Picpay',
      description: 'Desafio técnico para praticar programação, nele eu fiz o desafio do Picpay utilizando NodeJS, Typescript e Sequelize como ORM.',
      technologies: ['NodeJS', 'Sequelize', 'Express'],
      link: 'https://github.com/GNobroga/PicpayDesafioBackend',
    },
    {
      title: 'GLFitMobile',
      description: 'É um aplicativo mobile para um projeto de academia que estou desenvolvendo, nele eu utilizo React Native, React Navigation e Reducer pra centralizar o estado da aplicação.',
      technologies: ['Redux', 'React Redux', 'React Navigation', 'Styled Components', 'Typescript', 'Vite'],
      link: 'https://github.com/GNobroga/GLFITMobile',
    },
    {
      title: 'Exibir Caminho Euleriano',
      description: 'É uma aplicação para exibir o caminho euleriano apartir de um arquivo .txt, não foi utilizado nenhuma biblioteca externa.',
      technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/GNobroga/ExibidorCaminhoEulerianoBackend',
    },
    {
      title: 'Extrato Conta Corrente',
      description: 'É um sistema de cadastro de extrado e exibição por período',
      technologies: ['Angular', 'Typescript', 'C#', 'Entity Framework', 'Docker'],
      link: 'https://github.com/GNobroga/extrato-conta-corrente-backend',
    },
    {
      title: 'Lanches Prontos',
      description: 'É um sistema para gerenciar pedidos de lanches',
      technologies: ['Razor', 'Entity Framework', 'PostgreSQL'],
      link: 'https://github.com/GNobroga/LanchesProntosOnline',
    },
    {
      title: 'Lista de tarefas - Angular',
      description: 'É o frontend para consumir um backend de lista de tarefas que está em outro repositório.',
      technologies: ['Angular', 'Auth0'],
      link: 'https://github.com/GNobroga/FrontendTarefasAngular',
    },
    {
      title: 'Lista de tarefas - Java',
      description: 'É o backend para produzir conteúdo pro frontend em Angular',
      technologies: ['Java', 'Spring boot', 'Spring Security', 'Jwt'],
      link: 'https://github.com/GNobroga/BackendTarefasJava',
    },
    {
      title: 'Chat usando GRPC e JavaFX',
      description: 'Esse projeto foi feito para atender o trabalho da disciplina de Sistemas de Distribuídos',
      technologies: ['Java', 'JavaFX', 'Maven', 'GRPC'],
      link: 'https://github.com/GNobroga/Chat-gRPC',
    },
  ]);
}
