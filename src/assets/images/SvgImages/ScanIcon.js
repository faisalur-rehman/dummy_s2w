import * as React from "react"
// import Svg, { Circle, Path, Defs, Pattern, Use, Image } from 
import { Image, ImageBackground ,} from "react-native"
import { ScaledSheet } from "react-native-size-matters"

const ScanIcon = (props) => (
    <ImageBackground 
     style={styles.img}

    source={require('./Scanicon.png')}/>

)

const styles=ScaledSheet.create({
    img:{
        width:'72@s',
        height:'72@s',
        marginHorizontal:5
    }
})

export default ScanIcon
