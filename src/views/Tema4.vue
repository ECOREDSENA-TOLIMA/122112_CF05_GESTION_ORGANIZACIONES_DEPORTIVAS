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
          p.fw-bold.mb-0 Igualmente existe otra clasificación de los sectores económicos según actividad económica, los cuales son: sector agropecuario, sector de servicios, sector industrial, sector de transporte, sector del comercio, sector financiero, sector de la construcción, sector minero y energético y sector de las comunicaciones.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 División según la economía clásica
    p.mb-5 Esta división se centra en la idea de que el libre mercado es la forma natural del funcionamiento de la economía y que esta produce progreso y prosperidad, para ello se considera: 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
