<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, la caracterización poblacional emerge como un componente esencial para una comprensión integral de cualquier población. Dentro de este contexto, exploramos el concepto de segmentación poblacional, que involucra la categorización de individuos en grupos basados en múltiples factores como demografía, geografía, psicología y comportamiento. La atención en la investigación de grupos específicos se vuelve fundamental en este proceso. Adicionalmente, los sectores económicos (primario, secundario y terciario) junto con su subdivisión según las actividades, así como la exploración de la estratificación social, contribuyen significativamente a una percepción más profunda de la estructura social. En este panorama, las instituciones públicas y privadas desempeñan papeles de gran relevancia en la vida de la población, cada una ejerciendo funciones únicas y ejemplares. A continuación, se presenta un mapa conceptual que resume de manera gráfica estos aspectos:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se exploran los temas más relevantes del componente formativo, que incluyen la segmentación poblacional, los grupos poblacionales, los sectores económicos, la estratificación social y las instituciones públicas y privadas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
