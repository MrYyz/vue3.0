// 虚拟DOM原理流程
// 简单概括有三点：
// 1.用javascript模拟DOM树，并渲染这个DOM树
// 2.比较新老DOM树，得到比较的差异对象
// 3.把差异对象应用到渲染的DOM树



// 用JavaScript模拟DOM树并渲染到页面上
import { setArr } from './utils'

class CreateEl {
  constructor (tagName, props, children) {
    // 当只有两个参数的时候 例如 celement(el, [123])
    if (Array.isArray(props)) {
      children = props
      props = {}
    }
    // tagname, props, children 数据保存到this对象
    this.tagName = this.tagName
    this.props = props || {}
    this.children = children || []
    this.key = props ? props.key : undefined

    let count = 0
    this.children.forEach(child => {
      if (child instanceof CreateEl) {
        count += child.count
      } else {
        child = '' + child
      }
      count++
    })
    // 给每一个节点设置一个count
    this.count = count
  }
  // 构建一个 DOM 树
  render () {
    const el = document.createdElement(this.tagName)
    const props = this.props
    // 循环所有属性，然后设置属性
    for (let [key, val] of Object.entries(props)) {
      setArr(el, key, val)
    }
    this.children.forEach(child => {
      // 递归循环 构建tree
      let childEl = (child instanceof CreateEl) ? child.render() : document.createTextNode(child)
      el.appendChild(childEl)
    })
    return el
  }
}


// 比较新老DOM树，得到比较的差异对象

// 两个节点之间的差异 总结起来有下面4种
// 1.直接替换原有节点
// 2.调整子节点，包括 移动、删除 等
// 3.修改节点属性
// 4.修改节点文本内容



// 这是比较两个树找到最小移动量的算法是LeventShtein距离，即O(n * m)
// 具体请看 https://www.npmjs.com/package/list-diff2
import listDiff from 'list-diff2'
// 比较两棵树
function diff (oldTree, newTree) {
  // 节点的遍历顺序
  let index = 0
  // 在遍历过程中记录节点的差异
  let patches = {}
  // 深度优先遍历两棵树
  deepTraversal(oldTree, newTree, index, patches)
  // 得到的差异对象返回出去
  return patches
}

function deepTraversal (oldNode, newNode, index, patches) {
  let currentPatch = []
  // ... 中间有很多对patches的处理
  // 递归比较子节点是否相同
  diffChildren(oldNode.children, newNode.children, index, patches, currentPatch)
  if (currentPatch.length) {
    // 那个index节点的差异记录下来
    patches[index] = currentPatch
  }
}

// 子数的diff
function diffChildren (oldChildren, newChildren, index, patches, currentPatch) {
  const diffs = listDiff(oldChildren, newChildren)
  newChildren = diffs.children
  // ... 省略记录差异对象
  let leftNode = null
  let currentNodeIndex = index 
  oldChildren.forEach((child, i) => {
    const newChild = newChildren[i]
    // index相加
    currentNodeIndex = (leftNode && leftNode.count) ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1
    // 深度遍历，递归
    deepTraversal(child, newChild, currentNodeIndex, patches)
    // 从左树开始
    leftNode = child
  })
}