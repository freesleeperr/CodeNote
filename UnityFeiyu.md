# 入门

## 组件复制粘贴

可以复制粘贴组件,相同组件可以只复制粘贴值

## 脚本

类名和文件名一定要相同

### 生命周期

方法名:

1. Awake:最早调用,一般在此实现单例模式
2. OnEnable:在组件激活后调用,在 Awake 后调用一次
3. Start:在 Update 之前调用一次,在 OnEnable 之后调用,可以在此设定初始值
4. FixedUpdate:固定频率调用方法,每次调用于上传调用时间间隔相同
5. Update:帧率调用方法,每帧调用一次,每次调用与上次时间间隔不同
6. LateUpdate:在 Update:没调用玩一次后,紧跟着调用一次
7. OnDisable:与 OnEnble 想法,组件未激活时调用
8. OnDestroy:被销毁后调用一次

### 多个脚本执行顺序

会同时按照生命周期执行所有脚本,顺序与生命周期执行顺序相同,相同生命周期后添加的脚本反而先执行
相同生命周期会按照添加的相互顺序来执行

1. 按照生命周期控制
2. 脚本执行顺序(Excution order)
   添加脚本,调整数值,数值越小,执行顺序越靠前

## 游戏物体

### 标签

组件菜单选择标签
可以添加自定义标签

### 图层

范围更广,代表一类物体
共有 32 层
可以添加

## 向量

标量:只有大小的量
向量:既有大小,也有方向
向量的模:向量的大小
单位向量:大小为 1 的向量
向量单位化,归一化:把向量转化为单位向量的过程

### 运算

定义向量 a(x1,y1)(1,2),向量 b(x2,y2)(2,1)
加:
a+b = (x1++x2,y1+y2) = (3,3)
平行 4 边形规则

减:
a+b = (x1-x2,y1+y2) = (-1,1)
减的向量向被减的向量画一条线,就是结果

叉乘:
a*2 = (x1*2,y1\*2) = (1,4)
不影响方向,只影响长度

点乘:
a.b = x1*x2+y1*y2 = n = |a||b|cos#(夹角)
可以通过点乘获得向量的夹角

## 预设体

层级对象保存为项目文件,生成预设体文件
当修改预设体,会影响场景,修改场景,预设体不变(使用检查器,打开可以修改)

### 预设体变体

修改预设体也会影响变体
可以修改自身的特殊属性
自身改变不会影响原本的预设体

## Vector

代表向量,坐标,旋转
`Vector3 v = new Vector(1,1,0.5f);`
`v = Vector.zero;`
`v = Vector.one;`
`v = Vector.down`
`v = Vector.forward`

计算两个向量:
夹角:`Vector.Angle(v,v2);`
距离:`Vector.Distance(v,v2);`
点乘:`Vector.Dot(v,v2);`
叉乘:`Vector.Cross(v,v2);`
插值:`Vector.Lerp(v,v2);`
模:`v.magnitude`
规范化:`v.normalized`

### 旋转

欧拉角:`Vector v = new Vector3(0,30,0);`
四元数:`Quaternion quaternion = new Quaterion.identity`
相互转化:`quaternion = Quaterion.identity.Euler(0,30,0);`
看向一个物体:`quaternion = Quaternion.LookRotation(new Vector(0,0,0))`

## debug

控制台显示:`Debug.Log("test");`
警告:`Debug.LogWarning("w");`
报错:`Debug.LogError("e");`

划线:`Debug.DrawLine(Vector.one,Vector.zero)`

## object

```
//游戏物体
 GameObject go = this.gameObjec
 //名字
 Debug.Log(go.name);

```

还可以获取激活状态,transform 组件

```
//层级激活状态
Debug.Log(Cube.activeInHierarchy);
//自身真正的激活状态
Debug.Log(Cube.activeSelf);

//使用transform
Transform trans = this.transform;
//获取其他组件
BoxCollider bc = GetComponent<BoxCollider>();
//获取当前物体身上的某个组件
//获取父物体或者子物体的组件
GetCompontentInChilderen<CapsuleCoillder>
```

实例化物体

```
   Instantiate(t,transform);
```

## Time

时间`Time`
时间倍数`Time.timeScale`
帧间隔`Time.deltaTime`可以当作计时器

## Application

文件相关的操作

```
//只读
Debug.Log(Application.dataPath);
Debug.Log(Application.persistentDataPath);
Debug.Log(Application.streamingAssetsPath);
Debug.Log(Application.temporaryCachePath);

//后台运行
Debug.Log(Application.runInBackground);
//打开url
Application.OpenURL("google.com");
//退出游戏
Application.Quit();
```

## 场景

首先在生成设置添加场景序号

```
SceneManager.LoadScene(0);

//得到当前的scene
Scene scene = SceneManager.GetActiveScene();
//场景是否已经加载
scene.isLoded;
//场景路径
scene.path;
//场景索引
scene.buildIndex;

//场景管路类个数
SceneManager.sceneCount;
//创建新场景
SceneManager.CreatScene("newScene");
//加载场景
SceneManager.LoadScene("ns",LoadSceneMode.Additive);
```

