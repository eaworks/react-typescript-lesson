import React from 'react'
type instructorProp = {
    instructorNameLastName: {
        firstName: string;
        lastName: string;
    }
}

function Instructor(props: instructorProp) {
    return (
        <div>{props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}</div>
    )
}

export default Instructor