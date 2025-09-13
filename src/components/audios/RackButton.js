const RackButton = (props) => {
  return (
    <button className=" w-[100px] h-[75px] rounded-[10px] bg-[#222222] border flex-all-center">
      <img className="size-[30px]" src={props.img} />
    </button>
  );
};

export default RackButton;
