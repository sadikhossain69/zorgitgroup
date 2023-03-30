import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ pageTitle, path }: { pageTitle: string; path: string }) {
  return (
    <>
      <nav className="flex justify-center" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <Link
                to="/"
                className="text-xl font-semibold md:text-sm text-sub-title hover:text-gray-500"
              >
                <span>Home</span>
              </Link>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-5 h-5 text-sub-title"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                to={path}
                className="ml-4 text-xl font-semibold md:text-sm text-sub-title hover:text-gray-700"
                aria-current="page"
              >
                {pageTitle}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
