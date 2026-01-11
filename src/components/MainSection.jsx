import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function MainSection() {
    return (
        <div className="cv-card-area">
            <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
                <div className="row row--25">

                    <LeftSection />
                    <RightSection />

                </div>
            </div>
        </div>
    )
}

export default MainSection