
import { navlist } from "./data";

const Footer = () => {
  return (
    <footer>
  <div class="container">
        <ul >
        {navlist.map(({ id, text, href }) => {
            return (
              
                <a key={id} href={`#${href}`}><li>{text}</li></a>
                
            )         
          })}
  
 </ul>

<p>Copyright © 2024 Diptesh Teli. All Rights Reserved</p>
</div>
</footer>
  )
}

export default Footer;