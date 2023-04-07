import React from 'react'
import { instructorProp } from './propstypes'


function Instructor(props: instructorProp) {
    return (
        <div>{props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}</div>
    )
}

export default Instructor