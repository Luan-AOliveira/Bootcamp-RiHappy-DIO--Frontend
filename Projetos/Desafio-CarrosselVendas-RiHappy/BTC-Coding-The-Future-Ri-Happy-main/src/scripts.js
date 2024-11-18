let slickInitialized = false;

// Arrays de produtos para cada aba
const novidades = [{
        "productName": "Pulseira - Adesivos - Sticki Rolls Book - New Toys",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6896285-175-175?v=638660830485400000&width=175&height=175&aspect=true",
        "installments": 4,
        "installmentValue": 34.99,
        "totalPrice": 139.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Boneca - Ellian - Com Acessórios - Enfeitiçados",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6787471-175-175?v=638641886695000000&width=175&height=175&aspect=true",
        "installments": 3,
        "installmentValue": 33.33,
        "totalPrice": 99.99,
        "seller": "Mundo Infantil Store"
    },

    {
        "productName": "Brinquedo Educativo - Fisher Price - Esquadrão Musical",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6384999-175-175?v=638597552401100000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 34.99,
        "totalPrice": 209.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Jogo De Ação - Disney - Dobble - Galápagos",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6399917-175-175?v=638603794021600000&width=175&height=175&aspect=true",
        "installments": 3,
        "installmentValue": 33.33,
        "totalPrice": 99.99,
        "seller": "SA Brinquedos"
    },

    {
        "productName": "Boneco Colecionável - Cryo Lab MrBeast Lab - Azul",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6399917-175-175?v=638603794021600000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 124.99,
        "totalPrice": 749.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Jogo de Tabuleiro - LEGO - Monkey Palace - Galápagos",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6881462-175-175?v=638658118400800000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 66.66,
        "totalPrice": 399.99,
        "seller": "Mundo Infantil Store"
    },

    {
        "productName": "Hoverboard Fun Led Chumbo 6,5 Pol 260W 2,0Ah 10Km/H",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6833345-175-175?v=638652017881370000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 283.16,
        "totalPrice": 1699.00,
        "seller": "MMPLACE"
    },

    {
        "productName": "Tablet M10a 3g Preto Multilaser - NB253OUT",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6567911-175-175?v=638624596559570000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 92.78,
        "totalPrice": 556.72,
        "seller": "MMPLACE"
    }
];


const mais_vendidos = [{
        "productName": "Blocos de Montar - Unicórnio Mágico - Lagoa Encantada - Monte Líbano",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6349115/Blocos-de-Montar---Unicornio-Magico---Lagoa-Encantada---Monte-libano-0.jpg?v=638557905081230000",
        "installments": 1,
        "installmentValue": 35.99,
        "totalPrice": 35.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Conjunto De Pintura - Patrulha Canina - Skye - Elka",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6389304/Conjunto-De-Pintura---Patrulha-Canina---Skye---Elka-0.jpg?v=638598620968800000",
        "installments": 3,
        "installmentValue": 29.99,
        "totalPrice": 89.99,
        "seller": "Mundo Infantil Store"
    },

    {
        "productName": "Kit De Jogos - Stitch - Super Kit 3 em1 - Toyster",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6357597/Kit-De-Jogos---Stitch---Super-Kit-3-em1---Toyster-0.jpg?v=638574272262800000",
        "installments": 4,
        "installmentValue": 32.49,
        "totalPrice": 129.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Hoverboard Fun Led Chumbo 6,5 Pol 260W 2,0Ah 10Km/H",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6833345-175-175?v=638652017881370000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 283.16,
        "totalPrice": 1699.00,
        "seller": "MMPLACE"
    },

    {
        "productName": "LEGO - Technic - Mercedes-AMG F1 W14 E Performance Pull-Back - 42165",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6207391/LEGO---Technic---Mercedes-AMG-F1-W14-E-Performance-Pull-Back---42165-0.jpg?v=638459594069830000",
        "installments": 6,
        "installmentValue": 46.66,
        "totalPrice": 279.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Miniatura - Colecionável - Princesas - Sortidas - Embalagem Unitária - Disney",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6405037/Miniatura---Colecionavel---Princesas---Sortidas---Embalagem-Unitaria---Disney-0.jpg?v=638605529280870000",
        "installments": 1,
        "installmentValue": 39.99,
        "totalPrice": 39.99,
        "seller": "SA Brinquedos"
    },
    {
        "productName": "Miniatura - Colecionável - Minnie - Sortidas - Embalagem Unitária - Disney",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6405048/Miniatura---Colecionavel---Minnie---Sortidas---Embalagem-Unitaria---Disney-0.jpg?v=638605533209730000",
        "installments": 1,
        "installmentValue": 39.99,
        "totalPrice": 39.99,
        "seller": "Fantasias Kids"
    }
];


