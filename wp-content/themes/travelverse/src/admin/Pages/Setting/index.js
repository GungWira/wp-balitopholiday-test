import settingImage from "../../assets/img/settings.jpg"
import { __ } from "@wordpress/i18n"
import { applyFilters } from '@wordpress/hooks';
import UpgradeLink from "./Upgrade";

export default ()=> {
    return(
        <>
            {applyFilters('travelverse_settings_pages', null)}
            {!travelverse_dashboard.proActivated && (
                <div className="container pl-7 pr-6 2xl:pl-0 2xl:pr-0">
                    <UpgradeLink
                        imageSrc={settingImage}
                        link="https://wptravelengine.com/pattern-engine/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine"
                        className="min-h-[360px]"
                        message={__('Upgrade to premium to access all the features.', 'travelverse')}
                    />
                </div> 
            )
            }
        </>
    )
}
