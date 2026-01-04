import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks"
export default () => {
    return (
        <>
            {applyFilters('travelverse_license_activation_placeholder', null)}
            {!travelverse_dashboard.proActivated && (
                <div className="flex p-6 rounded-md box-shadow-one items-center gap-[234px] gradient-background flex-col lg:flex-row">
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h3 className="font-semibold text-xl text-white">{__('Upgrade to Pro', 'travelverse')}</h3>
                        <p className="text-base leading-7 font-normal text-white">{__('With the Pro version, you get access to more customization, advanced add-ons, additional customization for headers, blogs and single posts along with many other advanced features.', 'travelverse')}</p>
                    </div>
                    <div className="rounded shrink-0 grow ">
                        <a href='https://wptravelengine.com/pattern-engine/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine' target='_blank' className="btn-secondary">{__('Upgrade Now', 'travelverse')}</a>
                    </div>
                </div>
            )
            }
        </>
    )
}