const fantasias = [{
        "productName": "One Piece 3 Em 1 Vol. 9",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6474411/17258341325882.jpg?v=638621065554270000",
        "installments": 2,
        "installmentValue": 42.45,
        "totalPrice": 84.9,
        "seller": "Panini"
    },

    {
        "productName": "Tapete de Atividades - 180x120 cm - Animal Party - Buba",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/377776/tapete-animal-party-8511_Frente.jpg?v=636904971729300000",
        "installments": 6,
        "installmentValue": 34.98,
        "totalPrice": 209.9,
        "seller": "Lalalipe"
    },

    {
        "productName": "Acessório de Fantasia - Halloween - Facão - Gala",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/5862198/Acessorio-de-Fantasia---Halloween---Facao---Gala-0.jpg?v=638290050998600000",
        "installments": 1,
        "installmentValue": 9.99,
        "totalPrice": 14.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Máscara Infantil - PJ Masks - Gekko - Lagartixo - Verde - Hasbro",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/2548315/Mascara-Infantil---PJ-Masks---Gekko---Lagartixo---Verde---Hasbro-0.jpg?v=637811584510170000",
        "installments": 1,
        "installmentValue": 50.99,
        "totalPrice": 59.99,
        "seller": "Mundo Infantil Store"
    },

    {
        "productName": "Sabre de Luz - Star Wars - Luke Skywalker - Hasbro",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6544229/Sabre-de-Luz---Star-Wars---Luke-Skywalker---Hasbro-0.jpg?v=638623534576700000",
        "installments": 5,
        "installmentValue": 29.99,
        "totalPrice": 149.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Fantasia - Elka - Monkey Luffy D - Vermelho",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/4957411/Fantasia---Elka---Monkey-Luffy-D---Vermelho--0.jpg?v=638024043187000000",
        "installments": 3,
        "installmentValue": 33.33,
        "totalPrice": 99.99,
        "seller": "Brinquedos Laura"
    },

    {
        "productName": "Máscara - Marvel - Pantera Negra - Hasbro",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6746180/Mascara---Marvel---Pantera-Negra---Hasbro-0.jpg?v=638635905394330000",
        "installments": 1,
        "installmentValue": 49.99,
        "totalPrice": 49.99,
        "seller": "RiHappy"
    }
];


const jogos = [{
        "productName": "Tablet M10a 3g Preto Multilaser - NB253OUT",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6567911-175-175?v=638624596559570000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 92.78,
        "totalPrice": 556.72,
        "seller": "MMPLACE"
    },

    {
        "productName": "Brinquedo Educativo - Fisher Price - Esquadrão Musical",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6384999-175-175?v=638597552401100000&width=175&height=175&aspect=true",
        "installments": 6,
        "installmentValue": 34.99,
        "totalPrice": 209.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Conjunto de Mágicas - Truque de Mestre Junior - Estrela",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/318837/Conjunto-de-Magicas---Truque-de-Mestre-Junior---Estrela-1201603600003-embalagem.jpg?v=636107555036900000",
        "installments": 2,
        "installmentValue": 29.95,
        "totalPrice": 59.9,
        "seller": "BUMERANG BRINQUEDOS"
    },

    {
        "productName": "Baralho Infantil - Vê Se Adivinha! - MOL Impacto - Editora Mol",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6536816/Baralho-Infantil---Ve-Se-Adivinha----MOL-Impacto---Editora-Mol-0.jpg?v=638622700557800000",
        "installments": 1,
        "installmentValue": 11.99,
        "totalPrice": 11.99,
        "seller": "RiHappy"
    }
];


