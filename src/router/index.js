import Vue from 'vue'
import Router from 'vue-router'

import mainpage from '@/page/mainpage'
import course from '@/page/course'
import upload from '@/page/uploadtest2'
import videoList from '@/page/video-list'
import videoPage from '@/page/video'
import editPage from '@/page/edit'
import uploadtest from '@/page/uploadtest'
import courseManage from '@/page/courseManage'
import videoManage from '@/page/videoManage'
import partManage from '@/page/partManage'
import status from '@/page/status'
import courseDetail from '@/page/courseDetail'
import courseInfo from '@/page/courseInfo'
import loginPanel from '@/page/loginPanel'
import searchPanel from '@/page/searchPanel'
import userInfo from '@/page/userInfo'
import tubeList from '@/page/tubeList'
import tubeRoom from '@/page/tubeRoom'
import m from '@/page/m'
import first from '@/page/first'
import second from '@/page/second'
import six from '@/page/six'
import third from '@/page/third'
import fourth from '@/page/fourth'
import five from '@/page/five'
import zhijiao from '@/page/zhijiao'
import zhiyuanzhe from '@/page/zhiyuanzhe'
import school from '@/page/school'
import chooseCourse from '@/page/chooseCourse'

Vue.use(Router)

export default new Router({
  base: 'hongyu',
  mode: "history",
  routes: [
    {
      path:"/tubeRoom",
      name:'tubeRoom',
      component: tubeRoom,
      meta:{
        show:true
      }
    },
   {
      path:"/tubeList",
      component: tubeList,
      meta:{
        show:true
      }
    },
    {
      path:"/chooseCourse",
      component: chooseCourse,
      meta:{
        show:true
      }
    },
    {
      path:"/zhiyuanzhe",
      component: zhiyuanzhe,
      meta:{
        show:true
      }
    },
    {
      path:"/school",
      component: school,
      meta:{
        show:true
      }
    },
    {
      path:"/m",
      component: m,
      meta:{
        show:true
      }
    },
    {
      path:"/zhijiao",
      component: zhijiao,
      meta:{
        show:true
      }
    },
    {
      path:"/first",
      component: first,
      meta:{
        show:true
      }
    },
    {
      path:"/second",
      component: second,
      meta:{
        show:true
      }
    },
    {
      path:"/six",
      component: six,
      meta:{
        show:true
      }
    },
    {
      path:"/third",
      component: third,
      meta:{
        show:true
      }
    },
    {
      path:"/fourth",
      component: fourth,
      meta:{
        show:true
      }
    },
    {
      path:"/five",
      component: five,
      meta:{
        show:true
      }
    },
    {
      path: "",
      redirect: "/main",
      meta:{
        show:true
      }
    },
    {
      path: '/main',
      component: mainpage,
      meta: { title: '首页',show:true }
      
    },
    {
      path: '/course',
      component: course,
      meta: { title: '课程',show:true }
    },
    {
      path: '/courseInfo',
      component: courseInfo,
      meta: { title: '课程概况',show:true }
    },
    {
      path:'/partManage',
      component: partManage
    },
    {
      path: '/courseDetail',
      component: courseDetail,
      meta: { title: '课程详情',show:true }
    },
    {
      path: '/manage',
      component: courseManage,
      meta:{
        show:true
      }

    },
    {
      path: '/videoes',
      component: videoList,
      meta:{
        show:true
      }
    },
    {
      path: '/video',
      component: videoPage,
      meta:{ title: '视频播放',show:true}
    },
    {
      path: '/edit',
      component: editPage,
      meta:{
        show:true
      }
    },
    {
      path: "/upload",
      component: uploadtest,
      meta:{
        show:true
      }
    },
    {
      path: "/courseManage",
      component: courseManage,
      meta:{
        show:true
      }
    },
    {
      path: "/videoManage",
      component: videoManage,
      meta:{
        show:true
      }
    },
    {
      path: "/uploadtest",
      component: upload,
      meta:{
        show:true
      }
    },
    {
      path: "/status",
      component: status,
      meta:{
        show:true
      }
    },
    {
      path: "/login",
      component: loginPanel,
      meta:{
        show:true
      }
    },
    {
      path: "/search",
      component: searchPanel,
      meta:{
        show:true
      }
    },
    {
      path: '/userInfo',
      component: userInfo,
      meta:{
        show:true
      }
    }
  ]
})
