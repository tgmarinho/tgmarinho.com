import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  border-radius: 50%;
  height: 3.75rem;
  height: 3.75rem;
  margin: auto;
  margin: auto;
  width: 3.75rem;
  width: 3.75rem;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
