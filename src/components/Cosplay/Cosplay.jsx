import React from "react";
import { CosplayD } from "./CosplayData";
import { rightSideData, rightSideFooterData } from "./CosplayData";

const Cosplay = () => {
  return (
    // cosplay
    <div className="game-border-grid-show">
      <div className="gameBorder">
        {/* <!-- title --> */}
        <div className="gameTitle">
          <dl>
            <dt>角色扮演</dt>
          </dl>
        </div>
        <div className="role">
          <ul>
            {CosplayD.map((cosp) => {
              const { id, img, gameId, gameNumber } = cosp;
              return (
                <li key={id}>
                  <a href="#">
                    <img src={img} alt="" className="images" />
                  </a>
                  <p>
                    游戏人气：{gameId}
                    <br />
                    游戏状态：<span>{gameNumber}</span>
                  </p>
                  <p className="playBtn">
                    <a href="#">选服</a>
                    <a className="active" href="#">
                      进入游戏
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="advertise-sticker">
        <div className="ad">
          {rightSideData.map((right) => {
            const { id, imgs } = right;
            console.log(imgs);
            return (
              <a key={id} href="#">
                <div>
                  <img src={imgs} alt="" />
                </div>
              </a>
            );
          })}
        </div>
        <div className="gameBorder">
          <div className="gameTitle">
            <dl>
              <dt>游戏视频</dt>
            </dl>
          </div>
          <div className="clear"></div>
          <dl className="gameVideo">
            {rightSideFooterData.map((rightFooter) => {
              const { id, img, text, classes } = rightFooter;
              return (
                <dt key={id} className={`flexData-links ${classes}`}>
                  <a href="#">
                    <img src={img} alt="" />
                  </a>
                  <a href="#">{text}</a>
                </dt>
              );
            })}
          </dl>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default Cosplay;
