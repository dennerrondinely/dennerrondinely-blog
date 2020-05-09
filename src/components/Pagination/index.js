import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import { PaginationWrapper } from "./styles"

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPage,
  prevPage,
  nextPage,
}) {
  return (
    <PaginationWrapper>
      {!isFirst && <Link to={prevPage}>página anterior</Link>}
      <p>
        {currentPage} de {numPage}
      </p>
      {!isLast && <Link to={nextPage}>proxima página</Link>}
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPage: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}
