import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Mon from "../img/Mon.png";
import { AiFillStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import Rasp from "../img/Rasp.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import "../css/Spiska.css";
import "../css/Calibig.css";
import WWW from "../img/WWW.png";
import axios from "axios";
import url from "./Host";
import Loader from './loader'
export default function Searchfilter() {
  const [kursdata, setKursdata] = useState([]);
  const [type, settype] = useState([]);
  const [state1, setState1] = React.useState();
  const [loader,setLoader] = useState(1)

  function Filter() {
    var a=document.querySelector(".filter_button").style.display
    if (a==="none") {
      document.querySelector(".filter_button").style="display:block "
    }else{
      document.querySelector(".filter_button").style="display:none "
    }
  }
  function filter1() {
    document.querySelector(".filter_button").style="display:none !important"
  }
  function windowModal() {
    document.querySelector(".kurs_cards").style = "display:flex;transition:3s";
    document.querySelector(".spiska_img_title_div").style = "display:none";
  }
  // function menuModal() {
  //   document.querySelector(".kurs_cards").style = "display:none";
  //   document.querySelector(".spiska_img_title_div").style =
  //     "display:block;transition:3s";
  // }

  useEffect(() => {
    document.querySelector(".filter_button").style="display:none"
    axios
      .get(`${url}/course/main/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } })
      .then((res) => {
        setKursdata(res.data);
        axios
          .get(`${url}/course/type/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } })
          .then((res) => {
            setLoader(1)
            settype(res.data);
          });
      });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    
  }, []);
  function filter (id) {
    axios
    .get(`${url}/course/main/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } })
    .then((res) => {
      const search = res.data.filter(item=>item.course_type===id)
      setKursdata(search)
    });
  }
  const searchInput = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios.get(`${url}/course/main/`,{ headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res=>{
      const searchdata = res.data.filter((item) => {
        return (
          searchRegex.test(item.name) 
        );
      })
      setKursdata(searchdata)
    })
  }
  return (
    <>
    {loader===1?(
      <div>
      {state1 === "en" ? (
      <div>
        <div className="Filter">
          <div className="blur_blok">
            <div className="inp_blok">
              <input onChange={searchInput} id="search" type="text" placeholder="Search among my courses" />
              <CiSearch className="search" />
            </div>
            <div className="blur">
              <div className="icon_blok">
                <div
                  className="sel_blok"
                  onClick={() => {
                    Filter();
                  }}
                >
                  <BiMenu className="menyu" />
                  <h4>Filter</h4>
                </div>
                {/* <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div> */}
              </div>
              <div onMouseLeave={()=>filter1()}  className="filter_button">


                      {type.map((item2) => {
                          return (
                            <div className="button_filter_kurs">
                              {item2.name===null?(""):(<div onClick={()=>filter(item2.id)} className="div_kurs">{item2.name}</div>)}
                            </div>
                          );
                      })}
                
              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards">
          {kursdata.map((item) => {
            return (
              <div onClick={()=>{window.location="/video";localStorage.setItem("course", item.id)}}  className="kurs_card">
                <button className="btn_das">Programming</button>
                {item.image === null ? (
                  <div className="No_img">
                    <h1>No picture</h1>
                  </div>
                ) : (
                  <img src={item.image} />
                )}
                <div className="kurs_paddaing_auto">
                  <h4>{item.name}</h4>
                  <div className="star_card">
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_ib">
                      <AiFillStar />
                    </i>
                    <p>
                      4.1 <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Course size</p>
                      {item.planned_time}
                    </h5>
                    <h5>
                      <p>Course price</p>
                      {item.price}
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight
                    onClick={() => {
                      window.location = "/video";
                      localStorage.setItem("course", item.id)
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* SPISKA */}

        {/* <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div onClick={()=>{window.location="/video";localStorage.setItem("course",item.id)}} className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>No picture</h1>
                        </div>
                      ) : (
                        <img src={item.image} alt="No img" />
                      )}
                    </div>
                    <div className="spiska_title_df">
                      <div className="spiska_title">
                        <h3>{item.name}</h3>
                        <div className="star_icon_blok1">
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar />
                          <div className="number">
                            <h6>4.1 (524)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="left1_icon">
                        <HiArrowRight onClick={()=>{window.location="/video";localStorage.setItem("course",item.id)}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>) : (
      <div>
        <div className="Filter">
          <div className="blur_blok">
            <div className="inp_blok">
              <input onChange={searchInput} id="search" type="text" placeholder="Поиск среди моих курсов" />
              <CiSearch className="search" />
            </div>
            <div className="blur">
              <div className="icon_blok">
                <div
                  className="sel_blok"
                  onClick={() => {
                    Filter();
                  }}
                >
                  <BiMenu className="menyu" />
                  <h4>Фильтр</h4>
                </div>
                {/* <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div> */}
              </div>
              <div onMouseLeave={()=>filter1()} className="filter_button">
                      {type.map((item2) => {
                          return (
                            <div className="button_filter_kurs">
                            {item2.name===null?(""):(<div onClick={()=>filter(item2.id)} className="div_kurs">{item2.name}</div>)}  
                            </div>
                          );
                      })}
              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards">
          {kursdata.map((item) => {
            return (
              <div onClick={() => {
                window.location = "/video";
                localStorage.setItem("course", item.id)
              }} className="kurs_card">
                <button style={{width:'auto',paddingLeft:'5px',paddingRight:'5px' }} className="btn_das">Программирование</button>
                {item.image === null ? (
                  <div className="No_img">
                    <h1>Нет изображение</h1>
                  </div>
                ) : (
                  <img src={item.image} />
                )}
                <div className="kurs_paddaing_auto">
                  <h4>{item.name}</h4>
                  <div className="star_card">
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_ib">
                      <AiFillStar />
                    </i>
                    <p>
                      4.1 <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Размер курса</p>
                      {item.planned_time}
                    </h5>
                    <h5>
                      <p>Стоимость курса</p>
                      {item.price}
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight
                    onClick={() => {
                      window.location = "/video";
                      localStorage.setItem("course", item.id)
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* SPISKA */}

        {/* <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div onClick={()=>{window.location="/video";localStorage.setItem("course",item.id)}} className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>Нет изображение</h1>
                        </div>
                      ) : (
                        <img src={item.image} alt="No img" />
                      )}
                    </div>
                    <div className="spiska_title_df">
                      <div  className="spiska_title">
                        <h3>{item.name}</h3>
                        <div className="star_icon_blok1">
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar />
                          <div className="number">
                            <h6>4.1 (524)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="left1_icon">
                        <HiArrowRight onClick={()=>{window.location="/video";localStorage.setItem("course",item.id)}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>)}

    </div>):(<Loader/>)}
    </>
  );
}
