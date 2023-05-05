const Header = (props) => {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      {props.subtitle.length > 0 && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: '',
  subtitle: '',
}

export default Header
