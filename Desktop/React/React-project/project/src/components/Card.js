import React from "react";
import "../style/scss/main.scss";

const Card =(props)=> {
    

return (

<div className={"Cardmain"}>

   

 <h1 className={"book_time_text"}>Pleace choose a time when you would like to meet us!</h1><br/>
    <ul className={"cards"}>
        <li className={"cards_item"}>
            <div className={"card"}>
                <div className={"card_image"}><img src={props.image} alt={"PICTURE ERROR!"}/></div>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>Full cleaning</h2><br/>
                    <h5>kl16:30 20.05.2020</h5>
                    <p className={"card_text"}>Contrary to popular belief, Lorem Ipsum is not simply random text.<br/> It has roots in a piece of classical Latin literature from 45 BC  </p>
                   
                    
                    <button className={"btn card_btn"}>Take this time!</button>
                </div>
            </div>
        </li>
        <li className={"cards_item"}>
            <div className={"card"}>
                <div className={"card_image"}><img src={props.image} alt={"PICTURE ERROR!"}/></div>
                
                <div className={"card_content"}>
                    <h2 className={"card_title"}>Full cleaning</h2><br/>
                    <h5>kl16:30 20.05.2020</h5>   
                    <p className={"card_text"}>Contrary to popular belief, Lorem Ipsum is not simply random text.<br/> It has roots in a piece of classical Latin literature from 45 BC  </p>
                   
                    
                    <button className={"btn card_btn"}>Take this time!</button>
                </div>
            </div>
        </li>
        <li className={"cards_item"}>
            <div className={"card"}>
                <div className={"card_image"}><img src={props.image} alt={"PICTURE ERROR!"}/></div>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>Full cleaning</h2><br/>
                    <h5>kl16:30 20.05.2020</h5>
                    <p className={"card_text"}>Contrary to popular belief, Lorem Ipsum is not simply random text.<br/> It has roots in a piece of classical Latin literature from 45 BC  </p>
                   
                    
                    <button className={"btn card_btn"}>Take this time!</button>
                </div>
            </div>
        </li>
    </ul>
</div>

    )
}

export default Card;
