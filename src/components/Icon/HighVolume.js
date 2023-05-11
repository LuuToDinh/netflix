function HighVolume({ className, width = '2.6rem', height = '2.6rem' }) {
    return (
        <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M15 16a4 4 0 000-8m0 12c5 0 8-3.589 8-8s-3.589-8-8-8M1 12V8h5l6-5v18l-6-5H1v-4"
            ></path>
        </svg>
    );
}

export default HighVolume;
