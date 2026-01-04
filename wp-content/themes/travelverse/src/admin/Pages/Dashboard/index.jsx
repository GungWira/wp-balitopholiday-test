import Introduction from './Introduction';
import InfoCard from './InfoCard';
import Upgrade from './Upgrade';
import { __ } from "@wordpress/i18n";


const Link = ({ className, href, children }) => {
    return <a href={href} target="_blank" className={`text-sm font-medium text-heading-color underline decoration-primary-color inline-flex items-center transition-[gap] gap-2 ease-in duration-200 hover:underline hover:text-primary-color ${className}`}>{children}</a>
}
const informations = [
    {
        title: __('Documentation', 'travelverse'),
        content: __('Explore our detailed and beginner-friendly documentation to set up your site step-by-step.', 'travelverse'),
        link: <Link href="https://docs.wptravelengine.com/article/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=documentation">{__('Explore Documentation', 'travelverse')}</Link>
    },
    {
        title: __('Support', 'travelverse'),
        content: __('Need any help? Reach out to our support team for quick assistance with our theme.', 'travelverse'),
        link: <Link href="https://wptravelengine.com/support/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=support">{__('Contact Support Team', 'travelverse')}</Link>
    }
]

const Welcome = () => {

    return (
        <div className="container pl-7 pr-6 2xl:pl-0 2xl:pr-0">
            <div className="gap-8 flex flex-col">
                <Introduction />
                <Upgrade />
                <div className='flex gap-10 mb-10'>
                    {
                        informations.map(({ title, content, link }, index) => {
                            return <InfoCard key={index} title={title}>
                                <p className='text-sm leading-6' >{content}</p>
                                {link || null}
                            </InfoCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Welcome