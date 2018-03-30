import Toast from 'react-native-root-toast';

export default function (msg, options =
    { duration: 1000, backgroundColor: "rgba(0,0,0,.8)" }) {
    return Toast.show(msg, options);
}