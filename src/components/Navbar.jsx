import {Link} from 'react-router-dom'

function Navbar() {
  return (
    
    <nav>
      <Link to={"/"}>  <h1>Expense Manager</h1></Link>
       <Link to={"/about"}> <h3>About</h3></Link>
    </nav>
  )
}

export default Navbar