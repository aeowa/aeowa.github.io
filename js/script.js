$(document).ready(function() {

  $.ionTabs("#tabs_1", {type: "none"});

  $('#form-smb').ajaxForm(function() { 
                alert("Thank you for registration!"); 
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