import SideBar from "../sidebar/sidebar";
import { GridContainer } from "../sidebar/style";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import { Color } from "../../app/shared/style_const/style";

const DashBoard = () => {
    return ( 
        <GridContainer bgcolor={Color.backgroundDark}>
            <SideBar/>
            <Outlet />
        </GridContainer>
     );
}
 
export default DashBoard;