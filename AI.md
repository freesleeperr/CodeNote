# AI in Unity

2024.4.21

## 行为树 BehaviorTree

### 树

树是 n（n>=0）个节点的有限集
n=0 时称为空树
在任意非空树中：

1. 有一个特定的根结点
2. 当 n>1 时，其余结点分为 m(m>0)个互不相交的有限集 T1，T2。。。Tk，每一个集合又是一棵树，称为子树

### what

1. actions/flow-control
2. flow control nodes

- comsposites
  组合节点
- decorators
  装饰节点

### why

1. 容易排序组合
2. 易读
3. 容易设置
