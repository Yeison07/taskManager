import { CardMemberS, ProfileContainer } from "./style";
import img from "../../app/shared/img/profile_pic.jpg"
import { SubTitleS } from "../dashboard/style";

const CardMember = ({data}) => {
    return ( 
        <CardMemberS>
                    <ProfileContainer imgUrl={imgUrl} />
                    <SubTitleS>{data.name}</SubTitleS>
                    
        </CardMemberS>
     );
}
 
export default CardMember;