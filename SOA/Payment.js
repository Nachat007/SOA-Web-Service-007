var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function () {

    $('#alert').hide();

    var Proid = getUrlParameter('id');



    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products/" + Proid,

    }).then(function (data) {

        $('#photo').val(data.photo);
        $('#name').val(data.name);
        $('#desc').val(data.description);
        $('#price').val(data.price);
        $('#ID').val(data.id);

    });

    var row = '<tr><td><img src=" ' + ('#photo') + ' " width="70px" height="70px">' + '</td></tr>';
    $('#photo').append(row);

    $('#save').click(function () {

        var formdata = {
            orderId: $('#ID').val(),
            price: $('#price').val(),

        }

        console.log(formdata);

        $.ajax({

            //CP4. Complete Ajax code to UPDATE the selected pin (pinid)  
            type: 'POST',
            url: "https://api-payment.herokuapp.com/api/payment/new",
            data: formdata,


        }).then(function (data) {

            $('#alert').show();
            console.log('Complete');
            console.log(data);

        }).then(function (data) {

            window.location.href = 'index.html';

        });

    });
});