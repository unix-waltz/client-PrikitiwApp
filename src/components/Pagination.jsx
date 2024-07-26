import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const siblingCount = 1 
    const createPageRange = (start, end) => {
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
  };
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
  if (leftSiblingIndex > 1) {
    pageNumbers.push(1);
    if (leftSiblingIndex > 2) pageNumbers.push('...');
  }
  createPageRange(leftSiblingIndex, rightSiblingIndex);
  if (rightSiblingIndex < totalPages) {
    if (rightSiblingIndex < totalPages - 1) pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }
  return (
    <nav>


<ol className="flex justify-center gap-1 text-xs font-medium">
  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
    <button
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span className="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </li>
  {pageNumbers.map((number, index) =>
          number === '...' ? (
            <li key={index} className="">
              <span className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">...</span>
            </li>
          ) : (
            <li key={index} className={`${currentPage === number ? 'block size-8 rounded border-teal-600 bg-teal-600 text-center leading-8 text-white' : 'block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'}`}>
              <button className="w-full h-full" onClick={() => onPageChange(number)}>
                {number}
              </button>
            </li>
          )
        )}

  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
    <button
    onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span className="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </li>
</ol>

    </nav>
  );
};

export default Pagination;
