import { AiOutlineCheckCircle } from "react-icons/ai";

const Features = ({feature}) => {
    return (
        <div>
           <p className="flex items-center text-md text-left">
            <AiOutlineCheckCircle className="text-black mr-2"></AiOutlineCheckCircle>{feature} 
           </p>
        
        </div>
    );
};

export default Features;