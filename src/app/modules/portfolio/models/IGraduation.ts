export default interface IGraduation {
  university: string;
  course: string;
  level: string;
  start: string;
  end: string;
  situation: 'Concluído' | 'Em andamento';
  description: string;
}
