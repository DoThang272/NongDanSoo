function InfomationCard(props){
    const {bg , img , count , content , newContent} = props 
    return(
        // <div className={`bg-[${bg}] rounded-[20px]`} >
        <div className={`${bg} rounded-[20px]`} >
            <div className="py-[20px] pl-[15px]">
                <img className="pb-[16px]" src={img} alt=""/>
                <h2 className="text-[24px] pb-[8px] font-[600] ">{count}</h2>
                <p className="pb-[8px] text-[16px]">{content}</p>
                <a href="/">
                    <span className="text-[12px] text-[#4079ED]">{newContent}</span>
                </a>
            </div>
        </div>


    )
}
export default InfomationCard;