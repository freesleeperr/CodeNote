# Unity

## 概述

弄清 Unity 引擎的工作原理
熟练使用 unity 引擎提供部分的各个重要组件
熟练使用 unity 引擎提供的 api

## 游戏引擎


游戏引擎提供了很多现成的功能,让我们游戏开发事半功倍

降低门槛
提高开发效率

### 如何学习游戏引擎

学习引擎用于开发的主要语言+学习引擎的软件操作+学习引擎提供的 API 和核心系统

### 如何学习 Unity

Unity 相当于一个游戏开发工具包
我们只要学会使用工具包中的各个工具即可
而 C#是使用这些工具的媒介

### 总结

游戏引擎:开发游戏的软件
意义:门槛低,效率高
如何学习:软件操作,公共 API,核心系统

## 下载和安装

推荐 LTS 版

### 版本号

2020.2.0b14
大版本号,小版本号,bug 处理版本号

unity 向下兼容

## 工程文件夹

1. Asset:工程资源文件夹(美术资源,脚本)most important
   具体的资源脚本存放处,其他都可以通过 unity 生成
2. Library:库文件夹(Unity 自动生成管理)
3. Logs:日志文件夹,记录特殊信息(Unity 自动生成管理)
4. obj:编译产生中间文件(Unity 自动生成管理)
5. Packages:包配置信息(Unity 自动生成管理)
6. ProjectSettings: 工程设置信息(Unity 自动生成管理)
   项目设置

## 窗口

### Hierarchy 层级

创建几何模型

### Scene

ISO
Persp

#### 旋转

Global 全局方向移动
Local 本地方向移动

### 场景快捷键

左键相关:

## game 和 project

## 引擎窗口

### 检查器

游戏对象基本设置
关联的 C#脚本
脚本的公共成员变量

## 工具栏和父子关系

1. 文件操作
2. 编辑
3. 资源
4. 对象
5. 脚本

### 父子关系

1. 子对象会随着父对象变化而变化
2. 子对象 Inspector 窗口中 Transform 信息是相对父对象的
3. Scene 上方

## 反射机制和游戏场景

一个运行的程序查看本身或者其他程序的元数据的行为就叫做反射

图片,模型,音效都依附于 gameObject 对象

### 检查器获取脚本信息

利用反射:已知类名,可以获取所有公共成员,故可以在 Inspector 面板创建各种公共字段信息

### 游戏场景

游戏场景的保存
游戏场景的新建
多个游戏场景叠加显示
游戏场景的本质

## 脚本

放在 Asset 下
类名和文件名必须一致
不用管 namespace
默认默认继承 MonoBehaviour

### MonoBehaviour

1. 创建的脚本默认继承 MonoBehaviour 才能挂载
2. 继承 MonoBehavior 的脚本不能 new,只能用作挂载
3. 继承 MonoBehavior 不要写构造函数,因为没有意义
4. 继承 MonoBehavior 可以在一个对象上挂多个
5. 继承 MonoBehavior 的类可以再次被继承,遵循面向对象

不继承就不能挂载
不继承的类可以用作单例数据存储

## 基础总结

## GameObject 成员变量知识点

```
//名字
print(this.gameObject.name);
//是否激活
this.gameOObject.name
//是否是静态
this.gameObject.isStatic
//层级
this.gameObject.layer
//标签
this.gameObject.tag
```

## 静态方法

