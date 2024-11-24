import Convidado from '../model/Convidado';

export default function criarConvidadoVazio(): Partial<Convidado> {
  return {
    id: '',
    nome: '',
    email: '',
    confirmado: false,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0,
  };
}
