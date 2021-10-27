export default {
  global: {
    componenteFormativo: 'Entendiendo el mercado y los clientes',
    descripcionCurso:
      'No existe una venta exitosa sin entender que esta, además de ser una transacción, es un proceso que debe verse como una relación gana-gana, donde el cliente obtiene aquello que necesita y la empresa recibe a cambio una retribución llamada “precio”. Este componente tiene como fin suministrar los conceptos necesarios para gestionar un buen proceso comercial.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercado en la economía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Agentes que intervienen en el mercado',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Historia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Mercado para el mercadeo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mezcla de mercadeo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mercadeo digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Producto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'El cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Segmentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Prospectos comerciales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Ardila, E. y Sastoque, F. (1984) Técnica de ventas: El producto. SENA. ',
      link: 'https://repositorio.sena.edu.co/handle/11404/1896',
    },
    {
      referencia:
        'Healy, K. (2016). <i>A Theory of Human Motivation</i> by Abraham H. Maslow (1942). The British Journal of Psychiatry, 208(4), p. 313. ',
      link:
        'https://www-proquest-com.bdigital.sena.edu.co/docview/2315601619?OpenUrlRefId=info:xri/sid:primo&accountid=31491',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2007). Marketing. Versión para Latinoamérica. Pearson Educación. ',
      link:
        'https://www.academia.edu/42984200/Marketing_version_para_latinoamerica_kottler_phillip_armstrong_gary_2_3_',
    },
    {
      referencia:
        'Lozano, G. (1983).  Ventas de mostrador: Los motivos de compra. SENA. ',
      link: 'https://repositorio.sena.edu.co/handle/11404/3759',
    },
    {
      referencia:
        'Moncayo, L. (1988). Administración de pequeñas empresas: Identificación y segmentación de mercados. SENA. ',
      link: 'https://repositorio.sena.edu.co/handle/11404/979',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'es la razón de ser de la empresa. Es la persona o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es el proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Mercado',
      significado:
        'es el lugar abstracto donde intervienen dos agentes económicos: los oferentes (aquellas empresas o personas que ofrecen sus bienes o servicios) y los demandantes (aquellas personas o empresas que adquieren los bienes o servicios).',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado:
        'hace alusión a las cuatro P del mercadeo. Son las cuatro variables básicas en el mercadeo: producto, precio, plaza, promoción.',
    },
    {
      termino: 'Precio',
      significado:
        'es el valor de intercambio entre oferentes y demandantes. Es la única variable de la mezcla de mercadeo que genera ingresos para la compañía.',
    },
    {
      termino: 'Producto',
      significado:
        'es el objeto de la transacción. En el mercadeo moderno, un producto puede ser: un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Prospectar',
      significado:
        'ejercicio que realizan las empresas para seleccionar sus posibles clientes.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'son aquellos clientes que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad adquisitiva para adquirirlo.',
    },
    {
      termino: 'Segmentación',
      significado:
        'es el proceso de dividir el mercado en grupos con características similares, con el fin de direccionar mejor las estrategias de mercadeo.',
    },
  ],
  complementario: [
    {
      texto:
        'Kotler, P. y Armstrong, G. (2007). Marketing. Versión para Latinoamérica. Pearson Educación.',
      tipo: 'PDF',
      link:
        'https://www.academia.edu/42984200/Marketing_version_para_latinoamerica_kottler_phillip_armstrong_gary_2_3_',
    },
    {
      texto:
        'Kotler, P. y Keller, K. (2012).  Dirección de Marketing. Pearson Educación.',
      tipo: 'PDF',
      link:
        'http://www.montartuempresa.com/wp-content/uploads/2016/01/direccion-de-marketing-14edi-kotler1.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta Temática',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
