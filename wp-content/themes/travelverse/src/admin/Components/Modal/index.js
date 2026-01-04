import { createPortal } from "@wordpress/element";
import { Icon } from "../../Components";

export default ({ title, children, openModal, setOpenModal, className, placement, ...rest }) => {
    return <div>
        {
            openModal && createPortal(<div className={`travelverse-ad_modal${className && ' ' + className || ''}${placement && ' travelverse-ad_modal-' + placement || ''}`} {...rest}>
                {title && <div className="travelverse-ad_modal-header"><h3 className="travelverse-ad_modal-title">{title}</h3><button type="button" className={["travelverse-ad_modal-close transition-all duration-250"]} onClick={() => setOpenModal(false)}> <Icon icon='cross' /> </button></div>}
                {children}
            </div>, document.body)
        }
    </div>
}
