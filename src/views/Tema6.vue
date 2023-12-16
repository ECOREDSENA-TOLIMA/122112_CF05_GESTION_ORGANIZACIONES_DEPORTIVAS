<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Instituciones públicas y privadas
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las Instituciones constituyen un pilar fundamental en la economía del país, las organizaciones se pueden clasificar de acuerdo con su naturaleza, ya sea pública o privada, las cuales están determinadas por los servicios que prestan y del origen de los recursos para su funcionamiento.
  
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Las instituciones públicas
    
    p Las instituciones públicas son aquellas entidades que pertenecen al Estado Colombiano, tienen personería jurídica y manejan recursos y patrimonio proporcionados por el Estado, están creadas mediante un decreto de estado; dichas entidades pueden pertenecer alguna de las ramas del poder público o los órganos autónomos e independientes, las cuales se pueden clasificar a continuación: 

    .d-flex.flex-wrap
      .col-md-6.col-xl-4.mb-4.d-flex
        .tarjeta-numerada.color-acento-contenido.ps-5.py-4.pe-3.w-100
          .tarjeta-numerada__numero
            .h2(style="color: black") 1
          p.mb-0.fw-bold(data-aos="fade-left") Rama ejecutiva
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Orden nacional
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Orden departamental
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Orden municipal
      .col-md-6.col-xl-4.mb-4.d-flex
        .tarjeta-numerada.color-acento-botones.ps-5.py-4.pe-3.w-100
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.mb-0.fw-bold(data-aos="fade-left") Rama judicial
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Consejo de estado
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Consejo superior de la judicatura
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Corte constitucional
      .col-md-6.col-xl-4.mb-4.d-flex
        .tarjeta-numerada.color-primario.ps-5.py-4.pe-3.w-100
          .tarjeta-numerada__numero.text-white
            .h2.text-white 3
          p.mb-0.fw-bold(data-aos="fade-left") Organización electoral
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Consejo nacional electoral
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Fondo rotatorio de la registraduría nacional del estado civil
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Registraduría nacional del estado civil
      .col-md-6.col-xl-4.mb-4.d-flex
        .tarjeta-numerada.color-primario.ps-5.py-4.pe-3.w-100
          .tarjeta-numerada__numero.text-white
            .h2.text-white 4
          p.mb-0.fw-bold(data-aos="fade-left") Órganos Autónomos e Independientes
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Autoridad nacional de televisión
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Banco de la república
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Comisión nacional del servicio civil
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Corporaciones autónomas regionales 
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Entes universitarios autónomos 
      .col-md-6.col-xl-4.mb-4.d-flex
        .tarjeta-numerada.color-acento-contenido.ps-5.py-4.pe-3.w-100
          .tarjeta-numerada__numero
            .h2(style="color: black") 5
          p.mb-0.fw-bold(data-aos="fade-left") Organismos de control
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Ministerio público
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Contraloría general de la nación
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Auditoría general de la república
      .col-md-6.col-xl-4.mb-4.d-flex
        .tarjeta-numerada.color-acento-botones.ps-5.py-4.pe-3.w-100
          .tarjeta-numerada__numero
            .h2.text-white 6
          p.mb-0.fw-bold(data-aos="fade-left") Sistema integral, de verdad, justicia
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Reparación y no repetición
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Comisión para el esclarecimiento de la verdad, la convivencia y la no repetición
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Jurisdicción especial para la paz
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="Imagen decorativa")
              p.ps-2.mb-0(data-aos="fade-left") Unidad de búsqueda de personas dadas por desaparecidas en el marco y en razón del conflicto armado
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2. Las instituciones privadas
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Una #[strong institución] privada es una #[strong institución] dedicada a los negocios, que se constituye con un capital privado, hacen parte del motor de desarrollo del país. Según el Artículo 333 de la Constitución Política de Colombia, la actividad económica y la iniciativa privada son libres, dentro de los límites del bien común. Para su ejercicio, nadie podrá exigir permisos previos ni requisitos, sin autorización de la ley. La libre competencia económica es un derecho de todos que supone responsabilidades. La empresa, como base del desarrollo, tiene una función social que implica obligaciones. El Estado fortalecerá las organizaciones solidarias y estimulará el desarrollo empresarial, algunos ejemplos de empresas privadas en Colombia son:
        ul.lista-ul--separador.mb-5
          li
          li.d-flex.justify-content-center.align-content-center
            p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
              i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
              | Bancolombia
            p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
              i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
              | Grupo Nutresa
            p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
              i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
              | Alpina
            p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
              i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
              | Grupo Sura
            p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
              i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
              | Bavaria
            p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
              i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
              | Arturo Calle
          li.mb-0
        .cajon.color-primario.p-4(style="background-color: #DFE5FF")
          p.mb-0 Si bien existe libertad para crear empresa en Colombia, la ley colombiana delimitará el alcance de las actividades económicas, cuando así lo exijan los intereses, sociales, ambientales y de patrimonio cultural.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema6/img-2.png" style="max-width: 400px" data-aos="fade-left" alt="Imagen decorativa")


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
