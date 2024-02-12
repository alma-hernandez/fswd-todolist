import $ from 'jquery';

var indexTasks = function () {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: function (response) {
      console.log(response);
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

indexTasks();

var postTask = function (content) {
    var request = {
      type: 'POST',
      url: 'api/tasks?api_key=1',
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
  