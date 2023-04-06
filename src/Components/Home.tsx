import React from 'react'
type DataComing = {
    name: string;
    courseNumber: number;
}

function Home(props: DataComing) {
    return (
        <div>{props.name} Egitime hosgeldiniz : {props.courseNumber}</div>
    )
}

export default Home