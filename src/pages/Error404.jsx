import {Link} from 'react-router-dom'
import {useEffect} from 'react'
export default function Error(){
useEffect(()=>{
        document.title = 'Kase - Erreur 404'
},[])

    return(
        <div className='error404'>
            <h1>404</h1>
            <p className='error404--message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error404--redirect">Retourner sur la page d'accueil</Link>
        </div>
    )
}