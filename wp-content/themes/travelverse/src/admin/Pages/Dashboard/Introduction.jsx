import { __ } from "@wordpress/i18n";
import welcometotravelverse from "../../assets/img/welcometotravelverse.png";

export default () => {
  return (
    <div className="flex p-14 rounded-md box-shadow-one gap-10 bg-white flex-col lg:flex-row">
      <div className="flex flex-1 flex-col items-start justify-center">
        <h3 className="font-semibold text-3xl mb-4">
          {__("Welcome to TravelVerse", "travelverse")}
        </h3>
        <p className="text-base leading-7 font-normal mb-8">
          {__(
            "TravelVerse is a free FSE (Full Site Editing) travel agency WordPress theme to create travel and tour booking websites. It is powered by the Travel Primakara plugin, the most popular travel booking plugin. You can use the TravelVerse theme to create websites such as travel agencies, tour operators, trekking, city tours, rafting, jungle safari, or anything travel-related. The theme is fully responsive, SEO-ready, and Speed-optimized, so you are ahead of the game. Furthermore, TravelVerse allows you to customize your site with various blocks & patterns. Additionally, TravelVerse is WooCommerce compatible, as well as RTL and translation-ready.",
            "travelverse"
          )}
        </p>
        <div className="flex gap-4">
          <a href={travelverse_dashboard.siteEditor} className="btn-primary">
            {__("Customize Your Website", "travelverse")}
          </a>
        </div>
      </div>
      <div className="rounded flex-1">
        <img
          src={welcometotravelverse}
          alt={__("TravelVerse welcome image", "travelverse")}
        ></img>
      </div>
    </div>
  );
};
