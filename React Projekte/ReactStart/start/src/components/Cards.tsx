import React, {useState} from 'react';
import PropTypes, {InferProps} from "prop-types";
import styles from "../config/myCSS"
import AppText from "./AppText";
import AppButton from "./AppButton";

Cards.propTypes = {
    id:PropTypes.number.isRequired,
    name: PropTypes.string,
    addres:PropTypes.string,
    ort:PropTypes.string,
    image :PropTypes.any,
    stars: PropTypes.number
}
interface Iprops {
    id:number;
}

const friendsDatenArray: InferProps<typeof Cards.propTypes>[]= [{id:1,name: "Christoph Kohlweg",
    addres:"Arnethgasse17",
    ort:"Graz", image: "https://picsum.photos/id/237/200/300", stars:0},

    {id:2,name: "Christoph Kohlweg",
    addres:"Arnethgasse17",
    ort:"Graz", image: "https://picsum.photos/id/237/200/300", stars:0},
    {id:3,name: "Christoph Kohlweg",
    addres:"Arnethgasse17",
    ort:"Graz", image: "https://picsum.photos/id/237/200/300",stars:0}];
function Cards() {
    var [anzahlClicks, setAnzahlClicks] = useState(0)
    const [items, setItems] = useState(friendsDatenArray);
    const onPress = (cardId: number) => {
        console.log(cardId);
        //friendsDatenArray[cardId].stars! += 1;
        let updatedItems = friendsDatenArray.map(item => {
            if (item.id === cardId) {
                return {...item, stars: item.stars!++}
            }
            return item;
        })
        //setAnzahlClicks(prevState => prevState+1);

        return (
            <>
                {friendsDatenArray.map((item, index, array) => {
                    return (
                        <div key={item.id} className="card" style={styles.cardlx}>
                            <img src={item.image} className="card-img-top" alt="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{`Der Cardsbesitzer wohnt in ${item.ort}
                                 an der Adresse ${item.addres}`}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                                <AppText text={item.stars!.toString()}/>
                                <AppButton onPress={() => {
                                    onPress(item.id!)
                                }}/>
                            </div>
                        </div>
                    )
                })}

            </>
        );
    }
}


export default Cards;