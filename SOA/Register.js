$(function(){

    $('#alert').hide();

    $('#Regis').click(function(){
        
        var formdata = {
            name: $('#name').val(),
            lastname: $('#last').val(),
            email: $('#mail').val(),
            password: $('#pass').val(),
            address: $('#addr').val(),
            telno: $('#tel').val(),
        
        }

        console.log(formdata);
        
        $.ajax({

            
            type: 'POST',
            url: "https://customer-api-shopping.herokuapp.com/api/customers/",
            data:formdata,
            
        }).then(function(data) {
    
            $('#alert').show();            
            $('#name').val('');
            $('#mail').val('');
            $('#pass').val('');
           console.log('Added');

        });
    });
});