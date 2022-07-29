import React,{useEffect, useState,} from 'react';
import Navbar from '../components/Navbar';
import {  useSelector } from 'react-redux';
import { getText } from '../Redux/actions/actions';





const Home = () => {




const {texts: textos}= useSelector((state) => state);

/* localStorage.setItem('key', JSON.stringify(textos));
localStorage.getItem('key',JSON.stringify(textos));
localStorage.key = JSON.stringify({textos}) */

    return (

     


        <>
           <Navbar/>
       <div className="center">
<h2>Results:</h2>
<div class="container text-center">
  <div class="row">
  
    <div class="row">
    <div class="col-md-6 offset-md-3">
    <div className="mb-3">
  <h1>{textos.message}</h1>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Third Text"/>
</div>
<div className="mb-3">
  
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Second Text" value={textos} />
</div>
<div className="mb-3">

  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First Text" value={textos} />
</div>

    </div>
  </div>
   
 
  </div>



</div>




        </div>
        </>
    );
}

export default Home;
