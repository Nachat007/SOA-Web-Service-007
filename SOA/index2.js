$(function () {
    $.ajax({
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products"
        

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        var row = '<tr><td><img src=" ' + data[2].photo + ' " width="70px" height="70px">' + '</td><td>' + data[2].name + '</td><td>'
            + data[2].description + '</td><td>' + data[2].price +
            ' &nbsp; </td><td><a href="Payment.html?id=' + data[2].id + '">Buy</a>' + '</td></tr>';
        $('#catalogue').append(row);

        var row = '<tr><td><img src=" ' + data[3].photo + ' " width="70px" height="70px">' + '</td><td>' + data[3].name + '</td><td>'
            + data[2].description + '</td><td>' + data[3].price +
            ' &nbsp; </td><td><a href="Payment.html?id=' + data[3].id + '">Buy</a>' + '</td></tr>';
        $('#catalogue2').append(row);

    }

});