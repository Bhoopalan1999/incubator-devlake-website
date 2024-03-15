"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[37218],{82073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));n(61839);const a={title:"SonarQube Server",sidebar_position:19,description:"Config UI instruction for SonarQube"},s=void 0,r={unversionedId:"Configuration/SonarQube",id:"version-v1.0/Configuration/SonarQube",title:"SonarQube Server",description:"Config UI instruction for SonarQube",source:"@site/versioned_docs/version-v1.0/Configuration/SonarQube.md",sourceDirName:"Configuration",slug:"/Configuration/SonarQube",permalink:"/zh/docs/v1.0/Configuration/SonarQube",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Configuration/SonarQube.md",tags:[],version:"v1.0",sidebarPosition:19,frontMatter:{title:"SonarQube Server",sidebar_position:19,description:"Config UI instruction for SonarQube"},sidebar:"docsSidebar",previous:{title:"PagerDuty",permalink:"/zh/docs/v1.0/Configuration/PagerDuty"},next:{title:"TAPD",permalink:"/zh/docs/v1.0/Configuration/Tapd"}},l={},u=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Endpoint URL",id:"endpoint-url",level:3},{value:"Token",id:"token",level:3},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:3},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Projects",id:"projects",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Step 4 - Setting Sync Policy",id:"step-4---setting-sync-policy",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Visit Config UI at: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,i.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sonarqube-add-data-connections",src:n(32314).Z,width:"896",height:"720"})),(0,i.kt)("h3",{id:"connection-name"},"Connection Name"),(0,i.kt)("p",null,"Name your connection."),(0,i.kt)("h3",{id:"endpoint-url"},"Endpoint URL"),(0,i.kt)("p",null,"This should be a valid REST API endpoint"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://<host>:<port>/api/"))),(0,i.kt)("p",null,"The endpoint url should end with ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("h3",{id:"token"},"Token"),(0,i.kt)("p",null,"Please use a system admin account to create the SonarQube token, because some SonarQube APIs require this permission to list all projects. Learn about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sonarsource.com/sonarqube/8.9/user-guide/user-account/generating-and-using-tokens/#generating-a-token"},"how to create a SonarQube token"),"."),(0,i.kt)("h3",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,i.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,i.kt)("h3",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,i.kt)("p",null,"DevLake uses a dynamic rate limit at around 18,000 requests/hour to collect SonarQube data. You can adjust the rate limit if you want to increase or lower the speed."),(0,i.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,i.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sonarqube-set-data-scope",src:n(82671).Z,width:"916",height:"821"})),(0,i.kt)("h3",{id:"projects"},"Projects"),(0,i.kt)("p",null,"Choose the SonarQube projects to collect."),(0,i.kt)("h3",{id:"data-entities"},"Data Entities"),(0,i.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain SonarQube entities, you can unselect some entities to accerlerate the collection speed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code Quality Domain: SonarQube issues, issue code blocks, file metrics, hotspots, etc."),(0,i.kt)("li",{parentName:"ul"},"Cross Domain: SonarQube accounts, etc.")),(0,i.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,i.kt)("p",null,"SonarQube does not have transformation and this step will be skipped."),(0,i.kt)("h2",{id:"step-4---setting-sync-policy"},"Step 4 - Setting Sync Policy"),(0,i.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},32314:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sonarqube-add-data-connections-9536a4d073ce2e86c6f274d294149935.png"},82671:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sonarqube-set-data-scope-d93d56def8465b3403dc1ea4882ac5c2.png"}}]);