$(function () {
    $.ajax({
        type: 'GET',
        url: "http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics"
       
       

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td>' +  data[i].Address + '</td><td>' 
            + data[i].Price + '</td><td>' + data[i].Amount + '</td><td>'+ data[i].Delivery_type +
            ' &nbsp; </td><td><a href="Editship.html?id=' + data[i].User_id +'">Edit</a>';
            $('#Ship').append(row);
        }     
    }

});