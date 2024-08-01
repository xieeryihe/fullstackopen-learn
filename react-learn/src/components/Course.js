const Course = ({ course: { name, parts } }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises)

    return (
        <>
            <h1>{name}</h1>
            {parts.map((part, i) => <div key={i}>{part.name} {part.exercises}</div>)}
            <div><strong>{`total of ${total} exercises`}</strong></div>
        </>
    )
}

export default Course