const GrayFunctionButton = (items) => {
  return (
    <div className="bg-[#676767] w-[200px] h-[50px] flex items-center justify-evenly">
      <img src={items.img} className="h-[30px]" />
      <p className="string-sm">{items.label}</p>
    </div>
  );
};

export default GrayFunctionButton;
