import ReportAndMeeting from "./reportandmeeting/ReportAndMeeting.js";
import SuggestionBox from "./SuggestionBox.js";
import VSLAGroup from "./VSLAGroup.js";
import PercentageOfUserByProject from './PercentageOfUserByProject.js';
import ProjectManagement from './ProjectManagement.js'
import LastestMetting from "./LastestMeeting.js";

function RightBlock() {
  return (
    <>
      <div className="w-[70%] ">
        <div className=" rounded-[20px] bg-[#fff] mb-[20px] mr-[15px] h-[348px]">
          <ReportAndMeeting />
        </div>
        <div className=" rounded-[20px] bg-[#fff] mb-[20px] mr-[15px] h-[365px]">
          <LastestMetting />
        </div>

        <div className="flex mb-[16px] mr-[15px]  h-[397px]">
          <div className="rounded-[20px] bg-[#fff] mr-[12px] w-[66%]">
            <VSLAGroup />
          </div>
          <div className="rounded-[20px] bg-[#fff] w-[34%]">
            <SuggestionBox />
          </div>
        </div>
      </div>

      <div className="w-[30%] "> 
        <div className=" bg-[#fff] rounded-[20px] mb-[20px] h-[348px]">
            <PercentageOfUserByProject />
        </div>
        <div className=" bg-[#fff] rounded-[20px]  h-[594px]">
            <ProjectManagement />
        </div>
      </div>

    </>
  );
}
export default RightBlock;
