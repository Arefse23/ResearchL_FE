import React from 'react'
import {BsPencilSquare} from 'react-icons/bs';
import { BiXCircle } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";

export default function Research(props) {
  const researchDetail = () => {
    props.researchDetail(props._id)
    // console.log("ResearchDetail")
  }
  console.log(props.dateofpublish)
  let date = new Date(props.dateofpublish)
  console.log(date)
  console.log(date.toLocaleDateString())
  return (
          <>
        <td>{props.researchSubject}</td>
        <td>{props.author}</td>
        <td>{props.categories}</td>
        <td>{date.toLocaleDateString()}</td>
        
        <td><a href='#rest'><button id='BsPencil' class="btn btn-outline-primary" href='#rest' onClick={() => {props.editView(props._id)}}><BsPencilSquare size='1.7em' /></button></a></td>
        <td><button id='BsPencil' class="btn btn-outline-success" onClick={() => {researchDetail(props._id)}}><BsFileEarmarkText size="1.8em"/></button></td>
        <td><button id='BsPencil' class="btn btn-outline-danger" onClick={() => {props.deleteResearch(props._id)}}><BiXCircle size="1.8em" /></button></td>
        

    </>
  )
}
