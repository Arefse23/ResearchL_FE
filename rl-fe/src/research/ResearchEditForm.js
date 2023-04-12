import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import {BsPencilSquare} from 'react-icons/bs';

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
    window.location.href = '/index'
  }


  return (
    <div id='mainedit'>
      <div className='editlabel' id='rest'><BsPencilSquare size='2.5em' className='pen'/><h1 className='penh1'>Edit Research</h1></div>
 
<Container>
            <Form.Group>
                <Form.Label className='formlabel'>Research Topic</Form.Label>
                <Form.Control name="researchSubject" onChange={handleChange} value={research.researchSubject}/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Author</Form.Label>
                <Form.Control name="author" onChange={handleChange} value={research.author} />
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Date of Publish</Form.Label>
                <Form.Control type='date' name="dateofpublish" onChange={handleChange} value={research.dateofpublish}/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Research Introduction</Form.Label>
                <Form.Control as="textarea" rows={3} name="researchIntro" onChange={handleChange} value={research.researchIntro}/>
            </Form.Group>

            <Form.Label className='formlabel'>Type of Research</Form.Label>
            <Form.Select name="categories" onChange={handleChange} value={research.categories}>
            <option> select Type of Research </option>
                <option value="Descriptive Research">Descriptive Research</option>
                <option value="Experimental Research">Experimental Research</option>
                <option value="Exploratory Research">Exploratory Research</option>
                <option value="Historical Research">Historical Research</option>
            </Form.Select>


            <Form.Group className='formlabel'>
                <Form.Label>Research Link</Form.Label>
                <Form.Control name="researchlink" onChange={handleChange} value={research.researchlink} />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} type='submit' id='editbtn'>
            <BsFileEarmarkArrowUp size='1.5em'/> <label>Update Research</label>
            </Button>
    <h1>{research.autor}</h1>

    </Container>



   

</div>
  )
}
