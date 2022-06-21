import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('HALP');
    // }

    const cardsArray = robots.map((user, i) => {
        return (<Card 
            key={i} 
            id={robots[i].id} // we could also use user.id etc.
            name={robots[i].name} 
            email={robots[i].email}
            />
        );
    });
    return (
        <div>
            { cardsArray }
        </div>
    );
}

export default CardList;