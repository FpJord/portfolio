let listaProjetos = [
    {
        "nome": 'Kreativ Form - Clone',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="kreativ-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": '<button class="deploy"> Deploy </button>',
    },

    {
        "nome": 'Calculadora IMC',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="calc-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": '<button class="deploy"> Deploy </button>',
    },

    {
        "nome": 'Sistok Landing Page',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="ux-ui"> UX/UI </button>',
        "img": '<div class="project-image" id="sistok-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": '<button class="deploy"> Deploy </button>',
    },

    {
        "nome": 'GitHub Clone',
        "stack 1": '<button class="html-css"> HTML/CSS </button>',
        "stack 2": '<button class="js"> JavaScript </button>',
        "img": '<div class="project-image" id="github-project"></div>',
        "descrição": 'Projeto feito em 09/23 durante o curso Desenvolvedor Front-End no Senai Duque de Caxias. Feito com base no formulário de login do GitHub e adicionado um botão no canto superior direito para alterar o tema de Light para Dark.',
        "deploy": '<button class="deploy"> Deploy </button>',
    },
]

listaProjetos.map((projeto) => {
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

    <button class="project-about">Sobre</button>
</div>
    `
})