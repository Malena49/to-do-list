import { useState } from 'react';

function Liste({ id, label,done, newlists,setnewlists}) {
    const [fait, setfait] = useState(done)

    let listClass = "";
   
    fait === false ? listClass = " list-item"
        :
        listClass = "list-item list-item--done"
    const handleList = () => {
        setfait(!fait)
        done= !fait
   const newlist = newlists.map((item)=>{
       if(item.id===id){
           const updateditem={
               ...item,
               done:!item.done,
           };
           return updateditem;
       }
       return item
   })
   setnewlists(newlist)
    }
  
    return (
        <>
            <li>
                <label className={listClass}>
                    <input type="checkbox" defaultChecked={done} onClick={handleList} />
                    {label}
                </label>
            </li>

        </>
    )
}

export default Liste
