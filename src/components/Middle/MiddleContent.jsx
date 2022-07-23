import React from "react";
import adverImg from "../../images/xdtgg_frxz2_44.jpg";
import { MiddleList } from "./MiddleData";
import {FaAngleRight} from 'react-icons/fa';

export const MiddleContent = () => {
  return (
    // Middle content
      <section className="gameLeft">
        {/*  left list  */}
          <div className="gameNav">
            <ul>
              {MiddleList.map((middle) => {
                const { id, icon, text } = middle;
                return (
                  <li key={id}>
                    <a href="#">
                      <img src={icon} alt="" />
                      {text} <span className="span-angle"><FaAngleRight /></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Advertising picture */}
          <div className="gameAdver">
            <a href="#">
              <img src={adverImg} alt="" className="img-advertise"/>
            </a>
            <ul className="code">
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
          </div>
          {/* <!--right content begin--> */}
    <div className="gameRight">
        <div className="gameLogin clear">
            <h1>开心网用户登录</h1>
            <form action="#">
                   <div className="input-div"> 
                   <span>账号:</span>
                   <input name="username" type="text" placeholder="字母、数字的六位字符"  className="input-text" required/>
                   </div>
                        
                   <div className="input-div"> 
                   <span>密码：</span>
                   <input name="pwd" type="password" placeholder="四位数字" className="input-text" required/>
                   </div>
                                                       
                        <div className="login-btn-container">
                        <input className="login" name="login" type="submit" value="" />
                        </div>
                    
                    
                       <div className="form-login">
                       <a href="#">立即注册</a>
                        <a href="#">忘记密码</a>
                       </div>                    
            </form>
        </div>
    </div>
    {/* <!--right content end--> */}

      </section>
  );
};
