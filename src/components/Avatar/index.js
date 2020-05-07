import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import { Container } from './styles';

function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
  query {
    avatarImage: file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
