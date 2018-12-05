const path = require(`path`)
const queryAll = require(`./gatsby/queryAll.js`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const projectDetailPageTemplate = path.resolve(
      `./src/templates/project-detail.js`
    )

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const projects = result.data.allProject.edges
        projects.forEach(({ project }) => {
          const path = `projects/` + project.id
          createPage({
            path,
            component: projectDetailPageTemplate,
            context: {
              id: project.id,
            },
          })
        })
      })
    )
  })
}
