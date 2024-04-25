import React from 'react';
import PropTypes, {InferProps} from "prop-types";

Friend.propTypes = {
    id:PropTypes.number,
    vorname: PropTypes.string,
    nachname:PropTypes.string.isRequired
}
function Friend(props: InferProps<typeof Friend.propTypes>) {
    return (
        <div>
            {props.id}
            {props.vorname}
            {props.nachname}
        </div>
    );
}

export default Friend;