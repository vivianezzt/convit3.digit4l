import { Evento } from '../evento';
import { Id } from '../shared';

const eventos: Evento[] = [
  {
    id: 'zo4s660lbq-jb365qs21y-2oux28vvl38',
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
        id: 'nanse9z3m3-0xe01p9av5zm-gkev5tjhmna',
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: 'n9mscxjx3w7-etye1jd46xo-cft83fen1n',
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: '8nx3r1xvhq5-pv2n523xax-76fep2m534e',
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: 'b1pcauoqgf4-ykfvke2na8-v6903sdxii',
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
        id: 'q8b6rvwq56s-br1ljo5h688-iona41uosj',
        nome: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: '7mt32j63uee-gfyifrghd0b-3omuy1ew1eq',
        nome: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: 'wi0dcezh9yq-wc509vvpht-ssdmny67hrm',
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
        id: 'zap4za4mtso-gq99dy6wju6-p267zbyhp4p',
        nome: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: '8o59guaajqx-ffuwaglzykr-io25qgxfgud',
        nome: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: 'c3l7nuhaz7-oh90n9r3lw-kc3h7hn89j',
        nome: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'tvh72irft2-5s2lsb0o72c-qg1b2i82yxr',
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
        id: 'szhlro651ig-iyiyuyrntj-v0fxuo59kqg',
        nome: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: '7fv9fqr8q3b-8lhiya7m798-9jd55x275tf',
        nome: 'Carla Mendes',
        email: 'carla@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '7qj4smik37a-ksypk9cyi-c4vfdnjqjsi',
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
        id: 'mgewr2zvgyh-6jq5qyxf6v6-mw114dovo09',
        nome: 'Maria Souza',
        email: 'maria@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: 'qsyajdloes-aygmnrerem-itmispbdvvq',
        nome: 'José Almeida',
        email: 'jose@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '2lzpd07o8zj-jy07jt6szc-xzai08u39uh',
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
        id: 'aiwg3d7bznb-1m3ngrz0asy-36zfqs5r8wp',
        nome: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3,
      },
      {
        id: Id.novo(),
        nome: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'zvvcqp8m06n-lmrec7p5eto-k29jgllh62a',
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
        id: 'halkctpj857-2vcz25qtatg-tm85a33mgh',
        nome: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4,
      },
      {
        id: 'ghgf0fk3u2-o0n9vzyp0d-7crt0cak7uk',
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
