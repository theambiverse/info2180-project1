"use strict";
document.addEventListener("DOMContentLoaded", function(){

    function submitform(){

      let forms=  document.forms[0];

      forms.addEventListener('submit', function(eve){
        eve.preventDefault();
        var val=document.getElementsByTagName('input')[0].value;
        var exp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (exp.test(val)){
            var mes =document.querySelector(".message");
            mes.innerHTML="Thank you! Your email address "+val+ " has been added to our mailing list!";           
            // forms.submit();

        }
         else{
         document.getElementsByTagName('input')[0].focus();
          var mes =document.querySelector(".message");
            mes.innerHTML="Please enter a valid email address.";
           
         }
          
      })

    }
    submitform();


});