<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Grupo poblacional
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los grupos poblacionales hacen referencia a conjuntos de personas que comparten características similares como la condición étnica, la edad y el género. Estos grupos se constituyen como categorías con diversas y multiculturales características. En Colombia, existen diferentes grupos poblacionales, comúnmente conocidos como grupos étnicos. Estos son reconocidos especialmente porque están asentados en territorios de riqueza cultural y gozan de derechos especiales. Los grupos étnicos principales son: los indígenas, los negros, palenqueros y raizales, y los Rrom o población gitana.

    .container-100.py-4(style="background-color: #E9EDFF" data-aos="fade-left")
      SlyderB.col-xl-10.mx-auto(:datos="datosSlyder")
</template>

<script>
import SlyderB from '@/components/SlyderB.vue'
export default {
  name: 'Tema3',
  components: { SlyderB },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Etnia Wayuu',
        texto:
          'Los Wayuu se encuentran ubicados en la península de la Guajira, están localizados en el resguardo de la alta y media Guajira, en los municipios de Barrancas, Distracción, Fonseca, Maicao, Uribía, Manaure y Riohacha.',
        imagen: require('@/assets/curso/temas/tema3/img-2.png'),
      },
      {
        titulo: 'Indios Zenú',
        texto:
          'El pueblo Zenú se encuentra ubicado en los resguardos de San Andrés de Sotavento, en el departamento de Córdoba y en el Volao, Urabá Antioqueño, también existen numerosos asentamientos en Sucre y Choco.',
        imagen: require('@/assets/curso/temas/tema3/img-3.png'),
      },
      {
        titulo: 'Los Nasa o Pees',
        texto:
          'Actualmente los paeses habitan 96 resguardos en los departamentos de Cauca, Huila, Putumayo, Caquetá, Meta y el Valle.',
        imagen: require('@/assets/curso/temas/tema3/img-4.png'),
      },
      {
        titulo: 'Los Pastos',
        texto:
          'El pueblo de los pastos se encuentra en la franja transversal del sur de Colombia, en los departamentos de Putumayo y Nariño.',
        imagen: require('@/assets/curso/temas/tema3/img-5.png'),
      },
      {
        titulo: 'Población afrocolombiana',
        texto:
          'Son los grupos humanos que hacen presencia en todo el territorio nacional (urbano-rural), de raíces y descendencia histórica, étnica y cultural africana nacidos en Colombia, con su diversidad racial, lingüística y folclórica. (Grueso, et al, 2007:4)',
        imagen: require('@/assets/curso/temas/tema3/img-6.png'),
      },
      {
        titulo: 'Población Raizal',
        texto:
          'Es la población nativa de las Islas de San Andrés, Providencia Y Santa Catalina descendientes de la unión entre europeos (principalmente ingleses, españoles y holandeses) y esclavos africanos. Se distinguen por su cultura, lengua (creole).',
        imagen: require('@/assets/curso/temas/tema3/img-7.png'),
      },
      {
        titulo: 'Población Palenquera',
        texto:
          'La comunidad Palenquera está conformada por los descendientes de los esclavizados que, mediante actos de resistencia y de libertad, se refugiaron en los territorios de la Costa Norte de Colombia desde el Siglo XV, denominados palenques. Existen 4 Palenques reconocidos: San Basilio de Palenque (Mahates – Bolívar), San José de Uré (Córdoba), Jacobo Pérez escobar (Magdalena) y La Libertad (Sucre).',
        imagen: require('@/assets/curso/temas/tema3/img-8.png'),
      },
      {
        titulo: 'Gitanos o <em>row</em>',
        texto:
          'El pueblo <em>Row</em> o gitano, hace parte la diversidad étnica y cultural de la diversidad colombiana. Mediante el decreto 2957, del 6 de agosto de 2010, el Estado colombiano reconoce que los gitanos tienen una identidad propia y mantienen una conciencia étnica particular.',
        imagen: require('@/assets/curso/temas/tema3/img-9.png'),
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
