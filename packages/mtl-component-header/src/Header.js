
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Image,
    Platform
} from 'react-native';

import { log, logWarm, logErr } from 'mtl-utils/log'
import request from 'mtl-utils/request'
import px from 'mtl-utils/responsive'
import toast from 'mtl-utils/toast'

export default class Header extends Component {

    static defaultProps = {
        title: "",
        showLeft: true
    }
    render() {
        return <View style={[topStyles.header, this.props.boxStyles]}>
            {Platform.OS == 'ios' && <View style={topStyles.topBox}></View>}
            <View style={[topStyles.bar]}>
                <View style={topStyles.leftBtn}>
                    {this.props.showLeft && <TouchableOpacity style={topStyles.back}
                        onPress={() => this.props.navigation.goBack()}>
                        <View style={{ height: px(60), justifyContent: "center" }}>
                            <Image source={{ uri: require('../images/icon-back') }}
                                style={{ width: px(40), height: px(40) }} />
                        </View>
                    </TouchableOpacity>}
                    {this.props.leftBtn}
                </View>
                <Text style={[topStyles.title,this.props.textStyle]}>{this.props.title}</Text>
                <View style={topStyles.rightBtn}>
                    {this.props.rightBtn}
                </View>
            </View>
        </View>
    }
}

Header.propTypes = {
    textStyle: PropTypes.object,
    boxStyles: PropTypes.element,
    leftBtn: PropTypes.element,
    title: PropTypes.string,
    navigation: PropTypes.object,
    rightBtn: PropTypes.element
}

const topStyles = StyleSheet.create({
    header: {
        backgroundColor: '#fbfafc',
        width: px(750),
        marginBottom: 5,
    },
    topBox: {
        width: px(750),
        height: px(20)
    },
    bar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: px(90),
        paddingTop: px(10)
    },
    title: {
        flex: 1,
        fontSize: px(30),
        textAlign: "center",
        color: "#252426"
    },
    leftBtn: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: px(120),
    },
    rightBtn: {
        width: px(120),
        marginRight:px(10),
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    back: {
        marginLeft: px(10)
    },
});