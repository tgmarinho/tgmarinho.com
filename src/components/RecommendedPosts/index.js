import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        className="previous"
        cover
        direction="left"
        bg="#16202c"
        duration={0.6}
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}

    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        className="next"
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
