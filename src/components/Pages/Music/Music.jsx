import classes from "./Music.module.css";
import React from "react";

const Music = () => {
  return (
    <div className={classes.music__container}>
      <div className={classes.player__container}>
        <div className={classes.song__control}>
          <button className={classes.previous}></button>
          <button className={classes.play}></button>
          <button className={classes.next}></button>
        </div>
        <div className={classes.included__song}>
          <div className={classes.cover__img}>
            <div className={classes.song__img_none}></div>
          </div>
          <div className={classes.track__length__container}>
            <div className={classes.track__info}>
              <div className={classes.song__body}>
                <div className={classes.song__trackName}>Track name</div>
                <div className={classes.song__executor}>Executor</div>
              </div>
              <div className={classes.song__time_first}>4:08</div>
            </div>
            <div className={classes.track__length}></div>
          </div>
        </div>
        <div className={classes.volume}>
          <div className={classes.volume__img}></div>
          <div className={classes.volume__level}></div>
        </div>
      </div>

      {/* <div className={classes.music__title}>Music</div> */}
      <div className={classes.music__search__container}>
        <input type="text" placeholder="Search music" />
        <button type="button">
          {/* <img 
            src="https://img.icons8.com/?size=100&id=dmmKDmS3gJGy&format=png&color=E1E3E6"
            alt=""
           />
           */}
        </button>
      </div>
      <div className={classes.music__title}>My music</div>
      <div className={classes.myMusic__container}>
        <div className={classes.song}>
          <div className={classes.song__img}>
            {/* <img src="#" alt="" /> */}
          </div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like + " " + classes.active}></div>
          </div>
        </div>
        <div className={classes.song}>
          <div className={classes.song__img}>
            {/* <img src="#" alt="" /> */}
          </div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like}></div>
          </div>
        </div>
        <div className={classes.song}>
          <div className={classes.song__img}>
            {/* <img src="#" alt="" /> */}
          </div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like + " " + classes.active}></div>
          </div>
        </div>
        <div className={classes.song}>
          <div className={classes.song__img}></div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like}></div>
          </div>
        </div>
        <div className={classes.song}>
          <div className={classes.song__img}>
            {/* <img src="#" alt="" /> */}
          </div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like}></div>
          </div>
        </div>
        <div className={classes.song}>
          <div className={classes.song__img}>
            {/* <img src="#" alt="" /> */}
          </div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like + " " + classes.active}></div>
          </div>
        </div>
        <div className={classes.song}>
          <div className={classes.song__img}></div>
          <div className={classes.song__body}>
            <div className={classes.song__trackName}>Track name</div>
            <div className={classes.song__executor}>Executor</div>
          </div>
          <div className={classes.song__time}>4:08</div>
          <div className={classes.likes}>
            <div className={classes.like}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
