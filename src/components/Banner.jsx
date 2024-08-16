export default function Banner({image,children}){
    return(
        <section className='banner'>
            <img src={image} alt="Banner" className="banner-img"/>
            {children && <div className="banner-text">
                {children}
            </div>}
        </section>
    )
}