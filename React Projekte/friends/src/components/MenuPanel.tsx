import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {BsCaretDown, BsCaretLeft} from "react-icons/bs";

MenuPanel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    collapsed: PropTypes.bool
};
 function MenuPanel({title, children, collapsed}:any) {
    const [intCollapsed, setIntCollapsed] = useState(collapsed);
    return (
        <div>
            <div>
                 <span
                 onClick={() => setIntCollapsed(!intCollapsed)}>
                    {title}{intCollapsed ?
                    <BsCaretDown />:<BsCaretLeft />}
                </span>
            </div>
            {!intCollapsed &&
<div>
    {children}
</div>
            }
        </div>
    );
}

export default MenuPanel;