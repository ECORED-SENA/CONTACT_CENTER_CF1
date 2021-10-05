<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Segmentación
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Es un proceso que está ligado a los clientes. Segmentar es el proceso de dividir un mercado en grupos homogéneos (similares entre sí), con la condición de ser heterogéneos (distintos) unos de otros.
        p.mb-0 Las empresas orientadas al cliente, y que entienden que los clientes tienen características diferentes, implementan procesos de segmentación muy estructurados y así, cuando el proceso se ha realizado, se definen los segmentos.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img67.svg', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.bg-color4.p-4(data-aos="fade-left")
          .col-2
            figure
              img(src='@/assets/curso/img4.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            br
            p.text-white.mb-4 ¿Qué permite la segmentación a las empresas? El siguiente video responde esta inquietud.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kODlxbwfCSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.bg-color12.px-5.mb-5
      .col-12
        p.mb-5 La segmentación en una empresa es importante porque:
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img68.svg', style="width: 550px").m-auto
          .col-lg-6
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img41.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Permite #[b focalizar los esfuerzos de mercadeo] de una manera más óptima, es decir, permite hacer campañas diferenciadas, según las necesidades de cada segmento.
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img42.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Organiza los #[b procesos comerciales] de acuerdo con el tipo de cliente, lo que genera mayor asertividad en los procesos comerciales.
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img43.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Afianza las #[b relaciones con los clientes], debido a que los modelos de servicio al cliente se definen con base en la segmentación.
            .row.mb-4
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img44.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Posibilita la #[b creación de productos] enfocados en las necesidades propias de cada grupo de clientes.
            .row
              .col-2.d-inline
                figure
                  img(src='@/assets/curso/img69.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Un proceso de segmentación bien realizado, definirá cuáles son los criterios para prospectar, es decir, para #[b seleccionar sus posibles clientes].
        h4.mb-4 Variables de la segmentación
        p Los procesos de segmentación son realizados por el área de Mercadeo de las empresas. Teniendo claro que realizar esta actividad no está asociado al rol de un agente de #[i Contact Center], sí es importante que las personas que trabajan en un #[i Contact Center] conozcan cuáles son las variables (características) que se tienen en cuenta para definir y caracterizar los segmentos de la empresa.
        p.mb-5 Las variables de segmentación son:
    .row.bg-color7.px-5.mb-5
      .col-12
        ImagenInfografica.color-secundario.my-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/img70.svg', style="width: 850px").m-auto
          .tarjeta.color-acento-botones.p-3(x="15%" y="66%")
            p Hacen alusión a cómo se caracteriza la población a partir de criterios fácilmente medibles. Los principales aspectos que se asocian a este tipo de segmentación son: la edad, el sexo, el nivel de ingresos, el estado civil, la ocupación y el nivel de educación.
          .tarjeta.color-acento-botones.p-3(x="29%" y="18%")
            p Identifican dónde se encuentran los clientes. Se suelen relacionar con: el país, la región, el tamaño de la ciudad, e incluso la densidad (cantidad de población que habita sobre un mismo espacio).
          .tarjeta.color-acento-botones.p-3(x="49%" y="1%")
            p Hacen referencia al comportamiento humano. Los aspectos que se consideran acá son: motivaciones, personalidad, percepciones e intereses.
          .tarjeta.color-acento-botones.p-3(x="71%" y="21%")
            p Hacen relación a las conductas propias respecto a los bienes y servicios que satisfacen la necesidad. Específicamente, se analiza: la ocasión de uso (para qué), la lealtad o no a la marca (es decir, si se tiene preferencia por una marca u otra), los beneficios esperados (cuáles son las expectativas que se esperan sean resueltas).
          .tarjeta.color-acento-botones.p-3(x="84%" y="63%")
            p Son los factores que se han arraigado en la persona a lo largo de su vida. Se consideran: la cultura, la religión, la clase social y el ciclo de vida familiar.
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .cajon.color-secundario.p-4
          p.mb-0 Ahora, se detalla un ejemplo de cómo una empresa define sus segmentos de mercado. En este caso, se tomó como referencia a Empresas Públicas de Medellín (EPM).
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p Ejemplo de variables de segmentación para EPM
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img71.svg', style="width: 450px").m-auto
        figcaption.mt-3  Nota. Elaborada con base en la información disponible en: https://www.epm.com.co/site/

</template>

<script>
export default {
  name: 'Tema7',
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
