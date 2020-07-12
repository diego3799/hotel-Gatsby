import { useStaticQuery, graphql } from "gatsby"
const useHabitaciones = () => {
  const {
    allDatoCmsHabitacion: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          id
          slug
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return nodes.map(item => ({
    id: item.id,
    titulo: item.titulo,
    contenido: item.contenido,
    imagen: item.imagen,
    slug: item.slug
  }))
}

export default useHabitaciones
