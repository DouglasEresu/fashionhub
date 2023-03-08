/*eslint-disable*/
import React, { useState } from 'react'
import { db } from '../../config/firebaseConfig';
import {collection, addDoc} from "firebase/firestore";
import { useSelector } from 'react-redux';
import  styles from '../../styles/CheckoutForm.module.css'
import { useRouter } from "next/router";

const CheckoutForm = () => {
    const cart = useSelector((state) => state.cart);
    const router = useRouter();
    const orderCollectionRef = collection(db, "order");

  const[newName, setNewName] =useState("");
  const[newEmail, setNewEmail] =useState("");
  const[newPhone, setNewPhone] =useState("");
  const[newCity, setNewCity] =useState("");
  const[newAddress, setAddress] =useState("");

   const createOrder =async () =>{

    {cart.map(async(item) =>(

     await addDoc(orderCollectionRef,{item, name: newName, email: newEmail, phone:newPhone, city:newCity, address:newAddress})
    ))
  }
      
  }

  function validateForm(event){ 
    event.preventDefault();
      if(styles.input == ""){
      alert('Please fill all fields.');
      return false;
    }
    else{
      typeof window !== "undefined" && router.push("/shop");
      alert(`${newName} your delivery will be made in 2 days. Payment will be made on delivery. Thank you for shopping with Fashion Hub.`);
    }
  }
  
  
  return (
    <div className={styles.body}>
      <b><h3>For deliveries around Kampala</h3></b>
        <h2>Address Details</h2>
      <form onSubmit={validateForm}>
        <label className={styles.label}>Name:</label>
      <input className={styles.input} type="text"  required min="3" max="15" onChange={(event)=>{setNewName(event.target.value);}}/>
      
      <label  className={styles.label}>Email:</label>
      <input className={styles.input} type="email" required onChange={(event)=>{setNewEmail(event.target.value);}}/>
      <br></br><br></br>
      <label  className={styles.label}>Contact:</label>
      <input className={styles.input} type="number" required min={10}  onChange={(event)=>{setNewPhone(event.target.value);}}/>
      
      <label  className={styles.label}>city:</label>
      <input className={styles.input} type="text" required onChange={(event)=>{setNewCity(event.target.value);}}/>
      <br></br><br></br>
      <label  className={styles.label}>Address:</label>
      <input className={styles.input} type="text" required onChange={(event)=>{setAddress(event.target.value);}}/>
      <br></br><br></br>
      <button type='submit' onClick={createOrder}>Create order</button>
      </form>
    </div>
  )
}

export default CheckoutForm
