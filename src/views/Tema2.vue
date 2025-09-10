<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Separación de tallas
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.d-flex.flex-column.justify-content-center
          p.mb-0 Una vez realizado el escalado de los patrones básicos femeninos, se inicia el proceso de separación de tallas, el cual consiste en distribuir las variantes escaladas en una secuencia clara, progresiva y técnicamente organizada. Esta etapa no solo permite visualizar y comparar las diferencias entre cada talla, sino que también asegura la consistencia en la aplicación de los incrementos o decrementos definidos en el proceso de gradación. La separación de tallas es fundamental para verificar la uniformidad en el crecimiento de los moldes, conservar la geometría del diseño original y facilitar la organización espacial de los patrones dentro del entorno de trabajo.
        
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Determinación de distancias entre tallas
      
      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Las distancias entre tallas ya escaladas representan los valores que se han aplicado para pasar de una talla base a una siguiente dentro del rango definido. Estas distancias se calculan previamente durante el escalado, pero es en este punto donde se analizan en su conjunto y se confirman con precisión en función del sistema de tallas establecido. La determinación de estas distancias permite validar la progresión correcta del patrón y sirve como guía para:

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Comprobar que cada incremento mantiene la proporción anatómica esperada.

            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Verificar que las medidas horizontales y verticales respetan los márgenes técnicos definidos.

            li.d-flex.mb-0
              i.fas.fa-shirt.icon-list
              p.mb-0 Asegurar la coherencia entre tallas contiguas y facilitar la trazabilidad del patrón dentro del sistema productivo.

        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png', alt='')


      .bloque-texto-g.color-acento-contenido-2.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.bg-color-4.d-flex.flex-column.justify-content-center
          .bg-color-6.py-2.px-3.br-2.wcus-1.mb-4
            p.mb-0.fw-bold Las distancias más comunes son:
          ul.lista-ul--color.mb-0
            li.d-flex.mb-4
              i.fas.fa-check.icon-list
              p.mb-0 1 cm para cuartos de contorno de cintura y cadera (basado en incrementos de 4 cm totales por talla).

            li.d-flex.mb-4
              i.fas.fa-check.icon-list
              p.mb-0 0,25 cm a 0,5 cm para alturas como cadera, talle o tiro, según la variable.

            li.d-flex.mb-0
              i.fas.fa-check.icon-list
              p.mb-0 0,25 cm por lado en anchos de manga, hombro o bota.


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Identificación de puntos clave para la proyección

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/4.png')})`}"
        )
        .bloque-texto-g__texto.p-5.br-1.d-flex.flex-column.justify-content-center
          p.mb-0 La proyección de las tallas, una vez escaladas, requiere ubicar con exactitud los puntos clave en el patrón. Estos puntos son referencias estructurales sobre las cuales se han aplicado los valores de crecimiento y que deben ser visibles, comprensibles y técnicamente verificables. La correcta separación de tallas implica señalar dichos puntos para garantizar que cada pieza cumpla con los requerimientos de simetría, ajuste y funcionalidad.
      
      .bg-color-4.py-2.px-4.br-3.wcus-1.mb-5(data-aos="fade-left")
            p.mb-0.fw-bold Los puntos clave se identifican de la siguiente manera:


      SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-12
              .row.justify-content-center.mb-4.d-none.d-lg-block
                .col-6.m-auto
                  figure
                    img(src='@/assets/curso/temas/t2/5.svg')
              h4.mb-4.text-center Contornos anatómicos
              p.mb-0.text-center  Cintura, cadera, busto y muslos, donde se aplican crecimientos en fracciones como cuartos o mitades.
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-12
              .row.justify-content-center.mb-4.d-none.d-lg-block
                .col-6.m-auto
                  figure
                    img(src='@/assets/curso/temas/t2/6.svg')
              h4.mb-4.text-center Alturas estructurales
              p.mb-0.text-center  Altura de talle, tiro, largo de manga o largo de prenda, que implican incrementos totales o completos por talla.

        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-12
              .row.justify-content-center.mb-4.d-none.d-lg-block
                .col-6.m-auto
                  figure
                    img(src='@/assets/curso/temas/t2/7.svg')
              h4.mb-4.text-center Ángulos de crecimiento
              p.mb-0.text-center  Hombros, escotes, sisa y laterales, donde los puntos determinan el giro o desplazamiento proporcional del patrón.

        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-12
              .row.justify-content-center.mb-4.d-none.d-lg-block
                .col-6.m-auto
                  figure
                    img(src='@/assets/curso/temas/t2/8.svg')
              h4.mb-4.text-center Intersecciones técnicas
              p.mb-0.text-center  Donde se cruzan líneas guía de construcción, como ejes centrales, pinzas o pliegues, facilitando la lectura y validación del escalado.
  </template>

<script>
export default {
  name: 'Tema1',
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
