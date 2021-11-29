import PropTypes from 'prop-types'

function Header({ addlist, setaddlist, setnewlists, newlists,  }) {

    const handleBar = (e) => {
        setaddlist(e.target.value)
    }
    const confirmer = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()

            setnewlists(newlists.concat([{
                id: newlists.length+1,
                label: addlist,
                done: false,
            }]))
            setaddlist("")
        }
    }
    return (

        <form className="form">
            <input type="text" className="form-item" placeholder="Ajouter une tâche" value={addlist} onChange={handleBar} onKeyDown={confirmer} />
        </form>

    )
}
Header.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    done: PropTypes.bool,
}
export default Header
