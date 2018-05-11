

$('#Login').click(function () {
    $.ajax({
        type: 'GET',
        url: "https://customer-api-shopping.herokuapp.com/api/customers/"



    }).then(function (data) {

        Loginn(data);

    });

    function Loginn(data) {
        var email = document.getElementById("mail").value
        var password = document.getElementById("pass").value
        for (var i = 0; i < data.length; i++) {
            if (name == data[i].email && password == data[i].password) {
                console.log(email + "is logged in!")
                .then(function (data) {

                    window.location.href = 'index2.html';
                })
                return
            }
        }
        console.log("incorrect Email or Password")
    }
});