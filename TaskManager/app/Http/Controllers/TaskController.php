<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\support\facades\DB;

class TaskController extends Controller
{
    //test
    function hello_test(){
        return "hello";
    }
    //testread
    function testRead(Request $req) {
        $src = DB::select('select * from tasks where status != "complete"');
        return $src;
    }


    function getAllProjects(){
        $src = DB::select('select * from projects');
        return $src;
    }

    function createProject(Request $req) {
        $name = $req->input('name');
        try{
            $src = DB::insert
            (
                "insert into projects(project_name) values(?)",
                [$name]
            );
            return $src;
        }catch(Exception $e){
            return 0;
        }
    }

    function createTask(Request $req){
        $name = $req->input('name');
        $priority = $req->input('priority');
        $projectId = $req->input('projectId');
        $status = "Incomplete";
        try{
            $src = DB::insert
            (
                "insert into tasks(Taskname,status,Priority,project_id) values(?,?,?,?)",
                [$name,$status,$priority,$projectId]
            );
            return $src;
        }catch(Exception $e){
            return 0;
        }
    }

    function updateTask(Request $req){
        $id = $req->input('id');
        $name = $req->input('name');
        $priority = $req->input('priority');
        try{
            $src = DB::update
            (
                "update tasks set Taskname = ?, Priority = ? where id = ?",
                [$name,$priority,$id]
            );
            return $src;
        }catch(Exception $e){
            return 0;
        }
    }

    function deleteTask(Request $req){
        $id = $req->input('id');
        try{
            $src = DB::delete
            (
                "delete from tasks where id = ?",
                [$id]
            );
            return $src;
        }catch(Exception $e){
            return 0;
        }
    }

    function getAllTasksByProject(Request $req){
        $projectId = $req->input('projectId');
        try{
            $src = DB::select
            (
                'select * from tasks where project_id = ? AND status != "complete" order by priority asc',
                [$projectId]
            );
            return $src;
        }catch(Exception $e){
            return 0;
        }
    }
    
    function completeTask(Request $req){
        $id = $req->input('id');
        $status = "complete";
        try{
            $src = DB::update
            (
                "update tasks set status = ? where id = ?",
                [$status, $id]
            );
            return $src;
        }catch(Exception $e){
            return 0;
        }

    }

    function updatePriority(Request $req){
        $ids = $req->input('ids');
        $priority = 1;
        foreach($ids as $id){
            DB::update("update tasks set priority = ? where id=?", [$priority,$id]);
            $priority+=1;
        }
    }

}

