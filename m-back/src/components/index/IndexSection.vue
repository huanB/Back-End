<template>
<section>
    <div class="counter">
        <div class="Global">
            <div class="header">
                <p>Global Sales by Top Locations</p>
                <span>All products that were shipped</span>
            </div>
            <div class="row">
                <div class="table">
                    <ul>
                        <li>
                            <img src="../../../static/img/ih7.png" alt="">
                            <span>USA</span>
                            <span>2.920	</span>
                            <span>53.23%</span>
                        </li>
                        <li>
                            <img src="../../../static/img/ih8.png" alt="">
                            <span>Germany</span>
                            <span>1.300</span>
                            <span>20.43%</span>
                        </li>
                        <li>
                            <img src="../../../static/img/ih9.png" alt="">
                            <span>Australia</span>
                            <span>760</span>
                            <span>10.35%</span>
                        </li>
                        <li>    
                            <img src="../../../static/img/ih10.png" alt="">
                            <span>USA</span>
                            <span>2.920	</span>
                            <span>53.23%</span>
                        </li>
                        <li>
                            <img src="../../../static/img/ih11.png" alt="">
                            <span>USA</span>
                            <span>2.920	</span>
                            <span>53.23%</span>
                        </li>
                        <li>
                            <img src="../../../static/img/ih12.png" alt="">
                            <span>USA</span>
                            <span>2.920	</span>
                            <span>53.23%</span>
                        </li>
                    </ul>
                </div>
                <div class="svg">
                    <div id="E_zkcl">

                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="email">
                <div class="email-header">
                <p>Email Statistics</p>
                <span>Last Campaign Performance</span>
                </div>
                <div class="coutent">
                    <div id="mycharts"></div>
                </div>
                <div class="email-footer">
                    <img src="../../../static/img/ih13.png" alt="">
                    <span>Campaign sent 2 days ago</span>
                </div>
            </div>
            
            <div class="users">
                <div class="email-header">
                <p>Users Behavior</p>
                <span>24 Hours performance</span>
                </div>
                <div class="users-counter">
                    <div id="mycharts3">

                    </div>
                </div>
                <div class="users-footer">
                    <img src="../../../static/img/ih14.png" >
                    <span>Updated 3 minutes ago</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import chinajs from '../../../static/js/echarts/china'
