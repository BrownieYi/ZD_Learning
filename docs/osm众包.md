# OSM规则变换说明
# 背景色
  #EFE9E1

# 关于Google Maps的zoom level与比例尺的转换
```
Meters per pixel (MPP) = 156543.03392 * Math.cos(latLng.lat() * Math.PI / 180) / Math.pow(2, zoom)

Dots Per Inch (DPI) = PPI = √(pixels_horizontal^2 + pixels_vertical^2) / inches_diagonal

Meter scale = MPP / (0.0254/DPI)
```
  
# 点规则

## 自然
  | 英文名称              | 中文名称       |
  |:---|:---|
  | beach         | 海滩点 |
  | cave_entrance | 洞穴点 |
  | cliff         | 悬崖点 |
  | glacier       | 冰河点 |
  | peak          | 山峰点 |
  | spring        | 泉水点 |
  | tree          | 树点   |
  | volcano       | 火山点 |

## 宗教
 | 英文名称              | 中文名称       | 国标-颜色 | 起始级别 | 结束级别 |
 |:--- |:--- |:--- |:--- |:---|
 | buddhist              | 佛教点          |           |          |          |
 | christian             | 基督教点        |           |          |          |
 | christian_anglican    | 基督教圣公会点   |           |          |          |
 | christian_catholic    | 基督教天主教点   |           |          |          |
 | christian_evangelical | 基督教福音派点   |           |          |          |
 | christian_lutheran    | 基督教路德会点   |           |          |          |
 | christian_methodist   | 基督教卫理公会点 |           |          |          |
 | christian_orthodox    | 基督教正统会点   |           |          |          |
 | christian_protestant  | 基督教新教会点   |           |          |          |
 | hindu                 | 印度教点         |           |          |          |
 | jewish                | 犹太教点         |           |          |          |
 | muslim                | 穆斯林教点       |           |          |          |
 | muslim_shia           | 穆斯林什叶派点   |           |          |          |
 | muslim_sunni          | 穆斯林逊尼派点   |           |          |          |
 | sikh                  | 锡克教点         |           |          |          |

## 地点
  | 英文名称         | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
   |:--- |:--- |:--- |:--- |:---|
  | national_capital | 首都点   | #FF0000   |        3 |       24 |
  | island           | 岛屿点    |           |        6 |       13 |
  | city             | 城市点   |           |        6 |        9 |
  | town             | 市镇点   |           |        8 |       10 |
  | region           | 地区点   |           |        8 |       10 |
  | county           | 乡村点   |           |        8 |       11 |
  | village          | 村庄点   |           |       12 |       14 |
  | hamlet           | 小村庄点 |           |       10 |       13 |
  | locality         | 所在地点 |           |       12 |       14 |
  | farm             | 农场点   |           |       12 |       14 |
  | suburb           | 郊区点   |           |       12 |       14 |

## 陆地交通
  | 英文名称            | 中文名称       | 国标-颜色 | 起始级别 | 结束级别 |
   |:--- |:--- |:--- |:--- |:---|
  | crossing            | 十字路口点      |           |       13 |       24 |
  | dam                 | 河堤点         |           |       13 |       24 |
  | ford                | 浅滩点         |           |       13 |       24 |
  | fuel                | 加油站点        |           |       13 |       24 |
  | lock_gate           | 闸门点         |           |       13 |       24 |
  | marina              | 码头点         |           |       13 |       24 |
  | mini_roundabout     | 环状交叉路口点  |           |       13 |       24 |
  | motorway_junction   | 高速公路连接点 |           |       13 |       24 |
  | parking             | 停车场点       |           |       13 |       24 |
  | parking_bicycle     | 自行车停车场点 |           |       13 |       24 |
  | parking_multistorey | 多层停车场点   |           |       13 |       24 |
  | parking_underground | 地下停车场点   |           |       13 |       24 |
  | service             | 公共服务点     |           |       13 |       24 |
  | slipway             | 船台滑道点     |           |       13 |       24 |
  | speed_camera        | 摄像头点       |           |       13 |       24 |
  | stop                | 停车点         |           |       13 |       24 |
  | street_lamp         | 路灯点         |           |       13 |       24 |
  | traffic_signals     | 信号灯点       |           |       13 |       24 |
  | turning_circle      | 旋转点         |           |       13 |       24 |
  | waterfall           | 瀑布点         |           |       13 |       24 |
  | weir                | 堤坝点         |           |       13 |       24 |
  
