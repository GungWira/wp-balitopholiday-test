import InfoCard from '../Dashboard/InfoCard';
import { __ } from "@wordpress/i18n";
import freePro from "../../assets/img/freePro.png"

const Link = ({ className, href, children }) => {
    return <a href={href} target="_blank" className={`text-sm font-medium text-heading-color underline inline-flex items-center transition-[gap] gap-2 ease-in duration-200 hover:underline hover:text-primary-color ${className}`}>{children}</a>
}
const informations = [
    {
        title: __('Upgrade to Pro', 'travelverse'),
        content: __('With the Pro version, you can change the look and feel of your website in seconds. You can change color, choose from background patterns, and change the fonts with ease.', 'travelverse'),
        link: <Link href="https://wptravelengine.com/pattern-engine/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine" >{__('Learn More About Pro Version', 'travelverse')}</Link>
    },
    {
        title: __('Documentation', 'travelverse'),
        content: __('Explore our detailed and beginner-friendly documentation to set up your site step-by-step.', 'travelverse'),
        link: <Link href="https://docs.wptravelengine.com/article/travelverse/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=documentation" >{__('Explore Documentation', 'travelverse')}</Link>
    },
    {
        title: __('Support', 'travelverse'),
        content: __('Need any help? Reach out to our support team for quick assistance with our theme.', 'travelverse'),
        link: <Link href="https://wptravelengine.com/support/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=support">{__('Contact Support Team', 'travelverse')}</Link>
    },
]

export default function FreePro() {
    return <div class="container">
        <div class="flex box-shadow flex-col lg:flex-row gap-8">
            <div class="flex-1">
                <img className='w-full' src={freePro} alt={__( 'TravelVerse free vs pro image', 'TravelVerse' )} ></img>
                {!travelverse_dashboard.proActivated && (
                    <div className="flex p-6 rounded-md mt-5 box-shadow-one items-center gap-[100px] gradient-background flex-col lg:flex-row mb-10">
                        <div className="flex flex-col gap-2 items-start justify-center">
                            <h3 className="font-semibold text-xl text-white">{__('Upgrade to Pro', 'travelverse')}</h3>
                            <p className="text-sm font-normal text-white">{__('With the Pro version, you get access to more customization, advanced add-ons, additional customization for headers, blogs and single posts along with many other advanced features.', 'travelverse')}</p>
                        </div>
                        <div className="rounded shrink-0 grow ">
                            <a href='https://wptravelengine.com/pattern-engin/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine' target='_blank' className="btn-secondary">{__('Upgrade Now', 'travelverse')}</a>
                        </div>
                    </div>
                )}
            </div>
            <aside class="rounded lg:w-1/3">
                <div className='flex flex-col gap-8'>
                    {
                        informations.map(({ title, content, link }, index) => {
                            return <InfoCard key={index} title={title}>
                                <p className='text-sm leading-6' >{content}</p>
                                {link || null}
                            </InfoCard>
                        })
                    }
                </div>
            </aside>
        </div>
    </div>
}