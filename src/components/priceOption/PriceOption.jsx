import Features from "../features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-300 flex flex-col text-center rounded-md p-4 text-black">
      <h2>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-4">{name}</h4>
     <div className="flex-grow">
     {features.map((feature, index) => (
        <Features feature={feature} key={index}></Features>
      ))}
     </div>
      <button className="btn btn-accent mt-10 w-full p-4">Buy Now</button>
    </div>
  );
};

export default PriceOption;
