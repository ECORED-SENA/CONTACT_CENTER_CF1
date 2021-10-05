<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-color1.px-5
      .col-12
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            p Las ventas son, en primera instancia, las que garantizan los resultados comerciales de una empresa. En este orden de ideas, un proceso estructurado de ventas implica no solo conocer herramientas o técnicas asociadas para realizarlas con éxito, sino  también la demanda del producto, así como tener nociones de mercadeo y conocer en detalle sobre los clientes. 
            p De acuerdo con lo anterior, este componente brinda bases sólidas para entender cómo el mercado tiene necesidades por satisfacer y los vendedores deben ser competentes para saber detectarlas, hacerlas visibles y llegar con la mejor oferta de valor a cada cliente.
            p Para hacer esto posible, se debe aplicar la Ley del Embudo, de lo macro a lo micro, es decir, entender:
          .col-lg-6
            figure(data-aos="fade-right")
              img(src="@/assets/curso/img1.svg", style="width: 550px").m-auto    
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-5.bg-color2.p-4
            figure
              img(src='@/assets/curso/img3.svg', style="width: 450px").m-auto
          .col-lg-5.p-4.bg-color3.d-flex
            .row.align-items-center
              .col-12
                ul.lista-ul
                  li 
                    i.lista-ul__vineta(style="color: #3E2EA6" width="1px")
                    p.mb-0.text-white ¿Qué es el mercado?
                  li 
                    i.lista-ul__vineta(style="color: #3E2EA6" width="1px")
                    p.mb-0.text-white ¿Cuáles son los diferentes tipos de mercado?
                  li 
                    i.lista-ul__vineta(style="color: #3E2EA6" width="1px")
                    p.mb-0.text-white ¿Cuál es el producto?, al dimensionarlo como aquel objeto, servicio, persona, o marca que genera la transacción.
                  li 
                    i.lista-ul__vineta(style="color: #3E2EA6" width="1px")
                    p.mb-0.text-white Entender cómo la plaza se constituye en una variable clave para asegurar que el portafolio llegue correctamente a las manos del cliente.
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-color4.p-4(data-aos="fade-left")
          .col-2
            figure
              img(src='@/assets/curso/img4.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            br
            p.text-white.mb-4 Teniendo estos conceptos claros, se puede abordar sin inconveniente el proceso comercial.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
