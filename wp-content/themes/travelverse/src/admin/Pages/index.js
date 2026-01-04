import React, { useState, useEffect } from 'react';
import Dashboard from "./Dashboard";
import FreePro from "./FreePro";
import SettingPage from "./Setting";
import StarterSites from "./StarterSites";
import { __ } from "@wordpress/i18n";


const maintabs = [
    { label: __('Dashboard', 'TravelVerse'), content: Dashboard },
    { label: __('Starter Sites', 'TravelVerse'), content: StarterSites },
    { label: __('Free Vs Pro', 'TravelVerse'), content: FreePro },
    { label: __('Settings', 'TravelVerse'), content: SettingPage },
];

// Function to remove an element by label
function removeElementByLabel(arr, label) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].label === label) {
            arr.splice(i, 1);
            break;
        }
    }
}

travelverse_dashboard.proActivated ? removeElementByLabel(maintabs, 'Free Vs Pro') : '';

export default function NavRoute() {
    const [mainTab, setMainTab] = useState(0);
    const MainContent = maintabs[mainTab].content;

    useEffect(() => {
        const hash = window.location.hash;
        const tabIndex = parseInt(hash.replace('#', ''), 10);

        if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < maintabs.length) {
            setMainTab(tabIndex);
        }
    }, []);

    function handleTabClick(index) {
        setMainTab(index);
        window.location.hash = `#${index}`;
    }

    return (
        <>
            <div className="container">
                <aside className="py-8">
                    <nav className="flex border-b">
                        {maintabs.map(({ label, icon }, index) => (
                            <button
                                onClick={() => handleTabClick(index)}
                                className={`p-3 text-left text-lg inline-flex items-center gap-8 hover:text-primary-color relative ${mainTab === index && 'border-primary-color border-border-radius text-primary-color nav-border font-semibold'}`}
                                key={index}
                                type="button"
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </aside>
            </div>
            <div className="flex-1">
                <MainContent />
            </div>
        </>
    );
}
