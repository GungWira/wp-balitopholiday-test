import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { Icon } from "../../Components"
import starter from "../../assets/img/starter.jpg"

function travelverse_activatePlugin() {
    var data = new FormData();
    data.append('action', 'travelverse_get_install_starter');
    data.append('security', travelverse_dashboard.ajax_nonce);
    data.append('status', travelverse_dashboard.status);
    jQuery.ajax({
        method: 'POST',
        url: travelverse_dashboard.ajaxUrl,
        data: data,
        contentType: false,
        processData: false,
    })
        .done(function (response) {
            if (response.success) {
                location.replace(travelverse_dashboard.starterURL);
            }
        })
        .fail(function (error) {
            console.log(error);
        });
}

export default function StarterSites() {
    const [working, setWorking] = useState(null);
    const handleClick = () => {
        setWorking(true);
        travelverse_activatePlugin();
    }
    return (
        <div className="container pl-7 pr-6 2xl:pl-0 2xl:pr-0" >
            <div className="flex py-8 gap-10 flex-col lg:flex-row">
                <div className="flex flex-1 flex-col gap-8 items-center justify-center">
                    <img src={starter} alt="travelverse starter image"></img>
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-3">{__('TravelVerse is a feature-rich WordPress block theme designed to harness the full potential of the Gutenberg block editor.', 'travelverse')}</p>
                        <span className="text-base rounded px-2 py-1 bg-primary-accent-2 border border-border-color"><span className="font-semibold">{__('Note:', 'travelverse')}</span> {__('Upon clicking this button, the "Demo Importer Plus" plugin will be installed and activated from the WordPress repository.', 'travelverse')}</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        {travelverse_dashboard.starterTemplates && (
                            <a
                                className="activate-button btn-primary"
                                href={travelverse_dashboard.starterURL}
                            >
                                {travelverse_dashboard.starterLabel}
                            </a>
                        )}
                        {!travelverse_dashboard.starterTemplates && (
                            <>
                                <a
                                    className="activate-button btn-primary"
                                    onClick={() => handleClick()} variant="primary">
                                    {travelverse_dashboard.starterLabel}
                                </a>
                                {working && (
                                    <Icon icon="loading" />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}