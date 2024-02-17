import React from "react";
import {Text, TouchableOpacity} from "react-native";

import {styles, Props} from "./index";
import {colors} from "../../../config";

const AppButton: React.FC<Props> = ({title, onPress, color ='primary'}) => {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: colors[color]}]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;
