import { Evento } from '../evento';
import { Id } from '../shared';

const eventos: Evento[] = [
  {
    id: '926c9c0d-ec88-4d34-b13f-54d450e5066d',
    alias: 'evento-fullstack',
    senha: 'senha123',
    nome: 'Evento de Desenvolvimento Fullstack',
    data: new Date('2024-12-01T10:00:00Z'),
    local: 'São Paulo, SP',
    descricao:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    imagem: 'https://lawsonblake.com/content/images/2020/05/Learn-to-Code.jpg',
    imagemBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    publicoEsperado: 200,
    convidados: [
      {
        id: '1e2ca63c-4e7e-45a7-826f-770be7c67553',
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: 'bb06027d-f2d9-4ea1-a69c-b6c6203a9757',
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: '3080b126-f873-4ccb-abb0-007115010c9c',
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: '9c02373a-ef1f-478f-b7f7-5cc88a4ce341',
    alias: 'evento-js-avancado',
    senha: 'js2024',
    nome: 'Workshop Avançado de JavaScript',
    data: new Date('2024-11-20T15:00:00Z'),
    local: 'Rio de Janeiro, RJ',
    descricao: 'Um workshop avançado para programadores JavaScript.',
    imagem:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    imagemBackground:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    publicoEsperado: 100,
    convidados: [
      {
        id: '8a2589e0-c4e3-4a36-ac11-fc7a3c09f5fa',
        nome: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: '23cbfff6-b1b8-4548-a058-481f4f7b0c2e',
        nome: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: '6c648b98-a6ed-44a4-9741-4b286d9c8c8d',
    alias: 'evento-dev-java',
    senha: 'front123',
    nome: 'Bootcamp de Desenvolvimento Java',
    data: new Date('2024-11-15T09:00:00Z'),
    local: 'Belo Horizonte, MG',
    descricao: 'Aprenda a criar aplicações incríveis com java.',
    imagem:
      'https://revistaempreende.com.br/wp-content/uploads/2023/08/6i72yzbi.bmp',
    imagemBackground:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    publicoEsperado: 150,
    convidados: [
      {
        id: '58ac9de5-a32d-4921-a1da-275e89d64191',
        nome: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: 'a2079f7e-632e-41eb-a56d-33a540785d09',
        nome: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: '606a4bbd-29a8-4921-a2e7-618a4dd749f7',
        nome: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'ada00ad1-726a-4940-9cc3-83ce1579fc7f',
    alias: 'casamento-alberto-marina',
    senha: 'casamento2024',
    nome: 'Casamento do Alberto e Marina',
    data: new Date('2024-11-25T16:00:00Z'),
    local: 'Florianópolis, SC',
    descricao:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    imagem:
      'https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg',
    imagemBackground:
      'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
    publicoEsperado: 150,
    convidados: [
      {
        id: '4f87dab5-868d-4c83-9d31-8a6e59e843d9',
        nome: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: '38278bf6-5a63-4438-af45-6f267fae6b51',
        nome: 'Carla Mendes',
        email: 'carla@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '1fdd689d-0a38-450b-a696-b107a38d4432',
    alias: 'aniversario-joao',
    senha: 'joao2024',
    nome: 'Aniversário do João - 3 Anos',
    data: new Date('2024-12-05T18:00:00Z'),
    local: 'Curitiba, PR',
    descricao:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    imagem:
      'https://auhekids.com.br/wp-content/uploads/2024/03/Festas-Infantis-em-2024-Descubra-a-Ultima-Tendencia-que-Esta-Fazendo-a-Cabeca-da-Criancada-5.jpg',
    imagemBackground:
      'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
    publicoEsperado: 80,
    convidados: [
      {
        id: '32625d17-a1d8-47ee-bed0-001894fa19b9',
        nome: 'Maria Souza',
        email: 'maria@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: 'e386f531-0bbc-470a-a282-906d18b8ba0e',
        nome: 'José Almeida',
        email: 'jose@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '418a8deb-5644-4ff7-8ef3-c3e7c5fb0114',
    alias: 'inauguracao-loja-samsung',
    senha: 'estrela2024',
    nome: 'Inauguração da Loja Samsung',
    data: new Date('2024-12-10T09:00:00Z'),
    local: 'Porto Alegre, RS',
    descricao:
      'Evento de inauguração da nova loja Samsung com brindes e promoções.',
    imagem:
      'https://img.global.news.samsung.com/br/wp-content/uploads/2019/08/release_loja_eldorado.png',
    imagemBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
    publicoEsperado: 300,
    convidados: [
      {
        id: 'f68cc89a-9088-4eb5-999a-fe976d31d909',
        nome: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3,
      },
      {
        id: 'e9fb6d7c-3964-40f4-81b2-bfdb1018caa1',
        nome: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '356fb4df-3755-4f2a-aef7-dd0dcf05e743',
    alias: 'reuniao-familia-oliveira',
    senha: 'familia2024',
    nome: 'Reunião da Strangers Things',
    data: new Date('2024-12-15T12:00:00Z'),
    local: 'Salvador, BA',
    descricao: 'Reunião de fim de ano da Stranger Things.',
    imagem:
      'https://rollingstone.com.br/media/_versions/2024/08/stranger-things-4-temporada-netflix-foto-divulgacao_widelg_widexl.jpg',
    imagemBackground:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    publicoEsperado: 50,
    convidados: [
      {
        id: '414b4c60-24e9-42fd-b8ac-3cb82c7d77c0',
        nome: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4,
      },
      {
        id: '07fe889d-eff9-41e0-984e-7d1fd7f83aa3',
        nome: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
];

export default eventos;
