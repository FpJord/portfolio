let listaProjetos = [
    {
        "nome": 'Kreativ Form - Clone',
        "src": 'assets/css/kreativ-static.png',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="kreativ-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": 'https://kreativ-clone.vercel.app/',
    },

    {
        "nome": 'Calculadora IMC',
        "src": 'assets/css/calculadora-static.png',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="calc-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": 'https://calculadora-imc-beige.vercel.app/',
    },

    {
        "nome": 'Sistok Landing Page',
        "src": 'assets/css/sistok-static.png',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="ux-ui"> UX/UI </button>',
        "img": '<div class="project-image" id="sistok-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": 'https://sistok-clone-tau.vercel.app/',
    },

    {
        "nome": 'GitHub Clone',
        "src": 'assets/css/github-static.png',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="github-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": 'https://github-clone-fp.vercel.app/',
    },

    {
        "nome": 'OrbitShift Login',
        "src": 'assets/css/orbitshift-static.png',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="orbitshift-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": 'https://orbitshift-fp.vercel.app/',
    },

    {
        "nome": 'Skambo Login',
        "src": 'assets/css/skambo-static.png',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="ux-ui"> UX/UI </button>',
        "img": '<div class="project-image" id="skambo-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": 'https://skambo-clone.vercel.app/',
    },
]

listaProjetos.map((projeto, posicao) => {
    let cardGrid = document.querySelector(".project-grid");
    let cardImage = document.querySelector(".project-image");


    cardGrid.innerHTML += `
    <div class="project-card">
    <h1>${projeto.nome}</h1>

    <div class="project-buttons">
        ${projeto["stack 1"]}
        ${projeto["stack 2"]}
    </div>
    
    ${projeto.img}

    <button class="project-about" onclick="zoomProjeto('${posicao}')">Sobre</button>
</div>
    `

    console.log(posicao)
});

function zoomProjeto(posicao){
    let projetoSelecionado = listaProjetos[posicao];

    document.getElementById("nomeProjeto").innerHTML = projetoSelecionado.nome;
    document.getElementById("descricaoProjeto").innerHTML = projetoSelecionado.descrição;
    document.getElementById("imgModal").src = projetoSelecionado.src;
    document.getElementById("deploy-link").href = projetoSelecionado.deploy;


    new bootstrap.Modal('#zoomProjeto').show();
};

