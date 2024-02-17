import React from "react";
import {Text} from "react-native";

import {styles, Props} from ".";

const AppText: React.FC<Props> = ({children, style}) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
}

export default AppText;
