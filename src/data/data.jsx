// import icons
import { FaNodeJs, FaHome,FaWikipediaW, FaProjectDiagram } from 'react-icons/fa'
import { 
    TbBrandGithub, TbBrandGit, 
    TbBrandYoutube, TbBrandMysql, TbBrandMongodb,TbBrandAdobe,
    TbBrandWhatsapp,TbBrandAndroid, TbBrandSublimeText,TbBrandFramerMotion,
    TbBrandLinkedin, TbBrandAdonisJs,TbBrandKotlin,TbBrandNpm,TbBrandPython,
    TbBrandNextjs, TbBrandReact, TbBrandHtml5, TbBrandTailwind,TbBrandFirebase,
    TbBrandRadixUi,TbBrandCss3, TbBrandFigma, TbBrandBootstrap,TbBrandVisualStudio,
    TbBrandFlutter, TbBrandJavascript, TbBrandVscode, TbBrandDocker
} from 'react-icons/tb'

// -------- my Array and Object -------------

export const MenuList = [
    // {name:'Home', path:'/'},
    {name:'About', path:'#about'},
    {name:'Skills', path:'#skills'},
    {name:'Experience', path:'#experience'},
    {name:'Projects', path:'#projects'},
    {name:'Education', path:'#education'},
]

export const Bio ={
    eu: 'Domingos Sampanhe',
    roles:[
        'Developer Web (Frontend)',
        'Digital Marketing Manager',
        'Company Manager',
        'Accountant',
    ],
    description:`Sou desenvolvedor web apaixonado por tecnologia com mais de 4 anos de experiença. 
        Meu objectivo é criar interface de usuario bonitos e funcionais, além de participar equipes técnicas em projetos desafiadores. 
        Estou sempre aberto a novas oportunidade e desafio.`,
        tags:['Next.js','Html','Css3','JavaScript'],
        tagSocial:[
            {
                github:'https://github.com/DomingosSAmpah',
            },
            {
                linkedin:'linkedin.com/in/domingos-sampanhe',
            },
            {
                whatsapp:'https://wa.me/244927184916',
            },
        ],
    resume:'https://github.com/DomingosSAmpah',
    perfil:'/images/me.png',
}

export const skills = [
    {
        title:'Frontend',
        skills:[
            {
                name:'React Js',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandReact/>,
            },
            {
                name:'Framer Motion',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandFramerMotion/>,
            },
            {
                name:'Next Js',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandNextjs/>,
            },
            {
                name:'Flutter',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandFlutter/>,
            },
            {
                name:'HTML',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandHtml5/>,
            },
            {
                name:'CSS',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandCss3/>,
            },
            {
                name:'JavaScript',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandJavascript/>,
            },
            {
                name:'Tailwind',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandTailwind/>,
            },
            {
                name:'Bootstrap',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandBootstrap/>,
            },
            {
                name:'Material Ui',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandRadixUi/>,
            },
        ]
    },
    {
        title: 'Backend and Android',
        skills:[
            {
                name:'Nodejs basic',
                image:'/images/Tecnologias/test.png',
                icon:<FaNodeJs/>,
            },
            {
                name:'Npm',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandNpm/>,
            },
            {
                name:'Dart',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandFlutter/>,
            },
            // {
            //     name:'Adoni Js',
            //     image:'/images/Tecnologias/test.png',
            //     icon:<TbBrandAdonisJs/>,
            // },
        ]
    },
    // {
    //     title: 'Android',
    //     skills:[
    //         {
    //             name:'Dart',
    //             image:'/images/Tecnologias/test.png',
    //             icon:<TbBrandFlutter/>,
    //         },
    //         {
    //             name:'Kotlin',
    //             image:'/images/Tecnologias/test.png',
    //             icon:<TbBrandKotlin/>,
    //         },
    //         {
    //             name:'XML',
    //             image:'/images/Tecnologias/test.png',
    //             icon:<TbBrandRadixUi/>,
    //         },
    //         {
    //             name:'Android Studio',
    //             image:'/images/Tecnologias/test.png',
    //             icon:<TbBrandAndroid/>,
    //         },
    //     ]
    // },
    {
        title: 'Others',
        skills:[
            // {
            //     name:'Docker',
            //     image:'/images/Tecnologias/test.png',
            //     icon:<TbBrandDocker/>,
            // },
            {
                name:'Git',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandGit/>,
            },
            {
                name:'Vs Code',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandVscode/>,
            },
            {
                name:'GitHub',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandGithub/>,
            },
            {
                name:'Figma',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandFigma/>,
            },
            {
                name:'Sublime Text',
                image:'/images/Tecnologias/test.png',
                icon:<TbBrandSublimeText/>,
            },
        ]
    },
]

