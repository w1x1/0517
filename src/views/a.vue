<template>
  <div class="bg-[#f2f5fb]">
    <div class="w-[92vw] mx-auto">
      <!-- 头部 -->
      <div class="flex items-center py-[5vw]">
        <Icon class="text-[5vw] font-bold" icon="teenyicons:left-outline" />
        <p class="mx-auto font-bold text-[5vw]">排行榜</p>
      </div>
      <div class="scroll-container">
        <van-tabs v-model="active" class="van-tabs__nav van-tab">
          <van-tab name="官方" title="官方" />
          <van-tab name="精选" title="精选" />
          <van-tab name="曲风" title="曲风" />
          <van-tab name="全球" title="全球" />
          <van-tab name="语种" title="语种" />
          <van-tab name="特别" title="特别" />
        </van-tabs>
      </div>
      <!-- 榜单推荐 -->
      <div class="mt-[7vw]">
        <div class="font-bold text-[5vw]">榜单推荐</div>
      </div>
      <div class="mt-[4vw] flex items-center justify-between">
        <div
          v-for="data in listRecommend"
          class="w-[29vw] h-[28vw] relative rounded-[15px]"
        >
          <img
            :src="data.coverImgUrl"
            class="w-[29vw] h-[28vw] rounded-[15px]"
          />
          <Icon
            icon="bxs:right-arrow"
            style="color: #fdfcfc"
            class="absolute text-[5vw] bottom-[2vw] right-[2vw]"
          />
        </div>
      </div>
      <!-- 官方榜 -->
      <div class="mt-[7vw] flex items-center">
        <Icon
          icon="ri:netease-cloud-music-fill"
          class="text-[7vw] mr-[1vw] text-[red]"
        />
        <div class="font-bold text-[5vw]">官方榜</div>
      </div>
      <!-- 渲染的前四个榜单 -->
      <div
        v-for="data in resDetail"
        class="p-[4vw] w-[92vw] h-[34vw] bg-white rounded-[15px] mt-[4vw]"
      >
        <div class="flex justify-between items-center">
          <p class="text-[6vw]">{{ data.name }}</p>
          <p class="text-[3vw] text-[#c4c6cc]">{{ data.updateFrequency }}</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-[17vw] relative">
            <!-- :src="data.coverImgUrl" -->
            <img class="w-[17vw] h-[17vw] rounded-[15px]" :src="songData" />
            <Icon
              icon="bxs:right-arrow"
              style="color: #fdfcfc"
              class="absolute text-[5vw] bottom-[5vw] right-[5vw]"
            />
          </div>
          <div class="w-[58vw]">
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
              v-for="(item, index2) in data.tracks"
            >
              <p class="h-[5vw] w-[5vw] font-bold">{{ index2 + 1 }}</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {{ item.first }}
                <span class="text-[#c4c6cc]"> - {{ item.second }}</span>
              </p>
              <p
                v-if="data.updateFrequency == '刚刚更新'"
                class="w-[3vw] h-[5vw] text-[2vw] text-[green] leading-[5vw]"
              >
                新
              </p>
              <p
                v-else
                class="w-[3vw] h-[5vw] text-[2vw] text-[#c4c6cc] leading-[5vw]"
              >
                --
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 畅销榜 -->
      <div class="p-[4vw] w-[92vw] h-[34vw] bg-white rounded-[15px] mt-[4vw]">
        <div class="flex justify-between items-center">
          <p class="text-[6vw]">畅销榜</p>
          <p class="text-[3vw] text-[#c4c6cc]">每半小时更新</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-[17vw] relative">
            <img
              src="https://p1.music.126.net/0j1_kM5Vf-FtdJMO-3R9kQ==/109951169579045922.jpg"
              class="w-[17vw] h-[17vw] rounded-[15px]"
            />
            <Icon
              icon="bxs:right-arrow"
              style="color: #fdfcfc"
              class="absolute text-[5vw] bottom-[5vw] right-[5vw]"
            />
          </div>
          <div class="w-[58vw]">
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">1</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                希忘Hope
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">2</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                冀西南林路行
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">3</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                新世界新世界
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 播客榜 -->
      <div class="p-[4vw] w-[92vw] h-[34vw] bg-white rounded-[15px] mt-[4vw]">
        <div class="flex justify-between items-center">
          <p class="text-[6vw]">播客榜</p>
          <p class="text-[3vw] text-[#c4c6cc]">每日更新</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-[17vw] relative">
            <img
              src="https://p2.music.126.net/kGdzpMO7C-8ERTcwymW4sA==/109951169315856070.jpg"
              class="w-[17vw] h-[17vw] rounded-[15px]"
            />
            <Icon
              icon="bxs:right-arrow"
              style="color: #fdfcfc"
              class="absolute text-[5vw] bottom-[5vw] right-[5vw]"
            />
          </div>
          <div class="w-[58vw]">
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">1</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                凹凸电波<span class="text-[#c4c6cc]"> - 凹凸电波</span>
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">2</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                音符up <span class="text-[#c4c6cc]"> - 石伊电台</span>
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">3</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                故事FM <span class="text-[#c4c6cc]"> - 故事FM爱哲</span>
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 有声书榜 -->
      <div class="p-[4vw] w-[92vw] h-[34vw] bg-white rounded-[15px] mt-[4vw]">
        <div class="flex justify-between items-center">
          <p class="text-[6vw]">有声书榜</p>
          <p class="text-[3vw] text-[#c4c6cc]">每日更新</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-[17vw] relative">
            <img
              src="https://p2.music.126.net/AgpX-LvkCFTChSxL-1y4EQ==/109951169574426926.jpg"
              class="w-[17vw] h-[17vw] rounded-[15px]"
            />
            <Icon
              icon="bxs:right-arrow"
              style="color: #fdfcfc"
              class="absolute text-[5vw] bottom-[5vw] right-[5vw]"
            />
          </div>
          <div class="w-[58vw]">
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">1</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                北派盗墓笔记|全网霸榜、...
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">2</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                我的26岁女房客 -
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
            <div
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">3</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                死亡万花简 第一季 -
              </p>
              <span class="text-[#c4c6cc]"> -- </span>
            </div>
          </div>
        </div>
      </div>
      <!-- mv榜 -->
      <div class="p-[4vw] w-[92vw] h-[34vw] bg-white rounded-[15px] mt-[4vw]">
        <div class="flex justify-between items-center">
          <p class="text-[6vw]">MV榜</p>
          <p class="text-[3vw] text-[#c4c6cc]">每日更新</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-[17vw] relative">
            <img
              :src="mvData.resources[0].uiElement.image.imageUrl"
              class="w-[17vw] h-[17vw] rounded-[15px]"
            />
            <Icon
              icon="bxs:right-arrow"
              style="color: #fdfcfc"
              class="absolute text-[5vw] bottom-[5vw] right-[5vw]"
            />
          </div>
          <div class="w-[58vw]">
            <div
              v-for="(item, index) in mvData.resources"
              class="w-[58vw] h-[5vw] mb-[1vw] text-[4vw] flex items-center justify-between"
            >
              <p class="h-[5vw] w-[5vw] font-bold">{{ index + 1 }}</p>
              <p
                class="h-[5vw] w-[46vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {{ item.uiElement.mainTitle.title }}
                <span class="text-[#c4c6cc]"> - </span>
              </p>
              <Icon icon="bxs:up-arrow" style="color: #fd0808" />
            </div>
          </div>
        </div>
      </div>
      <!-- 精选榜 -->
      <div class="mt-[15vw]">
        <div class="font-bold text-[5vw]">精选榜</div>
      </div>
      <div class="w-[92vw] flex items-center flex-wrap">
        <div v-for="data in selected" class="mr-[1vw] ml-[0.6vw] mt-[2vw]" >
          <img :src="data.coverImgUrl" class="w-[29vw] h-[29vw] rounded-[15px]" alt="">
        </div>
      </div>
      <!-- 曲风榜 -->
      <div class="mt-[15vw] flex items-center">
        <div class="font-bold text-[5vw] mr-[2vw]">曲风榜</div>
        <div class="h-[7vw] w-[13vw] flex px-[1vw] text-center items-center rounded-[15px] text-[#5c5d60] bg-[#e6e9f0]">
          <p class="font-bold mx-auto text-[3.5vw]">更多</p>
          <Icon icon="material-symbols:keyboard-arrow-right" class="text-[3vw]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const active = ref("官方");
import {
  topList,
  toplistDetail,
  playList,
  getHomePageData,
  songList,
} from "@/service";
import { useRequest } from "vue-request";
// 所有榜单
const { data: res } = useRequest(topList, {});
const listRecommend = ref();
// 榜单内容
const { data: listDetail } = useRequest(toplistDetail, {});
const resDetail = ref();
// 歌单详情
const { data: playlist, run: runGetTrackId } = useRequest(playList, {
  manual: true,
});
runGetTrackId({ id: 19723756 });
// runGetTrackId({ id: 3779629 });
// runGetTrackId({ id: 2884035 });
// runGetTrackId({ id: 3778678 });
// 歌曲详情
const { data: songlist, run: runGetTrackSongId } = useRequest(songList, {
  manual: true,
});
runGetTrackSongId({ ids: 2155423468 });
// runGetTrackSongId({ ids: 2153825358 });
// runGetTrackSongId({ ids: 2154102353 });
const songData = ref();
// 首页数据中的mv
const homepage = useRequest(getHomePageData, {});
const mvData = ref();
// 精选榜
const selected = ref();
// 曲风榜

watchEffect(() => {
  const remommend = res.value?.data.list;
  listRecommend.value = remommend?.slice(0, 3);
  
  // console.log(listRecommend.value);
  const deTailList = listDetail.value?.data.list;
  const allRes: any[] = [];
  for (let i = 0; i < deTailList?.length; i++) {
    if (
      deTailList[i].name == "飙升榜" ||
      deTailList[i].name == "新歌榜" ||
      deTailList[i].name == "热歌榜" ||
      deTailList[i].name == "原创榜" ||
      deTailList[i].name == "畅销榜" ||
      deTailList[i].name == "播客榜" ||
      deTailList[i].name == "有声书榜" ||
      deTailList[i].name == "MV榜"
    ) {
      allRes.push(deTailList[i]);
    }
  }
  resDetail.value = allRes;
  // console.log(resDetail.value);
  selected.value = deTailList?.slice(10,21);
  // console.log(selected.value);
  // console.log(playlist);
  songData.value = songlist.value?.data.songs[0].al.picUrl;
  // console.log(songData.value);
  // 精选榜
  // console.log(deTailList);
  
  

  // 首页mv
  const mvHome = homepage.data.value?.data.data.blocks[3].creatives;
  for (let i = 0; i < mvHome?.length; i++) {
    if (mvHome[i].creativeType == "mv") {
      mvData.value = mvHome[i];
    } else {
      mvData.value = mvHome[0];
    }
  }
});

// import { useUserStore } from "@/store";
// const userStore = useUserStore();
// console.log(userStore.username);
</script>
<style>
.scroll-container {
  -ms-overflow-style: none;
  overflow-x: scroll;
  scrollbar-width: none;
}
.van-tabs__nav {
  width: 120vw;
  background: #f2f5fb;
}
.van-tab{
  font-size: 5vw;
}
</style>
