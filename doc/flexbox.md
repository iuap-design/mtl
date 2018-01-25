# 关于 Flexbox 的使用

> 参考 [ CSS3 Flexbox 口诀](https://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment#_rnd1516847746581)

## flex 设置

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
```

## flex-direction

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
```

- row：从左到右的排列方向
- row-reverse：从右到左的排列方向
- column：从上到下的排列方向
- column-reverse：从下到上的排列方向

## flex-wrap

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap"
  }
});
```

- nowrap: 始终在一行排列，区块增多后会动态将区块挤压
- wrap: 自动折行，从左到右，从上到下
- wrap-reverse: 也是自动折行，但是和wrap的方向相反，从左到右，从下到上

## justity-content

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justityContent: "center"
  }
});
```

- flex-start: 水平左对齐
- center：水平居中对齐
- flex-end: 水平右对齐
- space-between: 两边对齐
- space-around: 居中间隔对齐

## align-items

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justityContent: "center",
    alignItems: "center"
  }
});
```

- flex-start: 垂直方向上对齐
- center：垂直方向居中对齐
- flex-end: 垂直方向下对齐
- stretch： 垂直方向居中填充对齐

## align-content

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justityContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});
```
内容都是从左到右从上到下排列，只是间距不一样

- stretch：铺满正屏
- flex-start: 居上
- center：居中
- flex-end: 居下
- space-between: 铺满
- space-around: 间距一致