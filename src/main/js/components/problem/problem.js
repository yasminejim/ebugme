import { useLocalStorage } from "../../utils/useLocalStorage";
import { useState }from "react";

const Problem = (props) => {

    // Storing the item checked state in local storage using a string literal for the key
    const [itemChecked, setItemChecked] = useLocalStorage(
        `${props.index}-radio`,
        false
    );

    const [isOpen, setIsOpen] = useState(false);

    // function to update the state value once an input changes
    const completedChallenge = (e) => {
        setItemChecked(!itemChecked);
        console.log("done");
        e.setAttribute("disabled", "true");
    };

    return (
        <div className="popup__challenge__container">
        <div className="popup__challenge" >
            <span className="popup__accordion" onClick={()=> setIsOpen(!isOpen)}>{isOpen ? "-": "+"}
            <label htmlFor="popup__challenge__label">{props.problem}</label>
            </span>
           
            <div>
            <input
                className="popup__challenge__checkbox"
                type="checkbox"
                checked={itemChecked}
                onChange={completedChallenge}
            />
            <span class="checkmark"></span>
            </div>
        </div>
         {isOpen && <div className="popup__challenge__description">{props.description}</div>}
        </div>
    
    );
};

export default Problem;
