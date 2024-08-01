const Course = ({course: {name, parts}}) => {
    return (
        <>
            <h1>{name}</h1>
            {parts.map((part, i) => <div key={i}>{part.name} {part.exercises}</div>)}
        </>
    )
}

export default Course