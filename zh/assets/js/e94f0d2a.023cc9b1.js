"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[17702],{88650:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));t(61839);const a={title:"PR Coding Time",description:"PR Coding Time\n",sidebar_position:15},r=void 0,s={unversionedId:"Metrics/PRCodingTime",id:"version-v1.0/Metrics/PRCodingTime",title:"PR Coding Time",description:"PR Coding Time\n",source:"@site/versioned_docs/version-v1.0/Metrics/PRCodingTime.md",sourceDirName:"Metrics",slug:"/Metrics/PRCodingTime",permalink:"/zh/docs/v1.0/Metrics/PRCodingTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Metrics/PRCodingTime.md",tags:[],version:"v1.0",sidebarPosition:15,frontMatter:{title:"PR Coding Time",description:"PR Coding Time\n",sidebar_position:15},sidebar:"docsSidebar",previous:{title:"PR Cycle Time",permalink:"/zh/docs/v1.0/Metrics/PRCycleTime"},next:{title:"PR Pickup Time",permalink:"/zh/docs/v1.0/Metrics/PRPickupTime"}},d={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:l};function m(e){let{components:i,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The time it takes from the first commit until a PR is issued. "),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"It is recommended that you keep every task on a workable and manageable scale for a reasonably short amount of coding time. The average coding time of most engineering teams is around 3-4 days."),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"The following SQL shows how to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding time")," of a specific PR. DevLake pre-calculates the metric and stores it in table.project_pr_metrics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n  pr_coding_time/60 as 'PR Coding Time(h)'\nFROM\n  project_pr_metrics\n")),(0,o.kt)("p",null,"If you want to measure the monthly trend of ",(0,o.kt)("inlineCode",{parentName:"p"},"PR coding time")," in the screenshot below, please run the following SQL in Grafana. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(55476).Z,width:"1116",height:"299"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT \n  DATE_ADD(date(pr.created_date), INTERVAL -DAY(date(pr.created_date))+1 DAY) as time,\n  avg(ppm.pr_coding_time)/60 as 'PR Coding Time(h)'\nFROM \n  pull_requests pr\n  JOIN project_pr_metrics ppm ON pr.id = ppm.id\nGROUP BY 1\nORDER BY 1\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("p",null,"Divide coding tasks into workable and manageable pieces."))}m.isMDXComponent=!0},55476:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pr-coding-time-monthly-ef784a357be7784149db0546124bbda3.png"}}]);