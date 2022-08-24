// 设置网页标题离开显示
function lod() {
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "hidden") {
      normal_title = document.title;
      document.title = "∑(っ°Д°;)っ卧槽，不见了";
    } else {
      document.title = normal_title;
    }
  });
}

alert(
  "本页面在1920*1080分辨率下制作 本人技术不精 若当前环境不是 1920*1080分辨率 100%缩放 请自行缩放浏览器显示百分比"
);
