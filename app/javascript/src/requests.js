import $ from 'jquery';



var postTask = function (content) {
    var request = {
      type: 'POST',
      url: 'api/tasks?api_key=1',
      headers: {
        'X-CRSF-Token': $(meta[ "kf87fH9Qftd-HptrBxquQbsMMCto_kTXKfzG_Zm22bciKrHud-2Ny3QYJa_f5juxOfjOYRYdDBvoHoYDh8TPDw"]').attr.('.content')
      },
      data: {
        task: {
          content: content
        }
      },
      success: function (response) {
        console.log(response);
      },
      error: function (request, errorMsg) {
        console.log(request, errorMsg);
      }
    }
    $.ajax(request);
  };
  