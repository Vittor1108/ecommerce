// Banco de dados dos produtos

const data = [
    {
      id: 1,
      img: "./assets/img/jaqueta.svg",
      nameItem: "Lightweight Jacket",
      description:
        "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 2,
      img: "./assets/img/gorro.svg",
      nameItem: "Black Hat",
      description:
        "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 3,
      img: "./assets/img/mascara.svg",
      nameItem: "Mask",
      description:
        "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
      value: 40,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 4,
      img: "./assets/img/camiseta_preta.svg",
      nameItem: "T-Shirt",
      description:
        "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 5,
      img: "./assets/img/camiseta_branca.svg",
      nameItem: "Short-Sleeve T-Shirt",
      description:
        "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 6,
      img: "./assets/img/moletom.svg",
      nameItem: "Champion Packable Jacket",
      description:
        "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 7,
      img: "./assets/img/bone.png",
      nameItem: "Boné Volcom Mini Mark Preto",
      description:
        "Boné com aba curva desestruturada estilo Dad Hat, ajuste traseiro em fivela de meta...",
      value: 149,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 8,
      img: "./assets/img/mochila1.png",
      nameItem: "Mochila Tribeca",
      description:
        "A Mochila Tribeca é como uma amizade gente boa que te dá a maior moral sempre que v....",
      value: 359,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 9,
      img: "./assets/img/garrafa.png",
      nameItem: "Garrafa Térmica com Imã",
      description:
        "Nada melhor do que uma garrafa térmica com imã Segue o Fluxo na correria do seu seu dia a dia...",
      value: 159,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 10,
      img: "./assets/img/relogio.png",
      nameItem: "Relógio Endless Summer",
      description:
        "Dial com marcadores minimalistas e detalhe de folhagem texturizada no centro...",
      value: 369,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 11,
      img: "./assets/img/mochila2.png",
      nameItem: "Mochila esportiva 15L",
      description:
        "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
      value: 99,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 12,
      img: "./assets/img/mala.png",
      nameItem: "Mala Loudon Duffle XS",
      description:
        "Mala grande com bolso frontal de zíper para melhor organização para os dias de treino...",
      value: 135,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
      quantity: 0
    },
    {
      id: 13,
      img: "./assets/img/calçado1.png",
      nameItem: "Tênis Chunky Flatform Preto",
      description:
        "Esse modelo futurista, é o tênis do momento. Cheio de personalidade e robusto, o Tênis Chunky...",
      value: 179,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 14,
      img: "./assets/img/calçado2.png",
      nameItem: "Slide Adilette Aqua Branco",
      description:
        "É a escolha perfeita para quem busca conforto durante o dia a dia. Com a palmilha leve e macia...",
      value: 103,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 15,
      img: "./assets/img/calçado3.png",
      nameItem: "Tênis Jogging Branco",
      description:
        "Icônico e atemporal, é o que você precisa para deixar seus looks estilosos e cheios de atitude...",
      value: 129,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 16,
      img: "./assets/img/calçado4.png", //ARRUMAR
      nameItem: "Tênis Casual Texturizado Knit",
      description:
        "O Tênis Casual Texturizado Knit Preto, segue em alta nessa temporada e traz uma nova propo...",
      value: 136,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 17,
      img: "./assets/img/calçado5.png",
      nameItem: "Tênis Blaze of Glory Premium",
      description:
        "O tênis Blaze of Glory chega com as últimas tendências em design e versatilidade para usar..",
      value: 799,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 18,
      img: "./assets/img/calçado6.png",
      nameItem: "Tênis Pacer Future",
      description:
        "Feito para os maratonistas do futuro, o tênis Pacer Future traz construção slip-on para ma...",
      value: 349,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 19,
      img: "./assets/img/calçado7.png",
      nameItem: "Chuteira KING Platinum 21",
      description:
        "Com 53 anos de história para contar, a chuteira KING Platinum 21 Campo foi feita para eleva...",
      value: 1199,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 20,
      img: "./assets/img/calçado8.png",
      nameItem: "Tênis Electron 2.0",
      description:
        "Com sua inspiração atlética e atitude de rua, o Electron 2.0 tem o estilo perfeito para suas...",
      value: 399,
      addCart: "Adicionar ao carrinho",
      tag: "Calçados",
      quantity: 0
    },
    {
      id: 21,
      img: "./assets/img/camiseta1.png",
      nameItem: "Camiseta Premium Lisa",
      description:
        "Camiseta Manga Longa Lisa de alto padrão pra quem tem estilo e atitude e proteção Solar UV +50...",
      value: 34,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 22,
      img: "./assets/img/camiseta2.png",
      nameItem: "Jaqueta Corta-vento Cropped",
      description:
        "aqueta corta-vento cropped esportiva, com capuz, recortes em tela e bolsos. O modelo é confecci...",
      value: 159,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 23,
      img: "./assets/img/camiseta3.png",
      nameItem: "Top Challenge VB",
      description:
        "Por não possuir nenhum tipo de costura, diminui drasticamente qualquer possível ponto de fricção...",
      value: 122,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
    {
      id: 24,
      img: "./assets/img/camiseta4.png",
      nameItem: "Camiseta Básica Manga Curta",
      description:
        "Já começamos esta descrição avisando que, de básica, esta camiseta tem apenas o nome! Extremament...",
      value: 115,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
      quantity: 0
    },
  ];
  
