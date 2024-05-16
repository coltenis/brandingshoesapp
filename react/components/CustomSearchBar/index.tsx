import React, { useState } from 'react'

import styles from './styles.css'

interface Props {
  SearchBar: React.ComponentType
}

const CustomSearchBar = ({ SearchBar }: Props): JSX.Element => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <div className={styles.searchBarContainer}>
      {showSearchBar ? (
        <div className={styles.searchBarWrapper}>
          <div
            role="presentation"
            className={styles.closeSearchBarBtn}
            onClick={() => setShowSearchBar(false)}
          >
            X
          </div>
          <SearchBar />
        </div>
      ) : (
        <></>
      )}
      <div
        role="presentation"
        className={styles.searchBtn}
        onClick={() => setShowSearchBar(true)}
      >
        <svg
          version="1.1"
          width={21}
          height={21}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          stroke="currentColor"
        >
          <style>
            {`
        .st0{fill:none;stroke:#020202;stroke-width:10;stroke-miterlimit:10;}
        .st1{fill:none;stroke:#000000;stroke-width:10;stroke-miterlimit:10;}
        .st2{fill:none;stroke:#000000;stroke-width:11;stroke-miterlimit:10;}
        .st3{stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}
        .st4{fill:none;stroke:#000000;stroke-width:17;stroke-miterlimit:10;}
        .st5{fill:#FFFFFF;}
        .st6{fill:none;stroke:#020202;stroke-miterlimit:10;}
        .st7{fill:none;stroke:#000000;stroke-miterlimit:10;}
      `}
          </style>
          <g>
            <path
              className="st7"
              d="M72.8,40.1c-0.4,8.3-3.7,15.7-8.9,21.4c-1.4,1.5-2.9,2.9-4.5,4.1c-6.3,4.8-14.2,7.5-22.7,7.1 C17.6,71.8,3,55.6,4,36.6C4.9,17.6,21.1,3,40.1,4C59.1,5,73.7,21.1,72.8,40.1z"
            />
            <path
              className="st3"
              d="M95.6,93.9l-1.5,1.6c-0.7,0.8-2,0.8-2.8,0.1l-32-29.8c1.6-1.2,3.1-2.6,4.5-4.1l31.6,29.5 C96.2,91.8,96.3,93.1,95.6,93.9z"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CustomSearchBar