import myChart from '../../apis/mychart.js'
export default {
  data() {
    return {
       
    };
  },

  methods: {
        drawChart() {
        var geoCoordMap = {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028]
        };

        var BJData = [
            [{ name: '北京' }, { name: '上海', value: 95 }],
            [{ name: '北京' }, { name: '广州', value: 90 }],
            [{ name: '北京' }, { name: '大连', value: 80 }],
            [{ name: '北京' }, { name: '南宁', value: 70 }],
            [{ name: '北京' }, { name: '南昌', value: 60 }],
            [{ name: '北京' }, { name: '拉萨', value: 50 }],
            [{ name: '北京' }, { name: '长春', value: 40 }],
            [{ name: '北京' }, { name: '包头', value: 30 }],
            [{ name: '北京' }, { name: '重庆', value: 20 }],
            [{ name: '北京' }, { name: '常州', value: 10 }]
        ];

        var SHData = [
            [{ name: '上海' }, { name: '包头', value: 95 }],
            [{ name: '上海' }, { name: '昆明', value: 90 }],
            [{ name: '上海' }, { name: '广州', value: 80 }],
            [{ name: '上海' }, { name: '郑州', value: 70 }],
            [{ name: '上海' }, { name: '长春', value: 60 }],
            [{ name: '上海' }, { name: '重庆', value: 50 }],
            [{ name: '上海' }, { name: '长沙', value: 40 }],
            [{ name: '上海' }, { name: '北京', value: 30 }],
            [{ name: '上海' }, { name: '丹东', value: 20 }],
            [{ name: '上海' }, { name: '大连', value: 10 }]
        ];

        var GZData = [
            [{ name: '广州' }, { name: '福州', value: 95 }],
            [{ name: '广州' }, { name: '太原', value: 90 }],
            [{ name: '广州' }, { name: '长春', value: 80 }],
            [{ name: '广州' }, { name: '重庆', value: 70 }],
            [{ name: '广州' }, { name: '西安', value: 60 }],
            [{ name: '广州' }, { name: '成都', value: 50 }],
            [{ name: '广州' }, { name: '常州', value: 40 }],
            [{ name: '广州' }, { name: '北京', value: 30 }],
            [{ name: '广州' }, { name: '北海', value: 20 }],
            [{ name: '广州' }, { name: '海口', value: 10 }]
        ];

        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[1].value
                    });
                }
            }
            return res;
        };

        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
            series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        let option = {
            backgroundColor: '',
            title: {
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params, ticket, callback) {
                    if (params.seriesType == "effectScatter") {
                        return "线路：" + params.data.name + "" + params.data.value[2];
                    } else if (params.seriesType == "lines") {
                        return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                    } else {
                        return params.name;
                    }
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series
        };
        this.Chart1.setOption(option);
    },
        myChart2(){
            var data = {
    id: 'echartPie',
    legend: ['', '', ''],
    value: [6, 62, 32],
    color: [ '#ffa534', '#23ccef','#fb404b',],
    // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
    // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
    title: '饼图',
}
/**
 * 数据处理
 */
var seriesData = []
data.value.forEach(function(item, index) {
    seriesData.push({
        value: item,
        name: data.legend[index]
    })
})
var option2 = {
    backgroundColor: '#fff',
    title: {
        x: '2%',
        y: '2%',
        textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
        },
        text: data.title || ''
    },
    tooltip: {
        trigger: 'item',
        show: data.tooltipShow === false ? false : true
        //   formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        top: 16,
        icon: 'circle',
        selectedMode: false,
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 6,
        borderRadius: 6,
        data: data.legend
    },
    series: [{
        type: 'pie',
        // clickable:false,
        // selectedMode: 'single',//单点击设置
        hoverAnimation: data.hoverAnimation === false ? false : true,
        radius: ['.1%', '67%'],
        color: data.color,
        label: {
            normal: {
                position: 'inner',
                // formatter: '{d}%',
                formatter: function(param) {
                    if (!param.percent) return ''
                    var f = Math.round(param.percent * 10) / 10;
                    var s = f.toString();
                    var rs = s.indexOf('.');
                    if (rs < 0) {
                        rs = s.length;
                        s += '.';
                    }
                    while (s.length <= rs + 1) {
                        s += '0';
                    }
                    return s + '%';
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: seriesData
    }]
};     
    this.Chart2.setOption(option2);
        },
        myChart3(){
            var months = [
            '2016/01/01','2016/01/02','2016/01/03','2016/01/04','2016/01/05',
            '2016/01/06','2016/01/07','2016/01/08','2016/01/09','2016/01/10',
            '2016/01/11','2016/01/12','2016/01/13','2016/01/14','2016/01/15',
];
        var option3 = {
        tooltip: {
        confine: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            //animation: false
        }
    },
    legend: {
        data:['sku1、sku2', 'sku3、sku4','sku1&sku2', 'sku3&sku4'],
        x: 'left',
        top: '4%'
    },
    // toolbox: {
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    dataZoom: [
        {
            show: true,
            realtime: true,
            // start: 30,---从30%开始显示
            // end: 70,---显示至70%
            startValue: months.slice(months.length-10, months.length-9)[0],
            endValue: months.slice(months.length-1, months.length)[0],
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            // start: 30,---从30%开始显示
            // end: 70,---显示至70%
            startValue: months.slice(months.length-10, months.length-11)[0],
            endValue: months.slice(months.length-1, months.length)[0],
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        top: '10%',
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '45%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: months
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: months,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '价格',
            type : 'value'//,
            // max : 500
        },
        {
            gridIndex: 1,
            name : '销量',
            type : 'value',
            inverse: true
        }
    ],
    series : [
        {
            name:'sku1、sku2',
            type:'line',
            smooth: true,
            //symbolSize: 8,
            //hoverAnimation: false,
            data:[
              15.8,16,17,19,15,16,15,14,12,14,11,12,13,11,13
            ]
        },
        {
            name:'sku3、sku4',
            type:'line',
            smooth: true,
            //symbolSize: 8,
            //hoverAnimation: false,
            data:[
              null,null,null,16,14,11,18,11,16,13,12,11,15,16,17
            ]
        },
        {
            name:'sku1&sku2',
            type:'line',
            smooth: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data:[
              15.8,14,12,16,14,11,18,11,16,13,12,11,15,16,17
            ]
        },
        {
            name:'sku3&sku4',
            type:'line',
            smooth: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data:[
               null,null,null,0,2,8,8,18,1,0,1,20,25,16,10
            ]
        }
    ]
};
    this.Chart3.setOption(option3);
        }
  },
  mounted () {
        this.Chart1 = this.$echarts.init(document.getElementById("E_zkcl"));
        this.drawChart()
       
        this.Chart2 = this.$echarts.init(document.getElementById("mycharts"));
        this.myChart2();

        this.Chart3 = this.$echarts.init(document.getElementById("mycharts3"));
        this.myChart3();
  },
   components: {},
}
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  background: #f5f5f5;
  justify-content: center;
}
.counter {
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Global {
  width: 100%;
  height: 400px;
  background: white;
  margin-top: 25px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);
}
.row {
  width: 100%;
  height: 300px;
  display: flex;
}
.header {
  width: 100%;
  height: 60px;
}
.header p {
  color: #333333;
  font-weight: 300;
  font-size: 20px;
  margin-left: 10px;
  line-height: 40px;
}
.header span {
  font-size: 15px;
  font-weight: 400;
  color: #888888;
  margin-left: 10px;
}
.table {
  width: 40%;
  height:300px;
}
.table ul li{
    width:100%;
    height:45px;
    display: flex;
    align-items: center;
}
.svg {
  width: 60%;
  height:300px;
  display:flex;
  justify-content: flex-end;
  margin-right:20px;
}
.table ul:first-child{
    margin-top:20px;
}
.table ul li{
    border-top:1px #e3e3e3 solid;
    margin-left:10px;
}
.table ul li :nth-child(1){
    padding:0 20px;
    margin-right:15px;
}
.table ul li :nth-child(2){
    width:200px;
}
.table ul li :nth-child(3){
    width:88px;
}
.table ul li :nth-child(4){
    width:120px;
    text-align: right;
    margin-right:20px;
}
.table ul li span{
    font-size: 13px;
    color:#333333;
}
#E_zkcl{
    width:578px;
    height:300px;
}
.card{
    width:100%;
    background:#f5f5f5;
    height:490px;
    margin-top:25px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

}
.email{
    width:385px;
    height:490px;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);
    border-radius: 5px;
}
.users{
    width:800px;
    height:490px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);
}
.email-footer{
    width:90%;
    height:40px;
    border-top:1px #dddddd solid;
    display: flex;
    align-items: center;
    margin: 0 auto;
}
.email-header {
  width: 100%;
  height: 60px;
}
.email-header p {
  color: #333333;
  font-weight: 300;
  font-size: 20px;
  margin-left: 10px;
}
.email-header span {
  font-size: 15px;
  font-weight: 400;
  color: #888888;
  margin-left:10px;
}
.email-footer img{
    width:14px;
    height:14px;
    margin-right:10px;
}
.email-footer{
    color:#a9a9a9;
    font-size: 13px;
}
.coutent{
    width:100%;
    height:350px;
    margin: 20px 0px;
}
#mycharts{
    width:100%;
    height:350px;
}
.users-counter{
    width:100%;
    height:335px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}
#mycharts3{
    width:770px;
    height:335px;
}
.users-footer{
    width:90%;
    height:50px;
    margin:0 auto;
    border-top:1px #dddddd solid;
    align-items: center;
    display: flex;
}
.users-footer span{ 
    font-size: 12px; 
    color:#a9a9a9;
    margin-left:10px;
} 
.users-footer img{
    width:14px;
    height:14px;
}  
</style>
