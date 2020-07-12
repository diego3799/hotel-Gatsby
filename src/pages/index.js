import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"
import { css } from "@emotion/core"
import HabitacionPreview from "../components/habitacionPreview"
import styled from '@emotion/styled'

const ListadoHabitaciones=styled.ul`
  max-width:1200px;
  width:95%;
  margin:4rem auto 0 auto;
  @media (min-width:768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const habitaciones = useHabitaciones()
  // console.log(habitaciones)
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>
      <ListadoHabitaciones>
        {habitaciones.map(item => (
          <HabitacionPreview key={item.id}  habitacion={item}/>
        ))}
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage
