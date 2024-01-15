import React from 'react'

const Accordion = () => {
  return (
    <section>
        <details name="info">
          <summary>Hola Mundo</summary>
          <p>Este es el texto de Hola Mundo content</p>
        </details>
        <details name="info">
          <summary>
            Accordion Title
          </summary>
          <p>Este es el título del artículo</p>
        </details>
        <details name="info">
        <summary>Otra Sección</summary>
          <p>Este es otro item de carousel</p>
        </details>
    </section>
  )
}

export default Accordion
