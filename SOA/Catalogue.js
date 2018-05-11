$(function () {
    $.ajax({
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products"
       
        

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><img src=" '+ data[i].photo +' " width="100px" height="100px">' + '</td><td>' + data[i].name + '</td><td>' 
            + data[i].description + '</td><td>' + data[i].price + 
            ' &nbsp; </td><td><a href="Payment.html?id=' + data[i].id +'">Buy</a>' + '</td></tr>';
            $('#Cata').append(row);
        }     
    }

});