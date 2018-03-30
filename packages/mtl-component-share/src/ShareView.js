'use strict';

import React, { Component } from 'react';
import {
    Modal, Text, View, StyleSheet,
    TouchableOpacity, Image,
    NativeModules, Clipboard, Animated,
    TouchableWithoutFeedback, CameraRoll, Platform
} from 'react-native'

import px from 'mtl-utils/responsive'
import toast from 'mtl-utils/toast'

export default class ShareView extends Component {
    constructor(props) {
        super(props)
        this.height=px(500)
        this.state = {
            isShow: false,//默认不显示弹层
            boxY: new Animated.Value(this.height),
        }
        this.list = this.renderType(this.props.types)
    }
    renderType(types) {
        let list = [];
        if (types) {
            types.forEach((item, index) => {
                list.push(<TouchableOpacity key={index}
                    style={styles.shareBtn}
                    onPress={this[item.method].bind(this)}
                    activeOpacity={0.9}>
                    <Image source={{ uri: item.url }}
                        resizeMode='cover'
                        style={{ width: px(96), height: px(96) }} />
                    <Text style={styles.shareTxt} allowFontScaling={false}>{item.txt}</Text>
                </TouchableOpacity>)
            })
        }
        return list;
    }
    render() {
        return <Modal style={styles.view}
            onRequestClose={() => { }}
            onShow={() => this.show()}
            animationType="none"
            transparent={true}
            visible={this.state.isShow}>
            <TouchableWithoutFeedback onPress={() => this.cancel()}>
                <View style={styles.bg} ></View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.box, {
                transform: [
                    { translateY: this.state.boxY }
                ]
            }]}>
                {/*标题*/}
                <View style={styles.titleBox}>
                    {this.props.children || <Text style={styles.tit}>分享到</Text>}
                </View>
                {/*分享按钮*/}
                <View style={styles.list}>
                    {this.list.map(item => item)}
                </View>
                {/*取消按钮*/}
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => this.cancel()}>
                    <Text style={styles.cancelTxt}>取消</Text>
                </TouchableOpacity>
            </Animated.View>
        </Modal>
    }
    //关闭弹层
    cancel() {
        Animated.timing(
            this.state.boxY,
            {
                toValue: this.height,
                duration: 200
            }
        ).start(() => {
            this.setState({
                isShow: false
            })
        });
    }
    //打开分享层
    open() {
        if (!this.state.isShow) {
            this.setState({ isShow: true })
        }
    }
    //打开的动画
    show() {
        if (this.state.isShow) {
            Animated.timing(
                this.state.boxY,
                {
                    toValue: 0,
                    duration: 200
                }
            ).start();
        }
    }
    //链接暂存变量
    link = ''
    //实现微信分享给朋友
    weiFriend() { }
    //实现转发朋友圈
    weiPyq() { }
    //实现复制链接
    weiLink() {
        Clipboard.setString(this.link)
        toast('链接复制成功')
    }
    //实现展示二维码
    weiCode() { }
}

/**
 * 分享层显示的类型
 */
export const SHARETYPE = {
    /**
     * 微信
     */
    WEIXIN: {
        method: "weiFriend", url: require('../images/icon-weixin'), txt: '微信好友'
    },
    /**
     * 微信朋友圈
     */
    PENGYOUQUAN: {
        method: 'weiPyq', url: require('../images/icon-wei'), txt: '朋友圈'
    },
    /**
     * 连接地址
     */
    LIANJIE: {
        method: 'weiLink', url: require('../images/icon-share-link'), txt: '链接'
    },
    /**
     * 二维码
     */
    ERWEIMA: {
        method: 'weiCode', url: require('../images/icon-share-code'), txt: '二维码'
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    bg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    box: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: px(750),
        backgroundColor: '#fff'
    },
    titleBox: {
        paddingHorizontal: px(20),
        paddingTop: px(20),
        alignItems: 'center',
    },
    tit: {
        fontSize: px(22)
    },
    cancelBtn: {
        width: px(750),
        padding: px(20),
        justifyContent: 'center',
        backgroundColor: '#efefef'
    },
    cancelTxt: {
        fontSize: px(36),
        textAlign: 'center'
    },
    list: {
        height: px(250),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: px(50),
        paddingRight: px(50)
    },
    shareBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareTxt: {
        marginTop: px(10),
        fontSize: px(25),
    }
})