const diversao_fora = [{
        "productName": "LEGO - Technic - Mercedes-AMG F1 W14 E Performance Pull-Back - 42165",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6207391/LEGO---Technic---Mercedes-AMG-F1-W14-E-Performance-Pull-Back---42165-0.jpg?v=638459594069830000",
        "installments": 6,
        "installmentValue": 46.66,
        "totalPrice": 279.99,
        "seller": "Kids Brinquedos"
    },

    {
        "productName": "Baralho Infantil - Vê Se Adivinha! - MOL Impacto - Editora Mol",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6536816/Baralho-Infantil---Ve-Se-Adivinha----MOL-Impacto---Editora-Mol-0.jpg?v=638622700557800000",
        "installments": 1,
        "installmentValue": 11.99,
        "totalPrice": 11.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Tapete de Atividades com Ginásio - Buba - Piano Removível - 73cm x 63cm x 42cm - Unissex - Colorido",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6413470/Tapete-de-Atividades-com-Ginasio---Buba---Piano-Removivel---73cm-x-63cm-x-42cm---Unissex---Colorido-0.jpg?v=638610076864300000",
        "installments": 6,
        "installmentValue": 44.99,
        "totalPrice": 269.99,
        "seller": "BUMERANG BRINQUEDOS"
    },

    {
        "productName": "Conjunto de Mágicas - Truque de Mestre Junior - Estrela",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/318837/Conjunto-de-Magicas---Truque-de-Mestre-Junior---Estrela-1201603600003-embalagem.jpg?v=636107555036900000",
        "installments": 2,
        "installmentValue": 29.95,
        "totalPrice": 59.9,
        "seller": "BUMERANG BRINQUEDOS"
    },

    {
        "productName": "Pista de Percurso e Veículo - Hot Wheels - City - Robô Tubarão - Mattel",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/4423207/100183669_1.jpg?v=637940113896300000",
        "installments": 6,
        "installmentValue": 38.49,
        "totalPrice": 230.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Hot Wheels City - Guincho Tubarão - Mattel",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6304854/Hot-Wheels-City---Guincho-Tubarao---Mattel-0.jpg?v=638536209396900000",
        "installments": 4,
        "installmentValue": 31.24,
        "totalPrice": 124.99,
        "seller": "RiHappy"
    },

    {
        "productName": "Massa De Modelar - Play-Doh - 28g - Sortido - Hasbro",
        "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6284290/Massa-De-Modelar---Play-Doh----28g---Sortido---Hasbro-0.jpg?v=638525298262000000",
        "installments": 1,
        "installmentValue": 1.99,
        "totalPrice": 1.99,
        "seller": "Mundo Infantil Store"
    }
];


function initializedSlick() {
    const slickElement = document.querySelector('.product-carousel')

    $(slickElement).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true
    });

    slickInitialized = true;
}


function renderProducts(products) {
    const productCarousel = document.querySelector('.product-carousel')
    productCarousel.innerHTML = ''

    products.forEach(product => {
                const productElement = `
      <div class="product-card">
        <div class="imageProduct"><img src="${product.imageUrl}" alt="${product.productName}"></div>
        <h3 class="productName">${product.productName}</h3>
        <p class="price">Por ${product.totalPrice}</p>
        <p class="installments">ou ${product.installments}x de ${product.installmentValue} sem juros</p>
        <button class="adicionar">Comprar</button>
        <p class="seller">${product.seller === "RiHappy" ? `Vendido e entregue por <span class="sellerType">${product.seller}</span>` : `Oferta por <span class="sellerType">${product.seller}</span>`}</p>
    `;

    productCarousel.innerHTML += productElement
  })

  initializedSlick();
}


function handleClickTab(event) {
  const tabs = document.querySelectorAll('.tab-link')
  tabs.forEach(tab => tab.classList.remove('active'))

  if(slickInitialized) {
    $('.product-carousel').slick('unslick');
  }

  event.target.classList.add('active')

  const category = event.target.dataset.category

  if(category === 'novidades') {
    renderProducts(novidades)
  } else if(category === 'mais_vendidos') {
    renderProducts(mais_vendidos)
    console.log('mais vendidos')
  } else if(category === 'fantasias') {
    renderProducts(fantasias)
  } else if(category === 'jogos') {
    renderProducts(jogos)
  } else if(category === 'diversao_fora') {
    renderProducts(diversao_fora)
  }
}


document.addEventListener('DOMContentLoaded', function() {
 renderProducts(novidades);

 
 const tabs = document.querySelectorAll('.tab-link')
 tabs.forEach(tab => tab.addEventListener('click', handleClickTab))
})