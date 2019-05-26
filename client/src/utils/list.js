const sortByReleaseDate = list =>
    list.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

const sortByRating = list => list.sort((a, b) => a.vote_count - b.vote_count);

const searchByTitle = (list, search) => {
    return list.filter(item => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
};

const searchByGenres = (list, search) => {
    return list.filter(item => {
        return (
            item.genres
                .map(genre => genre.toLowerCase())
                .join(' ')
                .indexOf(search.toLowerCase()) !== -1
        );
    });
};

const searchByField = (list, fieldName, search) => {
    if (fieldName === 'title') {
        return searchByTitle(list, search);
    }

    if (fieldName === 'genres') {
        return searchByGenres(list, search);
    }
};

export { sortByReleaseDate, sortByRating, searchByField };
