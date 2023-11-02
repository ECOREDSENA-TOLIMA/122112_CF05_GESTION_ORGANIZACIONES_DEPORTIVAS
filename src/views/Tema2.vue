<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La segmentación poblacional hace referencia a la organización de un grupo poblacional, según determinados atributos similares que estos comparten; consiste en dividir las personas en grupos de acuerdo con unos criterios particulares; segmentar la población, permite gestionar acciones, para el diseño y organización de este, estableciendo estrategias y herramientas para una gestión exitosa. Determinar la segmentación, dependerá de las necesidades particulares de la organización; en diferentes especialidades como el mercadeo o la investigación, se utiliza la segmentación como punto de partida, ya sea para iniciar sus proyectos o determinar al tipo de población a quien se va a apuntar sus productos o servicios, a continuación, mencionaremos unos criterios generales para clasificar la población, como se describe a continuación.
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Segmentación demográfica
    
    p.mb-5 La segmentación demográfica se determina al dividir un grupo poblacional, con base en las variables demográficas, algunas pueden ser: sexo, edad, estado civil, descendencia étnica, ingresos, educación, religión, situación laboral, números de miembros que componen la familia, ciudadanía, idioma, área de la ciudad, pueblos, barrios, sectores, entre otros. Este tipo de segmentación es una de las más comunes, puesto que son más fáciles de identificar y de medir; las variables para este tipo de segmentación son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-1.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Edad
        p.mb-0.text-center(style="color: black") La edad permite clasificar la población en adultos o niños, adolescentes y jóvenes.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-2.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Sexo
        p.mb-0.text-center(style="color: black") Esta variable hace referencia al sexo como mujer u hombre, su identificación desde su comportamiento.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-3.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Tamaño de la familia
        p.mb-0.text-center(style="color: black") Hace referencia a la estructura y el número de miembros que conforman la familia.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-4.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Ciclo de vida
        p.mb-0.text-center(style="color: black") Se podría categorizar a una persona, según el punto que esté experimentando en su ciclo de vida familiar, en las siguientes etapas: soltero, casado, divorciado.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-5.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Nivel de ingresos
        p.mb-0.text-center(style="color: black") Esta categorización se determina de manera explícita en función de los ingresos percibidos.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-6.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Ocupación
        p.mb-0.text-center(style="color: black") Esta variable solicita el tipo de trabajo que realiza.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tj-7.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Nivel educativo
        p.mb-0.text-center(style="color: black") En relación al ámbito educativo, esta clasificación se enfoca en el tipo de estudio completado, abarcando tanto el nivel alcanzado como el campo de conocimiento.
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p.fw-bold Realizar una buena segmentación tiene grandes beneficios, entre los principales se encuentran: 
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Ayudar a delimitar más fácilmente el grupo objeto de trabajo.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Facilitar la adaptación de estrategias para la organización de eventos.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Maximizar la eficiencia de los recursos asignados para un evento.
        p.mb-0 La segmentación basada en las variables demográficas, es una forma muy sencilla de clasificar la población, puesto que la información es más fácil de encontrar y organizar según sea su necesidad; es por ello que estas variables son las más utilizadas a la hora de caracterizar la población.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 400px" data-aos="fade-left")
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Segmentación geográfica
    
    p.mb-5 La segmentación geográfica se refiere al lugar donde el individuo reside, entendiendo todas las divisiones geográficas que se determinen allí: continente, país, región, estado, departamento, ciudad, pueblo, localidad, comuna, barrio, etc. Se mencionarán algunos tipos de segmentación geográfica:
</template>

<script>
export default {
  name: 'Tema2',
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
