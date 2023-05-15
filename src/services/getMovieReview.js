import * as httpResquest from '~/utils/httpRequest';

const getMovieReview = async ({
    path = '/review',
    api_key = process.env.REACT_APP_KEY_API,
    review_id = '603692',
    ...otherProps
}) => {
    try {
        const response = await httpResquest.getRequest('/' + review_id + path, {
            params: {
                api_key,
                ...otherProps,
            },
        });

        return response;
    } catch (err) {
        console.error(err);
    }
};

export default getMovieReview;
