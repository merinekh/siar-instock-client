import { Navigate } from "react-router";
import { AppRoute } from "../../const";

function Home() {
    return <Navigate to={AppRoute.WAREHOUSE} />;
}

export default Home