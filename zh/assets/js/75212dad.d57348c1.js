"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[97014],{69508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),o=(a(67294),a(3905));a(61839);const r={title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},n=void 0,s={unversionedId:"Overview/Introduction",id:"version-v1.0/Overview/Introduction",title:"Introduction",description:"General introduction of Apache DevLake",source:"@site/versioned_docs/version-v1.0/Overview/Introduction.md",sourceDirName:"Overview",slug:"/Overview/Introduction",permalink:"/zh/docs/v1.0/Overview/Introduction",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Overview/Introduction.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/zh/docs/v1.0/Overview"},next:{title:"Architecture",permalink:"/zh/docs/v1.0/Overview/Architecture"}},c={},d=[{value:"What is Apache DevLake?",id:"what-is-apache-devlake",level:2},{value:"What can be accomplished with DevLake?",id:"what-can-be-accomplished-with-devlake",level:2},{value:"How do I use DevLake?",id:"how-do-i-use-devlake",level:2},{value:"1. Setting-up DevLake",id:"1-setting-up-devlake",level:3},{value:"2. Configuring Data Source",id:"2-configuring-data-source",level:3},{value:"3. Creating your Project",id:"3-creating-your-project",level:3},{value:"4. Checking the Dashboards and Metrics",id:"4-checking-the-dashboards-and-metrics",level:3}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Introduction to Apache DevLake and Implementing DORA Metrics"),(0,o.kt)("meta",{name:"description",content:"Discover how to implement DORA metrics for your software development process. Improve your engineering performance with our open-source platform."}),(0,o.kt)("meta",{name:"keywords",content:"DORA Metrics, Open-Source DORA, DORA Metrics DevOps, Implement DORA Metrics, DevOps DORA Metrics"})),(0,o.kt)("h2",{id:"what-is-apache-devlake"},"What is Apache DevLake?"),(0,o.kt)("p",null,"Apache DevLake (Incubating) is an open-source dev data platform that ingests, analyzes, and visualizes the fragmented data from DevOps tools to extract insights for engineering excellence, developer experience, and community growth."),(0,o.kt)("p",null,"Apache DevLake is designed for developer teams looking to make better sense of their development process and to bring a more data-driven approach to their own practices. You can ask Apache DevLake many questions regarding your development process. Just connect and query."),(0,o.kt)("h2",{id:"what-can-be-accomplished-with-devlake"},"What can be accomplished with DevLake?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unified data integration: Bring together DevOps data from across the Software Development Life Cycle (SDLC) with our ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/DataModels/DevLakeDomainLayerSchema"},"standard data model"),"."),(0,o.kt)("li",{parentName:"ul"},"Out-of-the-box insights: Access key engineering metrics through intuitive, use-case driven dashboards."),(0,o.kt)("li",{parentName:"ul"},"Customizable: Extend DevLake to align with your unique needs, adding ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Overview/SupportedDataSources"},"data sources"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/Metrics/"},"metrics"),", and ",(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/DORA"},"dashboards")," as required."),(0,o.kt)("li",{parentName:"ul"},"Industry standards implementation: Use DevLake to apply recognized ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/DORA"},"DORA metrics")," to optimize DevOps performance."),(0,o.kt)("li",{parentName:"ul"},"Create a thriving culture: DevLake is centered on healthy practices that may help teams adopt and build a practical data-driven culture.")),(0,o.kt)("h2",{id:"how-do-i-use-devlake"},"How do I use DevLake?"),(0,o.kt)("h3",{id:"1-setting-up-devlake"},"1. Setting-up DevLake"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To implement a proof of concept for Apache DevLake tailored to your specific use cases, you can install it on your local machines using Docker Compose. The detailed instructions for this setup can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/GettingStarted/DockerComposeSetup"},"Docker Compose setup documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Alternatively, if your infrastructure is powered by Kubernetes, you can explore the ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/GettingStarted/HelmSetup"},"Helm setup")," option. The Helm setup documentation provides guidance on deploying and configuring Apache DevLake using Helm.")),(0,o.kt)("h3",{id:"2-configuring-data-source"},"2. Configuring Data Source"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once Installed, you can start configuring DevLake with ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/Overview/SupportedDataSources"},"supported data sources")," like GitHub, GitLab, Jira, Jenkins, BitBucket, Azure DevOps, SonarQube, PagerDuty, TAPD, ZenTao, Teambition, and we are extending our support to many other tools, feel free to check out the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/Overview/Roadmap"},"roadmap"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"However, if your CI/CD tool is not currently supported by DevLake, you can utilize the ",(0,o.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Plugins/webhook/"},"webhooks")," feature. The Webhooks feature allows you to actively push data to DevLake when there is not a specific plugin available for your DevOps tool."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"img",src:a(93321).Z,width:"2880",height:"1412"})),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"img",src:a(26056).Z,width:"1280",height:"624"})))),(0,o.kt)("h3",{id:"3-creating-your-project"},"3. Creating your Project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Once you have connected a data source to Apache DevLake, you can create a "Project" to ensure that you are all set for execution. The process of setting up a project in DevLake typically involves four steps:'),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"img",src:a(74012).Z,width:"1280",height:"641"})))),(0,o.kt)("h3",{id:"4-checking-the-dashboards-and-metrics"},"4. Checking the Dashboards and Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After configuring your project in DevLake, you can access pre-built dashboards in Grafana. These dashboards provide visualizations and insights for various metrics related to software development."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"img",src:a(29173).Z,width:"3222",height:"1860"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To customize the dashboards according to your specific goals and requirements, you can tweak them using Grafana's features. Additionally, if you prefer to create your own dashboards, you have the option to use SQL queries to fetch the necessary data from DevLake referring to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/DataModels/DevLakeDomainLayerSchema"},"domain layer data schema")," and SQL examples in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Metrics/"},"metrics documentation"),"."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"img",src:a(66317).Z,width:"1280",height:"716"})))))}u.isMDXComponent=!0},29173:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/userflow3-0d673e4c7005bff5f852f182f765f9ca.png"},93321:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/introduction-userflow1-969ad4dd4a43f7aaab63c855a5614aed.png"},26056:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/introduction-userflow2-5f902237f30cbf20c584732dd5a452a2.png"},74012:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/introduction-userflow3-c72d051a7f0aa26d3556937b477f52b7.png"},66317:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/introduction-userflow5-553752c91d53d8fe8c6f69987b385957.png"}}]);