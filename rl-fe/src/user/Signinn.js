import React, { useState } from 'react'
import {Container, Form, Button} from "react-bootstrap"
import {BsFillSignpostFill} from 'react-icons/bs';

export default function Signinn(props) {
    const [newUser, setNewUser] = useState({});

    const ChangeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div id='signm'>
        <div className='editlabel' id='rest'><BsFillSignpostFill size='2.5em' className='pen'/><h1 className='penh1'>Sign In</h1></div>

        <Container>
            <Form.Group>
                <Form.Label className='formlabel'>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={ChangeHandler} />
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={ChangeHandler} />
            </Form.Group>

            <Button variant="primary" onClick={loginHandler} id='signbtn'>
                Login
            </Button>

        </Container>
        
    </div>
  )
}
