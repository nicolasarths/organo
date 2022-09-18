import Card from '../Card';
import './Team.css'

const Team = (props) => {
    const { teamName, primaryColor, secondaryColor } = props
    return (
        (props.people.length > 0) ?        
        (<section
            className="team" 
            style={{ backgroundColor: secondaryColor }}
        >
            <h3 style={{ borderColor: primaryColor }}>
                {teamName}
            </h3>
            <div className='cards'>
                {props.people.map(person => (
                    <Card
                        color={primaryColor}
                        key={person.name}
                        name={person.name}
                        image={person.image}
                        role={person.role}
                    />
                ))}
            </div>
        </section>)
        : (<></>)
    )
}

export default Team;