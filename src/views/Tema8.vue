<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Prospectos comerciales
    .row.justify-content-center
      .col-lg-10
        p.mb-5 Son los posibles clientes de una compañía. Para que una empresa pueda denominar a una persona o empresa como prospecto, debe cumplir tres condiciones:
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color20
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img72.svg', style="width: 40px").m-auto
              h3.text-center Tener necesidad o gusto por el producto
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color20
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img73.svg', style="width: 40px").m-auto
              h3.text-center Tener capacidad adquisitiva o capacidad de deuda para adquirirlo
          .col-sm-6.col-lg-3
            .tarjeta--boton.color-primario.p-3.bg-color20
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img74.svg', style="width: 25px").m-auto
              h3.text-center Tener poder de decisión para la compra del producto
    .row.bg-color16.px-5
      .col-12
        .row.align-items.center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            p Si estos tres aspectos no se cumplen, se considera, a nivel comercial, que no se debería desgastar el vendedor, porque se realizará un proceso de venta con poca probabilidad de éxito.
            p Como consecuencia de llevar procesos empíricos o de enfocarse en el corto plazo, no todas las empresas prospectan; no obstante, es muy importante realizar este proceso, por varias razones:
            p Se direcciona mejor el esfuerzo comercial.
            p Se pueden tener ahorros de costos y gastos, como resultado de la optimización del proceso comercial.
            p.mb-0 Prospectar ayuda a tener mejores indicadores del proceso comercial, dado que se podrá conocer cuántos prospectos se tenían y cuántos se lograron concretar en la venta.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img75.svg', style="width: 400px").m-auto
        p.mb-5 A pesar de que no hay consenso entre cuáles son los tipos de prospectos, se muestran dos tipos:
        .row.justify-content-center.mb-5
          .col-lg-9.mb-5
            .row(data-aos="fade-left")
              .col-1
                figure
                  img(src='@/assets/curso/img76.svg', style="position: relative; width: 140px; max-width: 180px; left: -25px; bottom: -25px;").m-auto
              .col-10.p-5.bg-color17
                p.ms-5 #[b Prospecto no calificado]: son prospectos que cumplen las condiciones para serlo, pero aún no han recibido ninguna validación por parte de la empresa para corroborar su verdadero potencial.
          .col-lg-9
            .row(data-aos="fade-right")
              .col-1
                figure
                  img(src='@/assets/curso/img77.svg', style="position: relative; width: 140px; max-width: 180px; left: -25px; bottom: -10px;").m-auto
              .col-10.p-5.bg-color17
                p.ms-5 #[b Prospecto calificado]: son prospectos que cumplen las condiciones para serlo, y ya han pasado por alguna validación por parte de la empresa para conocer el potencial.
    p.mb-0 Con base en lo anterior, se puede afirmar que calificar un prospecto es muy buena táctica, ya que permite al equipo de ventas enfocarse en los clientes potenciales, con mayor probabilidad de cierre de ventas. Para calificarlos, hoy en día, en empresas más robustas, se utilizan sistemas de información; en otros casos más empíricos, lo que se realiza es calificarlos con criterios del proceso de mercadeo o del proceso de ventas, de forma manual.

</template>

<script>
export default {
  name: 'Tema8',
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
