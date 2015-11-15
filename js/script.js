$(document).ready(function() {

  $.ionTabs("#tabs_1", {type: "none"});

<<<<<<< HEAD
  $('#form-download').ajaxForm(function() { 
                alert("Download link was sent to your e-mail");
=======
  $('#form-smb').ajaxForm(function() { 
                alert("Thank you for registration!");
>>>>>>> 2442de2eec39686ff4684b2263a13bb3584aa1bd
                clearForm: true
            });

  $('#show').avgrund({
      height: 400,
      width: 800,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'close',
      onBlurContainer: '.container',
      template: '<iframe width="600" height="350" src="https://www.youtube.com/embed/klModGpSKtc" frameborder="0" allowfullscreen></iframe>'
    });

});
