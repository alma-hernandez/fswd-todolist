import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var showTaskId = function (taskId, successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks/' + taskId + '?api_key=1', // Assuming you need to pass the task ID in the URL
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var updateTaskId = function (taskId, successCB, errorCB) {
  var request = {
    type: 'UPDATE',
    url: 'api/tasks/' + taskId + '?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var TaskMark_Complete = function (taskId, successCB, errorCB) {
  var request = {
    type: 'MARK_COMPLETE',
    url: 'api/tasks/' + taskId + '?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var TaskActive= function (taskId, successCB, errorCB) {
  var request = {
    type: 'ACTIVE',
    url: 'api/tasks/' + taskId + '?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var Destroy= function (taskId, successCB, errorCB) {
  var request = {
    type: 'DESTROY',
    url: 'api/tasks/' + taskId + '?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

