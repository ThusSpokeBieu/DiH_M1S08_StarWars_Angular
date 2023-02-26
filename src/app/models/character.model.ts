import { ICharacter } from "../interfaces/character.interface";

export class Character implements ICharacter {
  id?: number;
  nome: string;
  habilidade: string;
  planeta: string;
  armas: string;
  avatar: string;

  constructor(char: Character){
    this.id = char.id;
    this.nome = char.nome;
    this.habilidade = char.habilidade;
    this.planeta = char.planeta;
    this.armas = char.armas;
    this.avatar = char.avatar; 
  }
}