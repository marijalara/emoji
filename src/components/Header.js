import React from "react";

const Header=() => {
    return(
        <div className="header">
            <img 
                className="left-img"
                src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                alt=""
                width="32"
                height="32"
            />
            Emoji Search
            <img 
                className="right-img"
                src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                alt=""
                width="32"
                height="32"
            />
        </div>
        
    )
}

export default Header