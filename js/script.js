/* global $ */

$('#searchButton').click(function() {
    var searchTerm=$("#searchTerm").val();
    var url="https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s="+searchTerm;

    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            console.log('response', response)
            var movies=response.Search
            for (i = 0; i < movies.length; i++) {
                var movie = movies[i];
                var imageSrc = movie.Poster;
                var title = movie.Title;
                var year = movie.Year;
                var html = `
                <img src='${imageSrc}' />
                <p>${title}</p>
                <p>${year}</p>
                `
                $("#movie").append(html);
            }
        },
    });
});


console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
