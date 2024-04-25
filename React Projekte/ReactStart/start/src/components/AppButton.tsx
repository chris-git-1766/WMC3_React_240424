import React from 'react';

interface IButton {
    onPress: () => void;
}
function AppButton({onPress}:IButton) {
    return (
        <>
        <button onClick={onPress}> Press me</button>
        </>
    );
}

export default AppButton;