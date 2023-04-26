//selection of DOM elements
const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type = "text"]')




let movieData,userInput;



//adding event listeners
$('form').on('submit', handleGetData);



//using funcs
function handleGetData(evt){
    evt.preventDefault(); //prevents page reloads
    userInput = $input.val()//getting user input
   

    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t='+ userInput
    })
    .then(
        (data) => {
            movieData = data;
            render();
        },
        (err) => {
            console.log('Error detected', err);
        }
    )


}

function render(){
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated)
}
