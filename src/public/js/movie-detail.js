document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (movieId) {
        fetch(`/movies/${movieId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                return response.json();
            })
            .then(movie => {
                document.querySelector('.movie-detail .img img').src = `http://localhost:3000/uploads/${movie.image}`;
                document.querySelector('.movie-detail .img img').alt = movie.title;
                document.querySelector('.movie-detail .content h4').innerText = movie.title;
                document.querySelector('.movie-detail .content .date-time span').innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${movie.year}`;
                document.querySelector('.movie-detail .content .date-time span + span').innerHTML = `<i class="fa-regular fa-clock"></i> ${movie.duration} min`;
                document.querySelector('.movie-detail .content p').innerText = movie.description;

                const watchNowButton = document.querySelector('.detail-actions .btn button');
                watchNowButton.onclick = () => {
                    window.open(`http://localhost:3000/uploads/${movie.video}`, '_blank');
                };
            })
            .catch(error => console.error('Error fetching movie details:', error));
    } else {
        console.error('Movie ID not provided in URL');
    }
});
