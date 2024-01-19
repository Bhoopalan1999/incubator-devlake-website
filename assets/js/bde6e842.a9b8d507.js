"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[34884],{62724:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(61839);const l={title:"CircleCI",description:"CircleCI Plugin\n"},r=void 0,s={unversionedId:"Plugins/circleci",id:"Plugins/circleci",title:"CircleCI",description:"CircleCI Plugin\n",source:"@site/docs/Plugins/circleci.md",sourceDirName:"Plugins",slug:"/Plugins/circleci",permalink:"/docs/Plugins/circleci",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/circleci.md",tags:[],version:"current",frontMatter:{title:"CircleCI",description:"CircleCI Plugin\n"},sidebar:"docsSidebar",previous:{title:"BitBucket Cloud",permalink:"/docs/Plugins/bitbucket"},next:{title:"Customize",permalink:"/docs/Plugins/customize"}},o={},c=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects various entities from CircleCI, including accounts, jobs, workflows, pipelines and projects."),(0,a.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"CircleCI entities")," collected by this plugin."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Metrics that can be calculated based on the data collected from CircleCI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BuildCount"},"Build Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BuildDuration"},"Build Duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BuildSuccessRate"},"Build Success Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring CircleCI via ",(0,a.kt)("a",{parentName:"li",href:"/docs/Configuration/CircleCI"},"Config UI"))),(0,a.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Please replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),' in the sample requests with your actual DevLake API endpoint. For how to view DevLake API\'s swagger documentation, please refer to the "Using DevLake API" section of ',(0,a.kt)("a",{parentName:"p",href:"/docs/DeveloperManuals/DeveloperSetup"},"Developer Setup"),".")),(0,a.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1",\n  "plan": [\n    [\n      {\n        "plugin": "circleci",\n        "options": {\n          "connectionId": 1,\n          "fullName": "likyh/likyhphp",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n            "issueStatusTodo":"new,open",\n            "issueStatusInProgress":"",\n            "issueStatusDone":"resolved,closed",\n            "issueStatusOther":"on hold,wontfix,duplicate,invalid"\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/DeveloperManuals/DeveloperSetup#references"},"references"))))}p.isMDXComponent=!0}}]);