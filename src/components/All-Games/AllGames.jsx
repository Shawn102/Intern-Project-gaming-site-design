import React from "react";
import { showGames, NewsAnnouncementData } from "./GamesData";

export const AllGames = () => {
//   console.log(showGames);
  return (
    // All games
    <div className="game-border-grid-show">
      <div className="gameBorder">
        {/* <!-- title --> */}
        <div className="gameTitle">
          <dl>
            <dt>全部游戏</dt>
            <dd>
              <a href="#">战争策略</a>
            </dd>
            <dd>|</dd>
            <dd>
              <a href="#">体育经营</a>
            </dd>
            <dd>|</dd>
            <dd>
              <a href="#">社交游戏</a>
            </dd>
          </dl>
        </div>
        {/*  games  */}
        <div className="allGame">
          <div className="dis-game-grid">
            {showGames.map((myGames) => {
              const { id, img, des, gameName, gameId, classNAME } = myGames;
              return (
                <div key={id} className="game-div">
                  <div className="img">
                    <a href="#">
                      <img src={img} alt="game-pic" className="images"/>
                    </a>
                  </div>
                  <div className="list">
                    <p>{des}</p>
                    <p>类型：{gameName}</p>
                    <p>
                      游戏人气：<span className={classNAME}>{gameId}</span>
                    </p>
                    <p className="playBtn">
                      <a href="#">选服</a>
                      <a className="active" href="#">
                        进入游戏
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="gameBorder">
        <div className="gameTitle">
          <dl>
            <dt>新闻公告</dt>
          </dl>
        </div>
        <ul className="news">
          {NewsAnnouncementData.map((newsAnnounce) => {
            const { id, text, classN } = newsAnnounce;
            return (
              <li key={id} className={classN}>
                <a href="#">{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
