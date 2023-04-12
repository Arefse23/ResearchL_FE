import React, { useState } from 'react'
import {Container, Form, Button} from "react-bootstrap"
import {BsFillPersonBadgeFill} from 'react-icons/bs';

export default function Signupp(props) {
    const [newUser, setNewUser] = useState({});

    const ChangeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)
    }

    const registerHandler = () => {
        props.register(newUser)
    }

  return (
    <div id='signup'>
        <div className='editlabel' id='rest'><BsFillPersonBadgeFill size='2.5em' className='pen'/><h1 className='penh1'>Sign Up</h1></div>

        <Container>
            <Form.Group>
                <Form.Label className='formlabel'>First Name</Form.Label>
                <Form.Control name="firstName" onChange={ChangeHandler}/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Last Name</Form.Label>
                <Form.Control name="lastName" onChange={ChangeHandler} />
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={ChangeHandler} />
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={ChangeHandler} />
            </Form.Group>

            <Button variant="primary" onClick={registerHandler} id='signupbtn'>
                Register
            </Button>

        </Container>
        
    </div>
  )
}
