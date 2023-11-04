<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Caracterización poblacional
    
    .col-xl-10.mx-auto.d-flex.flex-wrap.mb-5
      img.mx-auto.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-1.png" style="max-width: 505px" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        p.mb-0 La estratificación social es una forma de clasificar los componentes de una sociedad determinada, teniendo en cuenta criterios de riqueza, estatus ocupación y poder, con los cuales se divide a la población. Cada estrato está compuesto por personas que comparten características socioeconómicas similares; desde la estratificación social, se permite observar los grandes niveles de desigualdad que hay en nuestras sociedades. Existen cuatro tipos de estratificación social: la esclavitud, el sistema de castas, el sistema estamental y el sistema de clases sociales. A continuación, se relacionan las especificaciones de cada uno:
    
    TabsB.color-acento-botones(data-aos="fade-left")
      .py-4.py-md-5(titulo="La esclavitud" :icono="require('@/assets/curso/temas/tema5/t-1.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Es la desigualdad de los individuos que son poseídos por otros como su propiedad, se considera un sistema de estratificación cerrado, puesto que no existe movilidad social. La esclavitud ha existido en numerosos lugares en diferentes épocas de la historia, principalmente se conoce la antigua Grecia y Roma, también en Estados Unidos, algunos países africanos y asiáticos. Esta es la forma de estratificación más desigual, se observan claramente dos estratos sociales el amo y el esclavo; este último carece de derecho alguno y pertenece en su totalidad al amo. Aparentemente, la esclavitud se considera abolida, sin embargo, en muchos países continúan prácticas de esclavitud moderna.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-2.png' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="El sistema de castas" :icono="require('@/assets/curso/temas/tema5/t-2.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Es un sistema social, donde el estatus personal es adjudicado de por vida, se divide en cinco grandes grupos y la movilidad entre estratos no está permitida, este sistema de castas lleva más de tres mil años en la India, por lo cual se ha institucionalizado por costumbre; la razón principal es la religión,  el hinduismo, el cual dice que, si se mantiene una vida ejemplar, se puede ascender de casta tras la reencarnación; sin embargo en este tipo de sociedad rechaza por completo cualquier tipo de relación con miembros de otras castas.

            p Esta división social también era funcional en la época colonial, en gran parte del continente europeo y América, un ejemplo de ello era la monarquía española. En la imagen se muestra la representación gráfica del sistema de castas en el imperio español.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-3.svg' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="El sistema estamental" :icono="require('@/assets/curso/temas/tema5/t-3.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Este sistema hace referencia a la sociedad que está organizada por estamentos. Este grupo social, se caracteriza, por presentar unas determinadas condiciones económicas, legales y jurídicas, este tipo de sistema se deriva del antiguo régimen, que se tenía antes de la revolución francesa, por ende, esta se dio por toda Europa. Aunque siguen existiendo sociedades estamentales en el presente.
            p Estaba jerarquizada y se dividía en tres estamentos, siendo un sistema cerrado con poca movilidad entre estos; esta se divide en tres estamentos:
            ul
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                p.ps-2.mb-0(data-aos="fade-left") #[strong Nobleza:] controlaban junto al clero, todo el poder, ellos contaban con todos los derechos y privilegios.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                p.ps-2.mb-0(data-aos="fade-left") #[strong Clero:] se encuentra en el centro de la pirámide, sin embargo, tenían mucho poder y dominaban juntos con la nobleza.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                p.ps-2.mb-0(data-aos="fade-left") #[strong Tercer Estado:] era el estrato más bajo. No tenían derechos y privilegios.

          .col-md-6
            .tarjeta.color-acento-contenido.p-4
              p.text-center.fw-bold(style="color: black") Las principales características de la sociedad estamental son:
              ol
                li.d-flex.align-items-center.mb-2(style="color: black")
                  span.decorador-ul 1
                  p.ps-2.mb-0(data-aos="fade-left" style="color: black") Es una sociedad claramente jerarquizada.
                li.d-flex.align-items-center.mb-2(style="color: black")
                  span.decorador-ul 2
                  p.ps-2.mb-0(data-aos="fade-left" style="color: black") Su jerarquía es en forma de pirámide, clasificado a la población en estratos sociales.
                li.d-flex.align-items-center.mb-2(style="color: black")
                  span.decorador-ul 3
                  p.ps-2.mb-0(data-aos="fade-left" style="color: black") El derecho a perteneces a un estrato social se adquiría a partir del nacimiento.
                li.d-flex.align-items-center.mb-2(style="color: black")
                  span.decorador-ul 4
                  p.ps-2.mb-0(data-aos="fade-left" style="color: black") El estrato al que pertenecía una persona por lo general permanecía a lo largo de su vida.
                li.d-flex.align-items-center.mb-2(style="color: black")
                  span.decorador-ul 5
                  p.ps-2.mb-0(data-aos="fade-left" style="color: black") Son sociedades en las que predominan la desigualdad.
                li.d-flex.align-items-center.mb-2(style="color: black")
                  span.decorador-ul 6
                  p.ps-2.mb-0(data-aos="fade-left" style="color: black") En esta sociedad los estratos sociales altos tenían derechos reconocidos.

      .py-4.py-md-5(titulo="El sistema de clases sociales" :icono="require('@/assets/curso/temas/tema5/t-4.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Es una forma de estratificación social, en la que la posición social del individuo se determina según su poder adquisitivo; la sociedad de clases constituye una división jerárquica, basada principalmente en los ingresos y riquezas que posee el individuo, en este sistema existe la movilidad, ya que no son grupos cerrados y un individuo pude moverse de una clase a otra. Para pertenecer a unas clases sociales depende básicamente de los criterios económicos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-4.png' alt='Imagen decorativa')

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

<style lang="sass">
.decorador-ul
  min-height: 31px
  max-height: 31px
  min-width: 31px
  max-width: 31px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%
  background-color: white
  color: #FE502D !important
  font-weight: bold
  box-shadow: inset 0 5px 0px 3px #00000009
</style>
