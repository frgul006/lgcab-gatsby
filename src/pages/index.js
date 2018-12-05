import { Link } from 'gatsby';
import React, { Component } from 'react';

import Image from '../components/image';
import Layout from '../components/layout';

class IndexPage extends Component {
  render() {
    console.log(this.props)
    const projects = this.props.data.projects.edges
    console.log(projects)
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/projects/">Go to projects</Link>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query getAllProjects {
    projects: allProject {
      edges {
        node {
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
