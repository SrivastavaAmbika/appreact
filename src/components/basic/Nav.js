import React from 'react';

const Nav = ({filteritem,menuList}) => {
    return (
        <>
        <nav>
        <div className="main-nav">
            {
            menuList.map((curElem)=>{
                return(
                    <ul>
                        <li>
                        <button className="btn1" onClick={() =>filteritem(curElem)}>{curElem}</button>
                        </li>
                    </ul>
                   
                );

                
            })}
            
            {/* <li>
                    <button className="btn1" onClick={() =>setMenuData(Menu)}>All </button>
                </li>
                */}
                {/* <li>
                    <button className="btn1" onClick={() =>filteritem("WebSeries")}>Web Series</button>
                </li>
                <li> <button className="btn1" onClick={() =>filteritem("Games")}>Games</button>
 </li>
                <li> <button className="btn1" onClick={() =>filteritem("Cartoon")}>Cartoon</button>
 </li>
                <li> <button className="btn1" onClick={() =>filteritem("Bollywood")}>Bollywood</button>
 </li>
                <li> <button className="btn1" onClick={() =>filteritem("MusicAlbum")}>Music Album</button>
 </li> */}
            
        </div>
</nav>

    
        </>
    )
}

export default Nav;
