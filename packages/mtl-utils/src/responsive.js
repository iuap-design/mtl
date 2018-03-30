
import {
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native'

const deviceWidth = Dimensions.get('window').width;

const responsive = size => {
    if (PixelRatio.get() >= 3 && Platform == 'ios' && size == 1) {
        return size;
    }

    return deviceWidth / 750 * size;
}
export default responsive