import DashboardHeader from "../../dashboard/components/DashboardHeader"
import { useOutletContext } from "react-router-dom";
function WorkHeader()
{
   const { setCollapsed } = useOutletContext();
    const { setMobileOpen } = useOutletContext();
    return (
        
            <DashboardHeader setCollapsed={setCollapsed}
                setMobileOpen={setMobileOpen} />
       
)
}

export default WorkHeader