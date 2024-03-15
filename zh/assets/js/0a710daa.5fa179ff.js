"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[35600],{17302:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=i(87462),n=(i(67294),i(3905));i(61839);const r={title:"Jira",description:"Jira Plugin\n"},l=void 0,s={unversionedId:"Plugins/jira",id:"version-v1.0/Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/versioned_docs/version-v1.0/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/zh/docs/v1.0/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Plugins/jira.md",tags:[],version:"v1.0",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/zh/docs/v1.0/Plugins/jenkins"},next:{title:"Opsgenie",permalink:"/zh/docs/v1.0/Plugins/opsgenie"}},o={},u=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This plugin collects Jira data through Jira REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,n.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,n.kt)("p",null,"Available for Jira Cloud, Sever/Data Center 7.x, 8.x. Check ",(0,n.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,n.kt)("h2",{id:"entities"},"Entities"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Jira entities")," collected by this plugin."),(0,n.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/Overview/SupportedDataSources#jira"},"data refresh policy")," of this plugin."),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"Metrics that can be calculated based on the data collected from Jira:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/RequirementCount"},"Requirement Count")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/RequirementLeadTime"},"Requirement Lead Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/RequirementDeliveryRate"},"Requirement Delivery Rate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/RequirementGranularity"},"Requirement Granularity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/BugAge"},"Bug Age")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/BugCountPer1kLinesOfCode"},"Bug Count per 1k Lines of Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/IncidentAge"},"Incident Age")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/IncidentCountPer1kLinesOfCode"},"Incident Count per 1k Lines of Code"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuring Jira via ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Configuration/Jira"},"config-ui"),"."),(0,n.kt)("li",{parentName:"ul"},"Configuring Jira via Config UI's ",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Configuration/AdvancedMode#4-jira"},"advanced mode"),".")),(0,n.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,n.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "MY PIPELINE",\n  "plan": [\n    [\n      {\n        "plugin": "jira",\n        "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "transformationRules": {\n            "epicKeyField": "",\n            "storyPointField": "",\n            "remotelinkCommitShaPattern": "",\n            "typeMappings": {\n              "10040": {\n                "standardType": "Incident",\n                "statusMappings": null\n              }\n            }\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')))}p.isMDXComponent=!0}}]);