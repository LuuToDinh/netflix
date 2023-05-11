function Info({ className, width = '2.4rem', height = '2.4rem' }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="more-info_svg__Hawkins-Icon more-info_svg__Hawkins-Icon-Standard"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-2v8h-2v-8h2zm-1-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export default Info;
