import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import StarButton from './StarButton'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';
import "./card.css"

const PokemonCard = ({ name,image,abilities,id,favorite}) => {
  const dispatch =useDispatch()
  const allAbilities = abilities.map(ability =>ability.ability.name).join(',')
   const handleOnFavorite =()=>{
        dispatch(setFavorite({pokemonId:id}))
   }
  
  
  return (
    <Card className='custom-card elevated-card dark-card'
      title={name}
      cover={
        <img
          src={image}
          alt={name}
          className="card-image"

        />
      }
      extra={<StarButton isFavorite={favorite}  onClick ={handleOnFavorite} />}
    >
      <Meta description={allAbilities} />
    </Card>
  );
};

export default PokemonCard;