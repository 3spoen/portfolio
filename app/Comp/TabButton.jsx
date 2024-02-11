 import React from 'react';
 
 const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ?  'text-white border-b-2 border-b-cyan-500 ' : 'text-slate-300 ';
   return (
    <button onClick={selectTab}>
        <p className= {`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    
    </button>
    );
 };
 
 export default TabButton;