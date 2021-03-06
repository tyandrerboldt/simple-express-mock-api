import { CaixaRepository } from '../repositories/exam-repository';
import { GenericResource } from './../../core/generics/generic-resource';
import { CaixaDTO } from './../models/caixa-dto';

export class CaixaResource extends GenericResource<CaixaDTO> {

  constructor() {
    super('caixas', new CaixaRepository())
  }

  // funcao(parametro:any):parametro is CaixaDTO {    
  // }

  // funcao(parametro:any):parametro is NumeroDeSerieDTO {
  // }

}