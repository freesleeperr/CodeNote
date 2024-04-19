# 从 VertexLit 开始

```
Shader "VertexLit" {
    Properties {
        _Color ("Main Color", Color) = (1,1,1,0.5)
        _SpecColor ("Spec Color", Color) = (1,1,1,1)
        _Emission ("Emmisive Color", Color) = (0,0,0,0)
        _Shininess ("Shininess", Range (0.01, 1)) = 0.7
        _MainTex ("Base (RGB)", 2D) = "white" { }
    }

    SubShader {
        Pass {
            Material {
                Diffuse [_Color]
                Ambient [_Color]
                Shininess [_Shininess]
                Specular [_SpecColor]
                Emission [_Emission]
            }
            Lighting On
            SeparateSpecular On
            SetTexture [_MainTex] {
                constantColor [_Color]
                Combine texture * primary DOUBLE, texture * constant
            }
        }
    }
}
```

## 属性

对应 inspect 的属性
`_Color ("Main Color", Color) = (1,1,1,0.5)`
\_内部属性名（”检查面板属性“，属性类型）=（默认值）

## 着色器主体

不同的图形硬件具有不同的功能。例如，某些显卡支持片元程序，其他显卡则不支持；有些显卡在每个通道中可以放下四个纹理，而有些只能放下两个或一个；为了让您充分利用用户拥有的任何硬件，着色器可以包含多个\_\_子着色器（subshader）

当 unity 渲染着色器时，会遍历所有子着色器并采用硬件支持的第一个子着色器

```
Shader "Structure Example" {
    Properties { /* ...shader properties...}
    SubShader {
    // ...需要 DX11/GLES3.1 硬件的子着色器...
    }
    SubShader {
    // ...可能看起来更差但可在任何硬件上运行的子着色器 :)
    }
}

```

## 通道

每个子着色器是多个通道的集合
每个通道都将渲染对象几何体，因此必须至少有一个通道。我们的 VertexLit 着色器只有一个通道：

```
// ...代码片段...
Pass {
    Material {
        Diffuse [_Color]
        Ambient [_Color]
        Shininess [_Shininess]
        Specular [_SpecColor]
        Emission [_Emission]
    }
    Lighting On
    SeparateSpecular On
    SetTexture [_MainTex] {
        constantColor [_Color]
        Combine texture * primary DOUBLE, texture * constant
    }
}
// ...代码片段...
```

### Material

可将我们的属性值绑定到固定函数光照材质设置。

### Lighting&SeparateSpecular

- 在上面的示例中，我们有一个 Material 代码块，可将我们的属性值绑定到固定函数光照材质设置。
- Lighting On 命令可开启标准顶点光照
- SeparateSpecular On 则可以对镜面高光启用单独的颜色。

- \_Color:材质的颜色

### SetTexture

```
SetTexture [_MainTex] {
        constantColor [_Color]
        Combine texture * primary DOUBLE, texture * constant
    }
```

#### 颜色混合算法

这里的 texture 是来自当前纹理（此处为 \_MainTex**）的颜色。它与 primary** 顶点颜色相乘 (\*)。主色是顶点光照颜色，根据上面的材质值计算得出。
最后，将结果乘以 2 以增加光照强度 (DOUBLE)。Alpha 值（逗号后面）是 texture 乘以 constant 值（使用上面的 constantColor 进行设置）。
另一种经常使用的组合器模式称为 previous**（此着色器中未使用）。这是之前任何 SetTexture** 步骤的结果，可用于将多个纹理和/或颜色相互组合。

## 总结

我们的 VertexLit 着色器可配置标准顶点光照并设置纹理组合器，使渲染的光照强度加倍。

# 顶点和片元程序(可编程管线)

## 基础结构

```
Shader "MyShaderName"
{
    Properties
    {
        // 此处为材质属性
    }
    SubShader // 图形硬件 A 的子着色器
    {
        Pass
        {
            // 通道命令 ...
        }
        // 更多通道（如果需要）
    }
    // 更多子着色器（如果需要）
    FallBack "VertexLit" // 可选回退
}

```

## 将对象法线渲染为彩色的 shader

```
Shader "Tutorial/Display Normals" {
    SubShader {
        Pass {

            CGPROGRAM
            // 声明使用顶点和片元着色器
            #pragma vertex vert
            #pragma fragment frag
            // 包含Unity着色器常用的声明和函数
            #include "UnityCG.cginc"

            // 定义一个结构用于从顶点到片元传递数据
            struct v2f {
                float4 pos : SV_POSITION; // 顶点位置
                fixed3 color : COLOR0;    // 颜色
            };

            // 顶点着色器函数，将顶点位置转换到裁剪空间，并计算颜色
            v2f vert (appdata_base v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex); // 将对象空间坐标转换为裁剪空间坐标
                o.color = v.normal * 0.5 + 0.5; // 使用法线方向计算颜色
                return o;
            }

            // 片元着色器函数，输出颜色
            //输出的ozuo
            fixed4 frag (v2f i) : SV_Target
            {
                return fixed4 (i.color, 1); // 输出计算得到的颜色
            }
            ENDCG

        }
    }
}

```

## Cg/HLSL 代码中使用着色器属性

```
Shader "Tutorial/Textured Colored" {
    Properties {
        _Color ("Main Color", Color) = (1,1,1,0.5) // 主颜色属性，可以在Unity编辑器中调整
        _MainTex ("Texture", 2D) = "white" { } // 主纹理属性，可以在Unity编辑器中选择纹理
    }
    SubShader {
        Pass {

        CGPROGRAM
        #pragma vertex vert // 指定顶点着色器函数
        #pragma fragment frag // 指定片元着色器函数

        #include "UnityCG.cginc"

        fixed4 _Color; // 主颜色属性
        sampler2D _MainTex; // 主纹理属性

        struct v2f {
            float4 pos : SV_POSITION; // 顶点位置
            float2 uv : TEXCOORD0; // 纹理坐标
        };

        float4 _MainTex_ST; // 主纹理的缩放和偏移参数

        v2f vert (appdata_base v)
        {
            v2f o;
            o.pos = UnityObjectToClipPos(v.vertex); // 将对象空间坐标转换为裁剪空间坐标
            o.uv = TRANSFORM_TEX(v.texcoord, _MainTex); // 对纹理坐标进行缩放和偏移
            return o;
        }

        fixed4 frag (v2f i) : SV_Target
        {
            fixed4 texcol = tex2D(_MainTex, i.uv); // 从主纹理中获取颜色
            return texcol * _Color; // 将纹理颜色与主颜色属性相乘作为最终颜色输出
        }
        ENDCG

        }
    }
}

```
