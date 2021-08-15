import React from 'react'
import * as BooksAPI from './BooksAPI'
export default function ChangeShelf (props){

const handleShelfUpdate = async(shelf,id)=>{
try{
await BooksAPI.update(id, shelf)
.then(()=>props.bookChange());
}
catch(err){
console.log(err)
}

}
const handleChange = (event)=>{
    if(event.target.value!=='none'){
    let shelf = event.target.value;
    handleShelfUpdate(shelf,props.bookID)
    }

}


return(     

                 <div className="book-shelf-changer">
                              <select onChange={handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value='none'>----------</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                
                              </select>
                            </div>
)
}

