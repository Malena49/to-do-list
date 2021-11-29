import PropTypes from 'prop-types'
import Liste from './Liste'
function Body({ newlists, setnewlists}) {
    newlists.sort((a,b) => (a.done > b.done) ? 1 : ((b.done > a.done) ? -1 : 0))
const filter = newlists.filter((list)=>list.done===false)

    return (
        <>
            <p  className="counter">{filter.length} tâches en cours</p>
            <ul className="list">
              {newlists.map((list)=><Liste key={list.id}{...list} newlists={newlists} setnewlists={setnewlists}/>)}
            </ul>
        </>
    )
}
Body.propTypes={
    id: PropTypes.number,
    label : PropTypes.string,
    done: PropTypes.bool,
}
export default Body
