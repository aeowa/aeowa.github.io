$(document).ready(function() {

// TABS
  $.ionTabs("#tabs_1", {type: "none"});

// FORM AJAX
  // $('#form-download-smb').ajaxForm(function() { 
  //     alert("Thank you! Download link will be sent to your e-mail.");
  //     document.getElementById('form-download-smb').reset();
  // });

  // $('#form-download-enterprise').ajaxForm(function() { 
  //     alert("Thank you! Download link will be sent to your e-mail.");
  //     document.getElementById('form-download-enterprise').reset();
  // });

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

});

// ADD SELECT 
function addState(combo){

   if(combo.value == 'USA'){
     document.getElementById('state').style.display = 'inline-block';
   }else{
   document.getElementById('state').style.display = 'none';
   }
 }


// AJAX FORM
 function AjaxForm(result_id,formDownloadSmb,url) {
          jQuery.ajax({
              url:     url,
              type:     "POST",
              dataType: "html",
              data: jQuery("#"+formDownloadSmb).serialize(), 
              success: function(response) {
              document.getElementById(result_id).innerHTML = response;
          },
          error: function(response) {
          document.getElementById(result_id).innerHTML = "<p>Cообщение не отправлено. Пожалуйста, попробуйте еще раз!</p>";
          }
       });

       $(':input','#formDownloadSmb')
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
    }




