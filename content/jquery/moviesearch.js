$(document).ready(() =>{


  $('#submit').click(function(){
  
    


    movieDetails();
 
   
  
});

  });
  

let movieDetails = () =>{
 

let title =$('#moviename').val();
  let id =$('#id').val();

let deaultImage='content/images/cover.jpg';

if((id == ''  && title == '') || (id == null  && title == null))
{
      $('#errorMeesage').html('Movies Name or IMDB Id should Contain');
          $('#alertmodel').modal('show');
        }
else{

    $.ajax({
      type:'GET',
      dataType:'json',
    
      url:"https://www.omdbapi.com/?apikey=3ba244f0&i="+id+"&t="+title+"",
      
    
      success: (data) =>{

        if(data.Response=='False'){

           $('#errorMeesage').html(data.Error);
          $('#alertmodel').modal('show');
            $('.loader').css('display','none');
    $('.loaderMessage').css('display','none');
    

        }
        else{
          console.log(data);
        //$('#form-section'). css('display','none')

        if(data.Poster!='N/A'){


         $("#image").attr("src",data.Poster);
}
else
{
         $("#image").attr("src",deaultImage);

}

          $('#moviedescription').html('<p class="text-left" id="description">'+data.Plot+' </p>');

        $('#language').html('<p class="text-left" id="language"> <strong>Language : '+data.Language+'</strong></p>');

        $('#duration').html(data.Runtime);
                            
        $('#year').html(data.Year);


        $('#title').html(data.Title);
        $('#modeltitle').html(data.Title);
      

        $('#actor').html('<p class="text-left" > <strong>Actors :</strong> '+data.Actors+'</p>');
        $('#award').html('<p class="text-left" > <strong>Awards :</strong> '+data.Awards+'</p>');
        $('#boxoffice').html('<p class="text-left" > <strong>Box-Office :</strong> ' +data.BoxOffice+'</p>');
        $('#dvd').html('<p class="text-left" > <strong>DVD :</strong> '+data.DVD+'</p>');
        $('#director').html('<p class="text-left" > <strong>Director :</strong> '+data.Director+'</p>');
        $('#genre').html('<p class="text-left" > <strong>Genre :</strong> '+data.Genre+'</p>');
        $('#metascore').html('<p class="text-left" > <strong>Metascore :</strong> '+data.Metascore+'</p>');
        $('#country').html('<p class="text-left" > <strong>Country :</strong> '+data.counter+'</p>');
                

        $('#rated').html('<p class="text-left" > <strong>Rated :</strong> '+data.Rated+'</p>');
        $('#released').html('<p class="text-left" > <strong>Released :</strong> '+data.Released+'</p>');
        $('#type').html('<p class="text-left" > <strong>Type :</strong> '+data.Type+'</p>');
        $('#website').html('<p class="text-left" > <strong>Website :</strong> '+data.Website+'</p>');
        $('#writer').html('<p class="text-left" > <strong>Writer :</strong> '+data.Writer+'</p>');
        $('#imdb-id').html('<p class="text-left" > <strong>IMDB Id :</strong> '+data.imdbID+'</p>');
        $('#imdb-rating').html('<p class="text-left" > <strong>IMDB Rating :</strong> '+data.imdbRating+'</p>');
        $('#imdb-vote').html('<p class="text-left" > <strong>IMDB Votes :</strong> '+data.imdbVotes+'</p>');
              
       
       
       let rating= Math.floor((data.imdbRating/2));
     
        let step=0;
        for (step = 1; step <= rating; step++) {
            jQuery('#'+step).addClass('checked');

        }

  
       
let ratingdata='<p class="text-left RatingColor"> <strong>Ratings from Different Sources</strong></p>';
let ratingdata1='';
let counter=1;
        for (var ratingsource in data.Ratings){
if(counter==1){
ratingdata += '<p class="text-left"> <strong>'+data.Ratings[ratingsource].Source+ ' :</strong> '+data.Ratings[ratingsource].Value+'</p>';
counter++;
}
else
{

ratingdata1 += '<p class="text-left"> <strong>'+data.Ratings[ratingsource].Source+' :</strong> '+data.Ratings[ratingsource].Value+'</p>';
counter=1;
}

        }
        $('#ratingappend1').html(ratingdata);

        $('#ratingappend2').html(ratingdata1);

        $('#result').css('display','flex');
      }



      },
      error: (data) =>{
            $('#errorMeesage').html(err.responseJSON.error.message);
          $('#alertmodel').modal('show');


        
      },
     
      beforeSend:() =>{
        $('#result').hide();
           $('.loader').css('display','block');
    $('.loaderMessage').css('display','block');

      },
      complete: () =>{
              $('.loader').css('display','none');
    $('.loaderMessage').css('display','none');
      },
       timeout:3000


      });

}

}
