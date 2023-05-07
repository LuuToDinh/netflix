function Search({ className, witdh = '2.4rem', height = '2.4rem' }) {
    return (
        <svg width={witdh} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 11a6 6 0 11-12 0 6 6 0 0112 0zm.362 4.85a8 8 0 111.006-1.729l8.634 5.014-1.004 1.73-8.636-5.014z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export default Search;
