import * as httpResquest from '~/utils/httpRequest';

const getMovieList = async ({
    path = '/movie/popular',
    api_key = process.env.REACT_APP_KEY_API,
    region = '',
    page = '1',
    ...otherProps
}) => {
    try {
        const response = await httpResquest.getRequest(path, {
            params: {
                api_key,
                region,
                page,
                ...otherProps,
            },
        });

        console.log(path);

        return response;
    } catch (err) {
        console.error(err);
    }
};

export default getMovieList;
