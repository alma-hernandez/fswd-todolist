import $ from 'jquery';

import {
  indexTasks,
  postTask,
  showTaskId,
  updateTaskId,
  TaskMark_Complete,
  TaskActive,
  Destroy,
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\
      </div>";
  });

  $("#tasks").html(htmlString);
  
  postTask(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
        " + task.content + "\
        </div>";
    });
  
    $("#tasks").html(htmlString);
});

TaskMark_Complete(function (response) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\
      </div>";
  });

  $("#tasks").html(htmlString);
});



TaskActive(function (resposne) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\
      </div>";
  });

  $("#tasks").html(htmlString);
});
});


