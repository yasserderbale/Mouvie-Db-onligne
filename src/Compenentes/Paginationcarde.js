import React from "react";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";
export const Paginationcarde = ({ Getpage, pagecompte }) => {
  const handlePageClick = (data) => {
    Getpage(data.selected + 1);
  };
  const pageCount = pagecompte;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      containerClassName={"pagination justify-content-center p-3"}
      previousLabel="< previous"
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};
