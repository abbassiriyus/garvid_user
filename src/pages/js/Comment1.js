import React, { useEffect, useState } from 'react'
import '../css/comment.css'
import {FiCornerUpLeft} from 'react-icons/fi'
import {FcFile} from 'react-icons/fc'
import img_comment from '../img/Ellipse.jpg'
import img_comment1 from '../img/Ellipse.png'
import axios from 'axios'
import url from './Host'


export default function Comment1() {
  const [comment,setComment]=useState([])
  const [state1, setState1] = React.useState();
  const [user,setUser]=useState([])

  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);

  useEffect(()=>{
    axios.get(`${url}/course/theme_comment/`,{headers:{"Authorization":"Bearer " + localStorage.getItem("token")}}).then(res=>{
      axios.get(`${url}/auth/user/`,{headers:{"Authorization":"Bearer " + localStorage.getItem("token")}}).then(res1=>{
      // const filter = res.data.filter(item=>item.user.id==res1.data.id)
      // console.log(filter,"bliman");
      // console.log(res.data,"bilamanzior");
      setComment(res.data)
      })
    })
    axios.get(`${url}/auth/user/`,{headers:{"Authorization":"Bearer " + localStorage.getItem("token")}}).then(res=>{
      setUser(res.data)
    })
  },[])

  function messagePost(){
    var formdata=new FormData()
    formdata.append("text",document.querySelector("#chat_text").value)
    formdata.append("image",document.querySelector("#comment_file").files[0])
    formdata.append("subcomment",document.querySelector("#chat_text").value)
    formdata.append("user",localStorage.getItem("token"))

    axios.post(`${url}/course/theme_comment/`,formdata,{headers:{Authorization:"Bearer " + localStorage.getItem("token")}}).then(res=>{
    alert("yozildi")
    }).catch(err=>{
      alert("ishladddddd")
    })
  }

  return (
    <div>
    {state1==="en"?(<div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">

      {comment.map(item=>{
        return(
          <div className="m_comment">
          <div className="m_comment_img">
              <img src={"https://baisan.onrender.com"+item.user.image} alt="" />
          </div>
          <div className="m_comment_text">
              <h4>{item.user.username}</h4>
              <p>{item.text}</p>
              {/* <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              </div> */}
          </div>
      </div>
        )
      })}



            <div className="m_comment_yozish">
              <input type="file" id='comment_file' />
              <p><FcFile/></p>
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'>Cancel</button>
              <button onClick={()=>messagePost()} className='m_otpravit'>Send</button>
              </div></div>
    </div>):(<div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">
      {comment.map(item=>{
        return(
          <div className="m_comment">
          <div className="m_comment_img">
              <img src={item.image} alt="" />
          </div>
          <div className="m_comment_text">
              <h4>Jonibek Akbarov</h4>
              <p>{item.text}</p>
              {/* <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              </div> */}
          </div>
      </div>
        )
      })}



            <div className="m_comment_yozish">
              <p><FcFile/></p>
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'>Отменить</button>
              <button onClick={()=>messagePost()} className='m_otpravit'>Отправить</button>
              </div></div>
    </div>)}
    </div>
  )
}
