"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[60334],{88474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(61839);const r={title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:3},i=void 0,s={unversionedId:"GettingStarted/HelmSetup",id:"GettingStarted/HelmSetup",title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",source:"@site/docs/GettingStarted/HelmSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/HelmSetup",permalink:"/docs/GettingStarted/HelmSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/HelmSetup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Install via Docker Compose",permalink:"/docs/GettingStarted/DockerComposeSetup"},next:{title:"Upgrade",permalink:"/docs/GettingStarted/Upgrade"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"You can also check https://github.com/apache/incubator-devlake-helm-chart to make contribution",id:"you-can-also-check-httpsgithubcomapacheincubator-devlake-helm-chart-to-make-contribution",level:4},{value:"To install or upgrade to the latest version, please check here",id:"to-install-or-upgrade-to-the-latest-version-please-check-here",level:4},{value:"Install",id:"install",level:3},{value:"Tips:",id:"tips",level:4},{value:"Upgrade",id:"upgrade",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Some example deployments",id:"some-example-deployments",level:2},{value:"Deploy with NodePort",id:"deploy-with-nodeport",level:3},{value:"Deploy with Ingress",id:"deploy-with-ingress",level:3},{value:"Deploy with Ingress (Https)",id:"deploy-with-ingress-https",level:3},{value:"Parameters",id:"parameters",level:2},{value:"FAQ",id:"faq",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Helm >= 3.6.0"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes >= 1.19.0")),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("h4",{id:"you-can-also-check-httpsgithubcomapacheincubator-devlake-helm-chart-to-make-contribution"},"You can also check ",(0,l.kt)("a",{parentName:"h4",href:"https://github.com/apache/incubator-devlake-helm-chart"},"https://github.com/apache/incubator-devlake-helm-chart")," to make contribution"),(0,l.kt)("h4",{id:"to-install-or-upgrade-to-the-latest-version-please-check-here"},"To install or upgrade to the latest version, please check ",(0,l.kt)("a",{parentName:"h4",href:"https://github.com/apache/incubator-devlake-helm-chart/releases"},"here")),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("p",null,"To install the chart with release name ",(0,l.kt)("inlineCode",{parentName:"p"},"devlake"),",follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Generate a secure encryption key using a method such as OpenSSL. For example, run the following command to generate a 128-character string consisting of uppercase letters:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the generated string, set the value of the ENCRYPTION_SECRET environment variable by running the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'export ENCRYPTION_SECRET="copied string"\n')),(0,l.kt)("p",{parentName:"li"},"This command will set the ",(0,l.kt)("inlineCode",{parentName:"p"},"ENCRYPTION_SECRET")," environment variable to the value of the copied string."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Please make sure to keep the ENCRYPTION_SECRET safe as it is used to encrypt sensitive information in the database, such as personal access tokens and passwords. If ENCRYPTION_SECRET is lost, it may not be possible to decrypt this sensitive information."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"By default, the timezone is UTC. To customize the timezone settings, apply the ",(0,l.kt)("inlineCode",{parentName:"p"},'--set commonEnvs.TZ="your timezone",grafana.env.TZ="your timezone"')," command. For further guidance, please refer to ",(0,l.kt)("a",{parentName:"p",href:"#faq"},"FAQ"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"By default, a random password is generated and stored in a Kubernetes Secret for the Grafana admin user. Alternatively, you can explicitly set the password via ",(0,l.kt)("inlineCode",{parentName:"p"},"--set grafana.adminPassword=<your password>"),". For further guidance, please refer to ",(0,l.kt)("a",{parentName:"p",href:"#faq"},"FAQ"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the chart by running the following commands:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nhelm install devlake devlake/devlake --version=1.0-beta1--set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n")))),(0,l.kt)("p",null,"And visit your devlake from the node port (32001 by default)."),(0,l.kt)("p",null,"http://YOUR-NODE-IP:32001"),(0,l.kt)("h4",{id:"tips"},"Tips:"),(0,l.kt)("p",null,"If you are using minikube inside your mac, please use the following command to forward the port:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/devlake-ui  30090:4000\n")),(0,l.kt)("p",null,"and open another terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/devlake-grafana  30091:3000\n")),(0,l.kt)("p",null,"Then you can visit:\nconfig-ui by url ",(0,l.kt)("inlineCode",{parentName:"p"},"http://YOUR-NODE-IP:30090"),"\ngrafana by url ",(0,l.kt)("inlineCode",{parentName:"p"},"http://YOUR-NODE-IP:30091")),(0,l.kt)("h3",{id:"upgrade"},"Upgrade"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Back up your Grafana dashboards")," before upgrading if you have modified/customized any dashboards. You can re-import these dashboards to Grafana after the upgrade.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"If you are upgrading from DevLake v0.18.x or later versions:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm upgrade devlake devlake/devlake --version=1.0-beta1\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"If you are upgrading from DevLake v0.17.x or earlier versions to v0.18.x or later versions:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the ENCODE_KEY value from /app/config/.env of the lake pod (e.g. devlake-lake-0), and replace the <ENCRYPTION_SECRET> in the upgrade command below.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You may encounter the below error when upgrading because the built-in grafana has been replaced by the official grafana dependency. So you may need to delete the grafana deployment first."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},'Error: UPGRADE FAILED: cannot patch "devlake-grafana" with kind Deployment: Deployment.apps "devlake-grafana" is invalid: spec.selector: Invalid value: v1.LabelSelector{MatchLabels:map',"[string]",'string{"app.kubernetes.io/instance":"devlake", "app.kubernetes.io/name":"grafana"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm upgrade devlake devlake/devlake --version=1.0-beta1--set lake.encryptionSecret.secret=<ENCRYPTION_SECRET>\n")))),(0,l.kt)("h3",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"To uninstall/delete the ",(0,l.kt)("inlineCode",{parentName:"p"},"devlake")," release:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall devlake\n")),(0,l.kt)("h2",{id:"some-example-deployments"},"Some example deployments"),(0,l.kt)("h3",{id:"deploy-with-nodeport"},"Deploy with NodePort"),(0,l.kt)("p",null,"Conditions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IP Address of Kubernetes node: 192.168.0.6"),(0,l.kt)("li",{parentName:"ul"},"Want to visit devlake with port 30000.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake --set service.uiPort=30000 --set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n")),(0,l.kt)("p",null,"After deployed, visit devlake: ",(0,l.kt)("a",{parentName:"p",href:"http://192.168.0.6:30000"},"http://192.168.0.6:30000")),(0,l.kt)("h3",{id:"deploy-with-ingress"},"Deploy with Ingress"),(0,l.kt)("p",null,"Conditions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I have already configured default ingress for the Kubernetes cluster"),(0,l.kt)("li",{parentName:"ul"},"I want to use ",(0,l.kt)("a",{parentName:"li",href:"http://devlake.example.com"},"http://devlake.example.com")," for visiting devlake")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake --set \"ingress.enabled=true,ingress.hostname=devlake.example.com\" --set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n")),(0,l.kt)("p",null,"After deployed, visit devlake: ",(0,l.kt)("a",{parentName:"p",href:"http://devlake.example.com"},"http://devlake.example.com"),", and grafana at ",(0,l.kt)("a",{parentName:"p",href:"http://devlake.example.com/grafana"},"http://devlake.example.com/grafana")),(0,l.kt)("h3",{id:"deploy-with-ingress-https"},"Deploy with Ingress (Https)"),(0,l.kt)("p",null,"Conditions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I have already configured ingress(class: nginx) for the Kubernetes cluster, and the https using 8443 port."),(0,l.kt)("li",{parentName:"ul"},"I want to use ",(0,l.kt)("a",{parentName:"li",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443")," for visiting devlake."),(0,l.kt)("li",{parentName:"ul"},"The https certificates are generated by letsencrypt.org, and the certificate and key files: ",(0,l.kt)("inlineCode",{parentName:"li"},"cert.pem")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"key.pem"))),(0,l.kt)("p",null,"First, create the secret:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create secret tls ssl-certificate --cert cert.pem --key secret.pem\n")),(0,l.kt)("p",null,"Then, deploy the devlake:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'ENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc \'A-Z\' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake \\\n    --set "ingress.enabled=true,ingress.enableHttps=true,ingress.hostname=devlake-0.example.com" \\\n    --set "ingress.className=nginx,ingress.httpsPort=8443" \\\n    --set "ingress.tlsSecretName=ssl-certificate"\n    --set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n')),(0,l.kt)("p",null,"After deployed, visit devlake: ",(0,l.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443"),", and grafana at ",(0,l.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443/grafana"},"https://devlake-0.example.com:8443/grafana")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"Some useful parameters for the chart, you could also check them in values.yaml"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicaCount"),(0,l.kt)("td",{parentName:"tr",align:null},"Replica Count for devlake, currently not used"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imageTag"),(0,l.kt)("td",{parentName:"tr",align:null},"The version tag for all images"),(0,l.kt)("td",{parentName:"tr",align:null},"see Values.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"commonEnvs"),(0,l.kt)("td",{parentName:"tr",align:null},"The common envs for all pods except grafana"),(0,l.kt)("td",{parentName:"tr",align:null},'{TZ: "UTC"}')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.useExternal"),(0,l.kt)("td",{parentName:"tr",align:null},"If use external mysql server, set true"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.externalServer"),(0,l.kt)("td",{parentName:"tr",align:null},"External mysql server address"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.externalPort"),(0,l.kt)("td",{parentName:"tr",align:null},"External mysql server port"),(0,l.kt)("td",{parentName:"tr",align:null},"3306")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.username"),(0,l.kt)("td",{parentName:"tr",align:null},"username for mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"merico")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.password"),(0,l.kt)("td",{parentName:"tr",align:null},"password for mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"merico")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.database"),(0,l.kt)("td",{parentName:"tr",align:null},"database for mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"lake")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.rootPassword"),(0,l.kt)("td",{parentName:"tr",align:null},"root password for mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"admin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.storage.type"),(0,l.kt)("td",{parentName:"tr",align:null},"storage type, pvc or hostpath"),(0,l.kt)("td",{parentName:"tr",align:null},"pvc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.storage.class"),(0,l.kt)("td",{parentName:"tr",align:null},"storage class for mysql's volume"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.storage.size"),(0,l.kt)("td",{parentName:"tr",align:null},"volume size for mysql's data"),(0,l.kt)("td",{parentName:"tr",align:null},"5Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.storage.hostPath"),(0,l.kt)("td",{parentName:"tr",align:null},"the host path if mysql.storage.type is hostpath"),(0,l.kt)("td",{parentName:"tr",align:null},"/devlake/mysql/data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"repository for mysql's image"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.image.tag"),(0,l.kt)("td",{parentName:"tr",align:null},"image tag for mysql's image"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"pullPolicy for mysql's image"),(0,l.kt)("td",{parentName:"tr",align:null},"IfNotPresent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.initContainers"),(0,l.kt)("td",{parentName:"tr",align:null},"init containers to run to complete before mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.extraLabels"),(0,l.kt)("td",{parentName:"tr",align:null},"extra labels for mysql's statefulset"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.securityContext"),(0,l.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.containerSecurityContext"),(0,l.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.service.type"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql service type"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterIP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql.service.nodePort"),(0,l.kt)("td",{parentName:"tr",align:null},"specify mysql nodeport"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"dashboard, datasource, etc. settings for grafana, installed by grafana official chart"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"repository for lake's image"),(0,l.kt)("td",{parentName:"tr",align:null},"apache/devlake")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"pullPolicy for lake's image"),(0,l.kt)("td",{parentName:"tr",align:null},"Always")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.port"),(0,l.kt)("td",{parentName:"tr",align:null},"the port of devlake backend"),(0,l.kt)("td",{parentName:"tr",align:null},"8080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.envs"),(0,l.kt)("td",{parentName:"tr",align:null},"initial envs for lake"),(0,l.kt)("td",{parentName:"tr",align:null},"see Values.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.extraEnvsFromSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"existing secret name of extra envs"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.encryptionSecret.secretName"),(0,l.kt)("td",{parentName:"tr",align:null},"the k8s secret name for ENCRYPTION_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.encryptionSecret.secret"),(0,l.kt)("td",{parentName:"tr",align:null},"the secret for ENCRYPTION_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.encryptionSecret.autoCreateSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"whether let the helm chart create the secret"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.extraLabels"),(0,l.kt)("td",{parentName:"tr",align:null},"extra labels for lake's statefulset"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.securityContext"),(0,l.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lake.containerSecurityContext"),(0,l.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"repository for ui's image"),(0,l.kt)("td",{parentName:"tr",align:null},"apache/devlake-config-ui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"pullPolicy for ui's image"),(0,l.kt)("td",{parentName:"tr",align:null},"Always")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"If the basic auth in ui is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.user"),(0,l.kt)("td",{parentName:"tr",align:null},"The user name for the basic auth"),(0,l.kt)("td",{parentName:"tr",align:null},'"admin"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.password"),(0,l.kt)("td",{parentName:"tr",align:null},"The password for the basic auth"),(0,l.kt)("td",{parentName:"tr",align:null},'"admin"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.autoCreateSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"If let the helm chart create the secret"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.secretName"),(0,l.kt)("td",{parentName:"tr",align:null},"The basic auth secret name"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.extraLabels"),(0,l.kt)("td",{parentName:"tr",align:null},"extra labels for ui's statefulset"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.securityContext"),(0,l.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ui.containerSecurityContext"),(0,l.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.type"),(0,l.kt)("td",{parentName:"tr",align:null},"Service type for exposed service"),(0,l.kt)("td",{parentName:"tr",align:null},"NodePort")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.uiPort"),(0,l.kt)("td",{parentName:"tr",align:null},"Node port for config ui"),(0,l.kt)("td",{parentName:"tr",align:null},"32001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"If enable ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.enableHttps"),(0,l.kt)("td",{parentName:"tr",align:null},"If enable https"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.className"),(0,l.kt)("td",{parentName:"tr",align:null},"Name for ingressClass. leave empty for using default"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"The hostname/domainname for ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"The prefix for endpoints, currently not used"),(0,l.kt)("td",{parentName:"tr",align:null},"/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.tlsSecretName"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret name for tls's certificate for https"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.httpPort"),(0,l.kt)("td",{parentName:"tr",align:null},"The http port for ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service.ingress.httpsPort"),(0,l.kt)("td",{parentName:"tr",align:null},"The https port for ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"443")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option.database"),(0,l.kt)("td",{parentName:"tr",align:null},"The database type, valids: mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option.connectionSecretName"),(0,l.kt)("td",{parentName:"tr",align:null},"The database connection details secret name"),(0,l.kt)("td",{parentName:"tr",align:null},"devlake-mysql-auth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option.autoCreateSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"If let the helm chart create the secret"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Can I use a managed Cloud database service instead of running database in docker?")),(0,l.kt)("p",null,"Yes, it just set useExternal value to true while you deploy devlake with helm chart. Below we'll use MySQL on AWS RDS as an example."),(0,l.kt)("p",null,"a. (Optional) Create a MySQL instance on AWS RDS following this ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html"},"doc"),", skip this step if you'd like to use an existing instance\nb. Proviede below values while install from helm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- `mysql.useExternal`: this should be `true`\n- `mysql.externalServer`: use your RDS instance's IP address or domain name.\n- `mysql.externalPort`: use your RDS instance's database port.\n- `mysql.username`: use your `username` for access RDS instance's DB\n- `mysql.password`: use your `password` for access RDS instance's DB\n- `mysql.database`: use your RDS instance's DB name, you may need to create a database first with `CREATE DATABASE <DB name>;`\n")),(0,l.kt)("p",null,"Here is the example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake \\\n  --set mysql.useExternal=true \\\n  --set mysql.externalServer=db.example.com \\\n  --set mysql.externalPort=3306 \\\n  --set mysql.username=admin \\\n  --set mysql.password=password_4_admin \\\n  --set mysql.database=devlake\n  --set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Can I use a secret to store the database connection details?")),(0,l.kt)("p",null,"Yes, to do so, you need to have a secret in your Kubernetes Cluster that contains the following values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MYSQL_USER"),": The user to connect to your DB."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MYSQL_PASSWORD"),": The password to connect to your DB."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MYSQL_DATABASE"),": The database to connect to your DB."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MYSQL_ROOT_PASSWORD"),": The root password to connect to your DB."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DB_URL"),": mysql://",(0,l.kt)("inlineCode",{parentName:"li"},"username"),":",(0,l.kt)("inlineCode",{parentName:"li"},"password"),"@",(0,l.kt)("inlineCode",{parentName:"li"},"dbserver"),":",(0,l.kt)("inlineCode",{parentName:"li"},"port"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"database"),"?charset=utf8mb4&parseTime=True")),(0,l.kt)("p",null,"The secret name needs to be the same as the value ",(0,l.kt)("inlineCode",{parentName:"p"},"option.connectionSecretName")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Can I use an external Grafana instead of running built-in Grafana?")),(0,l.kt)("p",null,"Yes, the devlake helm chart supports using an external Grafana. You can set the following values while installing from helm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"grafana.enabled"),": this should be ",(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"grafana.external.url"),": use your Grafana's URL, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"https://grafana.example.com"))),(0,l.kt)("p",null,"Here is the example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake \\\n  --set grafana.enabled=false \\\n  --set grafana.external.url=https://grafana.example.com\n  --set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"How to set the timezone? If not explicitly set, the default is UTC")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"commonEnvs.TZ"),": your timezone"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"grafana.env.TZ"),": your timezone")),(0,l.kt)("p",null,"Here is the example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake \\\n  --set commonEnvs.TZ=<your timezone> \\\n  --set grafana.env.TZ=<your timezone>\n\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"How to set the Grafana admin password? If not explicitly set, a random password will be generated and saved in a Kubernetes Secret")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"grafana.adminPassword"),": your password")),(0,l.kt)("p",null,"Here is the example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nENCRYPTION_SECRET=$(openssl rand -base64 2000 | tr -dc 'A-Z' | fold -w 128 | head -n 1)\nhelm install devlake devlake/devlake \\\n  --set grafana.adminPassword=<your password> \\\n  --set lake.encryptionSecret.secret=$ENCRYPTION_SECRET\n\n")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"If you run into any problem, please check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}m.isMDXComponent=!0}}]);