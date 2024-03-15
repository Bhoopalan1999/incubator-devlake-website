"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[61539],{83298:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var a=t(87462),o=(t(67294),t(3905));t(61839);const s={title:"Code Quality Duplicated Blocks",description:"Code Quality Duplicated Blocks\n",sidebar_position:33},c=void 0,l={unversionedId:"Metrics/CQDuplicatedBlocks",id:"version-v1.0/Metrics/CQDuplicatedBlocks",title:"Code Quality Duplicated Blocks",description:"Code Quality Duplicated Blocks\n",source:"@site/versioned_docs/version-v1.0/Metrics/CQDuplicatedBlocks.md",sourceDirName:"Metrics",slug:"/Metrics/CQDuplicatedBlocks",permalink:"/docs/v1.0/Metrics/CQDuplicatedBlocks",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Metrics/CQDuplicatedBlocks.md",tags:[],version:"v1.0",sidebarPosition:33,frontMatter:{title:"Code Quality Duplicated Blocks",description:"Code Quality Duplicated Blocks\n",sidebar_position:33},sidebar:"docsSidebar",previous:{title:"Code Quality Maintainability-Debt",permalink:"/docs/v1.0/Metrics/CQMaintainability-Debt"},next:{title:"Code Quality Duplicated Lines",permalink:"/docs/v1.0/Metrics/CQDuplicatedLines"}},d={},r=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2}],n={toc:r};function u(e){let{components:i,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},n,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"This metric is the number of duplicated blocks of lines. This metric is collected from SonarQube, check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/user-guide/metric-definitions/#duplications"},"this doc")," for detailed definition."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"Duplicated Blocks is a code metric that measures the amount of duplicated code in a project. Duplicated blocks are sequences of code that are identical or nearly identical to each other, and can occur within a single file or across multiple files. Duplicated code can make the codebase harder to maintain, increase the risk of bugs and errors, and make it more difficult to understand and modify the code. Identifying and removing duplicated code can improve the maintainability, reliability, and readability of the codebase, and reduce the risk of introducing bugs or errors in the future."),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/DataSources/SonarQube"},"SonarQube"))),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This metric is calculated by counting the total number of duplicated_blocks."),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on file metrics collected from SonarQube."),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"The following SQL shows how to find duplicated blocks of lines in specific projects, eg. 'project1' and 'project2'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n  sum(duplicated_blocks)\nFROM cq_file_metrics\nWHERE\n  project_key in ('project1', 'project2')\n")))}u.isMDXComponent=!0}}]);