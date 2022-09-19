import {FaHeart} from 'react-icons/fa'
import './index.css'

const Card = props => {
  const {Item, renderChangeState} = props
  const {
    id,
    cover,
    name,
    location,
    category,
    price,
    type,
    state,
  } = Item

  const value = category === "For Sale" ? 'button-ion blue' : 'button-ion'

  const ChangeFun = () => {
      renderChangeState(id)
  }
  return (
      <li className="container-card">
        <img
          src={cover}
          alt="channel logo"
          className="icon-image-wall"
        />
        <div className="bottom">
          <div className="bottom-1">
              <button type="button" className={value}>{category}</button>
              <FaHeart size={25} onClick={ChangeFun} color={state ? 'red' : '#909090'}/>
          </div>
          <div className="bottom-2">
            <h1 className="header-bot">{name}</h1>
            <p className="para-bot">{location}</p>
          </div>
          <div className="bottom-1">
            <button type="button" className="button-ions">{price}/Sqft</button>
            <h1 className="head-bot">{type}</h1>
          </div>
        </div>
      </li>
  )
}
export default Card
