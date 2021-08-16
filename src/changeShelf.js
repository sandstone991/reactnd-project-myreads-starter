import React from 'react'
import * as BooksAPI from './BooksAPI'
export default function ChangeShelf (props){

let options = [{value:'currentlyReading', text:'Currently reading'},
{value:'wantToRead', text:'Want to read'},
{value:'read',text:'Read'},
{value:'none',text:'None'}]
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


let defaultValue= typeof props.bookID.shelf==='undefined'?'none': props.bookID.shelf;

return(     

                 <div className="book-shelf-changer">
                              <select onChange={handleChange} >
                                <option value="move" disabled>Move to...</option>
                                {options.map(opt=>{
                                  if(opt.value===defaultValue){
                                  return (
                                    <option value={opt.value} selected>{opt.text}</option>
                                  )}
                                  else{
                                    return (<option value={opt.value}>{opt.text}</option>)
                                  }
                                })}
                                
                              </select>
                            </div>
)
}

