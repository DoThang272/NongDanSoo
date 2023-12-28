import InfomationCard from "./InfomationCard";

export default function ReportAndMeeting() {
  
  var today = new Date();
  var date ="Ngày " + today.getDate() + " tháng " + (today.getMonth() + 1) + " năm " + today.getFullYear();
  const post = {
    bg: "bg-[#FFE2E5]",
    img: "./Images/icon-post.svg",
    count: "50 posts",
    content: "Bài viết chờ duyệt",
    newContent: "+23 bài viết mới"
  }
  const metting = {
    bg: "bg-[#FFF4DE]",
    img: "./Images/icon-metting.svg",
    count: "50",
    content: "Cuộc họp",
    newContent: "+2 cuộc họp mới"
  }
  const groups = {
    bg: "bg-[#DCFCE7]",
    img: "./Images/icon-group2.svg",
    count: "200",
    content: "Nhóm",
    newContent: "+8 nhóm mới"
  }
  const users = {
    bg: "bg-[#F3E8FF]",
    img: "./Images/icon-users.svg",
    count: "80239",
    content: "Người dùng",
    newContent: "+23 người dùng mới"
  }
  return (
    <div className="p-[32px]">
      <div className="flex justify-between">
        <div>
          <h2 className="font-[600] font-popi text-colors-text-title text-[19px] ">Báo cáo tuần này</h2>
          <p className="font-[400] text-[18px]">{date}</p>
        </div>
        <div className="">
          <button
            className="border-2 border-[#C3D3E2] flex rounded-[20px] w-[100px] text-[14px] py-[12px] pl-[16px]"
            type=""
          >
            <img src="./Images/export-icon.svg" alt="" />
            <p>In PDF</p>
          </button>
        </div>
      </div>
      <div className=" grid  gap-x-[32px] mt-[34px] grid-cols-4">
        <InfomationCard {...post}/>
        <InfomationCard {...metting}/>
        <InfomationCard {...groups}/>
        <InfomationCard {...users}/>
      </div>
    </div>
  );
}