## 交通
   | 英文名称        | 中文名称       | 国标-颜色 | 起始级别 | 结束级别 |
   |:--- |:--- |:--- |:--- |:---|
   | bus_station     | 公交车站点     |           |       13 |       24 |
   | bus_stop        | 汽车站点       |           |       15 |       24 |
   | ferry_terminal  | 渡轮码头点     |           |       13 |       24 |
   | railway_halt    | 机动轨道点     |           |       13 |       24 |
   | railway_station | 机动站点       |           |       13 |       24 |
   | taxi            | 出租车停靠位置 |           |       13 |       24 |
   | tram_stop       | 电车点         |           |       13 |       24 |

## 名胜古迹
   | 英文名称 | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
   |:--- |:--- |:--- |:--- |:---|
   | *        | *        |           |       14 |       24 |

## 自然地   
 | 英文名称      | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | beach         | 沙滩     |           |        6 |       10 |
 | cave_entrance | 洞穴口   |           |        6 |       10 |
 | cliff         | 峭壁     |           |        6 |       10 |
 | glacier       | 冰洞     | #FFFFFF   |        6 |       10 |
 | peak          | 山顶     |           |       11 |       24 |
 | spring        | 泉眼     |           |        6 |       10 |
 | tree          | 树木     |           |       16 |       24 |
 | weir          | 坝口     |           |        6 |       10 |
 
## POI
 | 英文名称 | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | *        | *        |           |          |          |

# 线规则
## 轨道
  | 英文名称          | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
   |:--- |:--- |:--- |:--- |:---|
  | funicular         | 缆索轨道 | #4DAFCB   |       13 |       16 |
  | light_rail        | 轻轨轨道 | #4DAFCB   |       13 |       16 |
  | miniature_railway | 小铁路   | #000000   |        6 |       14 |
  | monorail          | 单轨铁路 | #000000   |        6 |       14 |
  | narrow_gauge      | 窄轨铁路 | #000000   |        6 |       14 |
  | rail              | 铁路     | #000000   |        5 |       20 |
  | subway            | 地铁     | #CE7BB8   |       13 |       16 |
  | tram              | 电车轨道 | #4DAFCB   |       13 |       16 |

## waterways - 水域陆地
   | 英文名称 | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |谷歌-颜色|
   |:--- |:--- |:--- |:--- |:---|:---|
   | cannal   | 运河     | #8DCBF7   |        8 |       16 |#aadaff|
   | drain    | 排水道   | #8DCBF7   |       13 |       16 |
   | river    | 河流     | #8DCBF7   |        8 |       16 |
   | stream   | 溪流     | #8DCBF7   |       13 |       16 |#aadaff|

## roads - 陆地交通
   | 英文名称       | 中文名称      | 国标-颜色 | 起始级别 | 结束级别 |谷歌-颜色|谷歌-边框颜色|
   |:--- |:--- |:--- |:--- |:---|:---|:---|
   | case           | *辅路         | #D6D9E6   |        0 |       24 |
   | bridleway      | 骑马道/大车道 |           |          |          |
   | cycleway       | 自行车道      | #FFFFFF   |       15 |       24 |#b5dbc0|
   | footway        | 行人道        | #FFFFFF   |       15 |       24 |
   | living_street  | 流动街道      | #FFFFFF   |       16 |       24 |
   | motorway       | 高速公路      | #FFA35C   |       10 |       24 |
   | motorway_link  | 高速公路_链接 | #FFA35C   |       10 |       24 |
   | path           | 小路          | #FFFFFF   |       11 |       24 |
   | pedestrian     | 人行道        | #D6D9E6   |       12 |       24 |
   | primary        | 一级道路      | #EECE5A   |       11 |       24 |
   | primary_link   | 一级道路_链接 | #EECE5A   |       11 |       24 |
   | residential    | 住宅道路      | #FFFFFF   |       15 |       24 |#ffffff|#dadce0|
   | secondary      | 二级道路      | #FFFFFF   |       11 |       24 |#fff2af|#f6d26f|
   | secondary_link | 二级道路_链接 | #FFFFFF   |       11 |       24 |#fff2af|#f6d26f|
   | service        | 公共服务道路  | #D6D9E6   |       14 |       24 |#ffffff|#ececec|
   | steps          | 台阶          | #FFFFFF   |       16 |       24 |
   | tertiary       | 三级道路      | #FFFFFF   |       11 |       24 |#ffffff|#dadce0|
   | tertiary_link  | 三级道路_链接 | #FFFFFF   |       11 |       24 |#ffffff|#dadce0|
   | track          | 轨道          | #D6D9E6   |       14 |       24 |#ffffff|#dadce0|
   | track_grade1   | 轨道_向导_1   | #D6D9E6   |       14 |       24 |
   | track_grade2   | 轨道_向导_2   | #D6D9E6   |       14 |       24 |
   | track_grade3   | 轨道_向导_3   | #D6D9E6   |       14 |       24 |
   | track_grade4   | 轨道_向导_4   | #D6D9E6   |       14 |       24 |
   | track_grade5   | 轨道_向导_5   | #D6D9E6   |       14 |       24 |
   | trunk          | 主干道        | #F2D163   |       16 |       24 |#fff2af|#f6d26f|
   | trunk_link     | 主干道_链接   | #F2D163   |       16 |       24 |#fff2af|#f6d26f|
   | unclassified   | 未分类道路    | #CDCAC6   |       15 |       16 |
   | unknown        | 不明道路      | #CDCAC6   |       15 |       16 |

