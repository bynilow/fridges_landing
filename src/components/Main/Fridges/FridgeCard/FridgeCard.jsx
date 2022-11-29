import s from './FridgeCard.module.css'

function FridgeCard({name, isEmpty = false}) {
    return ( 
        <div className={`${s.card} ${isEmpty && s.empty}`}>
            {name}
        </div>
     );
}

export default FridgeCard;