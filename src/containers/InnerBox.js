import Hyperlink from "../components/Hyperlink";






const InnerBox = () => {
    return (
        <>
        <div className="inner-box">
            {/* <p>This is my InnerBox</p> */}
            <Hyperlink/> 
                <a href='https://www.imdb.com/calendar/?region=gb' className="centered-link"> View More Upcoming Releases! </a>
        </div>
        </>
    );
}






export default InnerBox