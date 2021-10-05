<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Mercadeo digital
    p En inglés, #[i Digital Marketing], es el mercadeo que utilizan los canales o medios online para darse a conocer, es decir, aprovechan el uso de la tecnología para realizar sus actividades. Es un término muy utilizado, dado que, debido al Covid-19, para muchas empresas, se convirtió en la única forma de generar contacto con sus clientes y dar a conocer la oferta.
    p.mb-5 Para ampliar la información sobre qué es el mercadeo digital, lo invitamos a ver el siguiente video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Vukk_lp4dO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4 Ventajas y desventajas
    p.mb-5 El mercadeo digital ofrece un sinnúmero de oportunidades para las empresas, las cuales se mencionan a continuación:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img45.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img46.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img47.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img48.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img49.svg", style="width: 450px").m-auto
    h4.mb-5 Pero también tiene sus desventajas
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img50.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img51.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img52.svg", style="width: 450px").m-auto
      .col-6.col-lg-3
        figure
          img(src="@/assets/curso/img53.svg", style="width: 450px").m-auto
    h4.mb-5 Canales en mercadeo digital
    p Los canales en #[i marketing digital] son las vías o los espacios a través de los cuales se implementan las tácticas y las actividades, es decir, son los habilitadores para crear la conexión entre la empresa y el cliente, por lo que tienen como característica que, en la mayoría de los casos, permiten la interacción en tiempo real.
    p.mb-5 Para ampliar la información, lo invitamos a ver el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-bbJONQgamY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 En el mercadeo digital, existen tres tipologías:
    .row.justify-content-center
      .col-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color15
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img54.svg', style="width: 70px").m-auto
          h3.text-center.mb-0 Medios propios
          h3.text-center (en inglés, #[i owned media])
          p Este concepto es bastante intuitivo, los medios propios son aquellos que son propiedad de la empresa y, por tanto, hay total autonomía en cómo utilizarlos. Estos son: página web, blog, email #[i marketing], aplicaciones como Facebook, y #[i landing page] (páginas de aterrizaje).
      .col-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color15
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img55.svg', style="width: 50px").m-auto
          h3.text-center.mb-0 Medios pagos
          h3.text-center (en inglés, #[i paid media])
          p Estos medios son aquellos asociados a un pago que debe realizarse para acceder a ellos. Los más usados son: anuncios pagados, #[i podcasts], pautas digitales, #[i influencers], entre otros. Por ejemplo: los anuncios pagados a través de Google.
      .col-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color15
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img56.svg', style="width: 60px").m-auto
          h3.text-center.mb-0 Medios ganados
          h3.text-center (en inglés, #[i earned media])
          p Son aquellos medios que, por méritos, la empresa ha ganado a través de las relaciones públicas, el posicionamiento de la marca y menciones espontáneas por parte de los anunciantes. Un ejemplo son: las conversaciones asociadas a la marca y/o los colaboradores.

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

<style lang="sass" scoped></style>
