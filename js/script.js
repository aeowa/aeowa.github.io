$(document).ready(function() {

// TABS
  $.ionTabs("#tabs_1", {type: "none"});

// FORM AJAX
  $('#form-download').ajaxForm(function() { 
      alert("Download link was sent to your e-mail");
      document.getElementById('form-download').reset();
  });

// POPUP
  $('#show').avgrund({
      height: 400,
      width: 800,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'close',
      onBlurContainer: '.container',
      template: '<iframe width="600" height="350" src="https://www.youtube.com/embed/klModGpSKtc" frameborder="0" allowfullscreen></iframe>'
    });

  $('#show2').avgrund({
      height: 400,
      width: 800,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'close',
      onBlurContainer: '.container',
      template: '<iframe width="600" height="350" src="https://www.youtube.com/embed/klModGpSKtc" frameborder="0" allowfullscreen></iframe>'
    });

});

// ADD SELECT 
function addState(combo){

   if(combo.value == 'USA'){
     document.getElementById('state').style.display = 'inline-block';
   }else{
   document.getElementById('state').style.display = 'none';
   }
 }


