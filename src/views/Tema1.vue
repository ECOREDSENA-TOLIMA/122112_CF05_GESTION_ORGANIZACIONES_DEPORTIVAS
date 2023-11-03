<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caracterización poblacional
    
    .d-flex.flex-wrap.mb-5
      .col-lg-7.pe-lg-4
        p La caracterización de la población, según Sánchez Upegui se hace a partir de un:
        .bloque-texto-d.color-secundario.p-4.pb-0
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular análisis de índole esencialmente descriptivo. Puede realizarse desde distintos enfoques metodológicos, utilizando datos cuantitativos y cualitativos, así como fuentes primarias y secundarias de información, con el propósito de aproximarse al conocimiento y comprensión de las estructuras, características, dinámicas, acontecimientos y experiencias asociadas a una población de interés en un momento del tiempo específico.
            i.fas.fa-quote-right
          .bloque-texto-d__autor
            p.fw-bold 2010
      img.mb-4.mb-lg-auto.col-lg-5(src="@/assets/curso/temas/tema1/img-1.png" alt="imagen decorativa" style="max-width: 505px")
    
    p La caracterización poblacional, no permitirá identificar y diferenciar los usuarios de las organizaciones, y clasificarlos según las necesidades de intervención, en este caso en el desarrollo de un evento del sector de la actividad física el deporte y la recreación.

    p Para diseñar una caracterización se deben tener en cuenta diferentes variables, las cuales determinarán los puntos a analizar en la población, por ejemplo: variables demográficas, geográficas, etc. Agrupar la población según estas variables se llama segmentación de la población, teniendo en cuenta la siguiente estructura:

    .container-100.d-flex.flex-wrap.justify-content-center.py-5.d-none.d-md-flex(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left bottom; background-size: cover; margin-bottom: -3rem"
    )
      img.mx-auto.pb-5(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 1210px")
    img.mx-auto.pb-5.d-flex.d-md-none(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 606px")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
