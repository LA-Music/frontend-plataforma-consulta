import React from 'react'
import { NextSteps, LinkButtom } from './style'


function index(props) {
  return <NextSteps variant="contained" {...props}>{props.text}</NextSteps>
}

export function Link (props){
  return <LinkButtom variant="contained" {...props}>{props.text}</LinkButtom>
}

export default index

