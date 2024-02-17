import React from "react";
import {Text} from "react-native";

import {styles, Props} from ".";

const AppText: React.FC<Props> = ({children}) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

export default AppText;
