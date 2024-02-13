let currentFilter = 'all';

function filterTasks(tasks) {
  if (currentFilter === 'active') {
    return tasks.filter(task => !task.completed);
  } else if (currentFilter === 'complete') {
    return tasks.filter(task => task.completed);
  } else {
    return tasks;
  }
}

function displayFilteredTasks(tasks) {
  const filteredTasks = filterTasks(tasks);
export var displayTasks = function(tasks) {
 
  $('#tasks').empty();

 
  tasks.forEach(function(task) {
    var taskItem = $('<li>').text(task.description);

    var removeButton = $('<button>')
      .text('Remove')
      .click(function() {
        removeTask(task.id);
      });

    var markCompleteButton = $('<button>')
      .text('Mark Complete')
      .click(function() {
        markComplete(task.id);
      });

    var markActiveButton = $('<button>')
      .text('Mark Active')
      .click(function() {
        markActive(task.id);
      });

    taskItem.append(removeButton, markCompleteButton, markActiveButton);
    $('#tasks').append(taskItem);
  });
};


export var addTask = function(content) {
  postTask(content, function(response) {
   
    indexTasks(function(tasks) {
      displayTasks(tasks);
    });
  }, function(error) {
    console.error('Error adding task:', error);
  });
};


export var markComplete = function(taskId) {
  TaskMarkComplete(taskId, function(response) {
   
    indexTasks(function(tasks) {
      displayTasks(tasks);
    });
  }, function(error) {
    console.error('Error marking task as complete:', error);
  });
};


export var markActive = function(taskId) {
  TaskMarkActive(taskId, function(response) {
    
    indexTasks(function(tasks) {
      displayTasks(tasks);
    });
  }, function(error) {
    console.error('Error marking task as active:', error);
  });
};


export var removeTask = function(taskId) {
  Destroy(taskId, function(response) {
    
    indexTasks(function(tasks) {
      displayTasks(tasks);
    });
  }, function(error) {
    console.error('Error removing task:', error);
  });
};


export var initializePage = function() {
  
  indexTasks(function(tasks) {
    displayTasks(tasks);
  }, function(error) {
    console.error('Error fetching tasks:', error);
  });

 
  $('#add-task').click(function() {
    var content = $('#task-content').val();
    if (content.trim() !== '') {
      addTask(content);
      $('#task-content').val(''); 
    }
  });
};


$(document).ready(function() {
  initializePage();
});
}

$('#toggle-all').click(function() {
  currentFilter = 'all';
 
});

$('#toggle-active').click(function() {
  currentFilter = 'active';
 
});


$('#toggle-complete').click(function() {
  currentFilter = 'complete';

});
