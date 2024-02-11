import React from "react";
import Task from './Task';
import api from '../api';
import {useState,useEffect} from "react";

const Tasks = () =>{
    const [tasks, setTasks] = useState([]);
    const fetchTasks = async () =>{
        const response = await api.get('/tasks/');
        setTasks(response.data);
        
    }
    useEffect(() => {
        fetchTasks();
      },[]);
    




    return(

        <div className="tasks">
                {tasks.map(item=>(
                    <Task name={item.name} description={item.description} date={item.date} user={item.user} tags={item.tag}/>
                )
                )
                }
        </div>
        
    );
}

export default Tasks;