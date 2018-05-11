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

    var sid = getUrlParameter('User_id');

    $.ajax({

        
        type: 'GET',
        url: "http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics" + sid,

    }).then(function (data) {

        $('#add').val(data.Address);
        $('#price').val(data.Price);
        $('#amount').val(data.Amount);
        $('#Del').val(data.Delivery_type);



    });

    $('#savens').click(function () {

        var formdata = {
            Address: $('#add').val(),
            Price: $('#price').val(),
            Amount: $('#amount').val(),
            Delivery_type: $('#Del').val(),
        }

        console.log(formdata);

        $.ajax({

          
            type: 'PUT',
            url: "http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics" + sid,
            data: formdata,


        }).then(function (data) {

            $('#alert').show();
            console.log('Edited');
            console.log(data);

        }).then(function (data) {

            window.location.href = 'Shipping.html';

        });

    });

    $('#delete').click(function () {

        $.ajax({

            //CP5. Complete Ajax code to DELETE the selected pin (pinid)  
            type: 'DELETE',
            url: "http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics" + sid,


        }).then(function (data) {

            window.location.href = 'Shipping.html';

        });
    });
});