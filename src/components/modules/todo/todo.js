import React, { Component } from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import $ from 'jquery'; 
import Modal from 'react-bootstrap/Modal';
async function onLogin() {
    const { email, password } = this.state;
    try {
       const response = await axios.post('http://api/tochuc/todo/add/', { email, password });
       console.log(response);
    } catch (err) {
        console.log(err);
    }
}


function AddModal() {
        const [show, setShow] = React.useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => {
            setShow(true)
        };
        const handleSubmit = () => {
            setShow(false)
            var name = $('#name').val(); 
            console.log(name);
        };
        
        return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Thêm
            </Button>
    
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Jobs</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="name">Công việc: </label>
                    <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mô tả: </label>
                    <input type="text" name="description" id="description" className="form-control" />
                </div>
            </Modal.Body>
            
            
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Thêm
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        );
    }
   
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_list : [],
            isLoaded : false,
            isAddbtn : false
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
changeAddback = () => {
    var x = $('.jobs').val();
    alert(x);
    this.setState({
        isAddbtn: false
    })
}
    
    changeAdd = () => {
        
        this.setState({
            isAddbtn: true
        })
    }
    
    render() {
        var {isLoaded, todo_list, isAddbtn} = this.state;
        
        return (
            <div className="container">
            <div className="row">
                <div className ="col-sm-1">
                    <AddModal/>
                </div>
                
            </div>
            <hr/>
            <div className="row"> 
                <div className ="col-sm-12">
                    <table className="table table-dark">
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
            </div>    
            </div>
            
        );
    }
}

export default Todo;