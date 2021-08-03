import React from 'react';

const Fronta = ({menuData}) => { 
    console.log(menuData);
    return (
        <>
        <section className="main-class">
        {
            menuData.map((curElem)=>{
                const{id, category,name,image,description} = curElem;
                return(
                    <>
                    <div className="card-container" key={id}>
               <div className="main-card">
                   <div className="card-body">
                       <span className="card-number">
                           {id}
                       </span>
                       <span className="card-series">
{category}
                   </span>
                   <span className= "card-tittle">{name}</span>
               <img className="image-set" src={image}
                alt="images" />
               <span className="card-info">
               {description}</span>
               <span className="card-watch">watch now</span>
               
                   </div>
                  </div>
           </div>
           </>
                )
            })
        }
        </section>     
        </>
    )
}

export default Fronta ;
