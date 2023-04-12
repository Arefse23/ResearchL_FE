import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"

export default function ResearchEditForm(props) {

    const [research, setResearch] = useState(props.research)

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedResearch = {...research}
    updatedResearch[attributeToChange] = newValue
    console.log(updatedResearch)
    setResearch(updatedResearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editResearch(research);
  }


  return (
    <div>
 <h1>Edit Research</h1>
<Container>
            <Form.Group>
                <Form.Label id='rest'>Research Topic</Form.Label>
                <Form.Control name="researchSubject" onChange={handleChange} value={research.researchSubject}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control name="author" onChange={handleChange} value={research.author} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Date of Publish</Form.Label>
                <Form.Control type='date' name="dateofpublish" onChange={handleChange} value={research.dateofpublish}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Research Introduction</Form.Label>
                <Form.Control as="textarea" rows={3} name="researchIntro" onChange={handleChange} value={research.researchIntro}/>
            </Form.Group>

            <Form.Label>Type of Research</Form.Label>
            <Form.Select name="categories" onChange={handleChange} value={research.categories}>
            <option> select Type of Research </option>
                <option value="Descriptive Research">Descriptive Research</option>
                <option value="Experimental Research">Experimental Research</option>
                <option value="Exploratory Research">Exploratory Research</option>
                <option value="Historical Research">Historical Research</option>
            </Form.Select>


            <Form.Group>
                <Form.Label>Research Link</Form.Label>
                <Form.Control name="researchlink" onChange={handleChange} value={research.researchlink} />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} type='submit' id='signbtn'>
            Update Research
            </Button>
    <h1>{research.autor}</h1>

    </Container>



   

</div>
  )
}
