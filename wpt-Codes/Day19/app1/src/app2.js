// class Header extends React.Component {
//   render() {
//     return (
//       <div className="title">
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// functional component
const Header = (props) => {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  )
}

ReactDOM.render(<Header title="Notes App" />, document.getElementById('app'))
