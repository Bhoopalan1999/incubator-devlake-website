"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[25816],{99060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));n(61839);const i={title:"TAPD",sidebar_position:21,description:"Config UI instruction for TAPD"},s=void 0,l={unversionedId:"Configuration/Tapd",id:"version-v1.0/Configuration/Tapd",title:"TAPD",description:"Config UI instruction for TAPD",source:"@site/versioned_docs/version-v1.0/Configuration/Tapd.md",sourceDirName:"Configuration",slug:"/Configuration/Tapd",permalink:"/docs/v1.0/Configuration/Tapd",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Configuration/Tapd.md",tags:[],version:"v1.0",sidebarPosition:21,frontMatter:{title:"TAPD",sidebar_position:21,description:"Config UI instruction for TAPD"},sidebar:"docsSidebar",previous:{title:"SonarQube Server",permalink:"/docs/v1.0/Configuration/SonarQube"},next:{title:"Teambition(WIP)",permalink:"/docs/v1.0/Configuration/Teambition"}},r={},d=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Endpoint URL",id:"endpoint-url",level:3},{value:"Username/Password",id:"usernamepassword",level:3},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:3},{value:"Ralte Limit (Optional)",id:"ralte-limit-optional",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Workspaces",id:"workspaces",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Issue Tracking",id:"issue-tracking",level:3},{value:"Step 4 - Setting Sync Policy",id:"step-4---setting-sync-policy",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI at: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Connections")," page."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tapd-add-data-connections",src:n(91641).Z,width:"2674",height:"960"})),(0,a.kt)("h3",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h3",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://api.tapd.cn/"),"\nThe endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,a.kt)("h3",{id:"usernamepassword"},"Username/Password"),(0,a.kt)("p",null,"Input the username and password of your Tapd account, you can follow the steps as below.\n",(0,a.kt)("img",{alt:"tapd-account",src:n(65882).Z,width:"1650",height:"852"})),(0,a.kt)("h3",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h3",{id:"ralte-limit-optional"},"Ralte Limit (Optional)"),(0,a.kt)("p",null,"For TAPD, we suggest you setting the rate limit to 3500"),(0,a.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/230924072-433451e5-97a3-4d99-9ca7-0a43d0bacd01.png",alt:"image-20230410224100853"})),(0,a.kt)("p",null,"You can find the campany id in your Tapd company dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/230923942-4dd5bbd7-a391-4abc-ab99-ff7543d919ac.png",alt:"image-20230410223926964"})),(0,a.kt)("h3",{id:"workspaces"},"Workspaces"),(0,a.kt)("p",null,"Choose the Tapd workspaces to collect."),(0,a.kt)("h3",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Tapd entities, you can unselect some entities to accerlerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: Tapd issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Tapd accounts, etc.")),(0,a.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/230924606-bf6ef00c-73fa-4a60-be8f-1f27fe4ef6ae.png",alt:"image"})),(0,a.kt)("p",null,'Without adding transformation rules, you can not view all charts in "Engineering Throughput and Cycle Time" dashboards.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each Tapd workspace can be configured with different transformation rules."),(0,a.kt)("h3",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requirement: choose the issue types to be transformed to "REQUIREMENT".'),(0,a.kt)("li",{parentName:"ul"},'Bug: choose the issue types to be transformed to "BUG".'),(0,a.kt)("li",{parentName:"ul"},'Incident: choose the issue types to be transformed to "INCIDENT".'),(0,a.kt)("li",{parentName:"ul"},"TODO: The issues that are planned but have not been worked on yet "),(0,a.kt)("li",{parentName:"ul"},"IN-PROGRESS: The issues that are work-in-progress"),(0,a.kt)("li",{parentName:"ul"},"DONE: The issues that are completed")),(0,a.kt)("h2",{id:"step-4---setting-sync-policy"},"Step 4 - Setting Sync Policy"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.0/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},65882:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tapd-account-4058c8f303edf4c53f94b04368c9251c.png"},91641:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tapd-add-data-connections-f3698cc74f0e533bcca3206964290e65.png"}}]);