import React from "react"

export default function Collapse({ title, message, equipments, children }) {
    // Declare a local state to track whether the content is collapsed or not
    const [isCollapse, setIsCollapse] = React.useState(false);

    // Generate equipment elements if the 'equipments' prop is provided
    const equipementsEl = equipments && equipments.map((item, index) => 
        <p className='equipementItem' key={index}>{item}</p>
    );

    return (
        <>
            <div className='collapse'>
                {/* Header of the collapsible section, toggles the collapse state when clicked */}
                <div onClick={() => setIsCollapse(prevState => !prevState)} className="collapse--head">
                    <h2 className='collapse--title'>{title || children}</h2>
                    {/* Icon that changes based on the collapse state */}
                    {!isCollapse ? 
                        <i className="collapse--icon open fa-solid fa-chevron-down"></i> : 
                        <i className="collapse--icon fa-solid fa-chevron-down"></i>
                    }
                </div>
                <div className='collapseContent-container'>
                    {/* Content that expands or contracts based on the collapse state */}
                    <div className={isCollapse ? 'expandingContent expanded' : 'expandingContent'}>
                        {/* Display the message if the 'message' prop is provided */}
                        {message && <div className='collapse--message'>
                            <p>{message}</p>
                        </div>}
                        {/* Display the equipments if the 'equipments' prop is provided and the state is collapsed */}
                        {equipments && <div className='collapse--message'>
                            {isCollapse && equipementsEl}
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
}