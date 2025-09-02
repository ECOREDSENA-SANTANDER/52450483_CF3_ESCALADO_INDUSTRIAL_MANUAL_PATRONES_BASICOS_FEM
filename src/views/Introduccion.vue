<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comprensión del escalado industrial manual en prendas femeninas constituye un componente esencial en los procesos de transformación técnica del diseño en contextos de producción. Este saber técnico, que traduce una talla base en una secuencia coherente de tallas, inicia con el trazado del plano de puntos de referencia, donde se localizan, aplican y distribuyen las progresiones correspondientes a cada medida. Desde allí, se aborda el escalado de estructuras básicas como el corpiño, el pantalón, la falda y los complementos superiores como mangas y cuellos, priorizando la aplicación de proporciones estandarizadas, la precisión de desplazamientos y la lógica de crecimiento o decrecimiento para cada talla.
    
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-7
          p.mb-0 A partir de los patrones escalados, se procede a la separación de tallas, fase que exige identificar distancias entre versiones, conservar simetrías y garantizar la correcta organización de cada pieza según los puntos clave definidos en el sistema de progresión. El procedimiento aplicado no solo asegura la integridad del diseño técnico, sino que también facilita su interpretación en el flujo de producción. En complemento, la marcación técnica se convierte en una etapa crítica, ya que permite registrar, mediante convenciones gráficas estandarizadas, toda la información relevante para el corte y ensamblaje, como aplomes, centros, piquetes, ejes, tallas y márgenes.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    .cajon.color-primario.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Con este enfoque formativo, el Servicio Nacional de Aprendizaje SENA fortalece la capacidad técnica del o la aprendiz, proporcionándole herramientas para desempeñarse con solvencia en las dinámicas productivas de la moda femenina. A través de una pedagogía orientada a la calidad, la adaptación morfológica y la estandarización de procesos, la entidad contribuye activamente a la profesionalización del sector y al desarrollo sostenible de la industria textil y de confección en Colombia.
    
    
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
