"use client";
import React, { useEffect } from "react";

import "../css/Contacts.css";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [state, setstate] = React.useState();
const dataPost=()=>{
  var postdata={
    fullname:document.querySelectorAll('.contact_inp')[0].value,
    email:document.querySelectorAll('.contact_inp')[1].value,
    phone_number:document.querySelectorAll('.contact_inp')[2].value,
    message:document.querySelector('.contact_textarea').value
  }
  axios.post("http://127.0.0.1:8000/auth/user_connect_with/",postdata).then(res=>{
state==="ru"?(alert("Информация отправлена, дождитесь звонка оператора")):(alert("Information sent, wait for a call from the operator"))
window.location.reload()
  }).catch(err=>{
    state==="ru"?(alert("Проверить информацию,Не удалось отправить")):(alert("Check information, Failed to send"))
  })
}
  useEffect(() => {
    setstate(localStorage.getItem("lang"));
  }, []);
  return (
    <div className="contactss">
      
      <Navbar />
      <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Contacts</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="/">{state === "ru" ?("Главный"):("Home")}  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>{state === "ru" ?("Связь"):("Contact")}</p>
</div>
</div>
</div>
      <div className="contact">
        <div className="contact_left">
          <h1 onClick={()=> window.location="/contacts"}> 
            {state === "ru" ? "Связаться с нами" : "Connect with us"}
          </h1>
          <p className="contact_info">
            {state === "ru"
              ? (<div>Как я могу связаться с вами? <br /><br />По номеру <a className="contact_tel" href="tel: +7 032 11 12">
              (+7) <span> 032 11 12</span>
            </a>  или же оставить сообщение и наши операторы с вами свяжутся в кратчайшее время. </div>)
              : (<div>How can I contact you? <br /><br /><a className="contact_tel" href="tel: +7 032 11 12">
            (+7) <span> 032 11 12</span>
          </a>call or leave a message and our operators will contact you as soon as possible.</div>)}
          </p>
          <p className="contact_address">
            {state === "ru"
              ? " Мирабадский район,Малая кольцевая дорога, Россия, 100015"
              : "Mirabad District, Small Ring Road, Russia 100015"}
          </p>
          
          <div className="email_box">
            <MdEmail className="email_icon" />
            <a href="mailto: garvird@gmail.com">
              garvird@gmail.com
            </a>
          </div>
          <div className="feat_left contact_icons">
            
            <a href="#" className="iconBox ">
              <FaFacebookF className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaTwitter className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaInstagram className="icon icon4" />
            </a>
          </div>
        </div>
        <div className="contact_right">
          <div className="inputs_top">
            <input
              type="text"
              className="contact_inp"
              placeholder={state === "ru" ? "Имя*" : "Name*"}
            />
            <input
              type="text"
              className="contact_inp"
              placeholder={
                state === "ru" ? "Электронная почта*" : "Email*"
              }
            />
            <input
              type="text"
              className="contact_inp"
              placeholder={state === "ru" ? "Телефон*" : "Telephone*"}
            />
          </div>
          <textarea
            rows={10}
            placeholder={state === "ru" ? "Сообщение*" : "Message*"}
            className="contact_textarea"
          ></textarea>
          <div className="inputs_bottom">
            <button onClick={()=>{dataPost()}} className="contact_btn">
              {state === "ru" ? "отправить" : "send"}
            </button>
          </div>
        </div>
      </div>
      
      <Footer1 />
    </div>
  );
}
