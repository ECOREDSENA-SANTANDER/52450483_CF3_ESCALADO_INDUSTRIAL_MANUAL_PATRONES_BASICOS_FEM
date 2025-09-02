<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Escalado industrial manual 2
      
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.d-flex.flex-column.justify-content-center
          p.mb-3 El escalado industrial manual constituye un proceso fundamental en la confección seriada, diseñado para generar múltiples tallas a partir de un patrón base, asegurando que cada versión mantenga la proporcionalidad, funcionalidad y adaptación a la morfología corporal prevista. Por tanto, el proceso se fundamenta en principios de progresión matemática, análisis anatómico y verificación dimensional, adaptando el patrón base a un rango de cuerpos estandarizados según el cuadro de tallas establecido.
          p.mb-0 El procedimiento inicia con el análisis minucioso de los puntos de aplome, que actúan como referencias fijas sobre las que se proyectan los incrementos o decrecimientos de las medidas. Estos puntos, distribuidos en zonas críticas del patrón, como #[b hombros, busto, cintura, cadera, sisa y largo de prenda], permiten mantener la coherencia estructural entre las tallas y preservar la armonía de la silueta.
      
      p.mb-5(data-aos="fade-left") Una vez definidos los puntos de aplome, se procede con la aplicación secuencial del escalado, que comprende los siguientes pasos fundamentales: 
      TabsC.color-acento-botones(data-aos="fade-left")
        .py-3.py-md-4(titulo="Determinación del grupo de tallas")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/2.png', alt='')
            .col-sm-12.col-lg-7.m-cus-1
                p.mb-0 Se establece el rango de tallas que se desea escalar a partir del patrón base. La clasificación puede incluir tallas pequeñas, medianas y grandes, según el sistema de tallaje de referencia.
          
        .py-3.py-md-4(titulo="Identificación del punto muerto")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/3.png', alt='')
            .col-sm-12.col-lg-7
                p.mb-0 Se localiza el punto del patrón que no sufre modificación dimensional durante el escalado. El punto se convierte en eje de simetría o pivote técnico desde el cual se proyectan los incrementos o decrecimientos hacia los extremos del patrón.
      
        .py-3.py-md-4(titulo="Medición de incrementos y decrecimientos")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/4.png', alt='')
            .col-sm-12.col-lg-7
                p.mb-0 Se definen las cantidades que se sumarán o restarán a las medidas originales del patrón base, tanto en sentido horizontal como vertical, de acuerdo con las progresiones del cuadro de tallas. Estos valores suelen estar normalizados por el sector productivo y varían según el tipo de prenda.

        .py-3.py-md-4(titulo="Proyección sobre el patrón")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/5.png', alt='')
            .col-sm-12.col-lg-7
                p.mb-0 A partir del punto muerto, se trasladan los incrementos o decrecimientos hacia los puntos de aplome, respetando las proporciones establecidas, por tanto, el proceso se realiza pieza por pieza, garantizando la correspondencia anatómica entre cada parte del patrón.

        .py-3.py-md-4(titulo="Revisión dimensional")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.png', alt='')
            .col-sm-12.col-lg-7
                p.mb-0 Una vez completada la proyección para todas las tallas, se realiza una verificación cruzada con el cuadro de tallas, a fin de asegurar que los valores obtenidos coincidan con los rangos permitidos y que la progresión sea uniforme.
      
      
      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Plano de los puntos (escalado de corpiño básico femenino)
      
      p.mb-5(data-aos="fade-left") A continuación, se presenta un plano de molde de corpiño básico con los puntos de aplome señalizados. 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 1.] Plano con puntos de aplome
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-8
          figure.mb-0
              img(src='@/assets/curso/temas/t1/7.svg', alt='Dos piezas de patrón con líneas curvas y rectas, identificadas como frente y espalda. Cada una está señalada con flechas que indican direcciones de escalado en bordes, contornos y ejes verticales.')
          

      .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-left")
        p.mb-0 El plano básico de corpiño está conformado por dos piezas fundamentales: la correspondiente al frente y la correspondiente a la espalda. Cada una de estas piezas contiene puntos estratégicos denominados puntos de aplome, los cuales definen las coordenadas de referencia necesarias para aplicar técnicas de escalado industrial con precisión. Estos puntos de aplome permiten establecer desplazamientos horizontales y verticales, que se asocian al sistema de coordenadas del plano cartesiano.

      p.mb-5(data-aos="fade-left") En la pieza frontal del corpiño, los puntos de aplome se distribuyen en las siguientes zonas: 

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/8.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.d-flex.flex-column.justify-content-center
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Línea de hombro y cuello:] en esta sección se ubican puntos que controlan los desplazamientos diagonales y horizontales, garantizando que el crecimiento entre tallas conserve el ángulo y el largo del hombro, así como el contorno del cuello.

            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Curva de la sisa delantera:] los puntos situados aquí permiten la expansión lateral del patrón, ajustando el contorno del busto sin comprometer la forma anatómica de la sisa.

            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Costado o lateral del cuerpo:] a través de los puntos de aplome en esta área, se realiza el incremento horizontal del ancho total del cuerpo, correspondiente al eje “X” del plano cartesiano.

            li.d-flex.mb-0
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Línea inferior o base del corpiño:] se ubican puntos que marcan el alargamiento vertical de la prenda, lo cual corresponde al eje “Y”, manteniendo la proporción desde el busto hasta la cadera.

      p.mb-5(data-aos="fade-left") En la pieza posterior o espalda, los puntos de aplome cumplen funciones similares, distribuidos de esta manera: 
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/9.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.d-flex.flex-column.justify-content-center
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Encuentro entre cuello posterior y hombro:] esta área requiere un crecimiento controlado en dirección horizontal y vertical para asegurar la continuidad del escote y la inclinación de hombro en relación con el frente.

            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Curva de la sisa posterior:] se ajusta el ancho de espalda mediante desplazamientos horizontales que siguen el mismo principio que en el frente, adaptando el patrón al volumen del brazo.

            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Costado posterior:] este punto permite mantener la simetría lateral del corpiño, realizando aumentos en anchura de manera uniforme.

            li.d-flex.mb-0
              i.fas.fa-shirt.icon-list
              p.mb-0 #[b Línea inferior:] se proyecta el alargamiento total de la prenda desde este punto, tomando como base el eje vertical para mantener una distribución equilibrada de largo.

      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Los desplazamientos aplicados en estos puntos se realizan a partir de un punto cero o punto muerto, el cual funciona como referencia inicial para calcular los incrementos o decrecimientos según el sistema de tallas. Así, cada punto de aplome opera como una coordenada dentro del plano cartesiano, contribuyendo a que el escalado sea proporcional, técnico y estandarizado.
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 2.] Ejemplo de aplicación punto hombro 
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          figure.mb-0
              img.mb-2(src='@/assets/curso/temas/t1/10.svg', alt='Detalle circular que muestra la proyección del punto hombro hacia la curva de sisa, con líneas de talla diferenciadas y un sistema de ejes X y Y sobre cuadrícula. Se indican distancias iguales en cada dirección desde un punto central.')
              figcaption Fuente: SENA, (2021)
      
      .row.justify-content-center.align-items-center.bg-color-3.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block.pcus-1
          img(src='@/assets/curso/temas/t1/11.png', alt='')
        .col-sm-12.col-lg-7.p-4
            p.mb-4 El ejemplo del punto hombro por sisa representa un procedimiento técnico dentro del proceso de escalado industrial, en el cual se identifica un punto de intersección clave en la morfología del patrón base. Este punto se define por la confluencia entre la línea del hombro y la curva de la sisa, y su ubicación se convierte en una referencia obligatoria para proyectar incrementos o decrecimientos según las tallas establecidas.
            p.mb-0 Para desarrollar esta operación, se parte de un plano cartesiano cuya intersección de ejes define el punto cero o punto base. Desde este origen, se aplican desplazamientos horizontales (eje X) y verticales (eje Y) que responden a progresiones normalizadas.
      
      
      .bg-fondo-1.px-5.pt-5.pb-3.mb-5(data-aos="fade-left")
            SlyderA(tipo="b")
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                    h4.mb-4 Determinación del punto de origen
                    p.mb-0 El punto donde se cruzan la línea del hombro y la curva de la sisa en el patrón base se establece como referencia inicial. Este punto de intersección se toma como el origen de coordenadas dentro de un sistema estructurado, similar a un plano cartesiano, desde el cual se proyectan los movimientos para escalado.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/12.png', alt='')
      
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                    h4.mb-4 Construcción del sistema de referencia
                    p.mb-0 Se delimita una cuadrícula ortogonal centrada en dicho punto, asignándole el valor de cero tanto en el eje horizontal (X) como en el vertical (Y). Esta retícula permite trazar con precisión los desplazamientos correspondientes a cada talla, respetando la dirección y magnitud de los incrementos.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/13.png', alt='')
      
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                    h4.mb-4 Aplicación de incrementos por talla
                    p.mb-0 A partir del origen, cada talla se construye desplazando el punto en proporciones iguales hacia los extremos del eje “X” y del eje “Y”. En este caso, cada progresión (positiva o negativa) corresponde a 0,84 cm, manteniendo un crecimiento homogéneo tanto en sentido horizontal como vertical. Esta constante asegura la proporción entre tallas sin alterar la morfología del diseño base.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/14.png', alt='')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                    h4.mb-4 Trazado progresivo de curvas
                    p.mb-0 Una vez marcados los nuevos puntos hombro por sisa para cada talla, se conectan mediante líneas curvas equivalentes, que reproducen la forma original del patrón base. Esta secuencia permite preservar el diseño anatómico de la sisa, asegurando su funcionalidad y ajuste en todas las tallas.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/15.png', alt='')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                    h4.mb-4 Importancia del método
                    p.mb-0 Esta metodología estructurada garantiza que la posición del punto crítico (hombro por sisa) se mantenga proporcional en todas las gradaciones. El uso del plano cartesiano como recurso técnico fortalece la precisión del escalado, reduce márgenes de error y contribuye a la estandarización en procesos de producción industrial.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/16.png', alt='')
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Identificación del punto muerto y su función técnica
      
      .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-left")
        p.mb-0 En el contexto del escalado industrial de prendas de vestir, el punto muerto se define como el lugar fijo de referencia a partir del cual se proyectan los incrementos o decrecimientos para construir las distintas tallas, por tanto, el punto permanece invariable a lo largo de todo el proceso de escalado y representa el anclaje sobre el cual se alinean y ajustan las modificaciones dimensionales. Su correcta identificación es fundamental para garantizar la simetría estructural del patrón y mantener la coherencia entre las diferentes proporciones corporales que componen una serie de tallas. 

      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/17.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-1.d-flex.flex-column.justify-content-center
          p.mb-0 Desde el punto de vista técnico, el punto muerto se ubica generalmente en zonas de estabilidad morfológica de la prenda, como el centro delantero o centro espalda en el caso de los patrones simétricos, o en una línea base de apoyo, como la cintura o el busto, según la naturaleza del diseño. Esta ubicación estratégica permite que las transformaciones se distribuyan con precisión hacia ambos lados del patrón, sin alterar la forma general de la prenda ni comprometer su funcionalidad.
      
      p.mb-5(data-aos="fade-left") La función principal del punto muerto radica en actuar como eje de simetría y estabilidad. Gracias a este punto, se asegura que los incrementos aplicados a cada talla se expandan o contraigan en torno a una estructura fija, lo cual evita desviaciones en el calce, errores de alineación o deformaciones geométricas. Además, facilita la utilización de cuadrículas, coordenadas y planos de referencia, como el sistema cartesiano, para establecer relaciones métricas exactas entre tallas. 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 3.] Patrón básico con pinzas 
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-6
          figure.mb-0
              img(src='@/assets/curso/temas/t1/18.svg', alt='Representación de un patrón básico con pinzas, que incorpora medidas específicas para ajustes en contornos, hombros, costados y base, junto con la ubicación y forma de las pinzas, así como la referencia del punto muerto en el trazado. ')
              figcaption Fuente: SENA, (2021)
      
      
      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/19.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-white ESCALADO DE BASE CON PINZAS – SUPERIOR
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://youtu.be/ui7cNs-qD1k" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video
      
      
      
      
      
      
      
      
      
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Escalado de pantalón básico femenino
      
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-9
          .bg-color-4.py-5.px-4.br-1
            p.mb-3 Con base en la #[b tabla de medidas del manual de patronaje SENA], se analizan los incrementos o decrecimientos necesarios para cada talla del pantalón básico femenino. Este análisis considera medidas clave como #[b cintura, cadera, tiro, rodilla y largo total], identificando la diferencia entre tallas consecutivas y distribuyéndola de forma equilibrada entre las piezas delantera y posterior.
            p.mb-0 Los ajustes se aplican desde puntos de referencia como la línea central de pierna y las líneas de tiro y rodilla, utilizando un sistema ortogonal que asegura precisión y mantiene la proporción del diseño original en todo el rango de tallas.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/20.png', alt='')
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 4.] Medidas corporales de referencia para patronaje femenino
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-12
          figure.mb-0
              img(src='@/assets/curso/temas/t1/21.svg', alt='Medidas corporales femeninas utilizadas como referencia en patronaje. Incluye valores de busto, cintura, cadera, espalda, pecho, talle, centro, costado, hombro, cuello, largo de prendas, altura de cadera, tiro, rodilla, bota y otras dimensiones, organizadas por tallas de la 6 a la 18 según el manual de patronaje SENA. ')
              figcaption Fuente: SENA, (2011)
      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/19.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-white Manual de patronaje básico e interpretación de diseños.
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente PDF:
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download


      p.mb-5(data-aos="fade-left") Una vez analizadas las medidas con relación a la proporción de medidas de crecimiento entre tallas, se establecen las siguientes medidas para iniciar el escalado. 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 1.] Medidas de escalado para pantalón básico femenino 
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Tabla con ajustes técnicos para escalado de pantalón básico femenino en tallas del 6 al 14. Contiene columnas para medidas base, diferencia total entre tallas, proporción utilizada y valor aplicado por talla. Incluye datos de cintura, cadera, tiro, largo, altura de cadera, ancho de bota y rodilla.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Medidas pantalón (tallas 6 a 14)
              th Diferencia por talla (D × T)
              th Proporción por talla
              th Medidas a aplicar en el escalado
          tbody
            tr
              td.fw-bold Contorno de cintura.
              td 4 cm.
              td ¼.
              td 1 cm.

            tr
              td.fw-bold Contorno de cadera.
              td 4 cm.
              td ¼.
              td 1 cm.

            tr
              td.fw-bold Largo o altura tiro.
              td 1 cm.
              td Completa.
              td 1 cm.

            tr
              td.fw-bold Altura cadera.
              td 0,25 cm.
              td Completa.
              td 0,25 cm.

            tr
              td.fw-bold Ancho de bota.
              td 0,5 cm.
              td ½.
              td 0,25 cm.

            tr
              td.fw-bold Ancho de rodilla.
              td 0,5 cm.
              td ½.
              td 0,25 cm.

            tr
              td.fw-bold Largo del pantalón.
              td 1 cm.
              td Completo.
              td 1 cm.

            tr
              td.fw-bold Extensión de tiro.
              td 0,25 cm.
              td Completo.
              td 0,25 cm.

      p.mb-5(data-aos="fade-left") Como complemento a la tabla 1, se explica cada columna:
      TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
        .tarjeta.bg-fondo-2.p-4(titulo="Medidas pantalón (tallas 6 a 14)")
          .row.justify-content-center.align-items-center.mb-0.py-4
            .col-12
              p.mb-0 Corresponde a las dimensiones clave del pantalón que se escalarán entre las tallas mencionadas, como cintura, cadera, largo del pantalón, tiro, etc.

        .tarjeta.bg-fondo-2.p-4(titulo="D x T (diferencia por talla)")
          .row.justify-content-center.align-items-center.mb-0.py-4
            .col-12
              p.mb-0 Indica el total de centímetros que se aumentan o reducen entre cada talla. Por ejemplo, entre la talla 6 y la 8, la cintura aumenta 4 cm, por lo tanto, se considera un incremento de 4 cm en esa medida completa.
        .tarjeta.bg-fondo-2.p-4(titulo="Proporción por talla")
          .row.justify-content-center.align-items-center.mb-0.py-4
            .col-12
              p.mb-0 Señala cómo se distribuye la diferencia de la medida en el patrón. Por ejemplo, en contornos (cintura y cadera), que se dibujan en una cuarta parte del molde (¼), solo se aplicará 1 cm de aumento por talla en el patrón (porque 4 cm ÷ 4 = 1 cm). En otras medidas como largo de pantalón o altura de tiro, que se representan en su totalidad, se aplica el total de la diferencia (es decir, la proporción es completa).
        .tarjeta.bg-fondo-2.p-4(titulo="Medidas a aplicar en el escalado")
          .row.justify-content-center.align-items-center.mb-0.py-4
            .col-12
              p.mb-0 Esta columna refleja el valor específico que debe añadirse o sustraerse en el patrón para cada talla, ya calculado según la proporción correspondiente. Por ejemplo, para el ancho de bota, se define un incremento total de 0,5 cm entre tallas, y dado que se representa en la mitad del patrón (½), se aplica solo 0,25 cm en el molde.



      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/19.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-white ESCALADO DE BÁSICO DE PANTALÓN
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://youtu.be/GS5jZ-Tw9vc" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video




      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Escalado de falda básica femenina
      
      p.mb-5(data-aos="fade-left") Partiendo de la tabla de medidas, se procede a realizar el análisis para determinar las medidas que se aplicarán en el plano del patrón básico de falda. 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left") 
          p.mb-0 #[b Tabla 2.] Medidas de escalado para el patrón básico de falda
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Tabla con medidas para el escalado de blusa en tallas del 6 al 14. Presenta datos de cintura, cadera, altura de cadera, largo de falda y separación de busto, organizados por diferencia entre tallas, proporción utilizada y valor que debe aplicarse en el escalado.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7 
            tr
              th Medidas la blusa (tallas 6 a 14)
              th (D × T)
              th Proporción
              th Medidas a aplicar en el escalado
          tbody
            tr
              td.fw-bold Contorno de cintura
              td 4 cm.
              td ¼.
              td 1 cm.

            tr
              td.fw-bold Contorno de cadera
              td 4 cm.
              td ¼.
              td 1 cm.

            tr
              td.fw-bold Altura de cadera
              td 0,25 cm.
              td 1 proporción.
              td 0,25 cm.

            tr
              td.fw-bold Largo de la falda
              td 0,5 cm.
              td 1 proporción.
              td 0,5 cm.

            tr
              td.fw-bold Separación de busto
              td 0,5 cm.
              td ½.
              td 0,25 cm.

      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 La tabla correspondiente al escalado de la falda básica femenina constituye un instrumento técnico fundamental para guiar la ampliación progresiva de tallas, abarcando desde la talla 6 hasta la talla 14. Su función es facilitar la aplicación precisa de incrementos dimensionales sobre una talla base, manteniendo proporciones coherentes y cumpliendo con los estándares de calidad en el desarrollo industrial de prendas.

      p.mb-5(data-aos="fade-left") Cada medida registrada en la tabla indica cuánto debe aumentarse en cada talla, con base en tres elementos esenciales: 
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          .bg-color-4.py-5.px-5.br-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-5
                i.fas.fa-check.icon-list
                p.mb-0 #[b D x T (diferencia por talla):] corresponde al total de centímetros que varía una medida entre tallas consecutivas.

              li.d-flex.mb-5
                i.fas.fa-check.icon-list
                p.mb-0 #[b Proporción:] señala la fracción del patrón sobre la que se aplica la variación, ya que no siempre se trabaja con la totalidad de la prenda (por ejemplo, una cuarta parte en medidas circunferenciales).

              li.d-flex.mb-0
                i.fas.fa-check.icon-list
                p.mb-0 #[b Medida a aplicar en el escalado:] es el valor exacto que se incorpora al patrón por cada talla, derivado del D x T y la proporción correspondiente.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/22.png', alt='')

      p.mb-5(data-aos="fade-left") A continuación, se detallan las medidas incluidas en la tabla: 
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-3")(data-aos="fade-left")
        .row.justify-content-center.mb-0.pcus-2(titulo="Contorno de cintura")
          .col-sm-12.col-lg-8
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b D x T:] 4 cm.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Proporción:] ¼ del contorno.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Aplicación:] 1 cm por talla.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Permite mantener un ajuste adecuado en la zona media del cuerpo 

          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/23.png', alt='')

        .row.justify-content-center.mb-0.pcus-2(titulo="Contorno de cadera")
          .col-sm-12.col-lg-8
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b D x T:] 4 cm.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Proporción:] ¼ del contorno.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Aplicación:] 1 cm por talla.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Garantiza la forma estructural adecuada de la prenda en su zona más ancha.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/24.png', alt='')

        .row.justify-content-center.mb-0.pcus-2(titulo="Altura de cadera")
          .col-sm-12.col-lg-8
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b D x T:] 0,25 cm.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Proporción:] completa.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Aplicación:] 0,25 cm por talla.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Asegura que la posición de la cadera se mantenga proporcional al largo corporal.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/25.png', alt='')

        .row.justify-content-center.mb-0.pcus-2(titulo="Largo de la falda")
          .col-sm-12.col-lg-8
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b D x T:] 0,5 cm. 
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Proporción:] completa.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 #[b Aplicación:] 0,5 cm por talla.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Contribuye a un ajuste progresivo en la longitud de la prenda.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/26.png', alt='')


      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/27.png', alt='')
        .col-sm-12.col-lg-5
          .bg-color-4.py-4.px-5.br-1
            h4.mb-3 Separación de busto
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 D x T: 0,5 cm.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Proporción: ½.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Aplicación: 0,25 cm por talla.
              li.d-flex
                i.fas.fa-check.icon-list
                p.mb-0 Permite conservar la alineación estructural entre las pinzas o detalles constructivos asociados.


      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 5.] Patrón básico de falda con medidas para escalado 
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-4
          figure.mb-0
              img.mb-2(src='@/assets/curso/temas/t1/28.svg', alt='Pieza de patrón con líneas rectas y ligeras curvas en la parte superior, señalada como falda. Incluye flechas con valores numéricos alrededor, indicando incrementos distribuidos en cintura, cadera, largo y dobladillo. Una pinza está representada con líneas discontinuas.')
              figcaption Fuente: SENA, (2011)

      p.mb-5(data-aos="fade-left") *Unidad de medida dada en centímetros (cm).
      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/19.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-white ESCALADO DE FALDA - FEMENINO
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ddrsedOxtKA&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video








      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Escalado de manga y cuello
      
      .tarjeta--container.row.mb-5(data-aos="fade-left")
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4.d-none.d-lg-block
            .col-6.m-auto
              figure
                img(src='@/assets/curso/temas/t1/30.png')
          h3.text-center.mb-5 Cabeza de la manga (parte superior curva)
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check.icon-list-1
              p.mb-0 Se incrementa 0,25 cm en el centro superior, para mantener la altura de la copa en proporción al crecimiento general de la prenda.
            li.d-flex
              i.fas.fa-check.icon-list-1
              p.mb-0 En los puntos laterales de la curva (a ambos lados del centro superior), también se aplican incrementos de 0,25 cm, lo que permite conservar la simetría y el calce adecuado con la sisa del cuerpo.
        .col-md.tarjeta.bg-color-5.p-5
          .row.justify-content-center.mb-4.d-none.d-lg-block
            .col-6.m-auto
              figure
                img(src='@/assets/curso/temas/t1/31.png')
          h3.text-center.mb-5.text-white Lados de la manga (longitud vertical desde la sisa hasta el puño)
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check.icon-list-2
              p.mb-0.text-white Se suma 1 cm en los extremos superiores laterales, lo cual amplía el contorno de sisa y asegura que la manga se articule correctamente con el crecimiento del cuerpo de la prenda.
        .col-md.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-4.d-none.d-lg-block
            .col-6.m-auto
              figure
                img(src='@/assets/curso/temas/t1/32.png')
          h3.text-center.mb-5 Zona inferior o puño de la manga
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check.icon-list-2
              p.mb-0 Se aumentan 0,25 cm hacia ambos lados en la base, ampliando el contorno del puño.
            li.d-flex
              i.fas.fa-check.icon-list-2
              p.mb-0 Además, se incrementan 0,6 cm en vertical, ajustando proporcionalmente el largo total de la manga.




      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Estos incrementos se distribuyen de manera equitativa y sistemática, respetando el principio del escalado progresivo. Es decir, cada talla superior a la base incorpora estos aumentos acumulativamente, lo que permite que el patrón crezca de forma coherente y funcional para garantizar el confort, la movilidad y la estética.

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 6.] Patrón básico de manga con medidas para escalado. 
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-4
          figure.mb-0
              img.mb-0(src='@/assets/curso/temas/t1/29.svg', alt='Pieza de patrón con forma de manga, delimitada por líneas curvas en la parte superior y rectas en los costados. Alrededor se ubican signos de suma con medidas que indican incrementos en copa, largo y ancho inferior.')
              

      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/19.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-white CORTES, MANGA, CUELLO – ESCALADO
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ENCEKC4EwKU&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA" target="_blank")
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
