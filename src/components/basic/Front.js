import React, {useState} from 'react';
import Menu from './MenuApi.js';
import Fronta from './Fronta.js';
import Nav from './Nav.js';

const uniqueList = [...new Set(Menu.map((curElem)=>{
return curElem.category;
})),
"All",
];
console.log(uniqueList);
const Front = () => {
    const [menuData, setMenuData] = useState(Menu);
    const[menuList, setmenuList] =  useState(uniqueList);
const filteritem =(category) =>{
if(category=== "All"){
    setMenuData(Menu);
    return;
}

const udatedList = Menu.filter((curElem)=>{
return curElem.category === category;
})
setMenuData(udatedList);
}
    console.log(menuData);
    return (
        <>
        <Nav filteritem={filteritem} menuList={menuList} />
         <Fronta  menuData={menuData}/> 
        </>
    )
}

export default Front;