# 区类型
## 土地利用
  | 英文名称          | 中文名称   | 国标-颜色 | 起始级别 | 结束级别 |
   |:--- |:--- |:--- |:--- |:---|
  | allotments        | 分配土地   |           |          |          |
  | cemetery          | 墓地       | #D8E0BD   |        0 |       14 |
  | commercial        | 商业用地   | #E8E0ED   |       14 |       24 |
  | farm              | 农业用地   | #B8DDA5   |        0 |       14 |
  | forest            | 森林       | #D1E7A6   |       14 |       24 |
  | grass             | 草地       | #B8DDA5   |        0 |       14 |
  | heath             | 荒地       | #B8DDA5   |        0 |       14 |
  | industrial        | 工厂       | #D6D8E1   |        0 |       14 |
  | meadow            | 牧场       | #37FF37   |       14 |       24 |
  | military          | 军事用地   |           |          |          |
  | nature_reserve    | 自然保护区 |           |          |          |
  | orchard           | 果园       |           |          |          |
  | park              | 公园       |           |          |          |
  | quarry            | 矿地       |           |          |          |
  | recreation_ground | 娱乐用地   | #B8DDA5   |          |          |
  | residential       | 住宅用地   | #E4E1DD   |       14 |       24 |
  | retail            | 零售地     | #E8E0ED   |       14 |       24 |
  | scrub             | 矮树       | #DEEDB1   |        0 |       14 |
  | vineyard          | 葡萄园     |           |          |          |

## 自然地
 | 英文名称      | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | beach         | 海滩     |           |        6 |       10 |
 | bare_rock     | 裸岩     |           |          |          |
 | cave_entrance | 洞穴     |           |        6 |       10 |
 | cliff         | 悬崖     |           |        6 |       10 |
 | fell          | 丘陵     |           |          |          |
 | footway       | 人行道   |           |          |          |
 | forest        | 森林     |           |          |          |
 | grass         | 草地     |           |          |          |
 | grassland     | 草原     |           |          |          |
 | glacier       | 冰川     | #FFFFFF   |        6 |       10 |
 | heath         | 荒野     |           |          |          |
 | marsh         | 沼泽     |           |          |          |
 | mud           | 泥地     |           |          |          |
 | sand          | 沙地     |           |          |          |
 | scree         | 岩屑堆   |           |          |          |
 | scrub         | 灌木丛   |           |          |          |
 | shoal         | 浅滩     |           |          |          |
 | stone         | 石地     |           |          |          |
 | tree_row      | 树林     |           |          |          |
 | trees         | 树木     |           |          |          |
 | peak          | 山峰     |           |        6 |       10 |
 | spring        | 泉水     |           |        6 |       10 |
 | tree          | 树       |           |        6 |       10 |
 | weir          | 坝       |           |        6 |       10 |
 | water         | 水       |           |          |          |
 | wetland       | 湿地     |           |          |          |
 | wood          | 树林     |           |          |          |

## 地点
 | 英文名称 | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | city     | 城市     | #E6EBD8   |        0 |        5 |
 | county   | 乡村     | #D1E1CC   |        0 |        6 |
 | farm     | 农田     | #B8DDA5   |        0 |       14 |
 | hamlet   | 小村庄   | #D1E1CC   |          |          |
 | island   | 岛       | #F5F5F5   |        0 |        7 |
 | locality | 所在地   |           |          |          |
 | region   | 地区     | #E1E8DB   |        0 |        5 |
 | suburb   | 郊区     | #D1E1CC   |        0 |        6 |
 | town     | 城镇     | #BDD3B9   |        6 |       14 |
 | village  | 村庄     | #BDD3B9   |        6 |       14 |

