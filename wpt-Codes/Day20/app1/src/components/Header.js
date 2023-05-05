const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </div>
  )
}

export default Header
