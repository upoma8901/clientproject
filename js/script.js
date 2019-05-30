$('#searchButton').click(function() {
        var searchTerm=$("#searchTerm").val();
        var Url="https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s="+searchTerm;


        $.ajax({
          url: Url,
          method: "GET",
          success: function(response) {
        var Src=response.Search
              for (i = 0; i < Src; i++) {
              var imageSrc = Src[i].Poster;
              // imageHTtml = "//.png"
              var imageHtml="<img src="+imageSrc+">";
              var titleSrc=response.Search[i].Title;
                   var titleHtml="<p>"+titleSrc+"</p>";
                   var yearSrc=response.Search[i].Year;
                   var yearHtml="<p>"+yearSrc+"</p>";
                   var search=[imageHtml,titleHtml,yearHtml];
                   $("body").append(search);
}









          },
        });
    });
    /* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