## 运输
 | 英文名称            | 中文名称     | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | dam                 | 水坝         |           |          |          |
 | fuel                | 加油站       | #E8E0ED   |       13 |       16 |
 | lock_gate           | 闸门         |           |          |          |
 | marina              | 码头         |           |          |          |
 | parking             | 停车场       | #D8E6ED   |       13 |       16 |
 | parking_bicycle     | 自行车停车场 | #D8E6ED   |       13 |       16 |
 | parking_multistorey | 多层停车场   | #D8E6ED   |       13 |       16 |
 | parking_underground | 地下停车场   | #D8E6ED   |       13 |       16 |
 | service             | 维修区       |           |          |          |
 | slipway             | 滑道         |           |          |          |
 | waterfall           | 瀑布         |           |          |          |
 | weir                | 堤坝         |           |          |          |

## 交通
| 英文名称        | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
 |:--- |:--- |:--- |:--- |:---|
| airport         | 飞机场   | #C7CADC   |       11 |       16 |
| bus_station     | 公交车站 | #BDE2DC   |       11 |       16 |
| bus_stop        | 汽车站   | #BDE2DC   |       11 |       16 |
| ferry_terminal  | 码头渡轮 |           |       11 |       16 |
| railway_halt    | 机动轨道 | #BDE2DC   |       11 |       16 |
| railway_station | 机动站   | #BDE2DC   |       11 |       16 |
| taxi            | 出租车站 |           |       11 |       16 |

## 水域
| 英文名称     | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
 |:--- |:--- |:--- |:--- |:---|
| dock         | 船坞     | #B5CFFF   |       13 |       16 |
| glacier      | 冰川地区 | #FFFFFF   |       13 |       16 |
| reservoir    | 水库     | #B5CFFF   |       13 |       16 |
| river        | 河流流域 | #B5CFFF   |       13 |       16 |
| water        | 水       | #75CFF0   |       13 |       16 |
| water-shadow | 水-阴影  | #6EA5F2   |       13 |       16 |
| wetland      | 湿地     | #B5CFFF   |       13 |       16 |

## 建筑
| 英文名称 | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
 |:--- |:--- |:--- |:--- |:---|
| building | 建筑*    | #E4E1DD   |       14 |       24 |
|          |          |           |          |          |

## POI
 | 英文名称      | 中文名称  | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | *             | *         | #EEECE7   |       13 |       16 |
 | attraction    | 观光胜地  | #EEE3CE   |       13 |       16 |
 | park          | 公园POI面 | #CAE39B   |       13 |       16 |
 | university    | 大学      | #DDEAF0   |       13 |       16 |
 | hospital      | 医院      | #EAD8DE   |       13 |       16 |
 | college       | 学校      | #DDEAF0   |       13 |       16 |
 | zoo           | 动物园    | #CAE39B   |       13 |       16 |
 | library       | 图书馆    | #EEE3CE   |       13 |       16 |
 | golf_course   | 高尔夫    | #CAE39B   |       13 |       16 |
 | sports_centre | 体育馆    | #DDEAF0   |       13 |       16 |

## 名胜古迹
 | 英文名称 | 中文名称 | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | *        | *        | #EAD8DE   |       13 |       16 |

## 宗教
 | 英文名称              | 中文名称       | 国标-颜色 | 起始级别 | 结束级别 |
  |:--- |:--- |:--- |:--- |:---|
 | buddhist              | 佛教           |           |          |          |
 | christian             | 基督教         |           |          |          |
 | christian_anglican    | 基督教圣公会   |           |          |          |
 | christian_catholic    | 基督教天主教   |           |          |          |
 | christian_evangelical | 基督教福音派   |           |          |          |
 | christian_lutheran    | 基督教路德会   |           |          |          |
 | christian_methodist   | 基督教卫理公会 |           |          |          |
 | christian_orthodox    | 基督教正统会   |           |          |          |
 | christian_protestant  | 基督教新教会   |           |          |          |
 | hindu                 | 印度教         |           |          |          |
 | jewish                | 犹太教         |           |          |          |
 | muslim                | 穆斯林教       |           |          |          |
 | muslim_shia           | 穆斯林什叶派   |           |          |          |
 | muslim_sunni          | 穆斯林逊尼派   |           |          |          |
 | sikh                  | 锡克教         |           |          |          |
 
