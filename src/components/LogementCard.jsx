import {Link} from 'react-router-dom'


export default function LogementCard({title,cover,id}){
    return(
        <Link 
        to={`/logements/${id}`}>
            <article className='logement-card'>
                <div className='card-cover'>
                    <img src={cover} alt={title}/>
                    <div className="card-content">
                        {title}
                    </div>
                </div>
            </article>
        </Link>
    )
}