import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
  <>
    <StaticQuery
      query={graphql`
        query MySiteMetada {
          site {
            siteMetadata {
              title
              description
              position
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { title, position, description },
        },
      }) => (
        <div className="Profile-wrapper">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p>{position}</p>
        </div>
      )}
    />
  </>
)

export default Profile
