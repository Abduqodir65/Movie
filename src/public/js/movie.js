fetch('/movies')
    .then(response => response.json())
    .then(movies => {
        const movieList = document.getElementById('movie-list'); 
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.className = 'card';
            li.innerHTML = `
                <div class="img">
                    <a href="movie-detail.html?id=${movie.id}">
                        <img src="http://localhost:3000/uploads/${movie.image}" alt="${movie.title}" />
                    </a>
                </div>
                <div class="title">
                    <a href="movie-detail.html?id=${movie.id}">
                        <h4>${movie.title}</h4>
                    </a>
                    <span>${movie.year}</span>
                </div>
                <div class="footer">
                    <span>4K</span> 
                    <div class="time-rating">
                        <span><i class="fa-regular fa-clock"></i> ${movie.duration} min</span>
                        <span><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                    </div>
                </div>
            `;
            movieList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching movies:', error));
