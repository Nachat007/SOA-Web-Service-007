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

});

$ (function(req, res){
    $('#alert').hide();
    
    $('#save').click(function () {

        var formdata = {
            userId: $('uid').val(),
            orderId: $('oid').val(),
            webName: $('web').val(),
            price: $('#price').val(),

        }

        console.log(formdata);

        $.ajax({


            type: 'POST',
            url: "https://api-payment.herokuapp.com/api/Payment/new",
            data: formdata,


        }).then(function(data) {
    
            $('#alert').show();            
            $('#uid').val('');
            $('#oid').val('');
            $('#web').val('');
            $('#price').val('');
            console.log('Added');

        }).then(function (data) {

            window.location.href = 'index2.html';

        });
    });
});