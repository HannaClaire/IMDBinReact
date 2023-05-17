import Hyperlink from "../components/Hyperlink";
import Film from "../components/Film";
import ListElements from "../components/ListElements";
import Title from "../components/Title";
import InnerBox from "./InnerBox";
import { useState } from "react";




const OuterBox = () => {

const [films, setFilms] = useState (
    [
        {
            id: 1,
            name: "The Big Lebowski",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            name: "The Breakfast Club",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id:3,
            name:"Nebraska",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id:4,
            name: "The Good, The Bad and the Ugly",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id:5,
            name: "The Lobster",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        }
    ]
)

    return (
        <>
            {/* <p> This is my OuterBox</p> */}
            <Title/>
        
            <ListElements films={films}/>
            <br></br>
            <hr></hr>
            <InnerBox/>
        
        </>
    );
}





export default OuterBox; 