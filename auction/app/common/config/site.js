'use strict';exports.__esModule = true; /**
                                         * Created by zl on 16/2/26.
                                         */exports.default = 
{ 
  defaultRoles: [
  { 
    name: 'anonymous', 
    desc: 'user which has not signed up yet', 
    extend: [], 
    authorities: ['index', 'page', 'home', 'restAPI'] }, 

  { 
    name: 'registered', 
    extend: ['anonymous'], 
    desc: 'user which has already signed up and not assigned to other role', 
    authorities: ['admin'] }], 


  defaultAuthorities: [
  { 
    name: 'index', 
    desc: 'can visit index', 
    paths: [
    '/'] }, 


  { 
    name: 'page', 
    desc: 'can visit static page', 
    paths: [
    //fix the JSON can not support ExpReg
    /^page\//.toString()] }, 


  { 
    name: 'home', 
    desc: 'can use home module', 
    paths: [
    //fix the JSON can not support ExpReg
    /^home\//.toString()] }, 


  { 
    name: 'restAPI', 
    desc: 'can use rest API', 
    paths: [
    //fix the JSON can not support ExpReg
    /^rest\//.toString()] }, 


  { 
    name: 'admin', 
    desc: 'can admin the site', 
    paths: [
    //fix the JSON can not support ExpReg
    /^admin\//.toString()] }], 




  pageCount: { 
    default: 10, 
    article: 5, 
    item: 20, 
    bid: 10, 
    order: 10 }, 


  auction: { 
    //拍卖品在各价格时,报价最小增加幅度
    bid_increasment: [
    [0, 50], 
    [1000, 100], 
    [5000, 200], 
    [10000, 500], 
    [20000, 1000]], 

    ahead_time: { 
      //领先时间(单位:分钟)
      time: 24 * 60 }, 


    fix_time: { 
      //当拍卖结束前多长时间,被出价,需要延长拍卖时间(单位:分钟)
      need_delay_time: 5, 
      //需要延长多长时间(单位:分钟)
      auto_delay_time: 5 } } };