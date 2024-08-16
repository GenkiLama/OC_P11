import React from "react"


export default function Collapse({title, message, equipments, children}){
    const [isCollapse,setIsCollapse]= React.useState(false)
    const equipementsEl = equipments && equipments.map((item,index)=><p className='equipementItem' key={index}>{item}</p>)
    
    return(
        <>
        <div className='collapse'>
            <div onClick={()=>setIsCollapse(prevState=>!prevState)} className="collapse--head">
                <h2 className='collapse--title'>{title || children}</h2>
                {!isCollapse ? <i className="collapse--icon open fa-solid fa-chevron-down"></i>:<i className="collapse--icon fa-solid fa-chevron-down"></i>}
            </div>
            <div className='collapseContent-container'>
                <div className={isCollapse ? 'expandingContent expanded' : 'expandingContent'}>
                    {message && <div className='collapse--message'>
                        {<p>{message}</p>}
                    </div>}
                    {equipments && <div className='collapse--message'>
                        {isCollapse && equipementsEl}
                    </div>}
                </div>
            </div>
        </div>
        </>
    )
}