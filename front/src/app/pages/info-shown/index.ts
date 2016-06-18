/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated'
import {Tabview} from "../../components/tabview/index";

let debug = require('debug')('ng:info-shown');
let template = require('./template.html');
let style = require('./style.styl');
const config = require('./config.json');

@Component({
  selector: 'info-shown',
  template: template,
  styles: [style],
  directives: [Tabview]
})
export class InfoShown {
  public title:string;
  public content:string;
  public createAt:Date;

  public leftTabData;
  public rightTabData;

  constructor(private _routeParams:RouteParams) {
    this.title = config.title;
    this.content = config.content;
    this.createAt = new Date(config.createAt);
    console.log(this.createAt);
    this.leftTabData = {
      "tabs": ["系统公告"],
      "details": [
        [
          {
            "id": 19,
            "link": ["Todo"],
            "image": "/static/images/block.png",
            "title": "中国五金具模走...",
            "date": "2015-10-20"
          },
          {
            "id": 20,
            "link": ["Todo"],
            "image": "/static/images/block.png",
            "title": "自动化的贴标机...",
            "date": "2015-10-20"
          },
          {
            "id": 21,
            "link": ["Todo"],
            "image": "/static/images/block.png",
            "title": "贴标机从落后局...",
            "date": "2015-10-20"
          },
          {
            "id": 22,
            "link": ["Todo"],
            "image": "/static/images/block.png",
            "title": "自动化已成药膜...",
            "date": "2015-10-20"
          },
          {
            "id": 23,
            "link": ["Todo"],
            "image": "/static/images/block.png",
            "title": "市场对自动化包...",
            "date": "2015-10-20"
          },
          {
            "id": 24,
            "link": ["Todo"],
            "image": "/static/images/block.png",
            "title": "机器人来了, 我...",
            "date": "2015-10-20"
          }
        ]
      ]
    };
    this.rightTabData = {
      "tabs": ["新闻动态", "行业动态", "知识荟萃"],
      "details": [
        [
          {
            "id": 1,
            "link": ["Todo"],
            "image": "/static/images/block1.png",
            "title": "中国五金具模走...",
            "date": "2015-10-20"
          },
          {
            "id": 2,
            "link": ["Todo"],
            "image": "/static/images/block2.png",
            "title": "自动化的贴标机...",
            "date": "2015-10-20"
          },
          {
            "id": 3,
            "link": ["Todo"],
            "image": "/static/images/block3.png",
            "title": "贴标机从落后局...",
            "date": "2015-10-20"
          },
          {
            "id": 4,
            "link": ["Todo"],
            "image": "/static/images/block4.png",
            "title": "自动化已成药膜...",
            "date": "2015-10-20"
          },
          {
            "id": 5,
            "link": ["Todo"],
            "image": "/static/images/block5.png",
            "title": "市场对自动化包...",
            "date": "2015-10-20"
          },
          {
            "id": 6,
            "link": ["Todo"],
            "image": "/static/images/block6.png",
            "title": "机器人来了, 我...",
            "date": "2015-10-20"
          }
        ],
        [
          {
            "id": 7,
            "link": ["Todo"],
            "image": "/static/images/block1.png",
            "title": "中国五金具模走...",
            "date": "2015-10-21"
          },
          {
            "id": 8,
            "link": ["Todo"],
            "image": "/static/images/block2.png",
            "title": "自动化的贴标机...",
            "date": "2015-10-21"
          },
          {
            "id": 9,
            "link": ["Todo"],
            "image": "/static/images/block3.png",
            "title": "贴标机从落后局...",
            "date": "2015-10-21"
          },
          {
            "id": 10,
            "link": ["Todo"],
            "image": "/static/images/block4.png",
            "title": "自动化已成药膜...",
            "date": "2015-10-21"
          },
          {
            "id": 11,
            "link": ["Todo"],
            "image": "/static/images/block5.png",
            "title": "市场对自动化包...",
            "date": "2015-10-21"
          },
          {
            "id": 12,
            "link": ["Todo"],
            "image": "/static/images/block6.png",
            "title": "机器人来了, 我...",
            "date": "2015-10-21"
          }
        ],
        [
          {
            "id": 13,
            "link": ["Todo"],
            "image": "/static/images/block1.png",
            "title": "中国五金具模走...",
            "date": "2015-10-22"
          },
          {
            "id": 14,
            "link": ["Todo"],
            "image": "/static/images/block2.png",
            "title": "自动化的贴标机...",
            "date": "2015-10-22"
          },
          {
            "id": 15,
            "link": ["Todo"],
            "image": "/static/images/block3.png",
            "title": "贴标机从落后局...",
            "date": "2015-10-22"
          },
          {
            "id": 16,
            "link": ["Todo"],
            "image": "/static/images/block4.png",
            "title": "自动化已成药膜...",
            "date": "2015-10-22"
          },
          {
            "id": 17,
            "link": ["Todo"],
            "image": "/static/images/block5.png",
            "title": "市场对自动化包...",
            "date": "2015-10-22"
          },
          {
            "id": 18,
            "link": ["Todo"],
            "image": "/static/images/block6.png",
            "title": "机器人来了, 我...",
            "date": "2015-10-22"
          }
        ]
      ]
    };
    console.log(_routeParams.get('id'));
  }
}
