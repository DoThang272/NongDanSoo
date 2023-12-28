

function ListMenu(props){
    const {img , name} = props;
    return(
        <div className="flex items-center pb-[45px]">
            <img src={img} alt=""/>
            <span>{name}</span>
        </div>
    )
}
export default ListMenu;
