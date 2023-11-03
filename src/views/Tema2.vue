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

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-3.png", alt="Segmentación por regiones o por zonas")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-white.text-center Segmentación por regiones o por zonas 
            p.mb-0.text-white La segmentación por regiones clasifica la población según divisiones geográficas, recopilando datos según ubicación. Las diferencias entre la capital y los pueblos influyen en la planificación de eventos deportivos, adaptándola a las características específicas de cada lugar.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="flip-up")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-4.png", alt="Segmentación por tamaño")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Segmentación por tamaño
            p.mb-0 Se divide los segmentos, tomando en cuenta la densidad de la población; también se puede sub clasifica por zona urbana, zona suburbana y zona rural, dependiendo de las características y número de los individuos.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-5.png", alt="Segmentación por clima")
          .crd_hover_txt--body(style="background-color: #FE502D")
            h4.mb-3.text-center Segmentación por clima
            p.mb-0 La segmentación climática es crucial en mercadeo, ya que las condiciones climáticas influyen en patrones comunes en personas, concentradas en zonas específicas. Esto es relevante para promover productos estacionales como ropa y artículos de verano.
    
    .col-xl-10.mx-auto.d-flex.flex-wrap
      img.mx-auto.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        p.fw-bold Segmentar la población a partir de estas características, posibilita: 
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Identificar grupos más específicos, para los eventos a desarrollar.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Ayudar a enfocarse en grupos poblacionales y direccionar mejor las actividades.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Mejorar posicionamientos en respuesta al trabajo con este tipo de segmentación.
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Segmentación psicográfica
    
    .container-100.d-flex.flex-wrap.justify-content-center.py-5.d-none.d-md-flex(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; background-size: contain; margin-bottom: -3rem"
    )
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es la segmentación de individuos que se realiza según, variables psicológicas y demográficas; teniendo en cuenta aspectos como la personalidad y su estilo de vida desde la psicología;  por otra parte, desde la demografía, se toman características como rasgos de tipo social, cultural, demográficos, políticos o cualquier aspecto compartido por la población. Dentro de las principales variables psicológicas tenemos: personalidad, estilo de vida y valores. A continuación, se podrá conocer sus especificidades: 
      img.mx-auto.mb-5(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 766px" alt="Imagen decorativa")
      
    .col-xl-10.mx-auto.d-flex.flex-wrap
      img.mx-auto.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-9.png" style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        p.fw-bold Existen múltiples beneficios de la segmentación psicográfica:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Conoce las preferencias e intereses de los usuarios.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Personaliza actividades o servicios.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Permite establecer estrategias más eficientes y efectivas en este tipo de segmentación.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Ayuda a crear una relación más efectiva y duradera con los usuarios.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Segmentación de conducta
    
    p En este tipo de segmentación se divide la población según la conducta del usuario, desde aquí se toman variables conductuales o de comportamiento frente a determinado servicio (o producto). Esta es una de las principales formas de segmentar la población en el marketing, sobre todo cuando se va a comercializar o divulgar un producto.

    p.fw-bold.mb-5 Los principales tipos de segmentación conductual son:

    .d-flex.flex-wrap.mb-5
      .order-2.order-xl-1.col-xl-8.pe-xl-4(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Segmentación por beneficios")
            p.mb-0 Este tipo de variable forma segmentos homogéneos de usuarios, basándose en los beneficios que buscan en sus productos o servicios, se basan en las características que tiene los productos o servicios, enfocándolos en los beneficios que buscan los usuarios. Por ejemplo: la persona para seleccionar un gimnasio, alguno lo seleccionará por los equipos, otro por los entrenadores, otro por el equipo interdisciplinario, etc.
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Segmentación por <br class='d-flex d-xxl-none'>frecuencia de uso")
            p.mb-0 Esta variable se agrupa los individuos en función del uso que se le dé a un producto o servicio, por ejemplo:
            ul.lista-ul--color.lista-ul--separador
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] Usuarios regulares o frecuentes.
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] Usuarios ocasionales.
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] Usuarios de Temporada.
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] Usuarios por ocasiones especiales.
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Segmentación por nivel<br class='d-flex d-xxl-none'> de uso")
            p.mb-0 Esta segmentación se realiza según el nivel o cantidad que las personas, consumen un producto o servicio, estos se pueden agrupar así:
            ul.lista-ul--color.lista-ul--separador
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] De alto volumen de compra o servicio.
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] De volumen promedio de compra o servicio.
              li.d-flex.mb-2.pb-2.align-items-start
                p.mb-0 #[span(style="color: #FFCA00") ●] Bajo volumen de compra o servicio.
        .cajon.color-primario.p-4(style="background-color: #DFE5FF")
          p.fw-bold.mb-0 Los beneficios de aplicar la segmentación conductual son:
          ul.mb-0
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul-v2.svg" style="max-width: 8px" data-aos="fade-right")
              p.ps-2.mb-0(data-aos="fade-left") Ayuda a identificar grupos de usuarios, según su comportamiento.
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul-v2.svg" style="max-width: 8px" data-aos="fade-right")
              p.ps-2.mb-0(data-aos="fade-left") Ayuda a la organización a identificar, las necesidades de cada segmento.
            li.d-flex.align-items-start
              img.mt-1(src="@/assets/curso/temas/decorador-ul-v2.svg" style="max-width: 8px" data-aos="fade-right")
              p.ps-2.mb-0(data-aos="fade-left") Esta segmentación permite, mantener la lealtad de los usuarios.
      img.order-1.order-xl-2.mx-auto.col-xl-4.mb-4.my-xl-auto(src="@/assets/curso/temas/tema2/img-10.png" style="max-width: 400px" data-aos="fade-left")

</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema2',
  components: { TabsA },
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
