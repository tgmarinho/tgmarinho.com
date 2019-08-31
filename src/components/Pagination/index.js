import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink to={prevPage} cover direction="left" bg="#16202c" duration={0.6}>
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
      >
        proxima página →
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPage: PropTypes.bool.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
