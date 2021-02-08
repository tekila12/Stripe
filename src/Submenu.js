import React from 'react'
import {useGlobalContext} from './context'

function Submenu() {
    const {isSubmenuOpen,location, page:{page, links}} =useGlobalContext()
    const container= React.useRef(null)
    const [columns, setColumns] = React.useState('col-2')
    React.useEffect(()=>{
      setColumns('col-2')
     const submenu =container.current;
     const{center, bottom} =location
     submenu.style.left = `${center}px`
     submenu.style.top = `${bottom}px`
     if(links.length===3){
         setColumns('col-3')
     }
     if(links.length > 3){
         setColumns('col-4')
     }
    },[location, links, page])

    return (
       <aside ref={container} className={`${isSubmenuOpen?'submenu show':'submenu'}`}>
         <h4>{page}</h4>
         <div className={`submenu-center col-2 ${columns}`} >
             {links.map((link,index)=>{
                 const {label, icon, url} =link
                  return <a key={index} href={url}>
                     {icon}
                     {label}
                      </a>
             })}
         </div>
       </aside>
    )
}

export default Submenu
