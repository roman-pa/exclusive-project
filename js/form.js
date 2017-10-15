$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm (e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/roman190611@gmail.com", 
        method: "POST",
        data: {
            name: $('#client-name').val(),
            email: $('#client-email').val(),
            telephone: $('#telephone').val(),
            comment: $('#usertextarea').val()
        },
        dataType: "json"
    })
    .done(function() {
        $('form').html('<h2>Дякуємо за ваше запитання!</h2>');
    });
}