import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"
const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`
const HabitacionPreview = ({
  habitacion: {
    slug,
    contenido,
    imagen: { fluid },
    titulo,
  },
}) => {
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 1rem;
      `}
    >
      <Image fluid={fluid} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
            text-align: center;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver habitación</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
