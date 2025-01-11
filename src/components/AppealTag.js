

const AppealTag = (items) => {

    return (
        <div className="min-w-[350px] min-h-[150px] flex flex-col items-center">
            <div className="flex justify-center items-center space-x-[20px]">
                <p className="string-rg">{items.index}.</p>
                <p className="string-sm">{items.title}</p>
            </div>
            <p className="string-ss space-y-[10px]">
                {items.text}
            </p>

            <div className="w-full border-b-white border-b-solid border-b-[1px] mt-[30px]"></div>
        </div>

    )
}

export default AppealTag;