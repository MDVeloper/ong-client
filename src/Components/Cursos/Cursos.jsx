import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCategories } from '../../Store/Actions/actionArticles';
import axios from 'axios';


export default function AddCurseForm() {
    const dispatch = useDispatch();
    const allArt = useSelector((state) => state.articles.categories);
    const [send, setSend] = useState(false);
    const [form, setForm] = useState({
        id: "",
    })
    useEffect(() => {
        dispatch(getCategories("Course"))
    }, [])
 
    console.log(allArt)
    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/articles/asign', form)
        .then( responese => {
            setForm({})
            setSend(true);
            alert("suscripcion realizada con exito")
        }).catch(e => {
            console.log(e)
        })
    }
    return (
        <div>
               {allArt.map((data) => {
                return (
                  <div  key={data.id}>
                    <div >
                      <img src={data.img} alt="" />
                    </div>
      
                      <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <botton onClick={(e) => handleSubmit(e)}>Suscribirse</botton>
                    </div>
                );
              })}
              <h1>hola</h1>
        </div>
    )

}