<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Producto
    .row.bg-color16.px-5.mb-5
      .col-12
        p.mb-4 Previamente, cuando se estaba detallando sobre la mezcla de mercadeo (#[i marketing mix]), se hacía mención al producto. Aún teniendo presente que el centro de la venta es el cliente, el producto es sumamente importante, porque es justamente el objeto de la transacción, es decir, sin producto no hay mercado ni mercadeo.
        .row.justify-content-center.mb-5
          .col-10
            .cajon.color-secundario.p-4
              p.mb-0 Tradicionalmente, el producto era entendido como algo que se podía tocar. Sin embargo, gracias a la evolución del mercadeo, ahora es posible comercializar casi todo; por lo que en el mercadeo moderno, el producto es la palabra genérica que hace referencia a todo aquello que es susceptible de venderse. No obstante, existen ciertos tipos de productos, los cuales pueden revisarse en el siguiente recurso de aprendizaje:
        .row.align-items-center.mb-5
          .col-lg-6
            LineaTiempoD.color-secundario
              p.text-small(numero="1" titulo="Productos tangibles") Es la definición clásica del producto, constituyen aquellos bienes que se pueden tocar y, como características principales, tienen tamaño y peso, además, satisfacen una necesidad o un gusto de un cliente.
              p.text-small(numero="2" titulo="Productos intangibles") Representan los servicios, es decir, aquellos productos que NO se pueden tocar, y entregan a quien los adquiere un beneficio. Ejemplo: servicios contables y financieros.
              p.text-small(numero="3" titulo="Productos tipo marcas") Con la creciente relevancia de los conceptos aspiracionales y moda, surgen las marcas como un tipo de producto más dentro del mercadeo.<br><br>Hoy, pensar en Nike, Adidas, Iphone, Samsung, Diesel, entre muchas otras, muestra cómo estas son claves para  los procesos de mercadeo, llegando incluso al concepto de mercadear una marca.
              p.text-small(numero="4" titulo="Productos tipo personas") El poder de marca personal digital es vital hoy en día, por lo que personas y empresas utilizan estrategias digitales para posicionarse en el mercado, por ejemplo: youtubers, artistas, políticos, etc.
              p.text-small(numero="5" titulo="Productos tipo lugares") Los sitios asociados a diferentes áreas temáticas (culturales, deportivos, religiosos, de entretenimiento) son también importantes para el mercadeo, ya que son valorados positivamente por los consumidores, quienes están dispuestos a pagar en algunos casos incluso importantes sumas de dinero por conocer o visitar dichos lugares. Por ejemplo: el Museo del Oro, en Bogotá.
          .col-lg-6
            figure(data-aos="fade-right")
              img(src="@/assets/curso/img58.svg", style="width: 450px").m-auto
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center.bg-color4.p-4(data-aos="fade-left")
              .col-2
                figure
                  img(src='@/assets/curso/img4.svg', style="position: relative; width: 85px;").m-auto
              .col-10
                br
                p.text-white.mb-4 Dado que los productos tienen características particulares y específicas, según su comportamiento y uso, se define una clasificación, la cual se presenta a continuación:
    .row.bg-color12.px-5.pt-5
      .col-12
        SlyderC(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/img59.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/img60.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
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

<style lang="sass" scoped></style>
