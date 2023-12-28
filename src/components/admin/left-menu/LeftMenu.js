import ListMenu from "./ListMenu";

function LeftMenu(){
    const posts = {
        img: './Images/chat_plus.svg',
        name: "Bai Viet"
    }
    const meetings = {
        img: './Images/chart_light.svg',
        name: "Cuộc họp"
    };
    const groups = {
        img: './Images/group_light.svg',
        name: "Nhóm"
    };
    const projects = {
        img: './Images/attachment.svg',
        name: "Dự án"
    };
    const messeages = {
        img: './Images/message.svg',
        name: "Messages"
    };
    const settings = {
        img: './Images/setting.svg',
        name: "Settings"
    };
    const signout = {
        img: './Images/signout.svg',
        name: "Sign out"
    };


    return(
        <>
            <div className="flex items-center font-semibold  pt-[40px] pl-[36px]">
                <img className="h-[75px] pr-[10px] text-[23px]"  src='./Images/logo.svg' alt="Logo"/>
                <span>Nông Dân Số</span>
                
            </div>
            <button className="mt-[41px] ml-[48px] w-[15.75rem] rounded-[16px] bg-[#F28649]"  type="">
                <div className="flex items-center px-[16px] py-[24px]">
                    <img className="h-[2rem] w-[2rem] " src='./Images/graph1.svg' alt="logo dashbard"/>
                    <span className="pl-[1.5rem] text-[1.12rem] text-white font-[600]">
                        Dashboard
                    </span> 
                </div>
                
            </button>

            <div className="ml-[73px] mt-[48px] ">
                <ListMenu {...posts}/>
                <ListMenu {...meetings}/>
                <ListMenu {...groups}/>
                <ListMenu {...projects}/>
                <ListMenu {...messeages}/>
                <ListMenu {...settings}/>
                <ListMenu {...signout}/>
            </div>
        </>
        
    )
}

export default LeftMenu;

