$(document).ready(function() {

// TABS
  $.ionTabs("#tabs_1", {type: "none"});

// FORM AJAX
  $('#form-download-smb').ajaxForm(function() { 
      alert("Thank you! Download link will be sent to your e-mail.");
      document.getElementById('form-download-smb').reset();
  });

  $('#form-download-enterprise').ajaxForm(function() { 
      alert("Thank you! Download link will be sent to your e-mail.");
      document.getElementById('form-download-enterprise').reset();
  });

// POPUP

  $('.fancybox-media').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    closeBtn : true,
    width: 600,
    height: 400,
    helpers : {
              media: true,
              overlay : {
                closeClick: true,
                speedOut: 200,
                showEarly: true,
                locked: true
                        }
              },
          youtube : {
              autoplay: 0,
              modal: true
                    }
      });

  Socialite.load(context);
  Socialite.process();

});

// ADD SELECT 
function addState(combo){

   if(combo.value == 'USA'){
     document.getElementById('state').style.display = 'inline-block';
   }else{
   document.getElementById('state').style.display = 'none';
   }
 }

 function addState1(combo){

   if(combo.value == 'USA'){
     document.getElementById('state1').style.display = 'inline-block';
   }else{
   document.getElementById('state1').style.display = 'none';
   }
 }