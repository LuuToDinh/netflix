import * as httpResquest from '~/utils/httpRequest';

const getMovieTrailer = async ({
    path = '/videos',
    idVideo = '603692',
    api_key = process.env.REACT_APP_KEY_API,
    language = 'en-US',
    ...otherProps
}) => {
    try {
        const response = await httpResquest.getRequest('/movie/' + idVideo + path, {
            params: {
                api_key,
                language,
                ...otherProps,
            },
        });

        return response.results;
    } catch (err) {
        console.error(err);
    }
};

export default getMovieTrailer;
