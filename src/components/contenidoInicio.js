import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
  p {
    line-height: 2;
  }
`
const ContenidoInicio = () => {
  const {
    allDatoCmsPGina: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsPGina(filter: { slug: { eq: "Inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const {
    titulo,
    contenido,
    imagen: { fluid },
  } = nodes[0]
  return (
    <Fragment>
      <h2
        css={css`
          font-size: 4rem;
          text-align: center;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={fluid} />
      </TextoInicio>
    </Fragment>
  )
}

export default ContenidoInicio
