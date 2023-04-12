import React, {useState} from 'react'
import {Container, Form, Button, Nav} from "react-bootstrap"

export default function ResearchDetail(props) {
  const [research, setResearch] = useState(props.research)

  console.log(research)
  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedResearch = {...research}
    updatedResearch[attributeToChange] = newValue
    console.log(updatedResearch)
    setResearch(updatedResearch)
  }

  return (
    <div>
      <Container>
            <Form.Group>
                <Form.Label id='rest'>Research Topic</Form.Label>
                <Form.Control name="researchSubject"  value={research.researchSubject} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control name="author"  value={research.author} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Date of Publish</Form.Label>
                <Form.Control name="dateofpublish"  value={research.dateofpublish} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Research Introduction</Form.Label>
                <Form.Control as="textarea" rows={3} name="researchIntro"  value={research.researchIntro} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label id='rest'>Type of Research</Form.Label>
                <Form.Control name="categories"  value={research.categories} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Research Link</Form.Label>
                
                <Form name="researchlink" onChange={handleChange} value={research.researchlink} readOnly/>
            </Form.Group>

            <Nav.Item>
            <Nav.Link href={research.researchlink} name='researchlink' onChange={handleChange} className='naavv'>
            <Button>{research.researchlink}</Button></Nav.Link>
            </Nav.Item>
            


      </Container>
    </div>
  )
}
