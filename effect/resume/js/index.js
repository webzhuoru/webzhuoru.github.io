class Person extends React.Component{
    state = {
        persons:{
            id:1,
            name:'张卓如',
            job:'前端工程师',
            sex:'男',
            collegeTime:'2015 ~ 2019',
            college:'男',
            specialty:'软件工程',
            other:'本科/2019年毕业/团员',
            blog:'https://webzhuoru.github.io/',
            github:'https://github.com/webzhuoru',
            email:'Mrzhangsuperweb@163.com',
            wechat:'zzr17765603009',
        },
        company:[
            {
                name:'广州市昱安信息技术有限公司 （2021.10 ~ 2022.09）',
                job:'web前端',
                id:'c1',
                list:[
                    {
                        id:'c11',
                        kay:'配合产品团队完成项目的需求分析，业务设计和方案实现；'
                    },
                    {
                        id:'c12',
                        kay:'与产品、后台开发人员保持良好沟通，理解、消化各方需求，并落实为具体的开发工作；'
                    },
                    {
                        id:'c13',
                        kay:'使用Vue配合Three.js编写后台管理系统,统一管理3D云展馆详情；'
                    },
                    {
                        id:'c14',
                        kay:'根据产品需求，对产品的整体界面结构、操作流程等做出编写代码。'
                    },
                ]
            },
            {
                name:'广东恒电信息科技股份有限公司 （2019.07 ~ 2021.07）',
                job:'前端开发',
                id:'c2',
                list:[
                    {
                        id:'c21',
                        kay:'采用HTML5、CSS3等技术参与WEB开发项目，负责网页制作,以及手机端页面制作；'
                    },
                    {
                        id:'c22',
                        kay:'利用原生Js、Jquery实现页面的特效以及动态效果；'
                    },
                    {
                        id:'c23',
                        kay:'基于Vue使用uni-app开发app, 根据官方文档编写微信小程序；'
                    },
                    {
                        id:'c24',
                        kay:'负责项目组人员筛选和面试，指导新人项目。'
                    },
                ]
            }
        ],
        work:[
            
            {
                name:'广州海事博物馆官网后台管理系统',
                id:'whs',
                link:'https://www.gzhsmuseum.com/index',
                list:[
                    {
                        id:'whs1',
                        kay:'使用Vue+TinyMCE+Vuex+Element构建的后台管理系统，主要是管理广州海事博物馆官网；'
                    },
                    {
                        id:'whs2',
                        kay:'使用 Vuex 结合 cookie 对 toke 数据信息存储，浏览器刷新时则判断token是否过期,提高用户体验；'
                    },
                    {
                        id:'whs3',
                        kay:'同时使用localStore存储基本用户信息解决登录状态下刷新页面vuex中权限数据消失问题；'
                    },
                    {
                        id:'whs4',
                        kay:'引入TinyMCE富文本做为后台输入文本，可供管理人员操作前台页面以及嵌入html；'
                    },
                    {
                        id:'whs5',
                        kay:'结合 Element上传组件封装加强模块,在富文本中添加管理图片,音频,视频功能。'
                    },
                ]
            },
            
            {
                name:'凯螺到家',
                id:'w3',
                list:[
                    {
                        id:'w31',
                        kay:'主营水泥砂石的购物的微信小程序，分为商家端和用户端；'
                    },
                    {
                        id:'w32',
                        kay:'利用wx:for和wx.request完成商品列表的渲染与交互；'
                    },
                    {
                        id:'w33',
                        kay:'利用wx:navagateto和onLoad完成跳转详情页及获取数据；'
                    },
                    {
                        id:'w34',
                        kay:'使用 wxml-to-canvas，实现一键生成海报分享微信或保存等功能;'
                    },
                    {
                        id:'w35',
                        kay:'利用wx.request和Promise完成了异步请求的封装。'
                    }
                ]
            },
            {
                name:'蚁师导医',
                id:'w4',
                link:'http://www.ysdaoyijk.com/',
                list:[
                    {
                        id:'w41',
                        kay:'蚁师全民健康医养平台正使用Vue+HBuilder+Vuex+Uniapp开发的健康服务平台，支持在线看病，开药，药方打印等功能;'
                    },
                    {
                        id:'w42',
                        kay:'根据UI设计稿还原页面设计,配合uni-app搭建项目结构;'
                    },
                    {
                        id:'w43',
                        kay:'使用rem和@media 媒体查询解决移动端的适配问题;'
                    },
                    {
                        id:'w44',
                        kay:'使用了less预处理器和/deep/深度修改样式解决了uni-app初始样式问题;'
                    },
                    {
                        id:'w45',
                        kay:'使用了uniapp分包，提高进入页面时的加载速度。'
                    },
                ]
            },
            
            
            
            {
                name:'数字人民币',
                id:'w1',
                link:'../RMB/',
                list:[
                    {
                        id:'w11',
                        kay:'使用Vue2.0+echarts+Router+rem编写的，大屏自适应的银行大数据展现PC应用。'
                    }
                    
                ]
            },
            {
                name:'积分导购',
                id:'w1',
                link:'../niulansan/',
                list:[
                    {
                        id:'w11',
                        kay:'使用Vue3.0+Axios+Router+Vant+rem编写的，便利牛栏山顾客线上积分兑换的(H5)应用;'
                    },
                    {
                        id:'w12',
                        kay:'根据 UI 设计稿还原页面设计,并利用 vw 去做全手机机型适配;'
                    },
                    {
                        id:'w13',
                        kay:'采用第三方 Vant UI库完成手机端的页面布局;'
                    },
                    {
                        id:'w14',
                        kay:'使用keep-alive技术对产品列表进行缓存优化，避免页面的重复构建，减少服务器请求，加快页面响应速度，增强用户体验;'
                    },
                    {
                        id:'w15',
                        kay:'使用 axios 跟后台进行交互，获取积分兑换信息, 并对 axios 进行二次封装,根据环境变量统一请求路径,减少页面的重复操作;'
                    },
                    {
                        id:'w16',
                        kay:'调用 Router 的全局前置守卫 beforeEach，进行未登录跳转拦截的安全验证。'
                    },
                    
                ]
            },
            {
                name:'恒电大数据平台(后台管理系统vue2.0)',
                id:'w5',
                list:[
                    {
                        id:'w51',
                        kay:'使用Vue+Vuetify+ECharts构建PC端恒电大数据平台，支持教师、管理员和学生3种角色下的权限功能;'
                    },
                    {
                        id:'w52',
                        kay:'使用sortablejs对树形table表格实现拖拽排序效果;'
                    },
                    {
                        id:'w53',
                        kay:'使用防抖优化输入框实时输入请求事件以及节流优化内容加载;'
                    },
                    {
                        id:'w54',
                        kay:'根据实际需求情况封装 ECharts 组件，对用到的图表单独进行封装成组件，提高开发效率;'
                    },
                    {
                        id:'w54',
                        kay:'封装大量组件，轮播图，搜索框，对话框组件等,使用Vue的mixin来分发,提高 Vue 组件中的可复用功能;'
                    },
                    {
                        id:'w54',
                        kay:'使用路由懒加提高了页面的加载速度和解决白屏问题以及后期维护与更新。'
                    },
                ]
            },
        ]
    }
    // add = ()=>{
    //     const {persons} = this.state
    //     const p = {id:persons.length+1,name:'小王job:20}
    //     this.setState({persons:[p,...persons]})
    // }
    render(){
        const {persons} = this.state
        return (
            <div className="container">
                <div className="aside">
                    <a className="pdfbtn" href="webzhuoru.pdf">
                        PDF 下载
                    </a>
                </div>
        <div className="header">
            <h1 className="name">{persons.name} - {persons.job}</h1>
            <div className="header-container">
                <div className="left">
                    <p>教育经历</p>
                    <p>{persons.sex}/{persons.collegeTime}</p>
                    <p>{persons.college}/{persons.specialty}</p>
                    <p>{persons.other}</p>
                </div>
                <div className="right">
                    <p>
                        <a href={persons.blog}>
                            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg" p-id="1878" xmlnsxlink="http://www.w3.org/1999/xlink"
                                width="16" height="16">
                                <path
                                    d="M880.702 563.34c-2.501 3.002-6.503 5.004-10.506 5.504h-1.501c-4.002 0-7.504-1-10.505-3.502L512 276.683 165.81 565.342c-3.502 2.502-7.504 4.002-12.007 3.502-4.002-0.5-8.004-2.502-10.506-5.504l-31.017-37.02c-5.503-6.504-4.502-17.009 2.001-22.512l359.697-299.665c21.012-17.51 55.03-17.51 76.042 0L672.088 306.2v-97.554c0-9.005 7.004-16.009 16.009-16.009h96.053c9.005 0 16.009 7.004 16.009 16.009v204.112l109.561 91.05c6.503 5.503 7.504 16.008 2.001 22.512l-31.019 37.02z m-80.544 237.631c0 17.51-14.508 32.018-32.018 32.018H576.035V640.883h-128.07v192.105H255.859c-17.51 0-32.018-14.508-32.018-32.018V560.84c0-1.002 0.5-2.002 0.5-3.002L512 320.708l287.658 237.13c0.5 1 0.5 2 0.5 3.002v240.131z"
                                    p-id="4689"></path>
                            </svg>
                            {persons.blog}</a>
                    </p>
                    <p>
                        <a href={persons.github}>
                            <svg className="icon" fill="#ffffff" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4925" xmlnsxlink="http://www.w3.org/1999/xlink"
                                width="16" height="16">
                                <path
                                    d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"
                                    p-id="4926"></path>
                            </svg>{persons.github}
                        </a>
                    </p>
                    <p>
                        <a href={"mailto:"+persons.email}>
                            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlnsxlink="http://www.w3.org/1999/xlink" width="16" height="16" fill="#ffffff">
                                <path
                                    d="M718.542076 733.025952c-6.89606 6.748704-18.074657 6.748704-24.969695 0l-56.165184-55.012941c-6.879688-6.751774-6.879688-17.701151 0-24.451902 6.89606-6.748704 18.073634-6.748704 24.953322 0l43.686988 42.784432 84.268242-82.509179c6.879688-6.753821 18.074657-6.753821 24.953322 0 6.89606 6.751774 6.89606 17.690918 0 24.443715L718.542076 733.025952 718.542076 733.025952z"
                                    p-id="3263"></path>
                                <path
                                    d="M730.572064 505.030261c-90.979084 0-164.731832 73.088622-164.731832 163.254178 0 90.168626 73.752748 163.251108 164.731832 163.251108 90.978061 0 164.731832-73.081459 164.731832-163.251108C895.303896 578.119907 821.550125 505.030261 730.572064 505.030261zM729.814818 804.366767c-75.049277 0-135.8879-60.286038-135.8879-134.666072 0-74.377988 60.838623-134.669142 135.8879-134.669142 75.048253 0 135.8879 60.292178 135.8879 134.669142C865.702718 744.081753 804.863071 804.366767 729.814818 804.366767z"
                                    p-id="3264"></path>
                                <path
                                    d="M556.806485 714.39257 180.616614 714.39257l188.484815-188.457186 81.470523 81.45722c12.032034 12.046361 28.058033 18.687618 45.090964 18.687618 17.032932 0 33.05893-6.641257 45.090964-18.687618l81.470523-81.470523 20.828374-20.813025 191.143365-191.157691 0 207.514217c10.662851 7.111978 20.527522 15.322987 29.438473 24.468275L863.634616 301.710576c0 0 0.777713-16.210193-4.9088-22.01234-5.686513-9.074679-25.03314-6.872524-25.03314-6.872524L157.348678 272.825712c0 0-17.748223-0.741897-24.744567 7.853875-6.996344 8.596795-4.9088 21.029966-4.9088 21.029966l0 411.656641c0 0-1.50733 19.444864 4.9088 24.577768 11.001565 8.79941 23.435759 5.89015 23.435759 5.89015l410.429697 0C562.445926 734.404346 559.199998 724.56321 556.806485 714.39257zM804.257274 302.265208 519.941879 586.579579c-12.964266 12.964266-35.59059 12.964266-48.554856 0L187.027627 302.265208 804.257274 302.265208zM157.130713 313.992297l191.143365 191.114712-191.143365 191.144388L157.130713 313.992297z"
                                    p-id="3265"></path>
                            </svg>{persons.email}
                        </a>
                    </p>
                    <p>
                        <svg t="1615656044282" className="icon" viewBox="0 0 1251 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5438" xmlnsxlink="http://www.w3.org/1999/xlink"
                            width="16" height="16">
                            <path
                                d="M599.002074 331.851852c35.953778 0 59.429926-19.986963 59.429926-49.000296 0-28.975407-24.272593-48.96237-59.429926-48.962371-34.436741 0-71.186963 18.697481-71.186963 48.962371 0 29.658074 36.788148 49.000296 71.186963 49.000296zM397.160296 282.851556c0-29.013333-24.272593-48.96237-59.429926-48.962371-34.436741 0-71.186963 18.659556-71.186963 48.962371 0 30.302815 36.788148 49.000296 71.186963 49.000296 35.953778 0.644741 59.429926-19.342222 59.429926-49.000296z"
                                p-id="5439"></path>
                            <path
                                d="M1213.62963 639.696593c0-75.96563-34.550519-149.238519-96.749037-206.241186-61.515852-56.32-143.777185-90.908444-230.855112-98.379851v-4.058075C849.389037 164.143407 666.889481 37.925926 460.913778 37.925926 227.290074 37.925926 37.925926 197.366519 37.925926 393.443556c0 104.448 53.930667 199.452444 156.899555 273.408l-35.271111 104.448c-2.730667 8.154074 0 16.308148 6.257778 21.731555 6.219852 5.423407 15.890963 6.068148 22.793482 2.692741l134.106074-65.801482 15.890963 3.413334h0.682666c41.453037 8.116148 77.406815 15.587556 121.628445 15.587555 8.343704 0 40.087704-2.692741 50.441481-7.471407 51.2 122.121481 188.036741 204.231111 341.485037 204.231111 38.684444 0 78.127407-8.836741 117.494519-18.318222L1073.303704 982.281481a22.831407 22.831407 0 0 0 9.709037 2.692741 18.432 18.432 0 0 0 13.12237-4.740741 20.214519 20.214519 0 0 0 6.902519-21.693629l-26.244741-84.802371C1164.553481 805.243259 1213.62963 721.806222 1213.62963 639.696593z m-183.182223 200.817777a18.166519 18.166519 0 0 0-6.902518 21.048889l14.52563 48.165926-62.198519-33.261037a22.831407 22.831407 0 0 0-9.671111-2.692741c-1.403259 0-3.489185 0-4.854519 0.644741-35.953778 8.836741-73.272889 18.318222-109.909333 18.318222-167.936 0-304.810667-113.284741-304.810667-252.359111s136.874667-252.397037 304.810667-252.397037c165.205333 0 304.165926 115.332741 304.165926 252.397037 0.644741 69.214815-43.576889 140.439704-125.155556 200.135111zM246.670222 656.649481a19.418074 19.418074 0 0 0-7.585185-22.376296c-96.786963-66.484148-145.863111-147.228444-145.863111-240.184889 0-167.556741 164.484741-303.93837 367.009185-303.93837 176.96237 0 335.265185 105.851259 369.777778 246.290963-188.681481 4.058074-341.447111 135.698963-341.447111 295.10163 0 21.048889 2.768593 42.742519 8.988444 64.474074h-2.768592c-11.036444 0.682667-22.793481 1.365333-34.512593 1.365333-39.442963 0-73.310815-6.826667-109.909333-14.260148l-22.148741-4.058074a29.089185 29.089185 0 0 0-13.12237 1.327407L223.156148 725.902222l23.514074-69.214815z"
                                p-id="5440"></path>
                            <path
                                d="M735.118222 495.160889c-21.997037 0-43.994074 24.462222-43.994074 48.96237 0 24.500148 21.997037 49.000296 43.994074 49.000297 33.374815 0 53.968593-25.296593 53.968593-49.000297s-20.593778-48.96237-53.968593-48.96237zM963.318519 495.160889c-22.148741 0-43.614815 24.462222-43.614815 48.96237 0 24.500148 21.466074 49.000296 43.614815 49.000297 33.60237 0 54.347852-25.296593 54.347851-49.000297s-20.745481-48.96237-54.347851-48.96237z"
                                p-id="5441"></path>
                        </svg> {persons.wechat}</p>
                </div>
            </div>
        </div>
        <div className="h2_block block">
            <h2>个人优势</h2>
            <p>熟练掌握 HTML+CSS 能够还原UI工作稿内容；</p>
            <p>熟练掌握 JavaScript，熟悉 TypeScript 语法规范，掌握ES6以上的语法；</p>
            <p>熟练掌握 Element-ui、Bootstrap、vant 等ui框架使用；</p>
            <p>熟练掌握使用Vue全家桶（Vue-cli、VueRouter、Vuex、Axios）等轻量级前端框架的使用；</p>
            <p>了解 微信小程序 和 React 开发框架，能根据开发文档编写项目；</p>
            <p>了解 node.js，利用其搭建简单的服务器；</p>
            <p>掌握Git，SVN代理工具的使用。</p>
        </div>
        <div className="h2_block block">
            <h2>工作经验</h2>
            {
                this.state.company.map(companyObj=>{
                    return  <div className="h3_block block">
                <h3>{companyObj.name}</h3>
                <p><code>{companyObj.job}</code></p>
                <ul>
                {
                    companyObj.list.map(item=>{
                        return <li className="first" key={item.id}>{item.kay}</li>
                    })
                }
                </ul>
            </div>
            })
        }
        </div>
        <div className="h2_block block">
            <h2>项目经验</h2>
            {
                this.state.work.map((workObj,index)=>{
                return  <div className="h3_block block" key={workObj.id}>
                            <div className="flexbox">
                                <h3>{workObj.name}</h3>
                                <p style={{display: workObj.link?'block' : 'none'}}><code><a href={workObj.link}>DEMO</a></code></p>
                            </div>
                            <ul>
                                {
                                    workObj.list.map(item=>{
                                        return <li className="first" key={item.id}>{item.kay}</li>
                                    })
                                }
                            </ul>
                        </div>
                    
                })
            }
            
        </div>
    </div>
            // <div>
            //     <h2>展示人员信息</h2>
            //     <button onClick={this.add}>添加一个小王</button>
            //     <h3>使用index（索引值）作为key</h3>
            //     <ul>
            //         {
            //             this.state.persons.map((personObj,index)=>{
            //                 return <li key={index}>{personObj.name}---{personObj.age}<input type="text"/></li>
            //             })
            //         }
            //     </ul>
            //     <hr/>
            //     <hr/>
            //     <h3>使用id（数据的唯一标识）作为key</h3>
            //     <ul>
            //         {
            //             this.state.persons.map((personObj)=>{
            //                 return <li key={personObj.id}>{personObj.name}---{personObj.age}<input type="text"/></li>
            //             })
            //         }
            //     </ul>
            // </div>
        )
    }
}

ReactDOM.render(<Person/>,document.getElementById('root'))