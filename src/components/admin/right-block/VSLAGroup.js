import { React } from "react";
export default function VSLAGroup(){
    const data1 = {
        nameGroup: 'Nhóm số 1',
        organization: 'Tổ chức số 1',
        imageProject: './Images/logo-duan.svg',
        location: 'Hà Nội',
        founding: 'Ngày 13 tháng 12 năm 2023'
    }
    const data2 = {
        nameGroup: 'Nhóm số 2',
        organization: 'Tổ chức số 2',
        imageProject: './Images/logo-duan.svg',
        location: 'Hà Nội',
        founding: 'Ngày 13 tháng 12 năm 2023'
    }
    const data3 = {
        nameGroup: 'Nhóm số 3',
        organization: 'Tổ chức số 3',
        imageProject: './Images/logo-duan.svg',
        location: 'Hà Nội',
        founding: 'Ngày 13 tháng 12 năm 2023'
    }
    const data4 = {
        nameGroup: 'Nhóm số 4',
        organization: 'Tổ chức số 4',
        imageProject: './Images/logo-duan.svg',
        location: 'Hà Nội',
        founding: 'Ngày 13 tháng 12 năm 2023'
    }
    const data5 = {
        nameGroup: 'Nhóm số 5',
        organization: 'Tổ chức số5',
        imageProject: './Images/logo-duan.svg',
        location: 'Hà Nội',
        founding: 'Ngày 13 tháng 12 năm 2023'
    }

    function SimpleTable(props) {
        const {nameGroup , organization ,imageProject, location , founding} = props
        return (
          
              
              <tr className=" border-t-[1px] ">
                <td className="pt-[0.5rem] pl-[1rem]">
                    <span className="text-[13px] font-lato text-color-text-bold flex font-[600]">{props.nameGroup}</span>
                    <span className="text-[10px] font-[400] font-lato text-color-text-thin">{props.organization}</span>
                </td>
                <td>
                    <img className="w-[2.5rem]" src={props.imageProject} alt=""/>
                </td>
                <td className="text-[12px] font-[700]">{props.location}</td>
                <td className="text-[10px] font-[400] ">{props.founding}</td>
              </tr>

        );
    }
    return(
        <>
            <div className="text-[#30266A] font-popi pl-[25px] pt-[19px] font-[600] text-[19px]">
                Nhóm VSLA
            </div>
            <div className="font-lato  mt-[15px]">
                <table className="w-[100%] mb-[18px]">
                    <tr className=" text-[12px] font-[500]">
                        <td className="pr-[92px] pl-[1rem]">Tên nhóm</td>
                        <td className="pr-[90px]">Dự án</td>
                        <td className="pr-[92px]">Địa điểm</td>
                        <td className="float-left">Ngày thành lập</td>
                    </tr>
                    <SimpleTable {...data1}/>
                    <SimpleTable {...data2}/>
                    <SimpleTable {...data3}/>
                    <SimpleTable {...data4}/>
                    <SimpleTable {...data5}/>
                </table>
            </div>
            <div className="flex justify-end pb-[12px] pr-[26px] font-[500] text-[13px] text-[#435CE1]">
                xem thêm
            </div>
        </>
    )
} 