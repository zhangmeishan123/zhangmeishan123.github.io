(function(){
    var myChart = echarts.init(document.querySelector(".bar .char"))
    var option = {
                    title: {
                    },
                    tooltip: {
                        trigger:"axis",                    
                        axisPointer:{
                        type:"shadow"
                        },
                    },

                    grid:{
                        left:'6%',
                        right:'5%',
                        top:'2%',
                        bottom:'15%',
                        containlabel:true,

                    },
                    legend: {
                        data:['出库'],
                        align:'auto',
                        orient:'horizontal',
                        left:'75%',
                        y:'top',
                        textStyle:{
                            color:'#ffffff'
                        }

                    },
                    xAxis: {
                        axisLine:{
                            lineStyle:{
                                color:'#fff'
                            }
                        },
                        data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                        axisLabel:{
                            textStyle:{
                                color:'#ffffff',
                                fontSize:10,
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle:{
                               color: ['#315070'],
                               width: 1,
                               type: 'solid'
                          }
                    　　}

                    },
                    yAxis: {   
                        axisLine:{
                            lineStyle:{
                                color:'#fff'
                            }},                     
                        axisLabel:{
                        textStyle:{
                            color:'#ffffff',
                            fontSize:10,
                        }},
                        splitLine: {
                            show: true,
                            lineStyle:{
                               color: ['#315070'],
                               width: 1,
                               type: 'solid'
                          }
                    　　}
                    },
                    series: [{
                        name: '心声数量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20,5, 20, 36, 70, 0, 0],
                        barWidth:"45%",
                        itemStyle:{
                            barBorderRadius:5,
                        }
                        
                    }]
                };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();

(function(){

    var app = new Vue({
        el:"#app",
        data:{
            data:"abc"
        },
        methods:{
            getdata:function(){
                dt = new Date();
                var y = dt.getFullYear();
                var mt = dt.getMonth() + 1;
                axios.post("https://www.fengyuxueshan.com/api/report/ycount",y).then(
                    function(resopnse){
                        console.log(resopnse.data.data_history.length)
                    },function(err){

                    }
                )
            }
        }

    })

})();


(function(){
    var app = new Vue({
        el:"#nohd",
        data:{
            ydata:0,
            mdata:1000,
            timer:'',
        },
        methods:{
            setdata:function(){
                var that =this
                this.mdata ++ ;
                dt = new Date();
                var y = dt.getFullYear();
                var mt = dt.getMonth() + 1;
                axios.post("https://www.fengyuxueshan.com/api/report/ycount",y).then(
                    function(resopnse){
                        var that = this
                        // console.log(resopnse.data.data_history.length);
                        that.ydata = resopnse.data.data_history.length;
                        console.log(that.ydata);
                    },function(err){

                    }
                )
            },

        },
        mounted(){
            this.timer = setInterval(this.setdata,1000);
        },
        beforeDestroy(){
            clearInterval(this.timer);
        }

    })

})();
