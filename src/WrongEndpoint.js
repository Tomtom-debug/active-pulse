import { Link } from "react-router-dom"

const WrongEndpoint = () => {
    return (  
        <div className="wrong-endpoint">
            <h2>Sorry</h2>
            <p>page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}
 
export default WrongEndpoint;