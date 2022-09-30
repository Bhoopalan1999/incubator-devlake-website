"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=s(n),y=r,u=c["".concat(i,".").concat(y)]||c[y]||p[y]||o;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"DORA - Deployment Frequency",description:"DORA - Deployment Frequency\n",sidebar_position:18},l=void 0,d={unversionedId:"Metrics/DeploymentFrequency",id:"Metrics/DeploymentFrequency",title:"DORA - Deployment Frequency",description:"DORA - Deployment Frequency\n",source:"@site/docs/Metrics/DeploymentFrequency.md",sourceDirName:"Metrics",slug:"/Metrics/DeploymentFrequency",permalink:"/docs/Metrics/DeploymentFrequency",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/DeploymentFrequency.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"DORA - Deployment Frequency",description:"DORA - Deployment Frequency\n",sidebar_position:18},sidebar:"docsSidebar",previous:{title:"Build Success Rate",permalink:"/docs/Metrics/BuildSuccessRate"},next:{title:"DORA - Lead Time for Changes",permalink:"/docs/Metrics/LeadTimeForChanges"}},i={},s=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"How often an organization deploys code to production or release it to end users."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("p",null,"Deployment frequency reflects the efficiency of a team's deployment. A team that deploys more frequently can deliver the product faster and users' feature requirements can be met faster."),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("p",null,"DORA dashboard. See ",(0,r.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,"Deployment frequency is calculated based on the number of deployment days, not the number of deployments, e.g.,daily, weekly, monthly, yearly."),(0,r.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. DevLake uses the same benchmarks."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Groups"),(0,r.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,r.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,r.kt)("td",{parentName:"tr",align:null},"On-demand (multiple deploys per day)"),(0,r.kt)("td",{parentName:"tr",align:null},"On-demand")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"High performers"),(0,r.kt)("td",{parentName:"tr",align:null},"Between once per week and once per month"),(0,r.kt)("td",{parentName:"tr",align:null},"Between once per week and once per month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,r.kt)("td",{parentName:"tr",align:null},"Between once per month and once every 6 months"),(0,r.kt)("td",{parentName:"tr",align:null},"Between once per month and once every 6 months")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,r.kt)("td",{parentName:"tr",align:null},"Fewer than once per six months"),(0,r.kt)("td",{parentName:"tr",align:null},"Fewer than once per six months")))),(0,r.kt)("p",null,(0,r.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on deployments collected in multiple ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,r.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,r.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")),(0,r.kt)("b",null,"Transformation Rules Required"),(0,r.kt)("p",null,"This metric relies on the deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as deployments."),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"If you want to measure the monthly trend of deployment count as the picture shown below, run the following SQL in Grafana."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46667).Z,width:"1354",height:"610"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"with _deployments as (\n-- get the deployment count each month\n    SELECT\n        date_format(finished_date,'%y/%m') as month,\n        COUNT(distinct id) AS deployment_count\n    FROM\n        cicd_tasks\n    WHERE\n        type = 'DEPLOYMENT'\n        and result = 'SUCCESS'\n    GROUP BY 1\n),\n\n_calendar_months as(\n-- deal with the month with no deployments\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n)\n\nSELECT \n    cm.month, \n    case when d.deployment_count is null then 0 else d.deployment_count end as deployment_count\nFROM \n    _calendar_months cm\n    left join _deployments d on cm.month = d.month\nORDER BY 1\n")),(0,r.kt)("p",null,"If you want to measure in which category your team falls into as the picture shown below, run the following SQL in Grafana."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7243).Z,width:"674",height:"376"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"with last_few_calendar_months as(\n-- get the last few months within the selected time period in the top-right corner\n    SELECT CAST((SYSDATE()-INTERVAL (H+T+U) DAY) AS date) day\n    FROM ( SELECT 0 H\n            UNION ALL SELECT 100 UNION ALL SELECT 200 UNION ALL SELECT 300\n        ) H CROSS JOIN ( SELECT 0 T\n            UNION ALL SELECT  10 UNION ALL SELECT  20 UNION ALL SELECT  30\n            UNION ALL SELECT  40 UNION ALL SELECT  50 UNION ALL SELECT  60\n            UNION ALL SELECT  70 UNION ALL SELECT  80 UNION ALL SELECT  90\n        ) T CROSS JOIN ( SELECT 0 U\n            UNION ALL SELECT   1 UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4 UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7 UNION ALL SELECT   8 UNION ALL SELECT   9\n        ) U\n    WHERE\n        (SYSDATE()-INTERVAL (H+T+U) DAY) > $__timeFrom()\n),\n\n_days_weeks_deploy as(\n    SELECT\n            date(DATE_ADD(last_few_calendar_months.day, INTERVAL -WEEKDAY(last_few_calendar_months.day) DAY)) as week,\n            MAX(if(deployments.day is not null, 1, 0)) as week_deployed,\n            COUNT(distinct deployments.day) as days_deployed\n    FROM \n        last_few_calendar_months\n        LEFT JOIN(\n            SELECT\n                DATE(finished_date) AS day,\n                id\n            FROM cicd_tasks\n            WHERE\n                type = 'DEPLOYMENT'\n                and result = 'SUCCESS') deployments ON deployments.day = last_few_calendar_months.day\n    GROUP BY week\n    ),\n\n_monthly_deploy as(\n    SELECT\n            date(DATE_ADD(last_few_calendar_months.day, INTERVAL -DAY(last_few_calendar_months.day)+1 DAY)) as month,\n            MAX(if(deployments.day is not null, 1, 0)) as months_deployed\n    FROM \n        last_few_calendar_months\n        LEFT JOIN(\n            SELECT\n                DATE(finished_date) AS day,\n                id\n            FROM cicd_tasks\n            WHERE\n                type = 'DEPLOYMENT'\n                and result = 'SUCCESS') deployments ON deployments.day = last_few_calendar_months.day\n    GROUP BY month\n    ),\n\n_median_number_of_deployment_days_per_week as (\n    SELECT x.days_deployed as median_number_of_deployment_days_per_week from _days_weeks_deploy x, _days_weeks_deploy y\n    GROUP BY x.days_deployed\n    HAVING SUM(SIGN(1-SIGN(y.days_deployed-x.days_deployed)))/COUNT(*) > 0.5\n    LIMIT 1\n),\n\n_median_number_of_deployment_days_per_month as (\n    SELECT x.months_deployed as median_number_of_deployment_days_per_month from _monthly_deploy x, _monthly_deploy y\n    GROUP BY x.months_deployed\n    HAVING SUM(SIGN(1-SIGN(y.months_deployed-x.months_deployed)))/COUNT(*) > 0.5\n    LIMIT 1\n)\n\nSELECT \n    CASE  \n        WHEN median_number_of_deployment_days_per_week >= 3 THEN 'On-demand'\n        WHEN median_number_of_deployment_days_per_week >= 1 THEN 'Between once per week and once per month'\n        WHEN median_number_of_deployment_days_per_month >= 1 THEN 'Between once per month and once every 6 months'\n        ELSE 'Fewer than once per six months' END AS 'Deployment Frequency'\nFROM _median_number_of_deployment_days_per_week, _median_number_of_deployment_days_per_month\n")),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trunk development. Work in small batches and often merge their work into shared trunks."),(0,r.kt)("li",{parentName:"ul"},"Integrate CI/CD tools for automated deployment"),(0,r.kt)("li",{parentName:"ul"},"Improve automated test coverage")))}p.isMDXComponent=!0},46667:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deployment-frequency-monthly-e3d6db34bbe66ff899f5dc15ae0716be.jpeg"},7243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deployment-frequency-text-2ebe079803f3e982984f348da2ff4bf5.jpeg"}}]);