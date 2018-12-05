'use strict'

module.exports = `
{
    allProject {
      edges {
        project: node {
            id
            title
            role
            description
            currentStatus
        }
      }
    }
}
`
