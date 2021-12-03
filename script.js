var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showNoResultsText(totalcount) {

  if (totalcount == 0) {
    document.getElementById("no-results").style.display = "block";
    console.log('totalcount in showNoResultsText' + totalcount);
  } else {
    document.getElementById("no-results").style.display = "none";
  }

}

function updateResults() {
  var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase();
  var counter = 0;
  var movieTitle = [];
  var currentGenre = "Genre";

  if (currentGenre == 'All' || currentGenre == 'Genre') {
    movieTitle = document.getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Action') {
    movieTitle = document.getElementsByClassName('movies-action')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Drama') {
    movieTitle = document.getElementsByClassName('movies-drama')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Sci-Fi') {
    movieTitle = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName('movie-title');
  }


  for (var name = 0; name < movieTitle.length; name++) {
    var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();

    if (compareMovieTitles.indexOf(query) === -1) {
      movieTitle[name].closest('div.media').style.display = "none";
    } else {
      movieTitle[name].closest('div.media').style.display = "block";
      counter++;
    }
  }

  showNoResultsText(counter);
}

function getMediaPosters(selectedGenre) {
  var countMovies = 0;
  var mediaCarouselMovies;
  currentGenre = selectedGenre;
  document.getElementById("genreText").innerHTML = selectedGenre;

  if (selectedGenre == 'All') {
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-drama')[0].style.display = "block";
    document.getElementsByClassName('movies-scifi')[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName("media");
  }
  if (selectedGenre == 'Action') {
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    mediaCarouselMovies = document.getElementsByClassName('movies-action')[0].getElementsByClassName("media");
  }
  if (selectedGenre == 'Drama') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "block";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    mediaCarouselMovies = document.getElementsByClassName('movies-drama')[0].getElementsByClassName("media");
  }
  if (selectedGenre == 'Sci-Fi') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName("media");
  }


  var mediaCarouselMoviesCount = mediaCarouselMovies.length;

  for (var count = 0; count < mediaCarouselMoviesCount; count++) {
    if (mediaCarouselMovies[count].style.display == "block")
      countMovies++;
  }
  console.log(countMovies);

  showNoResultsText(countMovies);
}