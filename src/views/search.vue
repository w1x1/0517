<template>
  <div>search</div>
  <ul>
    <!-- <li v-for="song in songs" :key="song.id">{{ song.name }}</li> -->
  </ul>
</template>
<script setup lang="ts">
import { getDefaultKey } from "@/service";
import { useRequest } from "vue-request";
// const defaultKey = ref();
const { loading, error, data: res } = useRequest(getDefaultKey, {});
watchEffect(() => {
  console.log(loading);
  console.log(error);
  console.log(res.value?.data.data.realkeyword);
});
// getDefaultKey()
//   .then((res) => {
//     defaultKey.value = res.data.data.realkeyword;
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// const songs = ref<Song[]>([]);
// searchResult({ keywords: "海阔天空" }).then((res) => {
//   songs.value = res.data.result.songs;
//   console.log(res.data.result.songs);
// });
</script>
