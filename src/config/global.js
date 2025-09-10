export default {
  global: {
    Name: 'Escalado de patrones básicos femeninos',
    Description:
      'Este componente formativo aborda el escalado industrial manual de prendas básicas femeninas, incluyendo corpiño, pantalón, falda, manga y cuello. Integra técnicas para la separación de tallas, la marcación técnica de patrones y la elaboración de fichas técnicas, con el fin de garantizar precisión en la graduación y eficiencia en los procesos de confección seriada, conforme a los estándares de la industria de la moda.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Escalado industrial manual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Plano de los puntos (escalado de corpiño básico femenino)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Escalado de pantalón básico femenino',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Escalado de falda básica femenina',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Escalado de manga y cuello',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Separación de tallas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marcación técnica de patrones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura y contenido de fichas técnicas',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Escalado industrial manual',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Cómo hacer un patrón a escala.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=m2Fs4_FwmoE&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Marcación técnica de patrones',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Diligenciamiento de ficha técnica de prenda.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ck4jApUj5ss&t=508s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Antropometría',
      significado:
        'disciplina que estudia las dimensiones y proporciones del cuerpo humano con fines de adaptación ergonómica y diseño de prendas de vestir.',
    },
    {
      termino: 'Cuadro de tallas',
      significado:
        'estructura que agrupa las medidas estandarizadas por talla, facilitando el proceso de escalado y garantizando la coherencia dimensional en la producción seriada.',
    },
    {
      termino: 'Despiece de patrones',
      significado:
        'proceso de separación ordenada de las piezas que conforman un molde base para su identificación, marcación y posterior distribución en trazo.',
    },
    {
      termino: 'Distancias de escalado',
      significado:
        'valores asignados a cada medida corporal que determinan cuánto debe crecer o disminuir una prenda por cada talla.',
    },
    {
      termino: 'Ejes cartesianos',
      significado:
        'sistema de coordenadas conformado por dos líneas perpendiculares (horizontal y vertical) que se utiliza para ubicar puntos y organizar espacialmente los patrones.',
    },
    {
      termino: 'Escalado diferencial',
      significado:
        'método de graduación en el que las medidas crecen o disminuyen en proporciones distintas, adaptándose a características corporales no lineales.',
    },
    {
      termino: 'Escalado industrial',
      significado:
        'técnica aplicada para generar una secuencia de tallas a partir de una talla base, mediante procesos manuales o digitales que responden a estándares de producción.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que concentra toda la información técnica, estructural y dimensional de una prenda, incluyendo especificaciones de escalado, materiales y procesos.',
    },
    {
      termino: 'Incremento',
      significado:
        'aumento de una medida corporal durante el proceso de escalado para generar tallas superiores a la talla base.',
    },
    {
      termino: 'Marcación técnica',
      significado:
        'conjunto de símbolos, líneas y anotaciones gráficas sobre los moldes que indican dobleces, cortes, aplomes y señales de ensamblaje.',
    },
    {
      termino: 'Puntos de aplome',
      significado:
        'referencias gráficas que permiten orientar correctamente las piezas del patrón durante el corte y la confección.',
    },
    {
      termino: 'Separación de tallas',
      significado:
        'proceso mediante el cual se organizan y distribuyen los patrones escalados en un formato que permita identificar, cortar y ensamblar cada talla sin ambigüedades.',
    },
    {
      termino: 'Sistema de medidas',
      significado:
        'conjunto de valores estandarizados que permiten establecer proporciones anatómicas en función de contextos geográficos, biotipos o mercados específicos.',
    },
    {
      termino: 'Talla base',
      significado:
        'punto de partida del proceso de escalado, definida por una serie de medidas anatómicas que sirven como referencia para generar las demás tallas.',
    },
  ],
  referencias: [
    {
      referencia:
        "Aldrich, W. (2015). Metric pattern cutting for women's wear (6ª ed.). Bloomsbury Publishing.",
    },

    {
      referencia:
        "Cooklin, G. (2008). Pattern grading for women's clothes: The technology of sizing. OM Books.",
    },

    {
      referencia:
        "Handford, J. (2001). Professional pattern grading for women's, men's, and children's apparel. TechStyle Publishing.",
    },

    {
      referencia:
        'Joseph-Armstrong, H. (2014). Patternmaking for fashion design (5ª ed.). Pearson Education.',
    },

    {
      referencia:
        'Mallet, K. K., & Zamkoff, B. (2002). Grading techniques for fashion design. Fairchild Books.',
    },

    {
      referencia:
        'Müller & Sohn. (2020). Grading for women’s and children’s clothing. Verlag Müller & Sohn.',
    },

    {
      referencia:
        'Inexmoda. (2023). Informe sectorial del sistema moda: industria textil y confección en Colombia. Observatorio de Moda Inexmoda.',
    },

    {
      referencia:
        'Muñoz, A. (2019). Manual de patronaje industrial para hombre: Trazado y escalado. Editorial Textil.',
    },

    {
      referencia:
        'Price, J., & Zamkoff, B. (2002). Concepts of pattern grading: Techniques for manual and computer grading. Fairchild Books.',
    },

    {
      referencia:
        'Rodríguez, L. (2020). Patronaje industrial de prendas de vestir: Estudios y aplicaciones. Editorial Bogotá.',
    },

    {
      referencia:
        'Sew, H. (2024). Ultimate guide to grading garments for production. Successful Fashion Designer.',
      link: 'https://successfulfashiondesigner.com/garment-pattern-grading/',
    },
    {
      referencia: 'Studio Faro. (2022). Grading women’s patterns. Studio Faro.',
      link: 'https://www.studiofaro.com/grading-womens-patterns/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
