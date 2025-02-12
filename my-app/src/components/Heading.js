export default function Heading(props) {
    if(props.type === 'h2') {
      return<h2>{props.children}</h2>
    }
    return <h1>{props.children}</h1>
}


//h1으로 들어오면 h2가 아니기 때문에 if문이 실행되지 않고, return문으로 
