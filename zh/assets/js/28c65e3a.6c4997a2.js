"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[51563],{3099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(61839);const i={sidebar_position:4,title:"Key Concepts",linkTitle:"KeyConcepts",description:"DevLake Key Concepts\n"},r=void 0,s={unversionedId:"Overview/KeyConcepts",id:"version-v0.21/Overview/KeyConcepts",title:"Key Concepts",description:"DevLake Key Concepts\n",source:"@site/versioned_docs/version-v0.21/Overview/KeyConcepts.md",sourceDirName:"Overview",slug:"/Overview/KeyConcepts",permalink:"/zh/docs/v0.21/Overview/KeyConcepts",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/Overview/KeyConcepts.md",tags:[],version:"v0.21",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Key Concepts",linkTitle:"KeyConcepts",description:"DevLake Key Concepts\n"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/zh/docs/v0.21/Overview/Architecture"},next:{title:"Supported Data Sources",permalink:"/zh/docs/v0.21/Overview/SupportedDataSources"}},l={},c=[{value:"In Config UI",id:"in-config-ui",level:2},{value:"Data Source",id:"data-source",level:3},{value:"Data Connection",id:"data-connection",level:3},{value:"Data Scope",id:"data-scope",level:3},{value:"Scope Config",id:"scope-config",level:3},{value:"Data Entities",id:"data-entities",level:4},{value:"Transformations",id:"transformations",level:4},{value:"Project",id:"project",level:3},{value:"Blueprint",id:"blueprint",level:3},{value:"APIs and Config UI Advanced Mode",id:"apis-and-config-ui-advanced-mode",level:2},{value:"Data Plugins",id:"data-plugins",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Stages",id:"stages",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Subtasks",id:"subtasks",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Last updated: Nov 9, 2023")),(0,o.kt)("h2",{id:"in-config-ui"},"In Config UI"),(0,o.kt)("p",null,"The following terms are arranged in the order of their appearance in the actual user workflow in the config UI."),(0,o.kt)("h3",{id:"data-source"},"Data Source"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data source is a specific DevOps tool from which you wish to sync your data, such as GitHub, GitLab, Jira and Jenkins.")),(0,o.kt)("p",null,"Typically, DevLake uses one ",(0,o.kt)("a",{parentName:"p",href:"#data-plugins"},"data plugin")," to pull data for a single data source. For example, the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/Plugins/jira"},"jira")," plugin is used to fetch data from Jira."),(0,o.kt)("p",null,"However, there are cases where DevLake may use multiple data plugins for a single data source. This approach is employed to enhance the synchronization speed and provide other advantages. For instance, when retrieving data from GitHub or GitLab, aside from the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/Plugins/github"},"github")," and ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/Plugins/gitlab"},"gitlab")," plugins, the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/Plugins/gitextractor"},"gitextractor")," is also used to fetch data. In these cases, DevLake still recognizes GitHub or GitLab as a single data source."),(0,o.kt)("h3",{id:"data-connection"},"Data Connection"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data connection is a specific instance of a ",(0,o.kt)("a",{parentName:"strong",href:"#data-source"},"data source"),".")," It stores the necessary access information, such as the endpoint URL and authentication token, to establish a connection to that data source."),(0,o.kt)("p",null,"A single data source can have one or more data connections associated with it. This allows you to connect to and retrieve data from different instances or installations of the same data source."),(0,o.kt)("p",null,"To set up a new data connection, it is recommended to use the 'Data Connections' page in DevLake. This page provides a convenient interface for adding and configuring data connections. Once a data connection is set up, you can later associate it with a DevLake project."),(0,o.kt)("h3",{id:"data-scope"},"Data Scope"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data scope is the top-level 'container' in a data source"),". For example, a data scope for Jira is a Jira board, for TAPD is a TAPD workspace, for GitHub/GitLab/BitBucket is a repo, for Jenkins is a Jenkins job, etc."),(0,o.kt)("p",null,"You can add multiple data scopes to a data connection to determine which data to collect. Data scopes vary for different data sources."),(0,o.kt)("h3",{id:"scope-config"},"Scope Config"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A scope config refers to the configuration of a data scope.")," It defines the specific data entities to be collected and the transformations to be applied to that data. "),(0,o.kt)("p",null,"Each data scope can have at most one scope config associated with it; while a scope config can be shared among multiple data scopes under the same data connection."),(0,o.kt)("p",null,"A scope config consists of two parts: ",(0,o.kt)("a",{parentName:"p",href:"#data-entities"},"Data Entities")," and ",(0,o.kt)("a",{parentName:"p",href:"#transformations"},"Transformations"),"."),(0,o.kt)("h4",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,"Data entities refer to the specific data fields that are collected from different data domains. Check the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"supported data entities")," of each data source."),(0,o.kt)("p",null,"Data entities are categorized into ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/DataModels/DevLakeDomainLayerSchema#data-models"},"six data domains")," in DevLake: Issue Tracking, Source Code Management, Code Review, CI/CD, Code Quality, and Cross-Domain."),(0,o.kt)("p",null,"When setting up the scope config of a GitHub data connection, you have the flexibility to choose which specific data entities you want to collect. if you only want to collect 'repos', 'commits', and 'pull requests' while excluding 'issues' and 'workflow runs', you need to check the 'Source Code Management' and 'Code Review' domains, and uncheck 'Issue Tracking' or 'CI/CD' domains."),(0,o.kt)("h4",{id:"transformations"},"Transformations"),(0,o.kt)("p",null,"Transformations are configurations for users to customize how DevLake transforms raw API responses to the domain layer data."),(0,o.kt)("p",null,"Although configuring transformation rules is not mandatory, certain pre-built dashboards, such as ",(0,o.kt)("a",{parentName:"p",href:"/livedemo/EngineeringLeads/DORA"},"DORA")," and ",(0,o.kt)("a",{parentName:"p",href:"/livedemo/EngineeringLeads/WeeklyBugRetro"},"Weekly Bug Retro")," require the them to display the metrics accurately. If you leave the rules blank or have not configured them correctly, only a few ",(0,o.kt)("a",{parentName:"p",href:"/livedemo/DataSources/GitHub"},"data source dashboards")," will be displayed as expected. "),(0,o.kt)("p",null,"You can find the required transformations in the 'Dashboard Introduction' panel in each pre-built dashboard."),(0,o.kt)("h3",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On a high level, a DevLake project can be viewed as a real-world project or product line.")," It represents a specific initiative or endeavor within the software development domain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On a lower level, a DevLake project is a way of organizing and grouping data from different domains.")," DevLake uses various ",(0,o.kt)("a",{parentName:"p",href:"#data-scope"},"data scopes"),", such as repos, boards, cicd_scopes, and cq_projects as the 'container' to associate different types of data to a specific project. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A project has a ",(0,o.kt)("a",{parentName:"li",href:"#Bluepirnts"},"blueprint")," for data collection and metric computation. "),(0,o.kt)("li",{parentName:"ul"},"DevLake measures DORA metrics at the project level. Each project has a set of DORA metrics. For example, if a user associates 'Jenkins Job A' and 'Jira board B' with project M, only the 'deployments' from 'Jenkins Job A' and the 'incidents' from 'Jira board B' will be considered when calculating the Change Failure Rate metric for project M.\n",(0,o.kt)("img",{src:a(78167).Z,width:"2594",height:"1810"}))),(0,o.kt)("h3",{id:"blueprint"},"Blueprint"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A blueprint serves as the plan to synchronize data from data sources into the DevLake platform.")," Creating a blueprint consists of four steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding ",(0,o.kt)("a",{parentName:"li",href:"#data-connections"},"data connections"),": You can add one or more data connections to a blueprint, depending on the data sources you want to sync with DevLake. Each data connection represents a specific data source, such as GitHub or Jira. "),(0,o.kt)("li",{parentName:"ol"},"Setting up the ",(0,o.kt)("a",{parentName:"li",href:"#data-scope"},"data scope"),": When adding a data connection, you can choose to collect all or part of the configured data scopes of the data connection."),(0,o.kt)("li",{parentName:"ol"},"Setting up the sync policy: You can specify the sync frequency and the time range for data collection.")),(0,o.kt)("p",null,"The relationship between 'Blueprint', 'Project' and 'Data Connection' is explained as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Blueprint ERD",src:a(3707).Z,width:"1352",height:"667"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A blueprint will be automatically created by along the creation with a DevLake project."),(0,o.kt)("li",{parentName:"ul"},"Each blueprint can have multiple data connections."),(0,o.kt)("li",{parentName:"ul"},"Each data connection can have multiple data scopes."),(0,o.kt)("li",{parentName:"ul"},"Each set of data scope only consists of one GitHub/GitLab project or Jira board, along with their corresponding data entities."),(0,o.kt)("li",{parentName:"ul"},"Each set of data scope can only have one set of scope config.")),(0,o.kt)("h2",{id:"apis-and-config-ui-advanced-mode"},"APIs and Config UI Advanced Mode"),(0,o.kt)("p",null,"Typically, the following terms do not appear in the regular mode of the Config UI, but can be very useful if you use ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.21/Overview/References"},"DevLake's APIs")," or the advanced mode of Config UI."),(0,o.kt)("h3",{id:"data-plugins"},"Data Plugins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A data plugin is a specific module that syncs or transforms data.")," There are two types of data plugins: Data Collection Plugins and Data Transformation Plugins."),(0,o.kt)("p",null,"Data Collection Plugins pull data from one or more data sources. DevLake supports 8 data plugins in this category: ",(0,o.kt)("inlineCode",{parentName:"p"},"ae"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"feishu"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gitextractor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gitlab"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jenkins"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jira")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tapd"),"."),(0,o.kt)("p",null,"Data Transformation Plugins transform the data pulled by other Data Collection Plugins. ",(0,o.kt)("inlineCode",{parentName:"p"},"refdiff")," is currently the only plugin in this category."),(0,o.kt)("p",null,"Although the names of the data plugins are not displayed in the regular mode of DevLake Configuration UI, they can be used directly in JSON in the Advanced Mode."),(0,o.kt)("p",null,"For detailed information about the relationship between data sources and data plugins, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.21/Overview/SupportedDataSources"},"Supported Data Sources"),"."),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A pipeline is an orchestration of ",(0,o.kt)("a",{parentName:"strong",href:"#tasks"},"tasks")," of data ",(0,o.kt)("inlineCode",{parentName:"strong"},"collection"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"extraction"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"conversion")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"enrichment"),", defined in the DevLake API.")," A pipeline is composed of one or multiple ",(0,o.kt)("a",{parentName:"p",href:"#stages"},"stages")," that are executed in a sequential order. Any error occurring during the execution of any stage, task or subtask will cause the immediate fail of the pipeline."),(0,o.kt)("p",null,"The composition of a pipeline is explained as follows:\n",(0,o.kt)("img",{alt:"Blueprint ERD",src:a(3851).Z,width:"1409",height:"593"}),"\nNotice: ",(0,o.kt)("strong",{parentName:"p"},"You can manually orchestrate the pipeline in Configuration UI Advanced Mode and the DevLake API; whereas in Configuration UI regular mode, an optimized pipeline orchestration will be automatically generated for you.")),(0,o.kt)("h3",{id:"stages"},"Stages"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A stages is a collection of tasks performed by data plugins.")," Stages are executed in a sequential order in a pipeline."),(0,o.kt)("h3",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A task is a collection of ",(0,o.kt)("a",{parentName:"strong",href:"#subtasks"},"subtasks")," that perform any of the ",(0,o.kt)("inlineCode",{parentName:"strong"},"collection"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"extraction"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"conversion")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"enrichment")," jobs of a particular data plugin.")," Tasks are executed in a parallel order in any stages."),(0,o.kt)("h3",{id:"subtasks"},"Subtasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A subtask is the minimal work unit in a pipeline that performs in any of the four roles: ",(0,o.kt)("inlineCode",{parentName:"strong"},"Collectors"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"Extractors"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"Converters")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"Enrichers"),".")," Subtasks are executed in sequential orders."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Collectors"),": Collect raw data from data sources, normally via DevLake API and stored into ",(0,o.kt)("inlineCode",{parentName:"li"},"raw data table")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Extractors"),": Extract data from ",(0,o.kt)("inlineCode",{parentName:"li"},"raw data tables")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"tool layer tables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Converters"),": Convert data from ",(0,o.kt)("inlineCode",{parentName:"li"},"tool layer tables")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"domain layer tables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Enrichers"),": Enrich data from one domain to other domains. For instance, the Fourier Transformation can examine ",(0,o.kt)("inlineCode",{parentName:"li"},"issue_changelog")," to show time distribution of an issue on every assignee.")))}p.isMDXComponent=!0},3851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pipeline-erd-63705e2232b63c7fe75197ee3e96f170.svg"},78167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project_pipeline-06b394bb2f3453ffd888f20affbe2d5d.png"},3707:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blueprint-erd-762692dfe07100fd9c045dd22ec90954.svg"}}]);