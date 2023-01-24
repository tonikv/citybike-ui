/*
  Shows headline
*/

const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50",
    backgroundColor: "rgb(172,172,192)",
    color: "black",
    fontWeight: 800,
    fontSize: "2em"
}

const spanStyle = {
    marginLeft: "10px",
    fontWeigth: 500,
    fontSize: "small"
}

const Header = () => {
  return (
    <h1 style={headerStyle}>CITYBIKE<span style={spanStyle}>Journeys And Stations</span></h1>
  )
}

export default Header
