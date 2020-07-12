exports.createPages = async ({ actions, graphql, reporter }) => {
  const {
    data: {
      allDatoCmsHabitacion: { nodes },
    },
    errors,
  } = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)
  if (errors) {
    reporter.panic("No hubo resultados", errors)
  }
  const habitaciones = nodes
  habitaciones.forEach(item => {
    actions.createPage({
      path: item.slug,
      component: require.resolve("./src/components/habitaciones.js"),
      context: {
          slug: item.slug
      }
    })
  })
}
