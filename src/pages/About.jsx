import bannerImage2 from '../assets/images/banner-img2.png'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner' 
import {useEffect} from "react"
export default function About(){
    useEffect(()=>{
            document.title = 'Kasa - A propos'
    })
    return(
        <>
        <Banner 
        image={bannerImage2}
        />
        <section className='about-page'>
            <Collapse 
            title='Fiabilité'
            message='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.'
            />
            <Collapse 
            title="Respect" 
            message="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
            />
            <Collapse 
            title="Service"
            message="La bienveillance fait partie des valeurs 
            fondatrices de Kasa. Tout comportement discriminatoire ou de 
            perturbation du voisinage entraînera une exclusion de notre 
            plateforme." 
            />
            <Collapse 
            title="Sécurité" 
            message="La sécurité est la priorité de Kasa. 
            Aussi bien pour nos hôtes que pour les voyageurs, 
            chaque logement correspond aux critères de sécurité 
            établis par nos services. En laissant une note aussi bien à 
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
            que les standards sont bien respectés. Nous organisons également 
            des ateliers sur la sécurité domestique pour nos hôtes." 
            />
    
        </section>
        </>
    )
}