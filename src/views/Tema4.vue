<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sectores económicos: primario, secundario y terciario
    
    .d-flex.flex-wrap
      img.mx-auto.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        p Los sectores económicos de un país, territorio o estado son aquellas divisiones de sus actividades económicas; en Colombia estos sectores económicos se dividen en tres: primario (agrícola), sector secundario (la industria) y terciario (prestación servicios); esta división se conoce como la división clásica de los sectores económicos.
        .cajon.color-primario.p-4(style="background-color: #E0F4FE")
          p.fw-bold.mb-0 Igualmente, existe otra clasificación de los sectores económicos según actividad económica, los cuales son: sector agropecuario, sector de servicios, sector industrial, sector de transporte, sector del comercio, sector financiero, sector de la construcción, sector minero y energético y sector de las comunicaciones.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 División según la economía clásica
    p.mb-5 Esta división se centra en la idea de que el libre mercado es la forma natural del funcionamiento de la economía y que esta produce progreso y prosperidad, para ello se considera: 

    TabsB.color-acento-botones(data-aos="fade-left")
      .py-4.py-md-5(titulo="Sector primario" :icono="require('@/assets/curso/temas/tema4/t-1.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Abarca actividades relacionadas con la explotación de recursos nacionales, como agricultura, caza, pesca y silvicultura, además de ganadería, explotación forestal y minera. No hay transformación de los bienes obtenidos. Colombia, con su ubicación geográfica y diversidad climática, es una potencia mundial en agricultura, debido a su rica oferta de alimentos y materias primas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-2.svg' alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Sector secundario" :icono="require('@/assets/curso/temas/tema4/t-2.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Transforma materias primas en productos elaborados, abarcando industria, construcción, artesanías y fuentes de energía. A diferencia del Sector Primario, aquí se realizan procesos industriales para convertir las materias primas en productos consumibles. Incluye industrias extractivistas, enfocadas en minería y petróleo, y también industrias de transformación como fabricación de electrodomésticos, embotellado, vehículos y construcción.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-3.svg' alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Sector terciario" :icono="require('@/assets/curso/temas/tema4/t-3.svg')")      
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Comprende actividades de servicios como educación, salud, turismo, comercio, finanzas, transporte, creatividad y comunicaciones. Aunque no produce mercancías, es esencial para el desarrollo económico, ya que proporciona servicios a la comunidad, empresas y personas. También incluye la distribución de mercancías y servicios públicos como salud y educación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-4.svg' alt='Imagen decorativa')
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 División según la actividad económica
    
    p.mb-5 Hace referencia a la parte del proceso de producción en el que se encuentren las labores que se realizan; a continuación, se puede conocer su clasificación: 
    .container-100.py-4(style="background-color: #E9EDFF" data-aos="fade-left")
      SlyderB.col-xl-10.mx-auto(:datos="datosSlyder")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Sector agropecuario',
        texto:
          'Está compuesto por las actividades agrícolas, pecuarias, forestal, pesquero y acuícola; este sector es de gran importancia por las características geográficas del país, condiciones climáticas, que permiten gran sustento de esta actividad.',
        imagen: require('@/assets/curso/temas/tema4/img-5.png'),
      },
      {
        titulo: 'Sector de servicios',
        texto:
          'Engloba todas las actividades relacionas con los servicios no productores o transformadores de bienes, se incluyen subsectores como educación, salud, industrias creativas, actividades administrativas, etc.',
        imagen: require('@/assets/curso/temas/tema4/img-6.png'),
      },
      {
        titulo: 'Sector industrial',
        texto:
          'Se caracteriza por la transformación de las materias primas a través de procesos industriales, se centra en la fabricación de diferentes productos.',
        imagen: require('@/assets/curso/temas/tema4/img-7.png'),
      },
      {
        titulo: 'Sector del transporte',
        texto:
          'Se incluye tanto la movilización de personas como de mercancía, (transporte público, transporte de carga) por diferentes medios de transporte, aéreo, terrestre, etc.',
        imagen: require('@/assets/curso/temas/tema4/img-8.png'),
      },
      {
        titulo: 'Sector financiero',
        texto:
          'Incluye todas aquellas organizaciones, relacionadas con actividades bancarias y financieras; como los bancos, aseguradoras, fiduciarias, fondos de pensiones, etc.',
        imagen: require('@/assets/curso/temas/tema4/img-9.png'),
      },
      {
        titulo: 'Sector del comercio',
        texto:
          'Está compuesto por el comercio al por mayor y el minorista, centros comerciales, cámaras de comercio, en general todas aquellas actividades relacionadas con la comercialización de productos a nivel nacional e internacional.',
        imagen: require('@/assets/curso/temas/tema4/img-10.png'),
      },
      {
        titulo: 'Sector de la construcción',
        texto:
          'Son personas y empresas relacionadas con la construcción; como las productoras de materiales, constructoras, arquitectos, ingenieros.',
        imagen: require('@/assets/curso/temas/tema4/img-11.png'),
      },
      {
        titulo: 'Sector minero y energético',
        texto:
          'Incluye las empresas relacionadas con la actividad minera y energética de cualquier tipo como, extractoras de carbón, petroleras, productoras de esmeralda y gas, también se incluyen empresas generadoras de energía.',
        imagen: require('@/assets/curso/temas/tema4/img-12.png'),
      },
      {
        titulo: 'Sector de las comunicaciones',
        texto:
          'Incluye empresas y organizaciones, relacionadas con los medios de comunicación como; telefonía fija y móvil, periódicos, radio, televisión, etc.',
        imagen: require('@/assets/curso/temas/tema4/img-13.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
