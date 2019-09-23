function spotConverter(dir) {
  if (dir === "left") return go.Spot.LeftSide;
  if (dir === "right") return go.Spot.RightSide;
  if (dir === "top") return go.Spot.TopSide;
  if (dir === "bottom") return go.Spot.BottomSide;
  if (dir === "rightsingle") return go.Spot.Right;
  if (dir === "leftsingle") return go.Spot.Left;
  if (dir === "topsingle") return go.Spot.Top;
  if (dir === "bottomsingle") return go.Spot.Bottom;
}

function buildDiagramModel(diagram) {
  var make = go.GraphObject.make;
  var font = "10pt Microsoft YaHei"
  diagram.nodeTemplateMap.add('equipment',
    make(go.Node, "Spot",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.Picture,  // the icon showing the logo
        {desiredSize: new go.Size(80, 60)},
        new go.Binding('width'),
        new go.Binding('height'),
        new go.Binding("source", "code", function (val) {
          return "../images/diagram/" + val + '.png'
        })
      )
    ));

  /*diagram.nodeTemplateMap.add('dataPoint',
    make(go.Node, "Auto",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.Shape, "RoundedRectangle",
        {fill: '#61aef6', stroke: "#D8D8D8"},
        new go.Binding("fill", "color")),
      make(go.TextBlock,
        {font: "13px 微软雅黑", margin: 5, stroke: '#ffffff', text: '数据点'},
        new go.Binding("text", "name"),
      )
    )
  );*/

  diagram.nodeTemplateMap.add('coolingSupply',
    make(go.Node, "Auto",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.Shape, "Rectangle", {fill: '#efefef', stroke: '#1c63b9'}),
      make(go.Panel, "Table",
        make(go.RowColumnDefinition, {row: 0, separatorStroke: "white", background: "#3F8CBF"}),
        make(go.RowColumnDefinition, {row: 1, separatorStroke: "white"}),
        make(go.RowColumnDefinition, {row: 2, separatorStroke: "white"}),
        make(go.RowColumnDefinition, {row: 3, separatorStroke: "white"}),
        make(go.RowColumnDefinition, {row: 4, separatorStroke: "white"}),
        make(go.RowColumnDefinition, {row: 5, separatorStroke: "white"}),
        make(go.RowColumnDefinition, {row: 6, separatorStroke: "white"}),
        make(go.TextBlock, "", {column: 0, row: 0, columnSpan: 2, margin: 2, width: 140, textAlign: 'center', font: font, stroke: 'white'}
          , new go.Binding("text", "name")),
        make(go.TextBlock, "供水温度", {column: 0, row: 1, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "供水压力", {column: 0, row: 2, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "供水流量", {column: 0, row: 3, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "当天冷量", {column: 0, row: 4, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "当月冷量", {column: 0, row: 5, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "当年冷量", {column: 0, row: 6, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "", {column: 1, row: 1, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#1c63b9', background: '#F6F8FA'}
          , new go.Binding("text", "v1")),
        make(go.TextBlock, "", {column: 1, row: 2, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#1c63b9', background: '#F6F8FA'}
          , new go.Binding("text", "v2")),
        make(go.TextBlock, "", {column: 1, row: 3, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#1c63b9', background: '#F6F8FA'}
          , new go.Binding("text", "v3")),
        make(go.TextBlock, "", {column: 1, row: 4, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#1c63b9', background: '#F6F8FA'}
          , new go.Binding("text", "v4")),
        make(go.TextBlock, "", {column: 1, row: 5, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#1c63b9', background: '#F6F8FA'}
          , new go.Binding("text", "v5")),
        make(go.TextBlock, "", {column: 1, row: 6, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#1c63b9', background: '#F6F8FA'}
          , new go.Binding("text", "v6"))
      )
    )
  )
  diagram.nodeTemplateMap.add('coolingRecovery',
    make(go.Node, "Auto",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.Shape, "Rectangle", {fill: '#efefef', stroke: '#3F8CBF'}),
      make(go.Panel, "Table",
        make(go.RowColumnDefinition, {row: 0, separatorStroke: "white"}),
        make(go.RowColumnDefinition, {row: 1, separatorStroke: "white"}),
        make(go.TextBlock, "回水温度", {column: 0, row: 0, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "回水压力", {column: 0, row: 1, margin: 2, width: 60, textAlign: 'center', font: font, stroke: '#154c8f'}),
        make(go.TextBlock, "", {column: 1, row: 0, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#ec544c', background: '#F6F8FA'}
          , new go.Binding("text", "v1")),
        make(go.TextBlock, "", {column: 1, row: 1, margin: 2, width: 80, textAlign: 'center', font: font, stroke: '#ec544c', background: '#F6F8FA'}
          , new go.Binding("text", "v2"))
      )
    ));


  diagram.nodeTemplateMap.add('board',
    make(go.Node, "Spot",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.Shape, "Rectangle",
        {},
        new go.Binding("fill", 'fill'),
        new go.Binding("width", 'width'),
        new go.Binding("height", 'height'),
        new go.Binding("stroke", 'stroke')
      ),
      make(go.TextBlock,
        {font: "18px 微软雅黑"},
        new go.Binding("text"),
        new go.Binding("stroke", "color")
      )
    )
  );

  diagram.nodeTemplateMap.add('text',
    make(go.Node, "Auto",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.TextBlock,
        {font: "14px Microsoft YaHei", opacity: 0.75},
        new go.Binding("text"),
        new go.Binding("stroke", "color")
      )
    )
  );

  diagram.nodeTemplateMap.add('hub',
    make(go.Node, "Spot",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify)
    )
  );

  diagram.nodeTemplateMap.add('image',
    make(go.Node, "Spot",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.Picture,  // the icon showing the logo
        {desiredSize: new go.Size(80, 60)},
        new go.Binding('width'),
        new go.Binding('height'),
        new go.Binding("source", "name", function (val) {
          return "../images/diagram/" + val
        })
      )
    )
  );

  diagram.nodeTemplateMap.add('dataPoint',
    make(go.Node, "Auto",
      {
        locationObjectName: 'main',
        locationSpot: go.Spot.Center,
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      make(go.TextBlock,
        {font: "14px Microsoft YaHei"},
        new go.Binding("text"),
        new go.Binding("stroke", "color")
      )
    )
  );

  diagram.linkTemplate =
    make(go.Link, {
        toShortLength: -1,
        fromShortLength: -1,
        layerName: "Background",
        routing: go.Link.Orthogonal,
        corner: 0,
        fromSpot: go.Spot.RightSide,
        toSpot: go.Spot.LeftSide
      },
      new go.Binding("fromSpot", "fromSpot", function (d) {
        return spotConverter(d);
      }),
      new go.Binding("toSpot", "toSpot", function (d) {
        return spotConverter(d);
      }),
      new go.Binding("points").makeTwoWay(),
      make(go.Shape, {isPanelMain: true, stroke: "#247eec", strokeWidth: 4}, new go.Binding("stroke", "color")),
      make(go.Shape, {isPanelMain: true, stroke: "#ffffff", strokeWidth: 1, name: "PIPE", strokeDashArray: [20, 40]})
    );
}

function showIfEquipment(v) {
  return v.data && v.data.category === 'equipment'
}

function showIfCoolingSupply(v) {
  return v.data && v.data.category === 'coolingSupply'
}

function showIfCoolingRecovery(v) {
  return v.data && v.data.category === 'coolingRecovery'
}

function showIfDataPoint(v) {
  return v.data && v.data.category === 'dataPoint'
}

function initDesign() {

  // 加载设备数据
  var equipments = JSON.parse(document.getElementById("equipments").value)

  // 加载系统图模型数据
  var models = JSON.parse(document.getElementById("models").value)

  var make = go.GraphObject.make;
  var diagram = make(go.Diagram, "diagram",
    {
      maxSelectionCount: 1, // users can select only one part at a time
      "toolManager.hoverDelay": 10,  // how quickly tooltips are shown
      initialAutoScale: go.Diagram.Uniform,
      allowMove: false,
    });

  buildDiagramModel(diagram)

  new Inspector('inspector', diagram, {
    multipleSelection: false,
    showSize: 4,
    showAllProperties: true,
    properties: {
      "key": {readOnly: true, label: '编号', show: Inspector.showIfPresent},
      "icon": {show: false},
      "pos": {show: false},
      "width": {show: false},
      "height": {show: false},
      "code": {show: false},
      "toSpot": {show: false},
      "fromSpot": {show: false},
      "from": {show: false},
      "to": {show: false},
      "color": {show: false},
      "points": {show: false},
      "category": {show: false},
      "stroke": {show: false},
      "fill": {show: false},
      "name": {readOnly: true, show: Inspector.showIfPresent, label: '名称'},
      "text": {show: Inspector.showIfPresent, label: '文本'},
      "cooling_supply_p1": {show: showIfCoolingSupply, label: '供水温度数据点'},
      "cooling_supply_p2": {show: showIfCoolingSupply, label: '供水压力数据点'},
      "cooling_supply_p3": {show: showIfCoolingSupply, label: '供水流量数据点'},
      "cooling_supply_p4": {show: showIfCoolingSupply, label: '供冷量数据点'},
      "cooling_recovery_p1": {show: showIfCoolingRecovery, label: '回水温度数据点'},
      "cooling_recovery_p2": {show: showIfCoolingRecovery, label: '回水压力数据点'},
      "equipment": {
        label: '设备',
        show: showIfEquipment,
        type: "select",
        choices: function (node, propName) {
          var code = node.data.code.split('_')[0]
          return equipments[code]
        }
      },
      "dataPoint": {
        label: '数据点标识',
        show: showIfDataPoint,
      },
    }
  });

  models = /*models ||*/ getDiagramData("PEK_E")

  diagram.model = go.Model.fromJson(models);

  function saveDiagram() {
    var diagramId = document.getElementById("diagramId").value
    var settings = {
      "url": '../aems/exhibitionDiagram/' + diagramId + '/config',
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      "data": JSON.stringify({
        "jsonData": diagram.model.toJson()
      })
    }
    $.ajax(settings).done(function (response) {
      alert('保存成功！')
    });
  }

  window.saveDiagram = saveDiagram
}


function initDisplay() {

  // 加载系统图模型数据
  var models = JSON.parse(document.getElementById("models").value)

  var make = go.GraphObject.make;
  var diagram = make(go.Diagram, "diagram",
    {
      initialAutoScale: go.Diagram.Uniform,
      allowMove: false,
      allowSelect: false,
    });

  buildDiagramModel(diagram)

  diagram.model = go.Model.fromJson(models);

  doRefresh()
  doFlow()

  // 更新数据
  function doRefresh() {

    var diagramId = document.getElementById("diagramId").value
    var settings = {
      "url": '../diagram/status?id=' + diagramId,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      var result = JSON.parse(response)
      var equipmentStatus = result.equipment
      var dataPointValues = result.dataPoint
      _.forEach(diagram.model.nodeDataArray, function (node) {
        if (node.category === 'equipment' && node.equipment) {
          diagram.model.set(node, 'code', node.code.split('@')[0] + (equipmentStatus[node.equipment.id] ? "" : "@OFF"))
        }
        if (node.category === 'coolingRecovery') {
          diagram.model.set(node, 'v1', dataPointValues[node.cooling_recovery_p1] && dataPointValues[node.cooling_recovery_p1][0] ? numberFormat(dataPointValues[node.cooling_recovery_p1]) + '℃' : '-/-')
          diagram.model.set(node, 'v2', dataPointValues[node.cooling_recovery_p2] && dataPointValues[node.cooling_recovery_p2][0] ? numberFormat(dataPointValues[node.cooling_recovery_p2]) + 'MPa' : '-/-')
        }
        if (node.category === 'coolingSupply') {
          diagram.model.set(node, 'v1', dataPointValues[node.cooling_supply_p1] && dataPointValues[node.cooling_supply_p1][0] ? numberFormat(dataPointValues[node.cooling_supply_p1]) + '℃' : '-/-')
          diagram.model.set(node, 'v2', dataPointValues[node.cooling_supply_p2] && dataPointValues[node.cooling_supply_p2][0] ? numberFormat(dataPointValues[node.cooling_supply_p2]) + 'MPa' : '-/-')
          diagram.model.set(node, 'v3', dataPointValues[node.cooling_supply_p3] && dataPointValues[node.cooling_supply_p3][0] ? numberFormat(dataPointValues[node.cooling_supply_p3]) + 'm³/h' : '-/-')
          var p4values = dataPointValues[node.cooling_supply_p4]
          if (p4values) {
            diagram.model.set(node, 'v4', p4values[1] ? numberFormat(p4values[1]) + 'GJ' : '-/-')
            diagram.model.set(node, 'v5', p4values[2] ? numberFormat(p4values[2]) + 'GJ' : '-/-')
            diagram.model.set(node, 'v6', p4values[3] ? numberFormat(p4values[3]) + 'GJ' : '-/-')
          } else {
            diagram.model.set(node, 'v4', '-/-')
            diagram.model.set(node, 'v5', '-/-')
            diagram.model.set(node, 'v6', '-/-')
          }
        }
      })
    });

    setTimeout(function () {
      doRefresh();
    }, 1000 * 60)
  }

  // 水管流动效果
  function doFlow() {
    setTimeout(function () {
      var oldskips = diagram.skipsUndoManager;
      diagram.skipsUndoManager = true;
      diagram.links.each(function (link) {
        var shape = link.findObject("PIPE");
        var off = shape.strokeDashOffset - 4;
        shape.strokeDashOffset = (off <= 0) ? 60 : off;
      });
      diagram.skipsUndoManager = oldskips;
      doFlow();
    }, 1000 / 5);
  }

  function numberFormat(num) {
    return (num + '').replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
  }
}

