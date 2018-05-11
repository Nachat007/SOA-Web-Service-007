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

    var pid = getUrlParameter('id');

    $.ajax({

        //CP3. Complete Ajax code to GET the selected Product ID (pid)  
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products/" + pid,

    }).then(function (data) {

        $('#photo').val(data.photo);
        $('#name').val(data.name);
        $('#desc').val(data.description);
        $('#price').val(data.price);



    });

    $('#saveni').click(function () {

        var formdata = {
            photo: $('#photo').val(),
            name: $('#name').val(),
            description: $('#desc').val(),
            price: $('#price').val(),
        }

        console.log(formdata);

        $.ajax({

            //CP4. Complete Ajax code to UPDATE the selected pin (pinid)  
            type: 'PUT',
            url: "https://soaproductapi.herokuapp.com/products/" + pid,
            data: formdata,


        }).then(function (data) {

            $('#alert').show();
            console.log('Edited');
            console.log(data);

        }).then(function (data) {

            window.location.href = 'Edit.html';

        });

    });

    $('#delete').click(function () {

        $.ajax({

            //CP5. Complete Ajax code to DELETE the selected pin (pinid)  
            type: 'DELETE',
            url: "https://soaproductapi.herokuapp.com/products/" + pid,


        }).then(function (data) {

            window.location.href = 'Edit.html';

        });
    });
});