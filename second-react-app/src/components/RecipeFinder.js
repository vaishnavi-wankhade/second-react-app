import React, { useEffect, useRef, useState } from 'react';

export default function RecipeFinder() {

    const API_KEY = "b41baefbe282da07beb71e4e37248c4f";

    const APP_ID = "49431765";

    const inputRef = useRef(null);

    const [ingridientList, updateIngridientList] = useState([]);
    

    const searchIngridient = (query) => {

        let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;


        fetch(url)
            .then(response => {
                return response.json();
            }).then(res => {
                console.log("Final Response", res.hits)
                updateIngridientList(res.hits);

            })
            .catch(err => {
                console.log("error", err)
            })
    }

    const search = () => {

        searchIngridient(inputRef.current.value);
    }

    useEffect(() => {
        searchIngridient("eggs");
    }, [])




    return (
        <div className="container-fluid">
            <div className="m-4 row">
                <div className="col-12">
                    <form action="" className="mb-4">

                        <input
                            ref={inputRef}
                            placeholder="search food"
                            type="text" />

                        <button onClick={search}>Search</button>
                    </form>
                </div>

                {ingridientList.map((item, i) => {
                    return (
                        <div key={i} className="col-md-3 mb-4">
                            <div className="card" style={{ height: "100%" }}>

                                <img src={item.recipe.image} alt=" " className="w-100 mb-2"/>
                            
                            </div>
                        </div>
                    )}
              
                 ) }
                 
         </div>
         
      </div>
    )}
