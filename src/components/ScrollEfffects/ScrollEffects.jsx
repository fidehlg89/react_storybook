import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import './scrollEffects.css'

const ScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      let elements = document.getElementsByClassName("scroll-content")
      let screenSize = window.innerHeight

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        if (element.getBoundingClientRect().top < screenSize) {
          element.classList.add("visible")
          handleRemoveClasses(element)
        } else {
          element.classList.remove("visible")
        }
      }
    }

    const handleRemoveClasses = (element) => {
      const effects = {
        fadeTop: "fadeTop",
        fadeRight: "fadeRight",
        fadeLeft: "fadeLeft",
      }

      setTimeout(() => {
        element.classList.remove("visible")
        element.classList.remove(effects.fadeTop)
        element.classList.remove(effects.fadeRight)
        element.classList.remove(effects.fadeLeft)
      }, 3000)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Document</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <section>
        <h1>Effects in scroll</h1>
      </section>
      <section className="content gray">
        <div className="scroll-content fadeTop">
          <h2>Fade Top</h2>
        </div>
      </section>
      <section className="content blue">
        <div className="scroll-content fadeRight">
          <h2>Fade Right</h2>
        </div>
      </section>
      <section className="content darkgray">
        <div className="scroll-content fadeLeft">
          <h2>Fade Left</h2>
        </div>
      </section>
    </>
  )
}

export default ScrollEffects
