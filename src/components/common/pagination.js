import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log("currentPage", currentPage);

  // Calculates page count
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // Hide pagination if count equals to 1.
  if (pagesCount === 1) return null;

  // lodash method '_.range()' will create an array.
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            // If page matches currentPage make button active.
            className={page === currentPage ? "page-item active" : "page=item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
