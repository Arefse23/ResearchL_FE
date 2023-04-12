import React, {useState} from 'react'
import {Container, Form, Button, Nav} from "react-bootstrap"
import {BsFileEarmarkText} from 'react-icons/bs';

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

  let date = new Date(research.dateofpublish)


  return (
    <div id='mainedit'>
     <div className='editlabel' id='rest'><BsFileEarmarkText size='2.5em' className='pen'/><h1 className='penh1'>Research Detail</h1></div>
      <Container>
            <Form.Group>
                <Form.Label id='rest' className='formlabel'>Research Topic</Form.Label>
                <Form.Control name="researchSubject"  value={research.researchSubject} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Author</Form.Label>
                <Form.Control name="author"  value={research.author} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Date of Publish</Form.Label>
                <Form.Control name="dateofpublish"  value={date.toLocaleDateString()} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Research Introduction</Form.Label>
                <Form.Control as="textarea" rows={3} name="researchIntro"  value={research.researchIntro} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Type of Research</Form.Label>
                <Form.Control name="categories"  value={research.categories} onChange={handleChange} readOnly/>
            </Form.Group>

            <Form.Group>
                <Form.Label className='formlabel'>Research Link</Form.Label>
                
                <Form name="researchlink" onChange={handleChange} value={research.researchlink} readOnly/>
            </Form.Group>

            <Nav.Item>
            <Nav.Link target="_blank" href={research.researchlink} name='researchlink' onChange={handleChange} className='naavv'>
            <Button>Get Link</Button></Nav.Link>
            </Nav.Item>
            


      </Container>
    </div>
  )
}
