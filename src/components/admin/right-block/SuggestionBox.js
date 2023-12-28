export default function SuggestionBox(){
    const kh1 ={
        name: 'Đặng Đình Quân',
        time: '12:35pm 13/12/2023',
        content: 'Vấn đề đăng bài'
    }
    
    function SuggestTable(props){
        const {name, time , content} = props
        return(
            <tbody>
                <tr className="border-y">
                    <td>
                        <p className="text-[13px] font-[500]">{name}</p>
                        <span className="text-[11px] font-[500]">{time}</span>
                        <p className="text-[14px] font-[500]">{content}</p>
                    </td>
                </tr>
                
                
            </tbody>
        )
    }
    
    
    return(
        <div>
            <>
            <div className="text-colors-text-title font-popi text-[19px] pl-[25px] pt-[19px] font-[600] font-[25px]  ">
                Hòm thư góp ý
            </div>
            <div className="font-lato overflow-auto  overflow-y-scroll h-[300px] mb-[14px] pl-[18px] m-[15px]">
                <table className="w-[100%]">
                    <SuggestTable {...kh1}/>
                    <SuggestTable {...kh1}/>
                    <SuggestTable {...kh1}/>
                    <SuggestTable {...kh1}/>
                    <SuggestTable {...kh1}/>
                    <SuggestTable {...kh1}/>
                </table>
            </div>
            <div className="flex justify-end pb-[12px] pr-[26px] font-[500] text-[13px] text-[#435CE1]">
                xem thêm
            </div>
        </>
        </div>
    )
}