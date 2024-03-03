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
  var htmlString = response.tasks.map(t => GenerateTaskHTML(t));
   

  $("#tasks").html(htmlString);
});


// TaskMark_Complete(function (response) {
//   var htmlString = response.tasks.map(function(task) {
//     return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
//       " + task.content + "\
//       </div>";
//   });

//   $("#tasks").html(htmlString);
// });



// TaskActive(function (resposne) {
//   var htmlString = response.tasks.map(function(task) {
//     return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
//       " + task.content + "\
//       </div>";
//   });

//   $("#tasks").html(htmlString);
// });
// });
$(function(){
  $("#add-task-button").on("click", handleClick);
  $(document).on("click", '.complete-task', handleCompleteClick);
})

export function handleClick() {
  const content = document.getElementById("new-task-content").value;
  postTask(content, function (response) {
    var htmlString = GenerateTaskHTML(response.task);
  
    $("#tasks").append(htmlString);
});
}

export function handleCompleteClick(evt) {
 const taskId = evt.target.parentElement.dataset.id; 
 TaskMark_Complete(taskId, function(){
  evt.target.parentElement.prepend("√");
 })
}
function GenerateTaskHTML(task){
  return task.completed
    ? `<div class='col-12 mb-3 p-2 border rounded task' data-id="${task.id}">√ ${task.content} </div>`
    : `<div class='col-12 mb-3 p-2 border rounded task' data-id="${task.id}"> ${task.content} <button class="complete-task">Complete</ button></div>`;
}