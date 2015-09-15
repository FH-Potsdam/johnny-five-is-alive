$( document ).ready(function() {
    console.log( "ready!" );
$('#on').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/on'
    });
});
$('#off').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/off'
    });
});
});



