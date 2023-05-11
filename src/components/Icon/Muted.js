function Muted({ className, width = '2.6rem', height = '2.6rem' }) {
    return (
        <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M1 8v8h5.099L12 21V3L6 8H1zm14 1l6 6m0-6l-6 6"
            ></path>
        </svg>
    );
}

export default Muted;
