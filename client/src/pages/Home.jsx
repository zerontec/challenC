import React from 'react';
import Navbar from '../components/Navbar';





const Home = () => {
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
  
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Third Text"/>
</div>
<div className="mb-3">
  
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Second Text"/>
</div>
<div className="mb-3">

  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First Text"/>
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
