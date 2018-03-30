/**
 * 统一日志处理
 * 获取所有日志、获取单条日志、打印日志、打印警告提示、打印错误提示
 */

let logs = []

const add = log => {
    logs.push(log)
    if (logs.length > 200) logs.shift()
}

export const getLogs = () => logs

export const getLog = index => logs[index]

export const log = (...args) => {
    add(args)

    if(__DEV__) {
        let info = args.concat()

        info[0] = "%c" + info[0]
        info.splice(1, 0, 'color: #2d8cf0')

        console.log(...info)
    }
}

export const logWarm = (...args) => {
    add(args)

    if(__DEV__) {
        let info = args.concat()

        info[0] = "%c" + info[0]
        info.splice(1, 0, 'color: #ff9900');

        console.warn(...info)
    }
}

export const logErr = (...args) => {
    add(args)

    if(__DEV__) {
        let info = args.concat()

        info[0] = "%c" + info[0]
        info.splice(1, 0, 'color: #ed3f14');

        console.error(...info)
    }
}