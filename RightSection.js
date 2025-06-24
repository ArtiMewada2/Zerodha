import React from 'react';

function RightSection( {
   ProductName,
   ProductDescription,
   LearnMore,
   imageURL,
}
){
return ( 
        
    <div className="container mt-5">
        <div className="row">
            <div className ="col-6 p-5 mt-5 ">
                <h1>{ProductName}</h1>
                <p>{ProductDescription}</p>
                <a href={LearnMore} >Learn More</a>
            </div>
            <div className ="col-6 ">
                <img src={imageURL}></img>
            </div>
        </div>
    </div>
 )
};
export default RightSection;