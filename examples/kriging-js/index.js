let params = {
  mapCenter: [100.87, 26.9],
  maxValue: 100,
  krigingModel: "spherical", //'spherical','gaussian','spherical'
  krigingSigma2: 0,
  krigingAlpha: 100,
  canvasAlpha: 0.9,
  colors: [
    "#006837",
    "#1a9850",
    "#66bd63",
    "#a6d96a",
    "#d9ef8b",
    "#ffffbf",
    "#fee08b",
    "#fdae61",
    "#f46d43",
    "#d73027",
    "#a50026",
  ],
};
//osm底图
let baseLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
});

//测试点图层
let ptlayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  zIndex: 4,
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({ color: "rgba(255, 255, 255, 0)" }),
        stroke: new ol.style.Stroke({ color: "#319FD3", width: 1 }),
      }),
      text: new ol.style.Text({
        scale: 0.7,
        textBaseline: "bottom",
        text: String(feature.get("vaule")),
      }),
    });
  },
});
//生成 GeoJson 数据
let dataset = {
  type: "FeatureCollection",
  features: [],
};
for (let i = 0; i < DATA.length; i++) {
  let feature = {
    type: "Feature",
    properties: {
      vaule: DATA[i].TEM_Avg,
    },
    geometry: {
      type: "Point",
      coordinates: [DATA[i].Lon, DATA[i].Lat],
    },
  };
  dataset.features.push(feature);
}
let format = new ol.format.GeoJSON();
ptlayer.getSource().addFeatures(format.readFeatures(dataset));

// 地图容器初始化
let map = new ol.Map({
  target: "map",
  layers: [baseLayer, ptlayer],
  view: new ol.View({
    center: params.mapCenter,
    projection: "EPSG:4326",
    zoom: 8,
  }),
});

//克里金矢量等值面图层
let krigingVectorSource = new ol.source.Vector();
let krigingVectorLayer = new ol.layer.Vector({
  source: krigingVectorSource,
  zIndex: 3,
  style: function (feature, res) {
    //获取等值面分级的权重值
    let _value = feature.get("contour_value");
    //根据权重值，计算所在颜色渲染的区间
    let level = parseInt(_value) / 10;
    let color = params.colors[level];

    let style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: color,
      }),
      stroke: new ol.style.Stroke({
        color: color,
        width: 3,
      }),
    });
    return [style];
  },
});
map.addLayer(krigingVectorLayer);

//克里金栅格等值面图层
let krigingCanvasLayer = new ol.layer.Image({
  zIndex: 2,
});
//向map添加图层
map.addLayer(krigingCanvasLayer);

// 生成 训练 数据
const t = [];
const x = [];
const y = [];
const features = dataset.features.slice();
for (let i = 0; i < features.length; i++) {
  t.push(features[i].properties.vaule); // 权重值
  x.push(features[i].geometry.coordinates[0]); // x
  y.push(features[i].geometry.coordinates[1]); // y
}
console.log(x);
console.log(y);
console.log(t);

let isRunKriging = false;
const btn = document.getElementById("showKrigingVector");
//生成矢量等值面
function showKrigingVector() {
  if (isRunKriging) {
    return;
  }
  btn.innerHTML = "插值中 打开控制台查看最终输出数据";
  isRunKriging = true;
  const polygon = YN.features[0].geometry.coordinates;

  const run = function () {
    console.time("训练模型加插值总耗时");
    console.time("训练模型耗时");
    const variogram = kriging.train(
      t,
      x,
      y,
      params.krigingModel,
      params.krigingSigma2,
      params.krigingAlpha
    );
    console.timeEnd("训练模型耗时");
    console.time("插值耗时");
    const gridrResult = kriging.grid(polygon, variogram, 0.01);
    console.timeEnd("插值耗时");
    console.timeEnd("训练模型加插值总耗时");
    console.log("variogram: ", variogram);
    console.log("gridrResult: ", gridrResult);

    isRunKriging = false;
    btn.innerHTML = "克里金插值";
  };

  setTimeout(run, 2000);

  // krigingCanvasLayer.setVisible(false);
  // krigingVectorSource.clear();
  // krigingVectorLayer.setVisible(true);

  //生成克里金矢量等值面
  // let kriging_contours = getVectorContour(
  //   dataset,
  //   "level",
  //   {
  //     model: "exponential",
  //     sigma2: 0,
  //     alpha: 100,
  //   },
  //   [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  // );

  // let features = format.readFeatures(kriging_contours);
  // krigingVectorSource.addFeatures(features);
}

// function showKrigingImage() {
//   krigingVectorLayer.setVisible(false);

//   let imageSource = new ol.source.ImageCanvas({
//     canvasFunction: (extent, resolution, pixelRatio, size, projection) => {
//       let canvas = document.createElement("canvas");
//       canvas.width = size[0];
//       canvas.height = size[1];
//       canvas.style.display = "block";
//       //设置canvas透明度
//       canvas.getContext("2d").globalAlpha = params.canvasAlpha;

//       //使用分层设色渲染
//       drawCanvasContour(
//         dataset,
//         "level",
//         {
//           model: "exponential",
//           sigma2: 0,
//           alpha: 100,
//         },
//         canvas,
//         [extent[0], extent[2]],
//         [extent[1], extent[3]],
//         params.colors
//       );

//       return canvas;
//     },
//     projection: "EPSG:4326",
//   });

//   krigingCanvasLayer.setSource(imageSource);
//   krigingCanvasLayer.setVisible(true);
// }
