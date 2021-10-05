<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 El cliente
    p Es la razón de ser de la empresa, del mercadeo y de las ventas; y aunque es falso que el cliente siempre tiene la razón, sí es importante conocer cómo se comporta, qué necesita y qué espera de la empresa y sus productos.
    p La siguiente imagen nos presenta la clasificación de los clientes según su rol en la compra.
    p.mb-5 Lo invitamos a ver el siguiente video, el cual nos amplía el concepto de cliente.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4WIq433jNMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p Clasificación de los clientes según su rol en la compra
        .row.justify-content-center.my-5(data-aos="fade-left")
          .col-lg-6.bg-color18.p-4
            figure
              img(src='@/assets/curso/img63.svg', style="width: 450px").m-auto
          .col-lg-6.p-4.bg-color19.d-flex
            .row.align-items-center
              .col-12
                p.mb-0.text-white Sin embargo, para una persona que se desempeñará como agente de #[i Contact Center], es importante conocer que, según el rol que ejercen en la compra, existen tres posibles clasificaciones de clientes y el usuario, los cuales se relacionan en la siguiente imagen:
        .titulo-sexto.color-acento-contenido
          p Tipos de clientes
    .row.bg-color16.px-5.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-10
            figure.my-5(data-aos="fade-right")
              img(src='@/assets/curso/img64.svg', style="width: 1200px").m-auto
        p.mb-5 A continuación, se analizan los roles con algunos ejemplos:
        .row.align-items-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img41.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Manuel, a través de un #[i Contact Center], adquiere un servicio de televisión satelital para su hogar. Manuel es el cliente y, dado que la televisión es un producto intangible, él y su familia son los usuarios del servicio.
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img42.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Diana, a través de un #[i Contact Center], compra unos zapatos para una fiesta que tiene. En este caso, Diana es la cliente, porque fue quien pagó por los zapatos, y simultáneamente es la consumidora, porque es un producto tangible y es ella quien va a hacer uso de ellos.
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img43.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Valentina, a través de un #[i Contact Center], compra una torta para el cumpleaños de su mamá. En este caso, Valentina es la cliente para la empresa, y ella y su familia serán los consumidores, ya que disfrutarán del delicioso pastel.
          .col-lg-5
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img65.svg', style="width: 450px").m-auto
        h4.mb-4 Necesidades del cliente: Pirámide de Maslow
        p La pregunta sobre la cual se abren muchos debates es: #[b ¿las necesidades ya están creadas o se deben crear?] 
        p La respuesta es muy simple: las necesidades ya existen; el poder de las ventas y el mercadeo está en primera línea para satisfacerlas y, en otros casos, hacerlas visibles.
        p Con base en lo anterior, hacia 1943, Abraham Maslow, en su libro Teoría de la Motivación Humana, formuló uno de los aportes más relevantes para la historia asociado al comportamiento humano: la pirámide de Maslow.
        p En ella, se plantea que todas las personas tienen diferentes niveles de necesidades. El principio para entender las necesidades de la pirámide de Maslow es que, en un contexto general, para avanzar en la pirámide, ya se deben tener cubiertas las necesidades previas.
    figure(data-aos="fade-right")
      img(src='@/assets/curso/img66.svg', style="width: 1300px").m-auto


</template>

<script>
export default {
  name: 'Tema6',
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
