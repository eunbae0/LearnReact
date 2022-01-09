type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
}

function Greeting({name, mark, optional}: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  )
}
Greeting.defaultProps = {
  mark:'!'
};

export default Greeting
