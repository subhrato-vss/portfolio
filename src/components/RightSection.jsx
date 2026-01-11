import Blog from "./Blog"
import Wrok from "./Wrok"
import About from "./About"
import Resume from "./Resume"
import Contact from "./Contact"

function RightSection() {
    const tabs = [
        { id: 'Javascript', label: 'About', component: <About />, active: true },
        { id: 'Design', label: 'My Resume', component: <Resume /> },
        { id: 'Wordpress', label: 'My Work', component: <Wrok /> },
        { id: 'settings', label: 'My Blog', component: <Blog /> },
        { id: 'python', label: 'My Contact', component: <Contact /> }
    ];

    return (
        <div className="col-xxl-9 col-lg-12">
            <div className="tab-wrapper-overlay-to-top">

                {/* Tab Navigation */}
                <div className="position-sticky sticky-top tmp-sticky-top w-100">
                    <ul
                        className="tab-navigation-button style-2 nav tab-smlg nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                    >
                        {tabs.map((tab, index) => (
                            <li className="nav-item" key={tab.id}>
                                <a
                                    className={`nav-link tmp-nav ${tab.active ? 'active' : ''}`}
                                    id={`v-pills-${tab.id}-tab`}
                                    data-bs-toggle="tab"
                                    href={`#v-pills-${tab.id}`}
                                    role="tab"
                                    aria-selected={tab.active ? 'true' : 'false'}
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tab Content */}
                <div className="tmp-tab-content-area mt--40">
                    <div className="tmp-all-tab-content tab-content" id="v-pills-tabContent">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`tab-pane fade ${tab.active ? 'show active' : ''}`}
                                id={`v-pills-${tab.id}`}
                                role="tabpanel"
                                aria-labelledby={`v-pills-${tab.id}-tab`}
                            >
                                {tab.component}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightSection