const key = '?client_id=PvqALsj-uAHV4v4VoSZMebbWbIhwqdhKSMvfST1WCJI'
const url = 'https://api.unsplash.com/photos/'

const fetchImages = async page => {
    const response = await fetch(`${url}${key}&per_page=3&page=${page}`)
    const data = await response.json()
    if (response.status >= 400) {
        throw new Error(data.errors)
    }

    return data
}

const fetchImageStats = async id => {
    const response = await fetch(`${url}/${id}/statistics${key}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };