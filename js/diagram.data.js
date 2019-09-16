function getDiagramData(key) {

  var nodes = [], links = [];
  if (key === 'PEK_E') {
    var top = 300, left = 560, size = 9;
    for (var index = 1; index <= size; index++) {
      var _top = (-top + (index - 1) * top / ((size - 1) / 2))
      var key_cot = 1100 + index, key_rep_1 = 1200 + (index - 1) * 2, key_rep_2 = key_rep_1 + 1, key_rfu = 1300 + index
      // 制冷站
      nodes.push({
        key: key_cot, category: 'equipment', pos: "-" + left + (" ") + _top, width: 50, height: 38, code: "COT"
      });
      // 泵
      nodes.push({
        key: key_rep_1, category: 'equipment', pos: "-" + (left - 100) + (" ") + (_top + 10), width: 38, height: 19, code: "PUMP"
      });
      nodes.push({
        key: key_rfu, category: 'equipment', pos: "-" + (left - 200) + (" ") + _top, width: 50, height: 38, code: "RFU"
      });
      nodes.push({
        key: key_rep_2, category: 'equipment', pos: "-" + (left - 280) + (" ") + (_top + 10), width: 38, height: 19, code: "PUMP_R"
      });
      nodes.push({
        key: 4000 + index, category: 'text', pos: "-" + (left - 200) + (" ") + (_top - 30), text: index + '#'
      });

      links.push({from: key_cot, to: key_rep_1, points: [{x: -left + 10, y: _top + 10}, {x: -left + 100, y: _top + 10}]});
      links.push({from: key_rep_1, to: key_rfu, points: [{x: -left + 120, y: _top + 10}, {x: -left + 175, y: _top + 10}]});
      links.push({from: key_rep_2, to: key_rfu, points: [{x: -(left - 265), y: _top + 10}, {x: -(left - 225), y: _top + 10}], color: '#cc0022'});
      links.push({from: key_rfu, to: key_cot, points: [{x: -left + 175, y: _top - 8}, {x: -left + 10, y: _top - 8}], color: '#cc0022'});
      links.push({
        from: 2001, to: key_rep_2, color: '#cc0022',
        points: [{x: -(left - 460), y: -190}, {x: -(left - 330), y: -190}, {x: -(left - 330), y: _top + 10}, {x: -(left - 300), y: _top + 10}]
      });
      links.push({
        from: key_rfu, to: 2002,
        points: [{x: -(left - 225), y: _top - 8}, {x: -(left - 360), y: _top - 8}, {x: -(left - 360), y: 110}, {x: -(left - 460), y: 110}]
      });
    }

    nodes.push({key: 2001, category: 'image', pos: -(left - 460) + " " + -190, width: 18, height: 240, name: "WCD.png"})
    nodes.push({key: 2002, category: 'image', pos: -(left - 460) + " " + 100, width: 18, height: 240, name: "WSD.png"})

    nodes.push({key: 2101, category: 'image', pos: 250 + " " + -230, width: 110, height: 140, name: "T3E.png"})
    nodes.push({key: 2102, category: 'image', pos: 253 + " " + -110, width: 35, height: 70, name: "T3D.png"})
    nodes.push({key: 2103, category: 'image', pos: 250 + " " + 10, width: 110, height: 140, name: "T3C.png"})

    links.push({from: 2101, to: 2001, points: [{x: 240, y: -270}, {x: -(left - 460), y: -270}], color: '#cc0022'});
    links.push({from: 2102, to: 2001, points: [{x: 240, y: -130}, {x: 180, y: -130}, {x: 180, y: -270}, {x: -(left - 460), y: -270}], color: '#cc0022'})
    links.push({from: 2103, to: 2001, points: [{x: 240, y: -40}, {x: 200, y: -40}, {x: 200, y: -110}, {x: -(left - 460), y: -110}], color: '#cc0022'})


    var rep_top = -70
    nodes.push({key: 1401, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})
    nodes.push({key: 1402, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})
    nodes.push({key: 1403, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})
    nodes.push({key: 1404, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})

    rep_top = 100
    nodes.push({key: 1411, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})
    nodes.push({key: 1412, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})
    nodes.push({key: 1413, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})
    nodes.push({key: 1414, category: 'equipment', pos: "10 " + (rep_top += 35), width: 38, height: 19, code: "PUMP"})

    nodes.push({key: 9001, category: 'hub', pos: -(left - 460) + " 20"})  // 分水器-上
    nodes.push({key: 9002, category: 'hub', pos: -(left - 460) + " 185"}) // 分水器-下
    nodes.push({key: 9003, category: 'hub', pos: "120 20"}) // T3C
    nodes.push({key: 9004, category: 'hub', pos: "120 190"}) // T3D-T3E

    rep_top = -85
    nodes.push({key: 4101, category: 'text', text: '1#', pos: "10 " + (rep_top += 35)})
    nodes.push({key: 4102, category: 'text', text: '2#', pos: "10 " + (rep_top += 35)})
    nodes.push({key: 4103, category: 'text', text: '3#', pos: "10 " + (rep_top += 35)})
    nodes.push({key: 4104, category: 'text', text: '4#', pos: "10 " + (rep_top += 35)})
    rep_top = 85
    nodes.push({key: 4105, category: 'text', text: '5#', pos: "10 " + (rep_top += 35)})
    nodes.push({key: 4106, category: 'text', text: '6#', pos: "10 " + (rep_top += 35)})
    nodes.push({key: 4107, category: 'text', text: '7#', pos: "10 " + (rep_top += 35)})
    nodes.push({key: 4108, category: 'text', text: '8#', pos: "10 " + (rep_top += 35)})

    links.push({from: 9001, to: 1401, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9001, to: 1402, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9001, to: 1403, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9001, to: 1404, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9002, to: 1411, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9002, to: 1412, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9002, to: 1413, fromSpot: 'rightsingle', toSpot: 'left'})
    links.push({from: 9002, to: 1414, fromSpot: 'rightsingle', toSpot: 'left'})

    links.push({from: 1401, to: 9003, fromSpot: 'right', toSpot: 'leftsingle'})
    links.push({from: 1402, to: 9003, fromSpot: 'right', toSpot: 'leftsingle'})
    links.push({from: 1403, to: 9003, fromSpot: 'right', toSpot: 'leftsingle'})
    links.push({from: 1404, to: 9003, fromSpot: 'right', toSpot: 'leftsingle'})

    links.push({from: 1411, to: 9004, fromSpot: 'right', toSpot: 'leftsingle'})
    links.push({from: 1412, to: 9004, fromSpot: 'right', toSpot: 'leftsingle'})
    links.push({from: 1413, to: 9004, fromSpot: 'right', toSpot: 'leftsingle'})
    links.push({from: 1414, to: 9004, fromSpot: 'right', toSpot: 'leftsingle'})

    links.push({from: 9003, to: 2103, points: [{x: 120, y: 20}, {x: 250, y: 20}]})
    links.push({from: 9004, to: 2101, points: [{x: 120, y: 190}, {x: 330, y: 190}, {x: 330, y: -190}, {x: 260, y: -190}]})
    links.push({from: 9004, to: 2102, points: [{x: 120, y: 190}, {x: 330, y: 190}, {x: 330, y: -90}, {x: 260, y: -90}]})


    // 供回水信息
    nodes.push({key: 6001, category: 'coolingRecovery', pos: 60 + " " + -300})
    nodes.push({key: 6002, category: 'coolingRecovery', pos: 60 + " " + -140})

    nodes.push({key: 6101, category: 'coolingSupply', pos: 420 + " " + 20, name: 'T3C'})
    nodes.push({key: 6102, category: 'coolingSupply', pos: 420 + " " + -200, name: 'T3D/T3E'})

    return {
      "class": "go.GraphLinksModel",
      "nodeDataArray": nodes,
      "linkDataArray": links,
    }
  }

  if (key === 'PEK_W') {
    var top = 300, left = 560, size = 7;
    for (var index = 1; index <= size; index++) {
      var _top = (-top + (index - 1) * top / ((size - 1) / 2))
      if (index > 3) {
        _top += 80
      }
      var key_cot = 1100 + index, key_rep_1 = 1200 + (index - 1) * 2, key_rep_2 = key_rep_1 + 1, key_rfu = 1300 + index
      // 制冷站
      nodes.push({
        key: key_cot, category: 'equipment', pos: "-" + left + (" ") + _top, width: 50, height: 38, code: "COT"
      });
      // 泵
      nodes.push({
        key: key_rep_1, category: 'equipment', pos: "-" + (left - 100) + (" ") + (_top + 10), width: 38, height: 19, code: "PUMP"
      });
      nodes.push({
        key: key_rfu, category: 'equipment', pos: "-" + (left - 200) + (" ") + _top, width: 50, height: 38, code: "RFU"
      });
      nodes.push({
        key: key_rep_2, category: 'equipment', pos: "-" + (left - 280) + (" ") + (_top + 10), width: 38, height: 19, code: "PUMP_R"
      });
      nodes.push({
        key: 4000 + index, category: 'text', pos: "-" + (left - 200) + (" ") + (_top - 30), text: index + '#'
      });

      links.push({from: key_cot, to: key_rep_1, points: [{x: -left + 10, y: _top + 10}, {x: -left + 100, y: _top + 10}]});
      links.push({from: key_rep_1, to: key_rfu, points: [{x: -left + 120, y: _top + 10}, {x: -left + 175, y: _top + 10}]});
      links.push({from: key_rep_2, to: key_rfu, points: [{x: -(left - 265), y: _top + 10}, {x: -(left - 225), y: _top + 10}], color: '#cc0022'});
      links.push({from: key_rfu, to: key_cot, points: [{x: -left + 175, y: _top - 8}, {x: -left + 10, y: _top - 8}], color: '#cc0022'});
      links.push({
        from: 2001, to: key_rep_2, color: '#cc0022',
        points: [{x: -(left - 460), y: -140}, {x: -(left - 330), y: -140}, {x: -(left - 330), y: _top + 10}, {x: -(left - 300), y: _top + 10}]
      });
      links.push({
        from: key_rfu, to: 2002,
        points: [{x: -(left - 225), y: _top - 8}, {x: -(left - 360), y: _top - 8}, {x: -(left - 360), y: 220}, {x: -(left - 460), y: 220}]
      });
    }

    links.push({from: 1301, to: 1103, points: [{x: -(left - 65), y: -top - 8}, {x: -(left - 65), y: -top + 190}], color: '#cc0022'});
    links.push({from: 1304, to: 1107, points: [{x: -(left - 65), y: -top + 372}, {x: -(left - 65), y: -top + 670}], color: '#cc0022'});

    links.push({from: 1101, to: 1204, points: [{x: -(left - 45), y: -top + 10}, {x: -(left - 45), y: -top + 210}]});
    links.push({from: 1104, to: 1212, points: [{x: -(left - 45), y: -top + 390}, {x: -(left - 45), y: -top + 690}]});


    nodes.push({key: 2001, category: 'image', pos: -(left - 460) + " " + -140, width: 24, height: 300, name: "WCD.png"})
    nodes.push({key: 2002, category: 'image', pos: -(left - 460) + " " + 220, width: 24, height: 300, name: "WSD.png"})

    nodes.push({key: 2101, category: 'image', pos: 220 + " " + -80, width: 200, height: 150, name: "T1.png"})
    nodes.push({key: 2102, category: 'image', pos: 220 + " " + -250, width: 260, height: 150, name: "T2.png"})

    links.push({from: 2101, to: 2001, points: [{x: 100, y: -240}, {x: -(left - 460), y: -240}], color: '#cc0022'});
    links.push({from: 2102, to: 2001, points: [{x: 160, y: -40}, {x: -(left - 460), y: -40}], color: '#cc0022'})


    nodes.push({key: 9001, category: 'hub', pos: -(left - 460) + " 100"})  // 分水器-上
    nodes.push({key: 9002, category: 'hub', pos: -(left - 460) + " 320"}) // 分水器-下
    nodes.push({key: 9003, category: 'hub', pos: "200 100"}) // T1
    nodes.push({key: 9004, category: 'hub', pos: "200 320"}) // T2

    links.push({from: 9003, to: 2101, points: [{x: 200, y: 100}, {x: 220, y: 100}, {x: 220, y: -10}]})
    links.push({from: 9004, to: 2102, points: [{x: 200, y: 320}, {x: 520, y: 320}, {x: 520, y: -240}, {x: 340, y: -240}]})

    var reps = [
      {name: '南线1#', group: 'T1'},
      {name: '南线2#', group: 'T1'},
      {name: 'T1-1#', group: 'T1'},
      {name: 'T1-2#', group: 'T1'},
      {name: 'T1-3#', group: 'T1'},
      {name: 'T2-1#', group: 'T2'},
      {name: 'T2-2#', group: 'T2'},
      {name: 'T2-3#', group: 'T2'},
      {name: 'T2-4#', group: 'T2'},
      {name: 'T2-5#', group: 'T2'},
    ]

    _.forEach(reps, function (rep, index) {
      var T1 = rep.group === 'T1', key = 1400 + index + 1
      nodes.push({key: key, category: 'equipment', pos: "60 " + (20 + 40 * index + (T1 ? 0 : 20)), width: 38, height: 19, code: "PUMP"})
      nodes.push({key: 4100 + index, category: 'text', pos: "60 " + (3 + 40 * index + (T1 ? 0 : 20)), text: rep.name});
      links.push({from: T1 ? 9001 : 9002, to: key, fromSpot: 'rightsingle', toSpot: 'left'})
      links.push({from: key, to: T1 ? 9003 : 9004, fromSpot: 'right', toSpot: 'leftsingle'})
    })

    // 供回水信息
    nodes.push({key: 6001, category: 'coolingRecovery', pos: 0 + " " + -270})
    nodes.push({key: 6002, category: 'coolingRecovery', pos: 0 + " " + -70})

    nodes.push({key: 6101, category: 'coolingSupply', pos: 340 + " " + 90, name: 'T1'})
    nodes.push({key: 6102, category: 'coolingSupply', pos: 430 + " " + -150, name: 'T2'})

    return {
      "class": "go.GraphLinksModel",
      "nodeDataArray": nodes,
      "linkDataArray": links,
    }
  }
}