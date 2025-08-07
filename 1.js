// Task 1: Simulating Asynchronous Behavior.....

// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
// Use setTimeout to simulate this behaviour.

// function declaration..
//  function simulateAsyncTask() {
//     console.log("Task started");

    // set timeout() for used to delay the some Code
    // setTimeout(function () {
    //     console.log("Task finished");
        // 2000 miliseconds means the 2 seconds..
        // and 1000 miliseconds means the 1 seconds..
//     }, 1000);   
//  }
//  calling the function..
// simulateAsyncTask();


// Task 2: Simulate Multiple Async Tasks with Different Delays

// Create a function simulatedMultipleTasks() that starts three asynchronous tasks with different delay (1 second, 2 seconds and 3 seconds). Each task should log "Task [n] finished where [n] is the task number. Ensure the task run asynchronously..."


function simulateMultipleTasks() {
    console.log("Starting tasks..")

    setTimeout(() => {
        //after 1 second..
        console.log("task 1 finished")
    },1000);

    setTimeout(() => {
        //sfter 2 second..
        console.log("task 2 finished");
    }, 2000);

    setTimeout(() => {

        //after 3 seconds
        console.log("task 3 finished");
    },3000);
}
simulateMultipleTasks();