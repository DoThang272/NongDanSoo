import LeftMenu from "./left-menu/LeftMenu";
import Headerr from "./headerr/Headerr";
export default function Admin() {
  return (
    <>
      <div className="flex  bg-[#FAFBFC]"> 
        <div className=" bg-[#fff]   w-[20%]">
          <LeftMenu />
        </div>
        <div className=" w-[80%]">
          <Headerr />
        </div>
      </div>
    </>
  );
}
