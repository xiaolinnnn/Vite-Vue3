<template>
  <div class="view-container">
    <div class="group-content">
      <div class="group-list-container">
        <div v-for="(item, index) in state.groupList" :key="index" class="group-list">
          <div :id="item.title" class="list-title">
            {{ item.title }}
          </div>
          <el-checkbox-group v-model="state.checkList">
            <el-checkbox v-for="(item1, index1) in item.children" :key="index1" :label="item1.name" />
          </el-checkbox-group>
        </div>
      </div>
      <div class="word-list">
        <div v-for="item in state.wordList" :key="item" @click="goIndex(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const state = reactive({
  groupList: [
    {
      title: 'A',
      children: [{ name: 'A区域' }],
    },
    {
      title: 'B',
      children: [{ name: 'B区域' }],
    },
    {
      title: 'C',
      children: [{ name: 'C区域' }],
    },
    {
      title: 'D',
      children: [{ name: 'D区域' }],
    },
    {
      title: 'E',
      children: [{ name: 'E区域' }],
    },
    {
      title: 'F',
      children: [{ name: 'F区域' }],
    },
    {
      title: 'G',
      children: [{ name: 'G区域' }],
    },
    {
      title: 'H',
      children: [{ name: 'H区域' }],
    },
    {
      title: 'I',
      children: [{ name: 'I区域' }],
    },
    {
      title: 'J',
      children: [{ name: 'J区域' }],
    },
    {
      title: 'K',
      children: [{ name: 'K区域' }],
    },
    {
      title: 'L',
      children: [{ name: 'L区域' }],
    },
    {
      title: 'M',
      children: [{ name: 'M区域' }],
    },
    {
      title: 'N',
      children: [{ name: 'N区域' }],
    },
    {
      title: 'O',
      children: [{ name: 'O区域' }],
    },
    {
      title: 'P',
      children: [{ name: 'P区域' }],
    },
    {
      title: 'Q',
      children: [{ name: 'Q区域' }],
    },
    {
      title: 'R',
      children: [{ name: 'R区域' }],
    },
    {
      title: 'S',
      children: [{ name: 'S区域' }],
    },
    {
      title: 'T',
      children: [{ name: 'T区域' }],
    },
    {
      title: 'U',
      children: [{ name: 'U区域' }],
    },
    {
      title: 'V',
      children: [{ name: 'V区域' }],
    },
    {
      title: 'W',
      children: [{ name: 'W区域' }],
    },
    {
      title: 'X',
      children: [{ name: 'X区域' }],
    },
    {
      title: 'Y',
      children: [{ name: 'Y区域' }],
    },
    {
      title: 'Z',
      children: [{ name: 'Z区域' }],
    },
  ],
  checkList: [],
  wordList: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
})

const goIndex = (item) => {
  let el = document.getElementById(item)
  console.log('el', el)
  if (el)
    el.scrollIntoView({
      behavior: 'smooth',
    })
  // titleRef.value.map((item) => {
  //     console.log('item', item);
  //     console.log('params', params);
  //     if (item.innerText === params) {
  //         groupRef.value.scrollTo({
  //             top: item.offsetTop,
  //             behavior: 'smooth' // 平滑移动
  //         })
  //     }
  // })
}
</script>

<style lang="scss" scoped>
.view-container {
  .group-content {
    // height: 800px;
    position: relative;

    .group-list-container {
      // height: 100%;
      // overflow: auto;

      .group-list {
        margin-bottom: 16px;

        .list-title {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: bold;
          color: #3e4451;
          margin-bottom: 16px;
        }

        // ::v-deep .el-checkbox {
        //     margin: 0 56px 16px 0;
        // }
      }
    }

    .word-list {
      position: fixed;
      right: 19px;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 500px;
      font-size: 12px;
      font-weight: 400;
      color: #3e4451;

      div {
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
