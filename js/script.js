$('#searchButton').click(function() {
        var searchTerm=$("#searchTerm").val();
        var Url="https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s="+searchTerm;


        $.ajax({
          url: Url,
          method: "GET",
          success: function(response) {
              var search=[];

              var Src=response.Search
              for (i = 0; i < Src; i++) {
              var imageSrc = Src[i].Poster;
              // imageHTtml = "//.png"
              var imageHtml="<img src="+imageSrc+">";
              var titleSrc=response.Search[i].Title;
                   var titleHtml="<p>"+titleSrc+"</p>";
                   var yearSrc=response.Search[i].year;
                   var yearHtml="<p>"+yearSrc+"</p>";
}


                             console.log(imageSrc);





              $("body").append(imageHtml);
          },
        });
    });
    /* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
