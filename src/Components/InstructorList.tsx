import React from 'react'
type instructorListYtpe = {
    instructorNameLastNameList: {
        firstName: string;
        lastName: string;
    }[];
}

function InstructorList(props: instructorListYtpe) {
    return (
        <div>{props.instructorNameLastNameList.map((item, index) => {
            return (<h3 key={index}>
                {item.firstName} {item.lastName}
            </h3>)
        })}</div>
    )
}

export default InstructorList