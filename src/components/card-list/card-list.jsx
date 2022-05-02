
import Card from '../card/card'
import './card-list.css'

const CardList = ({ monsters }) => {

    console.log('render from CardList')
    return (
      // only have one parent component
      <div className='card-list'>
        {monsters.map((monster) =>{ 
          return (
          <Card monster={monster}/>
        )})}
      </div>
    )

}

export default CardList