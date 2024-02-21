import React from "react";
import logo from "../../assets/logo.png"

function Header(){
    
    return (
    <header class="nav_foto1">
       
       <nav class="navegation">
       <div class="logonav" >
            <img src={logo} alt="foto logo manger"/>
            
           </div>
       <a href="#">HOME</a>
           <select class="menu"   name="menu">
            <option class="menuopcoes">MENU</option>
            <option value="bolos">Bolos</option>
            <option value="tartes">Tartes</option>
            <option value="croissants">Croissants</option>
            <option value="choux">Choux cream</option>
            <option value="cookie">Cookie</option>
            <option value="macaron">Macaron</option>

           </select>
           
            <a href="#">SOBRE</a>
            <a href="#">CONTATO</a>

       </nav>
        

    </header>
      
           

        

    )
}

export default Header