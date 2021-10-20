<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Canales de distribución
    .row.bg-color1.px-5.mb-5
      .col-12
        p La distribución (en algunos libros llamada Plaza) es la variable de la mezcla de mercadeo (#[i marketing mix]) responsable de hacer que el producto llegue a las manos del cliente; y los canales de distribución son los medios que utilizan las empresas para gestionar el proceso de entrega del producto.
        p.mb-5 Puede revisar los canales de distribución en el siguiente recurso de aprendizaje:
        figure(data-aos="fade-right")
          img(src="@/assets/curso/img61.svg", style="width: 1200px").m-auto
    p.mb-5 Lo invitamos a ver el siguiente video, para conocer más sobre los canales de distribución.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jln7JsbFbPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 #[b Las estrategias de distribución] tienen estrecha relación con los canales y hacen referencia a la forma en que las empresas se plantean cómo llegarán a sus clientes. A nivel de mercadeo, se distinguen dos estrategias, que pueden ser complementarias, porque, dependiendo del tipo de producto y de los recursos económicos de las empresas, se pueden implementar:
    .row.justify-content-center
      .col-lg-9.mb-5
        .row(data-aos="fade-left")
          .col-1
            figure
              img(src='@/assets/curso/img62.svg', style="position: relative; width: 140px; max-width: 180px; left: -25px; bottom: -46px;").m-auto
          .col-10.p-5.bg-color17
            p.ms-5 #[b Estrategia de distribución #[i push] (empujar)]
            p.ms-5.mb-0 En dicha estrategia, el foco es lograr que los intermediarios impulsen con los clientes la colocación del producto, por tanto, las estrategias de distribución y comunicación se enfocan en “conquistar” los distribuidores.
      .col-lg-9
        .row(data-aos="fade-right")
          .col-1
            figure
              img(src='@/assets/curso/img62.svg', style="position: relative; width: 140px; max-width: 180px; left: -25px; bottom: -75px;").m-auto
          .col-10.p-5.bg-color17
            p.ms-5 #[b Estrategia de distribución #[i pull] (jalar)]
            p.ms-5 Aquí los esfuerzos se enfocan en llegar al cliente final para que este acuda a los distribuidores a solicitar el producto, logrando:
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | Que los distribuidores que no tienen el producto en su portafolio lo incluyan.
              li 
                i.lista-ul__vineta
                | Que se tengan mayores ventas si el producto ya hace parte de lo que ofrece el distribuidor.


</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass" scoped></style>