```
      //创建自带几何体
        //创建GameObject对象
        GameObject obj = GameObject.CreatePrimitive(PrimitiveType.Cube);
        obj.name = "aa";
        Component z = obj.GetComponent<Transform>();
        z.transform.localPosition = Vector3.zero;
        //只要得到GameObject对象,就可以得到它身上的任何脚本信息
        //通过obj.GetComponent

        //查找对象相关的知识
        //查找单个对象
        //通过对象名查找
        //查找效率比较低下,因为他会在场景中所有对象去查找
        //没有找到就返回null
        GameObject obj2 = GameObject.Find("tang");
        if (obj2 != null)
        {
            print(obj2.name);
        }
        else
        {
            print("没找到");
        }
        //通过tag
        GameObject obj3 = GameObject.FindWithTag("Player");
        if (obj3 != null)
        {
            print(obj3.name);
        }
        else
        {
            print("根据tag没找到");
        }
        //通过tag找到多个对象
        GameObject obj4 = GameObject.FindWithTag("Player");
        //只能找到激活对象，无法找到shi'huo
        if (obj4 != null)
        {
            print("根据tag" + obj4.name);
        }
        //注意 只能找到激活对象
        //Unity 里的Object不是指的万物之父object。而是指命名空间UnityEngine中的object类，也是集成万物之父的一个自定义类
        //C#中的Object 命名空间实在System中的
        NewBehaviourScript o = GameObject.FindObjectOfType<NewBehaviourScript>();
        //可以找到场景中挂载的某一个脚本对象

        //实例化（克隆）的方法
        //关联预设体，动态生成对象
        GameObject.Instantiate(myb);
        //指定删除脚本
        GameObject.Destroy(this.gameObject);
        //指定删除对象
        GameObject.Destroy(obj3);
        //删除对象有两种作用

        //立刻从内存删除
        DestroyImmediate(o);


        //过场景不删除
        //默认情况 在切换场景时 场景中对象自动删除
        //切换场景后保留对象
        GameObject.DontDestroyOnLoad(this.gameObject);
```

## 时间和帧

```

        //时间缩放比例
        Time.timeScale = 0;
        //帧间隔时间，主要用来计算位移
        //路程=时间*速度
        //受scale影响
        print(Time.deltaTime);
        //不受scale影响的帧间隔时间
        print(Time.unscaledDeltaTime);

        //单机游戏计时
        //受scale影响
        print(Time.time);
        //不受scale影响
        print(Time.unscaledTime);

        //从开始到现在游戏跑了多少帧
        //帧数
           void Update()
    {
          print(Time.frameCount);
    }

```

## Vector3

```
//位移
        //路程=方向*速度*时间
        this.transform.position = this.transform.position + this.transform.forward * 1 * Time.deltaTime;

        //API
        //参数1,表示位移多少 路程=方向*速度*时间
        //参数2 表示相对坐标系,默认是相对于自身坐标系的

        //相对于世界坐标,始终朝 世界的z 轴朝向移动
        this.transform.Translate(Vector3.forward * 1 * Time.deltaTime,Space.World);

        //相对于世界坐标下,自己面朝向向量移动
        this.transform.Translate(this.transform.forward*1*Time.deltaTime, Space.World);
        //相对于自己的坐标系下的z轴方向移动 始终朝自己的面向移动
        this.transform.Translate(Vector3.forward * 1 * Time.deltaTime, Space.Self);

        //Vector3.forward;是世界的z轴朝向 this.transform.forward=是自身的z轴朝向
```

## 朝向和缩放

```
void Start()
{
//缩放
//相对世界坐标系
print(transform.lossyScale);
//相对本地坐标系
print(transform.localScale);
//attendtion
//1.同样缩放不能只改 xyz,只能一起改
//只能修改本地/相对缩放
//看向
transform.LookAt(Vector3.zero);
}

    // Update is called once per frame
    void Update()
    {
        //看向一个点
        //transform.LookAt(Vector3.zero);
        //看向一个对象
        transform.LookAt(lobj);
    }
```

## 父子关系

```
     print(this.transform.parent.name);
        this.transform.parent = null;
        this.transform.parent = GameObject.Find("Plane").transform;

        //使用api来进行父子关系的设置
        //参数:父对象,是否保存世界坐标的位置角度信息,true会保留,false,不会保留
        //保留世界坐标下的状态,和父对象进行计算,得到本地坐标系的信息
        //如果不保留会直接赋值,把世界坐标系直接赋值到本地坐标系下
        transform.SetParent(GameObject.Find("Cylinder").transform,false);
        //Find方法能够找到失活的对象的 GameObject相关的是不能找到失活对象的
        //GameObject必须要知道父对象才能找目标对象
        print(this.transform.Find("Cube3").name);
        //遍历子对象
        print(this.transform.childCount);
        //可以通过索引获取所有子对象
        for(int i = 0; i < this.transform.childCount; i++)
        {
            print("儿子的名字"+this.transform.GetChild(i).name);
        }


        //查找自己的子对象数量
        print(this.transform.childCount);
        //把自己设为第一个子对象
        //son.SetAsFirstSlibing();
        //把自己设置为最后一个儿子
        //son.SetAsLastSlibing();
        //超出范围会直接设置为最后一个对象

```

