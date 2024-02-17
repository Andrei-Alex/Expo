import React from "react";
import { Image, View} from "react-native";

import {styles, Props} from "./index";
import {AppText} from "../../atoms";

const ListItem: React.FC<Props> = ({title, subTitle, image}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={image}
            />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>

        </View>
    );
}

export default ListItem;
