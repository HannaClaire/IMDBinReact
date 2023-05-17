import { useState } from "react";
import Film from "./Film";




const ListElements = ({films}) => {

    const filmComponents = films.map(film =>  {
        return (
            <Film key = {film.id} filmTitle = {film.name} filmUrl = {film.Url}/>
        )
    })
    
    
    
    return (
            <>
{filmComponents}
            </>
        );
    


}




export default ListElements