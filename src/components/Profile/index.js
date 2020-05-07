import React from "react"
import { StaticQuery, graphql } from "gatsby"

// import { Container } from './styles';

function Profile() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          site {
            siteMetadata {
              author
              position
              description
              title
            }
          }
        }
      `}
      render={({ site: { siteMetadata: { title, position, description } } }) => (
        <div className="profile-wrapper">
          <h1>{title}</h1>
          <h2>{position}</h2>
          <p>
            {description}
          </p>
        </div>
      )}
    />
  )
}

export default Profile
