import React from 'react';

export default function Pagination({ entriesPerPage, totalEntries, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination pl0 gray">
                {pageNumbers.map(pageNum => (
                    <li key={pageNum} className="page-item f5 f4-ns dib mr3">
                        <a href="!#" className="page-link link dim" onClick={() => paginate(pageNum)}>{pageNum}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}