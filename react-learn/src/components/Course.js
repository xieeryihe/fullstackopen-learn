const Course = ({course: {name, parts}}) => {
    let sum = 0;
    for (let i = 0;i < parts.length; i++){
        sum += parts[i].exercises
    }

    return (
        <>
            <h1>{name}</h1>
            {parts.map((part, i) => <div key={i}>{part.name} {part.exercises}</div>)}
            <div><strong>{`total of ${sum} exercises`}</strong></div>
        </>
    )
}

export default Course