<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema que organiza los componentes del escalado de patrones básicos femeninos, en tres bloques principales; el primero aborda el escalado según el tipo de prenda: corpiño, pantalón, falda, manga, cuello y cortes; el segundo se centra en la separación de tallas, considerando la determinación de distancias y puntos clave para la proyección. En tercer lugar, se expone la marcación técnica de patrones, con énfasis en la simbología, las marcas por pieza y la elaboración de fichas técnicas. Cada bloque articula procesos esenciales para garantizar la precisión y la estandarización en la confección.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta la estructura del proceso de escalado de patrones básicos femeninos, organizado en tres ejes principales: el escalado industrial manual, que abarca el patrón básico de corpiño, pantalón, falda, manga, cuello y cortes; la separación de tallas, que incluye la determinación de distancias entre tallas y la identificación de puntos clave para la proyección; y la marcación técnica de patrones, que comprende la simbología, las marcaciones de piezas y la elaboración de fichas técnicas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
