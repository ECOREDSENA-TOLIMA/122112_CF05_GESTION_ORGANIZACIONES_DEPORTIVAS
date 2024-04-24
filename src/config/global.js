export default {
  global: {
    componenteFormativo: 'Caracterización poblacional',
    descripcionCurso:
      'Para este componente se abordará, la caracterización de la población, a partir de las características de los eventos en el sector del deporte, se abordarán diferentes elementos conceptuales que brindarán las herramientas para elaborar una caracterización, teniendo en cuenta las particularidades de la organización y su tipo de población.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
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
        titulo: 'Caracterización poblacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Segmentación poblacional ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Segmentación demográfica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Segmentación geográfica',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Segmentación psicográfica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Segmentación de conducta',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Grupo poblacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sectores económicos: primario, secundario y terciario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'División según la economía clásica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'División según la actividad económica',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estratificación social',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Instituciones públicas y privadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Las instituciones públicas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Las instituciones privadas',
            hash: 't_6_2',
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
        download: 'downloads/prueba.pdf',
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
      tema: '3. Sistema de castas',
      referencia: 'Historiando (s.f.). Sistema de castas. ',
      tipo: 'Página web',
      link: 'https://www.historiando.org/sistema-de-castas/',
    },
    {
      tema: '5. Grupos étnicos en Colombia',
      referencia:
        'Ministerio de educación nacional (s.f.). Grupos étnicos en Colombia.',
      tipo: 'Página web',
      link:
        'https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Grupos-Etnicos-de-Colombia/',
    },
  ],
  glosario: [
    {
      termino: 'Caracterización',
      significado:
        'determinar atributos particulares de alguien o de algo, de modo que claramente se distinga de los demás.',
    },
    {
      termino: 'Población',
      significado:
        'conjunto de personas que habitan una determinada área geográfica.',
    },
    {
      termino: 'Segmentación',
      significado: 'es la delimitación de la población en pequeños grupos.',
    },
    {
      termino: 'Sectores económicos',
      significado:
        'cada sector se refiere a una parte de la actividad económica cuyos elementos tienen características comunes, guardan una unidad y se diferencian de otras agrupaciones. Su división se realiza de acuerdo con los procesos de producción que ocurren al interior de cada uno de ellos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alberto Cajal. (2019). Sectores Económicos de Colombia: Primario, Secundario, Terciario. Lifeder. ',
      link: 'https://www.lifeder.com/sectores-economicos-colombia/',
    },
    {
      referencia:
        'Badía, J. F. (1974). <em>Casta, estamento y clase social. Revista de estudios políticos</em>, (198), 23-66',
      link: '',
    },
    {
      referencia:
        'Garavaglia, J., y Marchena, J., (2005). <em>América Latina. De los orígenes a la independencia</em>.',
      link: '',
    },
    {
      referencia:
        'Francisco Coll Morales (14 de enero, 2021). <em>Sociedad estamental</em>.',
      link: 'https://economipedia.com/definiciones/sociedad-estamental.html ',
    },
    {
      referencia:
        'Kotler, Philip, & Alan, R. (1987). <em>Strategic Marketing for Nonprofit Organizations</em>, third edition. Englewood Cliffs, NJ: Prentice-Hall.',
      link: '',
    },
    {
      referencia:
        'Myriam Quiroa (06 de marzo, 2021). Segmentación demográfica.',
      link:
        'https://economipedia.com/definiciones/segmentacion-demografica.html ',
    },
    {
      referencia:
        'Observatorio Nacional de Migración y Salud. (2022). Documento metodológico Observatorio Nacional de Migración y Salud. Recuperado de ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/GCFI/documento-metodologico-onms.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Tatiana Cristina Vargas',
          cargo: 'Experto temático',
          centro: 'Centro de servicios de salud- Regional Antioquia',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseño instruccional',
          centro: 'Centro de Gestión Industrial - Regional Bogotá',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica- Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        // {
        //   nombre: 'Nombre',
        //   cargo: 'Animador y Producción audiovisual',
        //   centro:
        //     'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
