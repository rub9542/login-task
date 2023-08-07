import React, { useEffect, useState } from "react";

function Pagination(props) {
  const itemsPerPage = props.size; // Number of items to display per page
  const totalItems = props.totalItems; // Total number of items
  const totalPages =Math.ceil(totalItems / itemsPerPage); // Calculate total pages
  const [pageArr, setPageArr] = useState([]) // Calculate total pages


  // Calculate starting and ending indexes for the current page
  const startIndex = (props.currPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Generate an array of items for the current page
  const itemsForPage = Array.from(
    { length: itemsPerPage },
    (_, index) => startIndex + index
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      props.setPage(page);
    }
  };
// useEffect(()=>{
// let newArr = Array.from({ length: totalPages }, (_, index) => index + 1);
// setTotalPages(newArr)
// },[totalPages])
  return (
    <div className="paginate">
     
      <div>
        <button
          className={`${props.currPage === 1 ? "disable" : ""}`}
          onClick={() => goToPage(props.currPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`${index + 1 === props.currPage ? "selected" : ""}`}
            key={index + 1}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`${props.currPage === totalPages ? "disable" : ""}`}
          onClick={() => goToPage(props.currPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
