import React, {useState} from "react";
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Add(){
    const[name, setName] = useState('');
    const[DOB, setAge] = useState('');
    const[email, setEmail] = useState('');

    
    let history= useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
         
        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b=DOB,
        c= email;

        Employees.push({id: uniqueId, Name: a, DOB: b, email: c});
        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control style={{marginBottom:"15px"}} type = "text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value
                )}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control style={{marginBottom:"15px"}} type = "date" placeholder="Enter DOB" required onChange={(e) => setAge(e.target.value
                )}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control style={{marginBottom:"15px"}} type = "text" placeholder="Enter Email" required onChange={(e) => setAge(e.target.value
                )}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">submit</Button>
        </Form>

</div>

}

export default Add;