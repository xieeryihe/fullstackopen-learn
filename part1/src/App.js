const Header = ({course : {name} }) => <h1>{name}</h1>

const Content = ({course : {parts} }) => parts.map(part => <Part part={part} key={part.name} />)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({course : {parts}}) => <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App