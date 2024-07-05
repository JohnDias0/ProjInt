import { Pastoral } from '../models/Pastoral';

export class PastoralFactory {
  private instances: Pastoral[][] = [];
  constructor() {
    const TercoHomens: Pastoral = new Pastoral(0, 'Terço dos Homens');
    const LegioMariae: Pastoral = new Pastoral(1, 'Legião de Maria ');
    const Ministros: Pastoral = new Pastoral(2, 'Ministros / Sacristãos');
    const GOSemeando: Pastoral = new Pastoral(0, 'Grupo de Oração Semeando');
    const Sagrado: Pastoral = new Pastoral(1, 'Apostolado da Oração');
    const MaesOram: Pastoral = new Pastoral(2, 'Mães que oram pelos filhos');
    const CestaBasica: Pastoral = new Pastoral(
      0,
      'Cesta Básica / Pastoral de Rua'
    );
    const Financas: Pastoral = new Pastoral(1, 'Pastoral das Finanças');
    const EMC: Pastoral = new Pastoral(
      2,
      'Encontro Marcado Com Cristo (E.M.C.)'
    );
    const ECC: Pastoral = new Pastoral(
      0,
      'Encontro de Casais Com Cristo (E.C.C.)'
    );
    const ServumMariae: Pastoral = new Pastoral(1, 'Servum Mariae');
    const Cerimoniarios: Pastoral = new Pastoral(2, 'Cerimonários');
    // const Coroinhas: Pastoral = new Pastoral(13, 'Coroinhas');
    this.instances.push([TercoHomens, LegioMariae, Ministros],[ GOSemeando, Sagrado, MaesOram],[ CestaBasica, Financas, EMC],[ ECC, ServumMariae, Cerimoniarios])
  }

  getInstances(){
    return this.instances
  }
}

export const pastoralFactory = new PastoralFactory()