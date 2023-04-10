import React from 'react'

export default function Research(props) {
  return (
    <div>
          <>
        <td>{props.researchSubject}</td>
        <td>{props.author}</td>
        <td>{props.categories}</td>
        {/* <td><button onClick={() => {props.editView(props._id)}}>Edit</button></td> */}
        <td><button onClick={() => {props.editView(props._id)}}>Edit</button></td>
        <td><button onClick={() => {props.deleteResearch(props._id)}}>Delete</button></td>
        <td><button onClick={() => {props.researchDetail(props._id)}}>Detail</button></td>
    </>
    </div>
  )
}
