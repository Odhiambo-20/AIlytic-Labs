import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav style={{ background: '#1a1a1a', padding: '1rem', color: 'white' }}>
            <h1>AIlytic Labs</h1>
            <ul style={{listStyle:'none', display:'flex', gap:'1rem'}}>
                <li><Link to="/" style={{color:'white', textDecoration:'none'}}>Home</Link></li>
                <li><Link to="/about" style={{color:'white', textDecoration:'none'}}>About</Link></li>
                <li><Link to="/products" style={{color:'white', textDecoration:'none'}}>Product</Link></li>
                <li><Link to="/contact" style={{color:'white', textDecoration:'none'}}>Contact</Link></li>

            </ul>   
        </nav>
    );
    }
export default Navbar;