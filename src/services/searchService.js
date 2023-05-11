import * as httpResquest from '~/utils/httpRequest';

const search = async ({
    api_key = process.env.REACT_APP_KEY_API,
    query = '',
    language = 'en-US',
    include_adult = true,
    page = '1',
    ...otherProps
}) => {
    try {
        const response = await httpResquest.getRequest('/search/movie', {
            params: {
                api_key,
                language,
                query,
                include_adult,
                page,
                ...otherProps,
            },
        });

        return response;
    } catch (err) {
        console.error(err);
    }
};

export default search;
