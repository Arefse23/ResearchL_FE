import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"

export default function ResearchCreateForm(props) {

    const [newResearch, setNewResearch] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const research = {...newResearch}
    research[attributeToChange] = newValue
    console.log(research)
    setNewResearch(research)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addResearch(newResearch);
    window.location.href = '/index'
    
  }

  return (
    <div>
    <h1>Create Research</h1>


    <Container>
            <Form.Group>
                <Form.Label>Research Topic</Form.Label>
                <Form.Control name="researchSubject" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control name="author" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Date of Publish</Form.Label>
                <Form.Control type='date' name="dateofpublish" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Research Introduction</Form.Label>
                <Form.Control as="textarea" rows={3} name="researchIntro" onChange={handleChange} />
            </Form.Group>

            <Form.Label>Type of Research</Form.Label>
            <Form.Select name="categories" onChange={handleChange}>
            <option> select Type of Research </option>
                <option value="Descriptive Research">Descriptive Research</option>
                <option value="Experimental Research">Experimental Research</option>
                <option value="Exploratory Research">Exploratory Research</option>
                <option value="Historical Research">Historical Research</option>
            </Form.Select>

            <Form.Group>
                <Form.Label>Research Link</Form.Label>
                <Form.Control name="researchlink" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} type='submit' id='signbtn'>
            Add Research
            </Button>
            
    </Container>

</div>
  )
}