export const experiences = [
    {
        id: 2,
        img:'/images/portifolio.jpeg',
        role: 'Portifolio',
        company: 'My Repositorio',
        date: 'Create - 2024',
        desc:`No uso de frameworks Nextjs, fui
                capaz de criar recursos interactivos de maneira
                envolvente e intuitiva, que permiti aos
                usuários pesquisar e obter os resultados da wikipedia.`,
        skills:[
            'Nextjs', 'Styled-components', 'Material Ui',
        ],
        doc:'/images/doc.jpg'
    },
    {
        id: 0,
        img:'/images/restaurant.jpeg',
        role: 'Restaurant web',
        company: 'My Repositorio',
        date: 'Create - 2021',
        desc:`Trabalhei no front-end do aplicativo Web usando JavaScript,
              HTML, CSS`,
        skills:[
            'HTML', 'CSS', 'JavaScript', 'Swiper'
        ],
        doc:'/images/doc.jpg',
        btn:'',
    },
    {
        id: 1,
        img:'/images/dashboard.jpeg',
        role: 'Dashboard',
         company: 'My Repositorio',
        date: 'Create - 2022',
        desc:`Trabalhei na criação de interface moderna e intuitiva. Através
                do uso de HTML, CSS e JavaScript, que permite aos
                usuários explorar e marca suas consultas.`,
        skills:[
            'HTML', 'CSS', 'JavaScript',
        ],
        doc:'/images/doc.jpg'
    },
]

export const education =[
    {
        id:1,
        img:'/images/imib.jpg',
        school:'Instituto Médio Industrial de Benguela',
        date:'Jan 2015 - Dec 2017',
        grade:'12.6 PAP',
        desc:`Terminei o meu ensino médio em 2017 no IMIB.`,
        degree:'Tecnico Médio - Em Construção Civil',
    },
    {
        id:2,
        img:'/images/ukb.jpg',
        school:'Universidade Katyavala Bwila',
        date:'Jan 2020 - Presente',
        grade:'3º Ano (Bacharel)',
        desc:`Atualmente estou no 3º ano do curso de Economia e Gestão, 
              na especialidade de Gestão de Empresa na
              Universidade Katyavala Bwila.`,
        degree:'Economia e Gestão - Gestão de Empresas',
    },
    {
        id:3,
        img:'/images/pdpt.jpg',
        school:'Formação Profissional',
        date:'Jul 2023 - Presente',
        grade:'+10 Cursos Profissional',
        desc:`Atualmente faço parte do projeto Angola Talents realizado pela 
            Associação PDPT com Fundação Bornito de Sousa, onde tive a oportunidade 
            de desenvolver explorar as minhas 
            competencias empreendedora e me preparar para 
            o mercado de trabalho e educação financeiro. `,
        degree:`Projecto PDPT e Fundação Bornito de Sousa - Formando da PDPT e Membro da FBS`,
    },
]

