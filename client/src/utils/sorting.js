const sortByReleaseDate = list => list.sort((a, b) => {
    return new Date(a.release_date) - new Date(b.release_date);
});

const sortByRating = list => list.sort((a, b) => {
    return a.vote_count - b.vote_count;
});

export { sortByReleaseDate, sortByRating };