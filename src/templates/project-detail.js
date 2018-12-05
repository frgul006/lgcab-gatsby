import { graphql, Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProjectDetailTemplate extends React.Component {
  render() {
    const { project } = this.props.data
    return (
      <Layout>
        <h1 id={project.id}>{project.title}</h1>
        <h4>
          <Link to="/projects">All Projects</Link>
        </h4>
      </Layout>
    )
  }
}

ProjectDetailTemplate.propTypes = propTypes

export default ProjectDetailTemplate

export const ProjectDetailPageQuery = graphql`
  query getProjectById($id: String!) {
    project(id: { eq: $id }) {
      id
      title
      role
      description
      currentStatus
    }
  }
`
