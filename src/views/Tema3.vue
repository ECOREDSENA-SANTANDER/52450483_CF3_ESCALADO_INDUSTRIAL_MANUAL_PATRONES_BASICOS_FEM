<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Marcación técnica de patrones
      
      .bloque-texto-g.bloque-texto-g.color-primario-2.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.d-flex.flex-column.justify-content-center
          p.mb-0 La correcta lectura de un patrón se basa en un sistema gráfico estandarizado que sintetiza información dimensional y secuencial mediante signos claros y precisos. Elementos como flechas, muescas, líneas discontinuas y otros símbolos garantizan que cualquier persona con formación técnica pueda interpretar, cortar y ensamblar las piezas sin ambigüedades. A continuación, se presentan las convenciones gráficas esenciales (ejes, muescas y dirección del hilo), junto con un glosario resumido de los símbolos y abreviaturas más utilizados.
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 3.] Símbolos en la señalización de patrones
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Tabla con símbolos utilizados en la señalización de patrones. Cada fila incluye nombre técnico, representación gráfica, descripción, función y ejemplo de aplicación. Se describen elementos como hilo de tela, corte al sesgo, doblez, piquete, línea de corte, ubicación de botón y costuras, entre otros.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Denominación técnica
              th Símbolo (convención)
              th Descripción
              th Función principal
              th Ejemplo
          tbody
            tr
              td.fw-bold Hilo de tela
              td ‡ (flecha doble vertical).
              td Trazado recto culminado en flechas opuestas.
              td Orienta la pieza respecto a la urdimbre para asegurar caída y estabilidad dimensional.
              td Flecha paralela al centro delantero de una camisa; mantiene el drapeado uniforme.

            tr
              td.fw-bold Corte al sesgo / bias line
              td ⌁ (flecha diagonal 45°).
              td Línea oblicua (≈ 45°) rematada con flechas en ambos extremos.
              td Señala que la pieza debe colocarse diagonal al hilo, otorgando elasticidad controlada.
              td Tira de vivo al bies para refuerzo de sisa en chaqueta ligera.

            tr
              td.fw-bold Doblez de tela
              td ⋯ (tres puntos en triángulo).
              td Conjunto de tres círculos dispuestos en triángulo.
              td Indica que ese borde se apoya sobre el lomo de la tela para cortar la pieza simétrica.
              td Centro espalda de un canesú corrido “colocar al doblez”.

            tr
              td.fw-bold Línea de corte
              td ✂ (tijeras).
              td Ícono de tijeras sobre la línea.
              td Determina dónde efectuar el corte definitivo del tejido o de la entretela.
              td Señal de recorte en la vista frontal para crear tapeta francesa.

            tr
              td.fw-bold Piquete / notch
              td ┴ (T horizontal).
              td Segmento perpendicular que forma una “T”.
              td Marca de ensamblaje para hacer coincidir costuras y curvas.
              td Piquete simple a ¼ de la copa de manga; piquete doble a ½ de la espalda.

            tr
              td.fw-bold Ubicación de botón
              td ⊗ (círculo con X).
              td Círculo del diámetro del botón cruzado por “X”.
              td Precisa el tamaño y el punto exacto de costura del botón.
              td Botón de cuello deportivo: ⊗ a 1 cm del borde de pala.

            tr
              td.fw-bold Ubicación de ojal
              td ─┴─ (segmento igual al ancho del ojal).
              td Trazo recto limitado por dos marcas cortas perpendiculares.
              td Define la longitud y posición del ojal.
              td Ojales horizontales de puño: cuatro marcas separadas 1,5 cm.

            tr
              td.fw-bold Línea de costura
              td ─ ─ ─ (línea guionada).
              td Serie de guiones regulares próxima al borde.
              td Indica la trayectoria de la puntada a margen interno.
              td Guionada a 1 cm dentro de la línea de corte del cuello.

            tr
              td.fw-bold Puntos internos / perforaciones
              td ✸ P / ✸ In (asterisco + sigla).
              td Pequeños orificios señalados con asterisco y abreviatura.
              td Sirven de referencia para ubicar piezas internas (bolsillos, pinzas, presillas).
              td ✸ P marca inicio de pinza de pecho; ✸ In para bolsillo interior de blazer.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Marcaciones de piezas
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-9
          .row.justify-content-center.align-items-center.bg-color-3.mb-0(data-aos="fade-left")
            .col-sm-12.col-lg-5.d-none.d-lg-block.pcus-1
              img(src='@/assets/curso/temas/t3/3.svg', alt='')
            .col-sm-12.col-lg-7.p-5
                p.mb-0 En un despiece de patronaje, cada pieza debe ser marcada de forma técnica, clara y estandarizada para garantizar su correcta interpretación durante el proceso de corte y confección. Estas marcas permiten identificar la función de cada molde, su orientación en el tejido, y las instrucciones necesarias para ensamblar la prenda con precisión.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png', alt='')
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 4.] Información detallada de los patrones
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Tabla que reúne elementos técnicos de marcación en patrones. Incluye columnas para el tipo de dato, contenido requerido, función y ejemplo aplicado. Detalla aspectos como nombre de la pieza, código, talla, cantidad de capas, sentido del hilo, doblez, piquetes, autoría y observaciones específicas.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Elemento de marcación
              th Qué debe consignarse
              th Función técnica
              th Ejemplo en patrón femenino de prenda superior
          tbody
            tr
              td.fw-bold Nombre de la pieza
              td Término exacto de la parte del molde.
              td Distingue y ordena los componentes durante el montaje.
              td Delantero camisa sport.

            tr
              td.fw-bold Referencia / código de modelo
              td Clave alfanumérica asociada a la ficha técnica.
              td Permite rastrear el diseño dentro de la colección.
              td PS001, grabado bajo el nombre de pieza.

            tr
              td.fw-bold Talla
              td Sigla o número de la gradación.
              td Evita confusión entre moldes de tallas distintas.
              td Talla 40 (M - COL).

            tr
              td.fw-bold Cantidad para cortar
              td Número de capas por material (tela, forro, entretela).
              td Garantiza que todas las capas requeridas se incluyan.
              td Cortar × 2 en tela y × 1 en entretela, para el cuello.

            tr
              td.fw-bold Sentido del hilo
              td Flecha recta longitudinal.
              td Asegura el comportamiento del tejido y el calce.
              td Flecha paralela al centro delantero de la chaqueta.

            tr
              td.fw-bold Indicaciones de doblez
              td Leyenda “al lomo / colocar al doblez”.
              td Evita costuras innecesarias, produce una pieza simétrica.
              td Centro espalda de un yugo: colocar al lomo.

            tr
              td.fw-bold Simbología de piquetes
              td Muescas simples, dobles o triples en bordes estratégicos.
              td Alinea correctamente costuras y puntos de unión.
              td ▼ en sisa delantero, ▼▼ en sisa espalda para casar la manga.

            tr
              td.fw-bold Nombre del patronista
              td Firma o iniciales del responsable.
              td Facilita trazabilidad y control de versiones.
              td Patronista: J. Rincón.

            tr
              td.fw-bold Observaciones adicionales
              td Notas sobre materiales o procesos especiales.
              td Aclara requisitos específicos del diseño.
              td “Refuerzo con entretela fusible en tapeta”.
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 7.] Patrón con especificaciones técnicas. 
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          figure.mb-0
              img(src='@/assets/curso/temas/t3/4.svg', alt='Corresponde a un patrón industrial acompañado de especificaciones técnicas. Incluye piezas base identificadas con letras y numeración, cada una con referencias de corte, aplome y fases de confección. En la parte inferior se presenta una tabla de control donde se relaciona el nombre de cada pieza, el tipo de tela asignada, la cantidad de partes a cortar y el número de moldes requeridos, consolidando así la información necesaria para la organización y el ensamble de la prenda. ')
              figcaption.mb-0 Fuente: https://ayelenpellegrino.com/wp-content/uploads/2010/02/despiece-de-molderia.jpg
      p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo por cada área abordada en las marcaciones de las piezas.
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 5.] Resumen de las marcaciones con ejemplo
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Tabla con resumen de elementos de marcación en moldes, dividida en tres columnas: nombre del elemento, contenido requerido y ejemplo aplicado. Incluye datos como nombre de la pieza, código, talla, cantidad de capas, sentido del hilo, doblez, piquetes, responsable técnico y observaciones especiales.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Elemento de marcación
              th Contenido requerido
              th Ejemplo aplicado
          tbody
            tr
              td.fw-bold Nombre de la pieza
              td Identifica la parte del molde y su función estructural.
              td Delantero camisa clásica.

            tr
              td.fw-bold Referencia / código de modelo
              td Clave alfanumérica que enlaza la pieza con el modelo o ficha técnica.
              td SS24 – CMA – 001.

            tr
              td.fw-bold Talla
              td Dimensión específica del patrón según gradación.
              td Talla 40 COL.

            tr
              td.fw-bold Cantidad para cortar
              td Número de capas por tipo de material (tela, forro, entretela).
              td Cortar × 2 en tela / × 1 en entretela.

            tr
              td.fw-bold Sentido del hilo
              td Flecha recta que indica la orientación de la urdimbre.
              td Flecha paralela al centro delantero.

            tr
              td.fw-bold Indicaciones de doblez
              td Leyenda “al lomo” o “colocar al doblez” para señalar piezas que deben cortarse en simetría, obteniendo su forma completa al desplegar el material.
              td Colocar al doblez en centro espalda.

            tr
              td.fw-bold Simbología de piquetes
              td Muescas simples / dobles / triples que guían el montaje.
              td ▼ (simple) en sisa delantero; ▼▼ (doble) en sisa espalda.

            tr
              td.fw-bold Nombre del patronista
              td Responsable técnico del molde para trazabilidad interna.
              td Patronista: J. Gómez.

            tr
              td.fw-bold Observaciones adicionales
              td Notas de proceso o materiales especiales.
              td Aplicar entretela fusible ligera.
      
      
      
      
      
      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Estructura y contenido de fichas técnicas
      
      .row.justify-content-center.align-items-center.bg-color-3.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block.pcus-1
          img(src='@/assets/curso/temas/t3/5.png', alt='')
        .col-sm-12.col-lg-7.p-5
            p.mb-3 La ficha técnica, en el contexto del patronaje y escalado de prendas básicas femeninas, constituye un documento estructurado que centraliza la información técnica esencial para la correcta interpretación, reproducción y control de calidad del producto textil. Su función principal es garantizar que todos los procesos posteriores al diseño y patronaje (como el corte, la confección, el ensamble y la evaluación de tallas), se realicen de manera precisa, estandarizada y conforme a los parámetros definidos desde el prototipo.
            p.mb-0 Este documento recoge, de manera organizada, los datos correspondientes al tipo de prenda, sus características morfológicas, los materiales y suministros requeridos, las especificaciones de costura y acabado, así como los detalles de escalado. En el caso de los patrones básicos femeninos, la ficha técnica debe reflejar los siguientes aspectos:
        
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          ul.lista-ul.lista-ul--separador
            li.d-flex.mb-0.py-2
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Nombre de la prenda y referencia interna del diseño] (para su trazabilidad dentro del sistema de producción)

            li.d-flex.mb-0.py-2
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Croquis técnico:] representación esquemática que describe de forma detallada la estructura de la prenda sin elementos decorativos.

            li.d-flex.mb-0.py-2
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Tabla de medidas:] con información de la talla base y las progresiones por cada talla en contornos, largos y proporciones.

            li.d-flex.mb-0.py-2
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Especificaciones del escalado:] incluyendo tipo de escalado aplicado, distancias entre tallas, dirección de crecimiento y puntos clave intervenidos.

            li.d-flex.mb-0.py-2
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Convenciones gráficas:] simbología empleada para indicar costuras, márgenes, pliegues, piquetes, dobleces, cortes, entre otros.

            li.d-flex.mb-0.py-2
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Materiales y avíos:] tejidos, hilos, cierres, botones y demás elementos necesarios para la confección del prototipo y sus réplicas.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')

      .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-left")
        p.mb-0 La ficha técnica constituye una herramienta de comunicación transversal que integra a todas las áreas del proceso productivo, desde el diseño hasta la línea de ensamblaje. Facilita la minimización de errores, garantiza la coherencia entre las piezas, reduce reprocesos y contribuye a la estandarización de la calidad final de la prenda. En el contexto del escalado industrial femenino, este documento respalda la correcta aplicación de los incrementos y decrecimientos que definen las tallas del producto, aspecto especialmente crítico cuando se trabaja con rangos amplios o con una marcada diversidad morfológica en la población objetivo.

      .tarjeta.color-secundario.p-4.mb-0(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/19.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-white INTRODUCCIÓN A FICHA TÉCNICA

                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://youtu.be/5YOLIDHLiCw" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video  
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
