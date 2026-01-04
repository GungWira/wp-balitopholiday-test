import { __ } from "@wordpress/i18n";
import { Tooltip } from "../../Components";
import { Icon } from "../../Components";
import logo from "../../assets/img/logo.png"
import { applyFilters } from "@wordpress/hooks"

const navLinks = [
    { url: 'https://wptravelengine.com/wordpress-travel-themes/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=theme_demo', icon: 'globe', tooltip: __('Website', 'travelverse') },
    { url: 'https://www.youtube.com/channel/UCbDXKWvJPgLo9scofaMc2vQ', icon: 'youtube', tooltip: __('YouTube', 'travelverse') },
    { url: 'https://wptravelengine.com/support/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=support', icon: 'headphone', tooltip: __('Support', 'travelverse') },
    { url: 'https://docs.wptravelengine.com/article/travelverse/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=documentation', icon: 'note', tooltip: __('Docs', 'travelverse') }
]

function NavBar() {

    return <>
        <nav className="py-6 shadow-md bg-white">
            <div className="container flex justify-between items-center pl-7 pr-6 2xl:pl-0 2xl:pr-0">
                <img src={logo} />
                <ul className='flex gap-3 items-center'>
                    <div className="mb-1.5 pr-4 border-r text-lg">{travelverse_dashboard.ThemeVersion}</div>
                    {
                        navLinks.map(({ url, icon, tooltip }, index) => (
                            <li
                                key={index}
                                className='logo-wrap'>
                                <Tooltip content={tooltip} direction="center">
                                    <a href={url} target="_blank" className='p-3 border border-primary-accent inline-block rounded-full duration-200 hover:bg-primary-accent hover:text-primary-color hover:border-primary-color'>
                                        <Icon icon={icon} key={index} />
                                    </a>
                                </Tooltip>
                            </li>
                        )
                        )
                    }
                    {applyFilters('travelverse_icons_tab', null)}
                </ul>
            </div>
        </nav>
    </>
    
}

export default NavBar;