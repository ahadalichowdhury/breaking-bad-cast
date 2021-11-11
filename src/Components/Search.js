import React, { useState } from 'react';

const Search = ({getQuary}) => {
    const [text, setText]= useState('');

    const onChange =(q)=>{
        setText(q)
        getQuary(q);
    }
    return (
        <section className="search">
            <form>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="search character..."
                  value={text}

                  onChange={(e)=> onChange(e.target.value)}
                  ></input>

            </form>
            
        </section>
    )
}

export default Search
