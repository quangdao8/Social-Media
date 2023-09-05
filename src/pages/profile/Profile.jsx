import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router-dom";

export default function Profile() {
    const { username } = useParams();
    const PF = process.env.REACT_APP_PUCLIC_FOLDER;
    console.log("username---", username, PF);
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            {/* <img className="profileCoverImg" src="http://localhost:3000/assets/post/3.jpeg" alt="" /> */}
                            <img className="profileCoverImg" src={PF + "assets/post/3.jpeg"} alt="" />
                            <img className="profileUserImg" src={PF + "assets/person/7.jpeg"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}