## 坐标转换

```

//世界坐标转本地坐标
print(Vector3.forward);
//点转换之后
print("转换后的点"+transform.InverseTransfor(Vector3.forward));
//方向转换之后
print("转换后的方向"+transform.InverseTransformDirection(Vector3.forward));
//受缩放影响的方向
print("转换后的方向" + transform.InverseTransformVector(Vector3.forward));

//本地坐标转世界坐标
//本地点转世界点
print("本地转世界点" + transform.TransformPoint(Vector3.forward));

//本地方向转世界方向
//不受缩放影响
print("转换后的方向" + transform.TransformDirection(Vector3.forward));
//受缩放影响
print("本地转世界方向" + transform.TransformVector(Vector3.forward));

```

## 输入

````

    // Start is called before the first frame update
    void Start()
    {
        print(Input.mousePosition);
        string[] strs = Input.GetJoystickNames();


        foreach (string str in strs)
        {

            print(str);
        }

    }

    // Update is called once per frame
    void Update()
    {


        //检测键盘输入
        if (Input.GetKeyDown(KeyCode.W)) {
            print("w");
        }
        //字符串重载,只能传小写
        if(Input.GetKeyDown("space"))
        {
            print("w键抬起");
        }
        //键盘长按
        if (Input.GetKey(KeyCode.W))
        {
            print("w按下");
        }

        //检测默认轴
        //unity 提供了更方便的方法

        //键盘AD按下时 返回-1到1之间的变换
        //键盘SW按下时 返回-1到1之间的变换
        //鼠标横向移动 -1到1左右
        //鼠标竖向移动 -1到1下上

        //GetAxisRaw方法 和GetAxis使用方式相同

        //只不过他的返回值只会是-1 0 1 不会有中间值
        //水平
       // print(Input.GetAxis("Horizontal"));
        //垂直
        //print(Input.GetAxis("Vertical"));
        //鼠标水平
        //print(Input.GetAxis("Mouse X"));
        //鼠标垂直
       // print(Input.GetAxis("Mouse Y"));

        //默认的GetAxisRaw方法 无渐变只返回 -1 0 1


        //是否有任意键或者鼠标长按
        //if (Input.anyKey)
        //{
           // print("有一个键长按");
        //}
        //是否有任意键或者鼠标按下
        //if (Input.anyKeyDown)
        //{
           // print("有一个键按下");
            //print(Input.inputString);
        //}

        //手柄输入相关
        if (Input.GetKeyDown(KeyCode.JoystickButton0))
        {
            print("Jump");
        }
        if (Input.GetKeyDown(KeyCode.JoystickButton1))
        {
            print("Atk");
        }
        //某一个手柄键按下


        //移动设备触摸相关
        if (Input.touchCount > 0)
        {
            //手指输入内容
            Touch t1 = Input.touches[0];
        }

        //多点触控开关
        Input.multiTouchEnabled = false;

        //陀螺仪
        Input.gyro.enabled = true;
        //重力加速度向量
        print(Input.gyro.gravity);
        //旋转速度
        print(Input.gyro.rotationRate);

    }
    ```

````

## 屏幕

```
        //��ǰ��ʾ���ֱ���
        print(Screen.currentResolution.ToString());
        //���ڷֱ���
        print(Screen.width.ToString());
        print(Screen.height.ToString());
        //��Ļ����ģʽ
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
        //ȫ��MODE
        Screen.fullScreen = true;
        //��ռ
        Screen.fullScreenMode = FullScreenMode.Windowed;

        //�ƶ��豸��Ļת�����
        //�����Զ���תΪ����� Home������
        Screen.autorotateToLandscapeLeft = true;
        //������ת
        Screen.autorotateToPortrait= true;

        //ָ����Ļ��ʾ����
        Screen.orientation = ScreenOrientation.LandscapeLeft;
```