## 异步和同步

异步场景:加载数据,加载场景,从网络读取

加载场景:

```
AsyncOperation operation;
    // Start is called before the first frame update
    void Start()
    {

        StartCoroutine(loadScene());
    }



    IEnumerator loadScene()
    {
        operation = SceneManager.LoadSceneAsync(0);
        operation.allowSceneActivation = false;
        yield return operation;
    }
    float timer = 0;

    // Update is called once per frame
    void Update()
    {
        timer += Time.deltaTime;
        if (timer > 5)
        {
            operation.allowSceneActivation = true;
        };
        Debug.Log(operation.progress);
    }
```

## Transform

游戏物体之间的父子关系也是通过`transform`进行控制的

```
       //获取位置
        Debug.Log(transform.position);
        Debug.Log(transform.localPosition);
        //获取旋转
        Debug.Log(transform.rotation);
        Debug.Log(transform.localRotation);
        Debug.Log(transform.eulerAngles);
        Debug.Log(transform.localEulerAngles);
        //获取缩放
        Debug.Log(transform.localScale);
```

### 物体缩放

```
        //时时刻刻看向
        //transform.LookAt(Vector3.zero);
        //旋转
        //transform.Rotate(Vector3.up,1);
        //绕某个点旋转
        //transform.RotateAround(Vector3.zero, Vector3.up, 5);
        //移动
        //transform.Translate(Vector3.forward * 0.1f);

```

### 父子关系

```
        //transform.parent.gameObject;
        //子物体的个数
        Debug.Log(transform.childCount);
        //解除与子物体的父子关系
        transform.DetachChildren();
        //获取子物体
        Transform trans = transform.Find("Child");
        trans = transform.GetChild(0);
        //如何判断一个物体不是另外物体的子物体
        bool res = trans.IsChildOf(transform);
        Debug.Log(res);
        //设置父物体
        trans.SetParent(transform);
```

### 键盘操作

```
  //鼠标
        //按下鼠标 0左键 1右键 2滚轮
        if (Input.GetMouseButton(0))
        {
            Debug.Log("左键");
        }
        //持续按下鼠标
        if(Input.GetMouseButton(0)) {
            Debug.Log("持续");
        }
        //抬起鼠标
        if(Input.GetMouseButtonUp(0)) {
            Debug.Log("抬起");
        }
        //按下键盘案件
        if(Input.GetKey(KeyCode.A)) {
            Debug.Log("按下A");
        }
        //抬起键盘事件
        if (Input.GetKeyUp(KeyCode.A))
        {
            Debug.Log("抬起A");
        }
```

### 虚拟轴

一个-1 到 1 的数轴
用于跨平台进行控制

```
        float horizontal = Input.GetAxis("Horizontal");
        //float vertical = Input.GetAxis("Vertical");
        //Debug.Log(horizontal+"   "+vertical);
        //虚拟按键
        if (Input.GetButtonDown("Jump"))
        {
            Debug.Log("space");
        }
```

### 触摸事件

```
 //判断单点触摸
        if (Input.touchCount == 1)
        {
            Touch touch = Input.touches[0];
            Debug.Log(touch.position);
            //触摸阶段
            switch (touch.phase)
            {
                case TouchPhase.Began:
                    break;
                case TouchPhase.Moved:
                    break;
                case TouchPhase.Ended:
                    break;
                case TouchPhase.Canceled:
                    break;
            }
        }
        //判断多点触摸
        if (Input.touchCount == 2)
        {
            Touch touch1 = Input.touches[0];
            Touch touch2 = Input.touches[1];
        }
```

## 物体移动

通过 transform.Translate(Vector3 pos); 进行控制

```
float horziontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        Vector3 dir = new Vector3(horziontal,0, vertical);
        Debug.Log(dir);
        transform.Translate(dir*2*Time.deltaTime);
```

### 碰撞和触发

#### 两个物体必须都有碰撞器,其中一个物体有刚体

## 人物移动

CharacterController 控制运动,Input 获取轴信息,创建方向向量,传给组件进行控制移动
速度可以在组件设置中自定义,向量只提供方向

```
private CharacterController player;
    // Start is called before the first frame update
    void Start()
    {
        player = GetComponent<CharacterController>();
    }

    // Update is called once per frame
    void Update()
    {
        //水平轴
        float horizontal = Input.GetAxis("Horizontal");
        //垂直轴
        float vertcal = Input.GetAxis("Vertical");
        //创建方向向量
        Vector3 dir = new Vector3(horizontal, 0,vertcal);
        //直接定位
        //gameObject.transform.Translate(dir);
        //组件方法
        player.SimpleMove(dir*2);
    }
```

### 射线

```
void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            //按左键发射射线
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            //声明碰撞信息类
            RaycastHit hit;
            //碰撞检测
            bool res = Physics.Raycast(ray, out hit);
            //如果碰撞的清况下,hit就有内容了
            if (res == true)
            {
                Debug.Log(hit.point);
                transform.position = hit.point;
            }
            //多检测
            RaycastHit[] hits = Physics.RaycastAll(ray, 100, 1 << 10);

        }
    }
```