export const projects =[
    {
        id: 1,
        title:'Blogger Web',
        date:'Out 2023',
        description:`O Wbsite Blogger Web exemplifica como o HTML, CSS e JavaScript 
        podem ser combinados para oferecer aos leitores uma plataforma atrativa 
        e funcional para descobrir, ler e interagir com uma variedade de conteúdos 
        por meio de artigos, imagens e vídeos, proporcionando uma experiência personalizada 
        e adaptada aos interesses individuais.`,
        image:'/images/blog.jpeg',
        tags:['Html','Css3','JavaScript'],
        category:'website',
        github:'https://github.com/DomingosSAmpah/Blog-Simples',
        online: 'https://blog-simples-ds.vercel.app',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 2,
        title:'My Portfolio',
        date:'Jan 2024',
        description:`O Website My Portfolio exemplifica como o Next.js e o Styled-Components podem ser combinados 
        para criar um portfólio profissionalmente apresentável, 
        eficiente e altamente personalizado, proporcionando aos visitantes 
        uma visão abrangente das habilidades, projetos e informações relevantes 
        de forma envolvente e esteticamente agradável.`,
        image:'/images/portifolio.jpeg',
        tags:['Next.js','Styled-component', 'Material Ui'],
        category:'destaque',
        github:'https://github.com/DomingosSAmpah/Portifolio-Sampanhe',
        online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 3,
        title:'Restaurant Web',
        date:'Dec 2023',
        description:`O Website Restaurant Web exemplifica como o HTML, CSS e JavaScript 
        podem ser combinados para oferecer aos usuários uma plataforma prática e atraente 
        para conhecer, explorar e interagir com as informações sobre restaurantes, cardápios 
        e reservas, proporcionando uma experiência personalizada e adaptada às preferências 
        gastronômicas individuais.`,
        image:'/images/restaurant.jpeg',
        tags:['Html','Css3','JavaScript','Swiper'],
        category:'destaque',
        github:'https://github.com/DomingosSAmpah/Restaurant-website',
        online: 'https://restaurant-ds.vercel.app',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 4,
        title:'Cadastro de Produto',
        date:'May 2020',
        description:`O app Cadastro de Produto exemplifica como o HTML, CSS e JavaScript 
        podem ser combinados para oferecer aos usuários uma plataforma prática e intuitiva 
        para o registro e gerenciamento de produtos, proporcionando uma experiência eficiente 
        e adaptada às necessidades de organização e controle de inventário.`,
        image:'/images/cadastro and controller.jpeg',
        tags:['Html','Css3','JavaScript'],
        category:'web app',
        github:'https://github.com/DomingosSAmpah',
        online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 5,
        title:'University School',
        date:'Jul 2022',
        description:`University School foi desenvolvido com HTML, CSS e JavaScript é uma ferramenta essencial 
        para fornecer informações institucionais de forma acessível 
        e envolvente para todos os envolvidos na comunidade acadêmica.`,
        image:'/images/school.jpeg',
        tags:['Html','Css3','JavaScript','Swiper'],
        category:'website',
        github:'https://github.com/DomingosSAmpah/University-web',
        // online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 6,
        title:'Balance System',
        date:'Mar 2022',
        description:`O App Balance System foi desenvolvido com HTML, CSS e JavaScript é uma ferramenta essencial 
        para monitorar e gerenciar informações financeiras de forma eficaz e segura.`,
        image:'/images/balance system.jpeg',
        tags:['Html','Css3','JavaScript'],
        category:'web app',
        github:'https://github.com/DomingosSAmpah/Balance',
        online: 'https://balance-production.up.railway.app',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 7,
        title:'Snaker Shop',
        date:'Dec 2021',
        description:`A loja virtual Snakers Shop é um exemplo de como o HTML, CSS e JavaScript podem ser combinados para 
        criar uma plataforma de comércio eletrônico atraente e funcional.`,
        image:'/images/snakers shop.jpeg',
        tags:['Html','Css3','JavaScript','Swiper'],
        category:'website',
        github:'https://github.com/DomingosSAmpah/Snaker-web',
        // online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 8,
        title:'Search Wikipedia',
        date:'Nov 2023',
        description:`O App "Search Wikipedia" demonstra como Next.js e Axios podem 
        ser combinados para criar uma plataforma dinâmica e responsiva que permite aos 
        usuários explorar o vasto conhecimento disponível na Wikipedia com facilidade.`,
        image:'/images/wiki.jpeg',
        tags:['Next.js','Css3','Axios'],
        category:'destaque',
        github:'https://github.com/DomingosSAmpah/Wikipedia-search',
        online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 9,
        title:'Doctor Web',
        date:'Dec 2020 - Jan 2021',
        description:`O App Doctor Web exemplifica como o HTML, CSS e JavaScript podem ser combinados para 
        criar uma plataforma que atende às demandas do setor de saúde, fornecendo aos profissionais e 
        pacientes uma ferramenta acessível, segura e eficiente para a gestão de informações médicas 
        e cuidados de saúde.`,
        image:'/images/condoctor.jpeg',
        tags:['Html','Css3','JavaScript','Swiper'],
        category:'website',
        github:'https://github.com/DomingosSAmpah',
        // online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 10,
        title:'Button Bit',
        date:'Dec 2020',
        description:`O App Button Bit exemplifica como o HTML, CSS e JavaScript podem ser combinados para 
        oferecer aos usuários uma ferramenta prática e intuitiva para a criação e personalização de botões, 
        contribuindo para aprimorar a experiência de design e desenvolvimento web.`,
        image:'/images/Button Bit.jpeg',
        tags:['Html','Css3','JavaScript'],
        category:'web app',
        github:'https://github.com/DomingosSAmpah/Button-Efect-css-js',
        // online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
    {
        id: 12,
        title:'Dashboard',
        date:'Jan 2021',
        description:`O Dashboard é uma ferramenta poderosa para a visualização de dados, 
        fornecendo aos usuários as informações necessárias para tomar decisões estratégicas de forma eficaz.`,
        image:'/images/dashboard.jpeg',
        tags:['Html','Css3','JavaScript'],
        category:'destaque',
        github:'https://github.com/DomingosSAmpah/Dashboard',
        // online: '',
        members:[
            {
                name:'Manuel Sampaio', 
                img:'/images/Eu (3).png',
                linkedin:'',
                github:'',
            },
        ]
    },
]

