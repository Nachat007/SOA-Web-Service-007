$(function(){

    $('#alert').hide();

    $('#sell').click(function(){
        
        var formdata = {
            photo: $('#photo').val(),
            name: $('#name').val(),
            description: $('#desc').val(),
            price: $('#price').val(),

        }

        console.log(formdata);
        
        $.ajax({

            
            type: 'POST',
            url: "https://soaproductapi.herokuapp.com/products",
            data:formdata,
            
        }).then(function(data) {
    
            $('#alert').show();            
            $('#photo').val('');
            $('#name').val('');
            $('#desc').val('');
            $('#price').val('');
            console.log('Added');

        });
    });
});