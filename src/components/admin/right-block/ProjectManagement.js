export default function ProjectManagement(){
    
    const xaMT = {
        logo: './Images/logo-duan.svg',
        nameProject: 'Canh tác nông nghiệp Thị xã Minh Thuận',
        status: 'Đã xong',
    }
    const nuoiGiaSuc = {
        logo: './Images/logo-duan.svg',
        nameProject: 'Nuôi gia súc',
        status: 'Đã xong',
    }
    const phatTrienCT = {
        logo: './Images/logo-duan.svg',
        nameProject: 'Phát triển canh tác',
        status: 'Đã xong',
    }
    const apDungCN = {
        logo: './Images/logo-duan.svg',
        nameProject: 'Áp dụng công nghiệp',
        status: 'Đã xong',
    }
    const apDungCN2 = {
        logo: './Images/logo-duan.svg',
        nameProject: 'Áp dụng công nghiệp',
        status: 'Đã xong',
    }
    function ProjectTable(props){
        const {logo, nameProject , status}  = props
        
        return(
            <tbody>
              
              <tr className="border-y">
                <td className="">
                    <img className="w-[40px] ml-[15px]" src={props.logo} alt=""/>
                </td>
                <td className="text-[14px] py-[25px] font-[400]">{props.nameProject}</td>
                <td>
                    {/* <button className="rounded-[8px] w-[78px]  h-[38px] border-[#0095ff] border bg-[#F0F9FF]" type="">
                        <p className=" ">{props.status}</p>
                    </button> */}
                </td>
              </tr>
            </tbody>
        )
    }
     
    
    return(
        <div>
            <>
            <div className="text-[#30266A] font-popi pl-[20px] pt-[19px] font-[600]  mb-[15px] text-[19px]">
                Quản trị dự án
            </div>

            <div className="">
                <table className="w-[100%]">
                <tr className=" border-none text-[13px] font-[700] text-[#96A5B8]">
                <td></td>
                <td >Tên dự án</td>
                <td >Trạng thái</td>
                </tr>
                <ProjectTable {...xaMT}/>
                <ProjectTable {...nuoiGiaSuc}/>
                <ProjectTable {...phatTrienCT}/>
                <ProjectTable {...apDungCN}/>
                <ProjectTable {...apDungCN2}/>
                </table>
            </div>
            <div className="flex justify-end pb-[12px] pr-[26px] font-[500] text-[13px] text-[#435CE1]">
                xem thêm
            </div>
        </>
        </div>
    )
}