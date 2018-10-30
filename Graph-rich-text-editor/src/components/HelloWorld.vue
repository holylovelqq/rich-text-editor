<template>
  <div class="echart">
    <div id="demochart" style="width: 100%;height: 600px;"></div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      option: {},
      data: []
    }
  },
  methods: {
    drawtree () {
      let myChart = this.$echarts.init(document.getElementById('demochart'))
      // myChart.showLoading()
      // myChart.hideLoading()
      this.data = []
      let links = []
      let categories = [
        {
          name: 'nomal',
          itemStyle: {
            color: 'green'
          }
        },
        {
          name: 'error',
          itemStyle: {
            color: 'red'
          }
        }
      ]
      for (let i = 0; i < 20; i++) {
        this.data.push(
          {
            name: 'item' + i,
            value: i,
            category: i % 6 === 0 ? 'error' : 'nomal',
            draggable: true,
            itemStyle: {
              color: i % 6 === 0 ? 'red' : 'green'
            }
          }
        )
      }
      this.data.forEach((val, index) => {
        links.push({
          source: index,
          target: Math.floor(Math.random() * 10)
        })
      })
      // links = [
      //   {
      //     source: 'item1',
      //     target: 'item2',
      //     // line両端のsize
      //     // symbolSize: [5, 20],
      //     // lineの説明文字
      //     // label: {
      //     //   show: true
      //     // },
      //     lineStyle: {
      //       // width: 5,
      //       // color: 'red',
      //       // type: 'dashed',
      //       // opacity: 0.8,
      //       // curveness: -0.2
      //     }
      //   }
      // ]
      // this.data = [
      //   {
      //     name: 'item1',
      //     value: 'this is item1',
      //     itemStyle: {
      //       color: 'green'
      //     }
      //   }]

      myChart.setOption(this.option = {
        title: {
          text: 'Graph Demo'
        },
        legend: {
          // data: categories.map(function (a) {
          //   return a.name
          // })
          top: 'top',
          left: 'right'
        },
        // itemのtooltip
        tooltip: {
          // formatter: '{b}: {c}',
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        // draggable: true,
        series: [
          {
            type: 'graph',
            layout: 'force',
            categories: categories,
            // 标记
            // symbol: 'circle',
            symbolSize: 40,
            // itemStyle: {
            //   color:
            // },
            // scale and move
            roam: true,
            // item の text
            label: {
              // 見た目の設定項目が多い
              show: true
            },
            // lineの設定
            force: {
              repulsion: 200,
              edgeLength: 100
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: this.data,
            // links: [],
            links: links,
            // lineの共由style
            lineStyle: {
              color: 'source',
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      })
    }
  },
  created () {

  },
  mounted () {
    this.drawtree()
  }
}
</script>
<style scoped>
.echart{
  width: 800px;
  margin:20px auto;
  border: 1px solid red;
}
#demo{
  width: 100%;
  background-color: green;
  }
</style>
