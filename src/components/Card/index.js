import './Card.css'

const Card = ({name, role, image, color}) => {
    return (
        <div className='card'>
            <div className='card-header' style={{ backgroundColor: color }}>
                <img src={image} alt={`Uma imagem de ${name}`} />
            </div>
            <div className='card-body'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Card;