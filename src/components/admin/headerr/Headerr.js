import RightBlock from "../right-block/RightBlock";
function Headerr() {
  return (
    <>
      <div className="flex justify-between items-center pr-[66px] pl-[32px] bg-[#fff] h-[120px] ">
          <span className="text-[32px] font-[600]">Trang chủ</span>
          <div  className="flex items-center ">
            <img className="bg-[#FFFAF1]" src="./Images/notification-icon.svg" alt=""/>
            <div className="ml-[26px]">
              <div className="flex text-[16px] font-[500]">John Nathan 
              <img className="" src="./Images/arrow-bt.svg" alt=""/>
              </div>
              <p className="text-[14px] font-[400]">Admin</p>
            </div>
            
          </div>
      </div>
        <div className= " flex bg-[#FAFBFC] m-[2rem]">
          <RightBlock />
        </div>
    </>
  );
}
export default Headerr;
