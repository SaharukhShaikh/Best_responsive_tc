import React, { useState } from 'react';
import '../assets/style.css'
import Footer from '../components/Footer';
import loading from '../assets/img/loading.png'
import menu from '../assets/img/menu.png'

export default function Home() {
    const [plus,setPlus]=useState('+')
    const [isPlus,setIsPlus]=useState(true)
    const change=()=>{
        setIsPlus(false)
    }
  return (
    <>
      <h2 class="heading">Create Product or Service</h2>
<section class="seconde">
    <h3>General Info</h3>
    <div class="product name">
        <div class="first">
        <p>Product Name</p>
        <input type="text" placeholder="E.g Website Maintainance,SEO,etc." class="web"/>
        </div>
        <div class="second">
        <p>Product Image(Optional)</p>
        <label for='btn' style={{width:'2vw'}}>+</label>
        <input type='file' id='btn' style={{visibility:'hidden'}}/>
       
        
        {/* {isPlus ? <button class="but" onClick={change}>{plus}</button>:<img src={loading} alt="" style={{width:'3.2vw'}} onClick={()=>setIsPlus(true)}/>} */}
        {/* <button class="but" onClick={change}>{plus}</button> */}
        <p>Upload a square image that doesn't exceed 2MB.</p>
    </div>
    </div>
</section>
    <hr/>
    <section class="seconde">
   <h3>Pricing Plans</h3>
    
        <p class="p">Create Pricing plans for this product/service.Note that every prodcut/service can have multiple plans.</p>
        <div class="pricing">
            <div class="name">
                <p><span>Plan Name</span></p>
                <input type="text" placeholder="E.g Monthly,Lifetime,etc." class="webe"/>
            </div>
            <div class="type">
                <p><span>Billing Type</span></p>
                <div class="buttons">
                    <button class="butt">Recurring</button>
                    <button class="buttt">One Time</button>
                </div>
            </div>
        </div>
        <div class="price">
            <div class="price1">
                <p>Price</p>
                <input type="text" placeholder="0.00     USD" class="ps"/>
            </div>
            <div class="bill">
                <p>Bill Every</p>
                <div class="month">
                    <div class="inner">
                    <input type="text" placeholder="1" class="webx"/>
                    <form action="">
                        <select name="Month(s)">
                            <option value="Month(s)">Month(s)</option>
                            <option value="Januray">Januray</option>
                            <option value="Feburary">Feburary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="billing">
            <p>No. of Billing Cycle(optional)</p>
            <input type="text" placeholder="E.g 6,12 etc" class="webb"/>
            <p>Leave this empty to auto-renew this plan until canceled</p>
            <button class="buts">+ Add Another Plan</button>
        </div>
        </section>
       <Footer/>
       
    </>
  )
}
