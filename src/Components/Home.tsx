import React from 'react'
type DataComing = {
    name: string;
    courseNumber: number;
    isBest: boolean;
}

function Home(props: DataComing) {
    return (
        <div>{props.name} Egitime hosgeldiniz : {props.courseNumber}
            {props.isBest ? (<p>En iyi React eğitimi bu eğitimim </p>) : (<p>En iyi React eğitimi bu eğitimim değil ileride bu eğitim </p>)}

        </div>
    )
}

export default Home