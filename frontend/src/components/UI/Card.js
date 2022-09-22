const Card = (props) => {
  return (
    <div className="p-4 border rounded-xl bg-white shadow-[#00000040] ease-in-out duration-300 hover:mt-[-20px]">
      {props.children}
    </div>
  );
};

export default Card;
