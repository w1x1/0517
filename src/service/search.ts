import http from "./http";
import to from "await-to-js";

// 获取默认搜索关键词
// export const getDefaultKey = () =>
//   http.post<Res.getDefaultKey>("/search/default");
export const getDefaultKey = async () => {
  const [err, res] = await to(http.post<Res.getDefaultKey>("/search/default"));
  if (err) throw new Error("请求失败");
  return res;
};

// 搜索指定关键字
interface SearchResultParams {
  keywords: string;
  limit?: number;
  offset?: number;
  type?: string;
}

export const searchResult = async (params: SearchResultParams) => {
  const [err, res] = await to(
    http.get<Res.searchResult>("/cloudsearch", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.result.songs;
};
// 所有榜单
export const topList = async () => {
  const [err, res] = await to(http.get<Res.List>("/toplist"));
  if (err) throw new Error("请求失败");
  return res;
};
// 榜单内容摘要
export const toplistDetail = async () => {
  const [err, res] = await to(http.get("/toplist/detail"));
  if (err) throw new Error("请求失败");
  return res;
};

// 歌单详情
interface PlayList {
  id: number;
  s?: number;
}
export const playList = async (params:PlayList) => {
  const [err, res] = await to(
    http.get("/playlist/detail",{params})
  );
  if (err) throw new Error("请求失败");
  return res;
};
// 歌曲详情
interface Song{
  ids: number;
}
export const songList = async (params:Song) => {
  const [err, res] = await to(
    http.get("/song/detail",{params})
  );
  if (err) throw new Error("请求失败");
  return res;
};
// 获取首页数据中的mv
export const getHomePageData = async () => {
  const [err, res] = await to(http.get("/homepage/block/page"));
  if (err) throw new Error("请求失败");
  return res;
};