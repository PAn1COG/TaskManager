<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('hello',[TaskController::class, 'hello_test']);
Route::get('readTest',[TaskController::class, 'testRead']);

Route::get('getAllProjects',[TaskController::class, 'getAllProjects']);
Route::post('createProject',[TaskController::class, 'createProject']);
Route::post('createTask',[TaskController::class, 'createTask']);
Route::post('updateTask',[TaskController::class, 'updateTask']);
Route::post('deleteTask',[TaskController::class, 'deleteTask']);
Route::get('getAllTasksByProject',[TaskController::class, 'getAllTasksByProject']);
Route::post('completeTask',[TaskController::class, 'completeTask']);
Route::post('updatePriority',[TaskController::class, 'updatePriority']);



