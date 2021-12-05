import { Link } from 'react-router-dom'
import React, {useState}from 'react'
import * as FaIcons from "react-icons/fa"
import { SidebarData } from './SiderBar Data'

function Siderbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className="navbar">
                <Link to="#" >
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            { sidebar? 
                <nav>
                    <ul> 
                        <li> <picture src="" alt="Image Not Found" /></li>
                        <li>"Nombre de la persona logueada"</li>
                        <li>"(moderador o usuario)" </li>
                       
                        {
                            SidebarData.map((item, index)=>{
                                return(
                                    <li key={item.cName}> 
                                       <Link to={item.link}>{item.title}</Link>
                                    
                                    </li>
                                )
                            })
                        }                     
                    </ul>

                </nav> : sidebar
            }
        </div>
    )
}

export default Siderbar
