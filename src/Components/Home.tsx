import React from 'react'
type DataComing = {
    name: string
}

function Home(props: DataComing) {
    return (
        <div>{props.name} Egitime hosgeldiniz</div>
    )
}

export default Home