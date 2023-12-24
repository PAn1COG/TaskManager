$(document).ready(function () {
    // Populate projects on load
    populateProjects();
    populateProjectsforTasks();

    $('#createProjectForm').on('submit', function (e) {
        e.preventDefault();
        var projectName = $('#projectName').val();
        $.ajax({
            url: 'http://127.0.0.1:8000/api/createProject',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: projectName }),
            success: function (response) {
                alert("created");
                populateProjects();
            },
            error: function (xhr, status, error) {
                console.error('Create project failed:', error);
            }
        });
        
    });

    $('#createTaskForm').on('submit', function (e) {
        e.preventDefault();
        var taskName = $('#TaskName').val();
        var priority = $('#priority').val();
        var projectId = $('#projectDropdownForTask').val();
        console.log(projectId);
        $.ajax({
            url: 'http://127.0.0.1:8000/api/createTask',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: taskName , priority: priority, projectId: projectId }),
            success: function (response) {
                alert(" Task created");
                $('#projectDropdown').trigger('change');
            },
            error: function (xhr, status, error) {
                console.error('Create project failed:', error);
            }
        });
        
    });

    $('#projectDropdown').on('change', function () {
        var selectedProjectId = $(this).val();
        $.ajax({
            url: 'http://127.0.0.1:8000/api/getAllTasksByProject?projectId=' + selectedProjectId,
            type: 'GET',
            contentType: 'application/json',
            success: function (response) {
                
                displayTasks(response);
            },
            error: function (xhr, status, error) {
                console.error('Create project failed:', error);
            }
        });
    });

    $('#tasksContainer').sortable({
        placeholder: "ui-state-highlight", 
        update: function(event, ui) {
            var updatedOrder = $(this).sortable('toArray', { attribute: 'id' });
            $.ajax({
                url: 'http://127.0.0.1:8000/api/updatePriority',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ ids: updatedOrder }),
                success: function (response) {
                    alert("order updated");
                     $('#projectDropdown').trigger('change');
                },
                error: function (xhr, status, error) {
                    console.error('Create project failed:', error);
                }
            });

        }
    });
    
});

function populateProjects() {
    var projects = [];
    $.ajax({
        url: 'http://127.0.0.1:8000/api/getAllProjects',
        type: 'GET',
        contentType: 'application/json',
        success: function (response) {
            // console.log(response);
            var options = '<option value="">Select a Project</option>';
            $.each(response, function (index, project) {
                console.log(project.project_id);
                console.log(project.project_name);
                options += '<option value="' + project.project_id + '">' + project.project_name + '</option>';
            });
            $('#projectDropdown').html(options);
            // console.log(projects);
        },
        error: function (xhr, status, error) {
            console.error('Create project failed:', error);
        }
    });

}
function populateProjectsforTasks() {
    var projects = [];
    $.ajax({
        url: 'http://127.0.0.1:8000/api/getAllProjects',
        type: 'GET',
        contentType: 'application/json',
        success: function (response) {
            // console.log(response);
            var options = '<option value="">Select a Project</option>';
            $.each(response, function (index, project) {
                console.log(project.project_id);
                console.log(project.project_name);
                options += '<option value="' + project.project_id + '">' + project.project_name + '</option>';
            });
            $('#projectDropdownForTask').html(options);
        },
        error: function (xhr, status, error) {
            console.error('Create project failed:', error);
        }
    });

}

function displayTasks(tasks) {
    var tasksHtml = '';
    $.each(tasks, function (index, task) {
        tasksHtml += `
            <div class="task" id="${task.id}">
                ${task.Taskname}
                <button class="updateBtn" onclick="completeTask(${task.id})">Complete</button>
                <button class="deleteBtn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
    });
    $('#tasksContainer').html(tasksHtml);
}
function deleteTask(id){
    let currentProject = $('#projectDropdown').val();
    console.log(currentProject);
    $.ajax({
        url: 'http://127.0.0.1:8000/api/deleteTask',
        type: 'POST',
        contentType: 'application/json',
        data:JSON.stringify({id: id}),
        success: function (response) {

            $('#projectDropdown').trigger('change');

        },
        error: function (xhr, status, error) {
            console.error('Create project failed:', error);
        }
    });
}
function completeTask(id){
    let currentProject = $('#projectDropdown').val();
    console.log(currentProject);
    $.ajax({
        url: 'http://127.0.0.1:8000/api/completeTask',
        type: 'POST',
        contentType: 'application/json',
        data:JSON.stringify({id: id}),
        success: function (response) {

            $('#projectDropdown').trigger('change');

        },
        error: function (xhr, status, error) {
            console.error('Create project failed:', error);
        }
    });
}
