import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_list : [],
            isLoaded : false,
        }
    }
    componentDidMount() {
        this.get_todo_list();
    }
    async get_todo_list(){
            
        await axios.post("http://api/tochuc/todo/todo_list/")
            .then(res =>  {
                this.setState({ 
                    isLoaded : true,
                    todo_list : res.data.list,
                })
            });
        console.log(this.state.todo_list)
}
    
    render() {
        var {isLoaded, todo_list} = this.state;
        
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>    
                            <th>Jobs</th>
                            <th>Description</th>
                            <th>Checked</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                todo_list.map( (value, key) =>{
                                    return (
                                        <tr key={key}>
                                            <td>{value.todo_id}</td>
                                            <td>{value.todo_name}</td>
                                            <td>{value.todo_description}</td>
                                            <td>{value.todo_check}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Todo;