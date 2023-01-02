import React,{Component} from 'react'
import Banner from '../components/Banner.js'
import Button from '../components/Button.js'
import TitleCenter from '../components/TitleCenter.js'

class ColorPalettePage extends Component {
  constructor(props){
    super(props);
    this.state={
      varColor:'',
      colorCodes : [
    {
      colorNumber:1,
      colorPot:'bg-[#f9fafa]',
      colorName: 'GA01C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:2,
      colorPot:'bg-[#eaf1f7]',
      colorName: 'GA01C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:3,
      colorPot:'bg-[#d5e0ea]',
      colorName: 'GA01C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:4,
      colorPot:'bg-[#b5c3cd]',
      colorName: 'GA01C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:5,
      colorPot:'bg-[#919da7]',
      colorName: 'GA01C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:6,
      colorPot:'bg-[#62717d]',
      colorName: 'GA01C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:7,
      colorPot:'bg-[#3e474c]',
      colorName: 'GA01C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:8,
      colorPot:'bg-[#373a3b]',
      colorName: 'GA01C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:9,
      colorPot:'bg-[#f3f9fc]',
      colorName: 'GA02C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:10,
      colorPot:'bg-[#e4f1fb]',
      colorName: 'GA02C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:11,
      colorPot:'bg-[#d5e7f4]',
      colorName: 'GA02C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:12,
      colorPot:'bg-[#c4d6e4]',
      colorName: 'GA02C5-P',
      colorGroup:'red',
    },
    {
      colorNumber:13,
      colorPot:'bg-[#a2b4c2]',
      colorName: 'GA02C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:14,
      colorPot:'bg-[#738595]',
      colorName: 'GA02C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:15,
      colorPot:'bg-[#4b5c6d]',
      colorName: 'GA02C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:16,
      colorPot:'bg-[#4d5359]',
      colorName: 'GA02C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:17,
      colorPot:'bg-[#f9fdfe]',
      colorName: 'GA03C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:18,
      colorPot:'bg-[#ecf7fc]',
      colorName: 'GA03C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:19,
      colorPot:'bg-[#deeef6]',
      colorName: 'GA03C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:20,
      colorPot:'bg-[#b1cad2]',
      colorName: 'GA03C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:21,
      colorPot:'bg-[#8ea5ad]',
      colorName: 'GA03C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:22,
      colorPot:'bg-[#647d84]',
      colorName: 'GA03C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:23,
      colorPot:'bg-[#465c5c]',
      colorName: 'GA03C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:24,
      colorPot:'bg-[#4c5153]',
      colorName: 'GA03C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:25,
      colorPot:'bg-[#f9f8fb]',
      colorName: 'GA04C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:26,
      colorPot:'bg-[#efeff5]',
      colorName: 'GA04C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:27,
      colorPot:'bg-[#d9dbe2]',
      colorName: 'GA04C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:28,
      colorPot:'bg-[#cecbd2]',
      colorName: 'GA04C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:29,
      colorPot:'bg-[#aaa8ae]',
      colorName: 'GA04C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:30,
      colorPot:'bg-[#666162]',
      colorName: 'GA04C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:31,
      colorPot:'bg-[#5b5657]',
      colorName: 'GA04C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:32,
      colorPot:'bg-[#4d4949]',
      colorName: 'GA04C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:33,
      colorPot:'bg-[#fffdfc]',
      colorName: 'GA05C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:34,
      colorPot:'bg-[#f6f2f4]',
      colorName: 'GA05C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:35,
      colorPot:'bg-[#e6e0e2]',
      colorName: 'GA05C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:36,
      colorPot:'bg-[#cfc6ca]',
      colorName: 'GA05C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:37,
      colorPot:'bg-[#b3a5ab]',
      colorName: 'GA05C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:38,
      colorPot:'bg-[#806f72]',
      colorName: 'GA05C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:39,
      colorPot:'bg-[#664f4b]',
      colorName: 'GA05C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:40,
      colorPot:'bg-[#5c4a4a]',
      colorName: 'GA05C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:41,
      colorPot:'bg-[#fffcfd]',
      colorName: 'GA06C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:42,
      colorPot:'bg-[#fdf8fa]',
      colorName: 'GA06C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:43,
      colorPot:'bg-[#e8dde4]',
      colorName: 'GA06C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:44,
      colorPot:'bg-[#cabbc4]',
      colorName: 'GA06C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:45,
      colorPot:'bg-[#a6949d]',
      colorName: 'GA06C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:46,
      colorPot:'bg-[#7e6367]',
      colorName: 'GA06C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:47,
      colorPot:'bg-[#5d3835]',
      colorName: 'GA06C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:49,
      colorPot:'bg-[#fefafa]',
      colorName: 'GA07C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:50,
      colorPot:'bg-[#f5eaed]',
      colorName: 'GA07C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:51,
      colorPot:'bg-[#ecdde2]',
      colorName: 'GA07C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:52,
      colorPot:'bg-[#d7bdc3]',
      colorName: 'GA07C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:53,
      colorPot:'bg-[#c19193]',
      colorName: 'GA07C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:54,
      colorPot:'bg-[#a66261]',
      colorName: 'GA07C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:55,
      colorPot:'bg-[#924b44]',
      colorName: 'GA07C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:56,
      colorPot:'bg-[#87463b]',
      colorName: 'GA07C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:57,
      colorPot:'bg-[#fffcfb]',
      colorName: 'GA08C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:58,
      colorPot:'bg-[#fef8f7]',
      colorName: 'GA08C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:59,
      colorPot:'bg-[#fdeeeb]',
      colorName: 'GA08C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:60,
      colorPot:'bg-[#f9dcd0]',
      colorName: 'GA08C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:61,
      colorPot:'bg-[#e1b8a6]',
      colorName: 'GA08C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:62,
      colorPot:'bg-[#bb795f]',
      colorName: 'GA08C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:63,
      colorPot:'bg-[#a96249]',
      colorName: 'GA08C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:64,
      colorPot:'bg-[#a6614b]',
      colorName: 'GA08C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:65,
      colorPot:'bg-[#fffdfa]',
      colorName: 'GA09C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:66,
      colorPot:'bg-[#fcf8f8]',
      colorName: 'GA09C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:67,
      colorPot:'bg-[#faf1ee]',
      colorName: 'GA09C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:68,
      colorPot:'bg-[#efd9c8]',
      colorName: 'GA09C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:69,
      colorPot:'bg-[#debe9c]',
      colorName: 'GA09C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:70,
      colorPot:'bg-[#c39267]',
      colorName: 'GA09C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:71,
      colorPot:'bg-[#b9804c]',
      colorName: 'GA09C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:72,
      colorPot:'bg-[#a66843]',
      colorName: 'GA09C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:73,
      colorPot:'bg-[#fffdfa]',
      colorName: 'GA10C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:74,
      colorPot:'bg-[#fcf8f5]',
      colorName: 'GA10C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:75,
      colorPot:'bg-[#f3ece4]',
      colorName: 'GA10C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:76,
      colorPot:'bg-[#ded3cb]',
      colorName: 'GA10C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:77,
      colorPot:'bg-[#b69b8a]',
      colorName: 'GA10C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:78,
      colorPot:'bg-[#896a56]',
      colorName: 'GA10C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:79,
      colorPot:'bg-[#705241]',
      colorName: 'GA10C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:80,
      colorPot:'bg-[#795241]',
      colorName: 'GA10C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:81,
      colorPot:'bg-[#fffdfa]',
      colorName: 'GA11C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:82,
      colorPot:'bg-[#fbf8f7]',
      colorName: 'GA11C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:83,
      colorPot:'bg-[#e8e3de]',
      colorName: 'GA11C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:84,
      colorPot:'bg-[#ccc3b8]',
      colorName: 'GA11C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:85,
      colorPot:'bg-[#c0b1a1]',
      colorName: 'GA11C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:86,
      colorPot:'bg-[#a79482]',
      colorName: 'GA11C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:87,
      colorPot:'bg-[#6e5447]',
      colorName: 'GA11C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:88,
      colorPot:'bg-[#655745]',
      colorName: 'GA11C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:89,
      colorPot:'bg-[#fffdfa]',
      colorName: 'GA12C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:90,
      colorPot:'bg-[#fffcf5]',
      colorName: 'GA12C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:91,
      colorPot:'bg-[#fef7ea]',
      colorName: 'GA12C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:92,
      colorPot:'bg-[#f6e9cf]',
      colorName: 'GA12C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:93,
      colorPot:'bg-[#ddc9aa]',
      colorName: 'GA12C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:94,
      colorPot:'bg-[#bb9f78]',
      colorName: 'GA12C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:95,
      colorPot:'bg-[#95774f]',
      colorName: 'GA12C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:96,
      colorPot:'bg-[#846746]',
      colorName: 'GA12C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:97,
      colorPot:'bg-[#fffbf4]',
      colorName: 'GA13C8-P',
      colorGroup:'red',
    },
    {
      colorNumber:98,
      colorPot:'bg-[#fef8e4]',
      colorName: 'GA13C7-P',
      colorGroup:'red',
    },
    {
      colorNumber:99,
      colorPot:'bg-[#faefd2]',
      colorName: 'GA13C6-P',
      colorGroup:'red',
    },
    {
      colorNumber:100,
      colorPot:'bg-[#f4e9cc]',
      colorName: 'GA13C5-K',
      colorGroup:'red',
    },
    {
      colorNumber:101,
      colorPot:'bg-[#decda8]',
      colorName: 'GA13C4-T',
      colorGroup:'red',
    },
    {
      colorNumber:102,
      colorPot:'bg-[#c3a46a]',
      colorName: 'GA13C3-D',
      colorGroup:'red',
    },
    {
      colorNumber:103,
      colorPot:'bg-[#b49457]',
      colorName: 'GA13C2-A',
      colorGroup:'red',
    },
    {
      colorNumber:104,
      colorPot:'bg-[#927f4e]',
      colorName: 'GA13C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:105,
      colorPot:'bg-[#fffdfa]',
      colorName: 'GA14C8-P',
      colorGroup:'yellow',
    },
    {
      colorNumber:106,
      colorPot:'bg-[#fffffb]',
      colorName: 'GA14C7-P',
      colorGroup:'yellow',
    },
    {
      colorNumber:107,
      colorPot:'bg-[#fff8df]',
      colorName: 'GA14C6-P',
      colorGroup:'yellow',
    },
    {
      colorNumber:108,
      colorPot:'bg-[#f9ecc8]',
      colorName: 'GA14C5-K',
      colorGroup:'yellow',
    },
    {
      colorNumber:109,
      colorPot:'bg-[#ebd5ab]',
      colorName: 'GA14C4-T',
      colorGroup:'yellow',
    },
    {
      colorNumber:110,
      colorPot:'bg-[#ceac6c]',
      colorName: 'GA14C3-D',
      colorGroup:'yellow',
    },
    {
      colorNumber:111,
      colorPot:'bg-[#bf9858]',
      colorName: 'GA14C2-A',
      colorGroup:'yellow',
    },
    {
      colorNumber:112,
      colorPot:'bg-[#a98a50]',
      colorName: 'GA14C1-A',
      colorGroup:'yellow',
    },
    {
      colorNumber:113,
      colorPot:'bg-[#fefbee]',
      colorName: 'GA15C8-P',
      colorGroup:'yellow',
    },
    {
      colorNumber:114,
      colorPot:'bg-[#fefbee]',
      colorName: 'GA15C7-P',
      colorGroup:'yellow',
    },
    {
      colorNumber:115,
      colorPot:'bg-[#fef6e0]',
      colorName: 'GA15C6-P',
      colorGroup:'yellow',
    },
    {
      colorNumber:116,
      colorPot:'bg-[#ffe7bb]',
      colorName: 'GA15C5-K',
      colorGroup:'yellow',
    },
    {
      colorNumber:117,
      colorPot:'bg-[#ffdc9d]',
      colorName: 'GA15C4-T',
      colorGroup:'yellow',
    },
    {
      colorNumber:118,
      colorPot:'bg-[#e2b97d]',
      colorName: 'GA15C3-D',
      colorGroup:'yellow',
    },
    {
      colorNumber:119,
      colorPot:'bg-[#dcaa62]',
      colorName: 'GA15C2-A',
      colorGroup:'yellow',
    },
    {
      colorNumber:120,
      colorPot:'bg-[#cd9e5b]',
      colorName: 'GA15C1-A',
      colorGroup:'yellow',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
    {
      colorNumber:48,
      colorPot:'bg-[#593a37]',
      colorName: 'GA06C1-A',
      colorGroup:'red',
    },
  ]
}
  this.handleClick = this.handleClick.bind(this)
}
  handleClick(event){
    this.setState({varColor:event.target.value})
  }

  render(){
    const filterColor = this.state.colorCodes.filter(color => {
      if(this.state.varColor==='') return color
      return color.colorGroup === this.state.varColor
    })
    const renderColors = filterColor.map((color,index) =>
      <div className={`border rounded-2xl relative w-[100%] aspect-[3/2] ${color.colorPot}`} key={index}>
        <p className='absolute bottom-0 left-0 p-2'>
        {color.colorName}
        </p>
      </div>
    )

  return(
  <>
    <div className='bannerContainer'>
      <Banner
      sendImg='./img/backgroundtheme.jpg'
      sendAlt='roxo banner background'
      />
    </div>
    <TitleCenter name='Bảng màu sơn Roxo'/>
    <Button onClick={this.handleClick} value='red'>Red</Button>
    <Button onClick={this.handleClick} value='yellow'>Yellow</Button>
    <Button onClick={this.handleClick} value='orange'>Orange</Button>
    <Button onClick={this.handleClick} value='green'>Green</Button>
    <Button onClick={this.handleClick} value='blue'>Blue</Button>
    <Button onClick={this.handleClick} value='black'>Black</Button>
    <Button onClick={this.handleClick} value=''>All</Button>
    <div className='p-4 grid grid-cols-8 gap-1 w-[100%]'>{renderColors}</div>

  </>
  )
}
}
export default ColorPalettePage
