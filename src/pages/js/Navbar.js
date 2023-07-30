
import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import axios from "axios";
import url from "./Host";
import { NavLink } from "react-router-dom";

function sa() {
  var o = document.querySelector(".media-ul").style.display;
  if (o == "flex") {
    document.querySelector(".media-ul").style.display = "none";
  } else {
    document.querySelector(".media-ul").style.display = "flex";
  }
  // document.querySelector(".media-ul").style.display="flex";
  document.querySelector(".bar-menu").classList.toggle("la");
  document.querySelector(".wone").classList.toggle("laa");  
  document.querySelector(".wone1").classList.toggle("laa");
  document.querySelector(".wone2").classList.toggle("laa");
}

function about2() {
  document.querySelector(".ichi span").style = "transform: rotate(180deg);";
}

function aboutClose2() {
  document.querySelector(".ichi span").style = "transform: rotate(0deg);";
}
function iconhover() { 
  document.querySelector(".ichi2 span").style="transform: rotate(180deg)"
}
function iconhover1() { 
  document.querySelector(".ichi2 span").style="transform: rotate(0deg)"
}
// meded
function ochil1() {
  document.querySelector(".lll ul").classList.toggle("lllb");
  
}
function meded() {
  document.querySelector(".ffdul ").classList.toggle("fffdull");
}
function menuul() {
  document.querySelector(".div1").style = "display:block";
  document.querySelector(".menu ul").style = "display:block";
  document.querySelector(".menuu  span").style = "transform: rotate(180deg);";
}
function menuufolse() {
  document.querySelector(".menuu  span").style = "transform: rotate(0deg);";
}
function menuul1() {
  document.querySelector(".menu ul").style = "display:none";
  document.querySelector(".div1").style = "display:none important";
}
function menu2ul() {
  document.querySelector(".blog1").style = "display:block";
}
function menu2ul12() {
  document.querySelector(".menu ul").style = "display:block";
  document.querySelector(".blog1").style = "display:block";
}
function menu2leave() {
  document.querySelector(".blog1").style = "display:none ";
}
function menu2leave1() {
  document.querySelector(".blog1").style = "display:none";
  document.querySelector(".menu ul").style = "display:none";
}
export default function Navbar() {
  const [state1, setState1] = React.useState();
  const [state, State] = React.useState(1);
  const [user, setUser] = useState([])
  const activeLink = "";
  const normalLink = ""

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);


  useEffect(() => {

    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    if (localStorage.getItem("lang") !== "ru") {
      document.querySelector("#checkbox").checked = true;
    } else {
      document.querySelector("#checkbox").checked = false;
    }
    if (localStorage.getItem("lang") !== "ru") {
      document.querySelector("#checkbox2").checked = true;
    } else {
      document.querySelector("#checkbox2").checked = false;
    }

    axios.get(`${url}/auth/user/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setUser(res.data)
    });

    
    
  }, []);

  return (
    <div>
      {state1 === "en" ? (
        <div>
          <section onMouseLeave={() => menuul1()} className="navbar">

            <div className="navbar-ul">
              <ul>
                <li className="moto-menu-item">
                  <NavLink to="/" className={({isActive})=>isActive?activeLink: normalLink}><a>Home</a></NavLink>
                </li>


<div className="menu" onMouseLeave={() => menuufolse()}>
                  <div className="menuu" onMouseEnter={() => menuul()}>
                    <p>
                    <NavLink to="/about" className={({isActive})=>isActive?activeLink: normalLink}><a>About us</a></NavLink>
                      <span>
                        <box-icon
                          name="chevron-down"
                          color="#44bef1"
                        ></box-icon>
                      </span>
                    </p>
                    <ul>
                    <li onClick={()=> window.location="#"} id="ded">
                            <a id="contactcolor" href="/">FAQ </a>
                          </li>
                      <div className="navbbar-line-hr"></div>
                      <li onClick={()=> window.location="contacts"} id="ded">
                            <a id="contactcolor" href="/contacts">Contact </a>
                          </li>
                      <div className="navbbar-line-hr"></div>


                      <div
                        className="menu2"

                      >
                        <p  onClick={()=> window.location="#"} id="menu2pp" >
                          {" "}
                          <a  className="zaib">
                            News{" "}
                          </a>{" "}
                        </p>
                        <div className="navbbar-line-hr"></div>

                        <ul

                          className="blog1"
                        >
                          <div className="navbbar-line-hr1"></div>

                       
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>

                <li className="moto-menu-item">
                  {" "}
                  <NavLink to="/servis" className={({isActive})=>isActive?activeLink: normalLink}><a>Services</a>{" "}</NavLink>
                </li>
                <li className="moto-menu-item">
                <NavLink to="/blog" className={({isActive})=>isActive?activeLink: normalLink}><a>Blog</a>{" "}</NavLink>
                </li>
                <li className="moto-menu-item">
                <NavLink to="/ourteam" className={({isActive})=>isActive?activeLink: normalLink}><a>Our team</a>{" "}</NavLink>
                </li>
                <li className="moto-menu-item">
                <NavLink to="/contacts" className={({isActive})=>isActive?activeLink: normalLink}><a>Contacts</a>{" "}</NavLink>
                </li>


                <li className="moto-menu-item">
                  {localStorage.getItem("token") ? (<a href="/user">{user.username}</a>) : (<a href="/login">Log in</a>)}
                </li>
              </ul>
              <div id="google_translate_element"></div>
            </div>
            <div className="media-navbar" style={{margin:"auto",width:'100%'}}>
              <div style={{width:'100%'}} className="navbar-menu">
                <div className="navbar-mediao-barr" onClick={() => sa()}>
                  <div className="bar-menu" id="sa">
                    <div className="wone"></div>
                    <div className="wone1"></div>
                    <div className="wone2"></div>
                  </div>
                </div>


{/* onMouseLeave={()=>aboutClose2()}  */}
                <div  className="media-ul">
                  <div className="dfdf">
                    <ul>
                      <li onClick={()=> window.location="/"}>
                        <a href="/" className="tt">
                          Home
                        </a>
                      </li>
                      <div
                        className="media-kategory"
                        onMouseLeave={() => aboutClose2()}
                      >
                        <div
                          className="ichi"
                          onMouseEnter={() => about2()}
                          onClick={() => meded()}
                        >
                          <li onClick={()=> window.location="/about"}>
                            <a href="/" className="tt">
                              About Us
                            </a>
                          </li>{" "}
                          <span id="sdfdsfsd">
                            <box-icon
                              name="chevron-down"
                              color="black"
                            ></box-icon>
                          </span>
                        </div>
                      </div>
                      <div className="ffd">
                        <ul className="ffdul">
                          <div className="ichi2" onMouseEnter={()=> iconhover()} onMouseLeave={()=> iconhover1()} onClick={() => ochil1()}>
                            <li onClick={()=> window.location="/news"} className="ds">
                              <a href="news">News</a>
                            </li>
                            <span>
                              <box-icon
                                name="chevron-down"
                                color="#989da2"
                              ></box-icon>
                            </span>
                          </div>
                          <div className="lll">
                            <ul>
                              <li onClick={()=> window.location="/blog"} className="lll1">
                                <a href="/">Blog</a>
                              </li>
                              <li onClick={()=> window.location="/contacts"} className="lll2">
                                <a href="/">Contacts</a>
                              </li>
                            </ul>
                          </div>

                          <li className="ds">
                            <a href="#">FAQs</a>
                          </li>
                        </ul>
                      </div>
                      <li onClick={()=> window.location="/servis"}>
                        <a href="/" className="tt">
                          Services
                        </a>
                      </li>

                      <li onClick={()=> window.location="/blog"}>
                        <a href="/" className="tt">
                          Blog
                        </a>
                      </li>
                      <li onClick={()=> window.location="/ourteam"}>
                        <a href="/" className="tt">
                          our team
                        </a>
                      </li>
                      <li onClick={()=> window.location="/contacts"}>
                        <a href="/contacts" className="tt">
                          Contacts
                        </a>
                      </li>
                      {/* <li><a href="/teacher" className='tt'>Teacher</a></li> */}
                      <li>
                        {localStorage.getItem("token") ? (<a href="/user" className="tt">{user.username}</a>) : (<a Login href="/login" className="tt">Login</a>)}
                      </li>


<div id="google_translate_element"></div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section onMouseLeave={() => menuul1()} className="navbar">
            <div className="navbar-ul">
              <ul>
                <li className="moto-menu-item">
                  <a href="/">Главный</a>
                </li>

                <div className="menu" onMouseLeave={() => menuufolse()}>
                  <div className="menuu" onMouseEnter={() => menuul()}>
                    <p>
                      <a href="/about">О нас</a>
                      <span>
                        <box-icon
                          name="chevron-down"
                          color="#44bef1"
                        ></box-icon>
                      </span>
                    </p>
                    <ul onMouseLeave={() => menuul1()}>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <div className="navbbar-line-hr"></div>

                      <div className="menu2">
                        <p onClick={()=> window.location="/news"}
                          onMouseEnter={() => menu2ul()}
                          onMouseLeave={() => menu2leave()}
                        >
                          {" "}
                          <a href="/news" className="zaib">
                            Новости{" "}
                            <span>
                              <box-icon
                                name="chevron-right"
                                color="#44bef1"
                              ></box-icon>
                            </span>
                          </a>{" "}
                        </p>
                        <div className="navbbar-line-hr"></div>

                        <ul
                          onMouseEnter={() => menu2ul()}
                          onMouseLeave={() => menu2leave1()}
                          className="blog1"
                        >
                          <div className="navbbar-line-hr1"></div>

                          <li id="ded">
                            <a id="contactcolor" href="/contacts">
                              {state1 === "en" ? "Contact1" : "Связь"}{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>


<li className="moto-menu-item">
                  {" "}
                  <a href="/servis">Услуги</a>{" "}
                </li>
                <li className="moto-menu-item">
                  <a href="/blog">Блог</a>
                </li>
                <li className="moto-menu-item">
                  <a href="/ourteam">Наша команда</a>
                </li>
                <li className="moto-menu-item">
                  <a href="/contacts">Связь</a>
                </li>
                {/* <li className='moto-menu-item'><a href="/teacher" >Учитель</a></li> */}
                <li className="moto-menu-item">
                  {localStorage.getItem("token") ? (<a href="/user">{user.username}</a>) : (<a href="/login">Регистрация</a>)}
                </li>
              </ul>
              <div class="checkbox-con" >
                <input
                  id="checkbox"
                  onClick={() => {
                    !document.querySelector("#checkbox").checked
                      ? localStorage.setItem("lang", "ru")
                      : localStorage.setItem("lang", "en");
                    window.location.reload();
                  }}
                  type="checkbox"
                />
              </div>
            </div>
            <div className="media-navbar" style={{margin:"auto",width:'100%'}}>
              <div style={{width:'100%'}} className="navbar-menu">
                <div className="navbar-mediao-barr" onClick={() => sa()}>
                  <div className="bar-menu" id="sa">
                    <div className="wone"></div>
                    <div className="wone1"></div>
                    <div className="wone2"></div>
                  </div>
                </div>

                {/* onMouseLeave={()=>aboutClose2()}  */}
                <div  className="media-ul">
                  <div className="dfdf">
                    <ul>
                      <li onClick={()=> window.location="/"}>
                        <a href="/" className="tt">
                          Главный
                        </a>
                      </li>
                      <div
                        className="media-kategory"
                        onMouseLeave={() => aboutClose2()}
                      >
                        <div
                          className="ichi"
                          onMouseEnter={() => about2()}
                          onClick={() => meded()}
                        >
                          <li>
                            <a href="/about" className="tt">
                              О нас
                            </a>
                          </li>{" "}
                          <span id="sdfdsfsd">
                            <box-icon
                              name="chevron-down"
                              color="black"
                            ></box-icon>
                          </span>
                        </div>
                      </div>
                      <div className="ffd">
                        <ul className="ffdul">
                          <li className="ds">
                            <a href="#">Архивы</a>
                          </li>


<div className="ichi2" onClick={() => ochil1()}>
                            <li onClick={()=> window.location="/news"} className="ds">
                              <a href="/news">Новости</a>
                            </li>
                            <span>
                              <box-icon
                                name="chevron-down"
                                color="#989da2"
                              ></box-icon>
                            </span>
                          </div>
                          <div className="lll">
                            <ul>
                              <li className="lll1">
                                <a href="/blog">Блог</a>
                              </li>
                              <li className="lll2">
                                <a href="/contacts">Контакты</a>
                              </li>
                            </ul>
                          </div>


                          <li className="ds">
                            <a href="#">FAQs</a>
                          </li>
                        </ul>
                      </div>
                      <li>
                        <a href="/servis" className="tt">
                          Услуги
                        </a>
                      </li>

                      <li>
                        <a href="/blog" className="tt">
                          Блог
                        </a>
                      </li>
                      <li>
                        <a href="/ourteam" className="tt">
                          Наша команда
                        </a>
                      </li>
                      <li>
                        <a href="/contacts" className="tt">
                          Связь
                        </a>
                      </li>
                      {/* <li><a href="/teacher" className='tt'>Учитель</a></li> */}

                      <li>
                        {localStorage.getItem("token") ? (<a href="/user">{user.username}</a>) : (<a href="/login" className="tt">Регистрация</a>)}
                      </li>
                      <div class="checkbox-con" style={{ marginTop: "15px" }}>
                        <input
                          id="checkbox2"
                          onClick={() => {
                            !document.querySelector("#checkbox2").checked
                              ? localStorage.setItem("lang", "ru")
                              : localStorage.setItem("lang", "en");
                            window.location.reload();
                          }}
                          type="checkbox"
                        />
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <div
        className="div1"
        onMouseEnter={() => menu2ul12()}
        onMouseLeave={() => menu2leave1()}
      ></div>
      <div className="navbar-futer-tepaga">
        <a href="#">
          <div className="navbar-tepaga-krug"></div>
        </a>
      </div>
    </div>
  );
}