import React, {useState} from 'react';
import PropTypes, {InferProps} from "prop-types";
import styles from "../config/myCSS"
import AppText from "./AppText";
import AppButton from "./AppButton";

CardsDelete.propTypes = {
    id:PropTypes.number,
    name: PropTypes.string,
    addres:PropTypes.string,
    ort:PropTypes.string,
    image :PropTypes.any,
    stars: PropTypes.number
}


let friendsDatenArray: InferProps<typeof CardsDelete.propTypes>[]= [{id:1,name: "Christoph Kohlweg",
    addres:"Arnethgasse17",
    ort:"Graz", image: "https://picsum.photos/id/237/200/300", stars:0},

    {id:2,name: "Christoph Kohlweg",
        addres:"Arnethgasse17",
        ort:"Graz", image: "https://picsum.photos/id/237/200/300", stars:0},
    {id:3,name: "Christoph Kohlweg",
        addres:"Arnethgasse17",
        ort:"Graz", image: "https://picsum.photos/id/237/200/300",stars:0}];
function CardsDelete() {
    var [anzahlClicks, setAnzahlClicks] = useState(0)
    const [items, setItems] = useState(friendsDatenArray);
    const onPress = (cardId:number) => {
        console.log(cardId);
        //friendsDatenArray[cardId].stars! += 1;
        const updatedItems = friendsDatenArray.filter(item=> {
            if (item.id !== cardId)
            { return item;
            }
            return null;
        });

        friendsDatenArray=updatedItems;
        console.log(friendsDatenArray.length);
        //setAnzahlClicks(prevState => prevState+1);


        setItems(updatedItems);
    }
    return (
        <>
            {friendsDatenArray.map((item)=> {
                return (
                    <div key={item.id} className="card" style={styles.cardlx}>
                        <img  src={item.image} className="card-img-top"  alt="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{`Der Cardsbesitzer wohnt in ${item.ort}
                                 an der Adresse ${item.addres}`}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <AppText text={item.stars!.toString()}/>
                            <AppButton onPress={() => {
                                onPress(item.id!)}}/>
                        </div>
                    </div>
                )
            })}

        </>
    );
}

export default CardsDelete;