import React from 'react'
import { NextSteps } from './style'


function index(props) {
  return <NextSteps color={props.color} variant="contained" {...props}>{props.text}</NextSteps>
}

export default index

