function LastestMetting(){
    
    const project1 = {
        project: "./Images/logo-duan.svg",
        group: "Công tác nông vụ xã Nam Định",
        location: "Hà Nội",
        timeMeeting: "8:30",
        mettingType: "Họp đầu kỳ",
        status: "Đã xong"
    }
    const project2 = {
        project: "./Images/logo-duan.svg",
        group: "Công tác nông vụ xã Nam Định",
        location: "Hà Nội",
        timeMeeting: "8:30",
        mettingType: "Họp đầu kỳ",
        status: "Đang họp"
    }
    const project3 = {
        project: "./Images/logo-duan.svg",
        group: "Công tác nông vụ xã Nam Định",
        location: "Hà Nội",
        timeMeeting: "8:30",
        mettingType: "Họp đầu kỳ",
        status: "Chưa họp"
    }
    const project4 = {
        project: "./Images/logo-duan.svg",
        group: "Công tác nông vụ xã Nam Định",
        location: "Hà Nội",
        timeMeeting: "8:30",
        mettingType: "Họp đầu kỳ",
        status: "Đã xong"
    }
    function TableLastingMeeting(props){
        
        const {project , group , location, timeMeeting , mettingType , status} = props
        const getColorStatus = () =>{
            if(props.status === "Đã xong") {
                return "bg-color-status-metting1";
            }if(props.status === "Đang họp"){
                return "bg-color-status-metting2";
            }if(props.status === "Chưa họp"){
                return "bg-color-status-metting3";
            }
        }
        const getColorStatusHour = () =>{
            if(props.status === "Đã xong") {
                return "text-color-status-metting1";
            }if(props.status === "Đang họp"){
                return "text-color-status-metting2";
            }if(props.status === "Chưa họp"){
                return "text-color-status-metting3";
            }
        }
        console.log(`THĂNGSSSS ${getColorStatusHour()}  sfsfsdfsdfds`);
        return(
            <>
                           
                <tr className="">
                    <td>
                        <img className='py-[0.6rem] w-[2.5rem]' src={project} alt=""/>
                    </td>
                    <td className="text-left font-[500] text-color-text-bold font-lato text-[14px]">{group}</td>
                    <td className="text-left font-[500] text-color-text-bold font-lato text-[14px]">{location}</td>
                    
                    <div className="py-[1rem] ">
                    <td  className={` px-[0.6rem] rounded-[4px] text-left font-[500] ${getColorStatus()} font-lato text-[14px]`}>{timeMeeting}</td>
                        
                    </div>
                    <td className="text-left pl-[1rem] font-[500] text-color-text-bold font-lato text-[14px]">{mettingType}</td>
                    <td className={`text-left font-lato text-[14px] font-[500] ${getColorStatusHour()}`}>{status}</td>
                </tr>
                    
            </>
        )
    }


    return(
        <>
            <div className="font-popi text-colors-text-title text-[19px] pl-[25px] pt-[19px] font-[600]  ">
                Cuộc họp mới nhất
            </div>
            
            <div className="bg-[#F9F7F4] rounded-[10px] pt-[11px] pl-[25px] m-[15px]">
                
                <div>
                <thead className="">
                        <tr className=''>
                            <th className="pr-[1rem] text-left font-[500] text-color-text-thin font-lato text-[12px]">Dự án</th>
                            <th className="w-[320px] pl-[1rem] text-left font-[500] text-color-text-thin font-lato text-[12px]">Nhóm</th>
                            <th className="w-[180px]  text-left font-[500] text-color-text-thin font-lato text-[12px]">Địa điểm</th>
                            <th></th>
                            <th className="w-[150px] pl-[1rem] text-left font-[500] text-color-text-thin font-lato text-[12px]">Các loại cuộc họp</th>
                            <th className="text-left font-[500] text-color-text-thin font-lato text-[12px]">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableLastingMeeting {...project1}/>
                        <TableLastingMeeting {...project2}/>
                        <TableLastingMeeting {...project3}/>
                        <TableLastingMeeting {...project4}/>
                        
                    </tbody>
                </div>
            </div>
            <div className="flex justify-end pb-[12px] pr-[26px] font-[500] text-[13px] text-[#435CE1]">
                xem thêm
            </div>
        </>
    )
}
export default LastestMetting;