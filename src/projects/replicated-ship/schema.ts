// THIS FILE IS AUTOGENERATED
// tslint:disable
import { JSONSchema4 } from "json-schema";
const schema: JSONSchema4 = {"$schema":"http://json-schema.org/schema#","type":"object","properties":{"assets":{"description":"Assets allows you to configure the application artifacts and deployment manifests will be delivered to end users running your application","type":"object","properties":{"v1":{"type":"array","items":{"type":"object","properties":{"amazon_eks":{"description":"An `amazon_eks` asset generates a terraform file that will create an Amazon EKS Cluster.","extended_description":"It also populates a template function `AmazonEKS` that takes the name of the cluster and returns the path to the generated kubeconfig for the cluster. This template function is only valid after the asset has been generated as part of the `render` lifecycle step, but can be used by later assets within that step. The file itself is created when the generated terraform is applied, whether by the `terraform` lifecycle step or otherwise. This is intended to be used within the [kubectlApply](/api/ship-lifecycle/kubectlapply/) lifecycle step.","examples":[{"cluster_name":"existing-vpc-cluster","region":"us-east-1","existing_vpc":{"vpc_id":"abc123","public_subnets":["abc123-1","abc123-2"],"private_subnets":["xyz789-1","xyz789-2"]},"autoscaling_groups":[{"name":"group1","group_size":"2","machine_type":"m5.large"},{"name":"group2","group_size":"1","machine_type":"t2.large"}]},{"cluster_name":"new-vpc-cluster","region":"us-west-2","created_vpc":{"zones":["us-west-2a","us-west-2b"],"vpc_cidr":"10.0.0.0/16","public_subnets":["10.0.1.0/24","10.0.2.0/24"],"private_subnets":["10.0.129.0/24","10.0.130.0/24"]},"autoscaling_groups":[{"name":"firstgroup","group_size":"3","machine_type":"m5.large"}]}],"type":"object","properties":{"autoscaling_groups":{"description":"Autoscaling groups to include in your EKS cluster","type":"array","items":{"type":"object","properties":{"group_size":{"description":"The number of instances to be included in the group","type":"string"},"machine_type":{"description":"The AWS instance type to use within the group","type":"string"},"name":{"description":"The name to give the created autoscaling group","type":"string"}}},"required":["name","group_size","machine_type"]},"cluster_name":{"description":"The name of the created EKS cluster","type":"string"},"created_vpc":{"description":"The VPC to create for the EKS cluster","type":"object","properties":{"private_subnets":{"description":"The private subnets to create within the VPC. All workers will be placed on these subnets","type":"array","items":{"type":"string"}},"public_subnets":{"description":"The public subnets to create within the VPC","type":"array","items":{"type":"string"}},"vpc_cidr":{"description":"The CIDR to use for this VPC","type":"string"},"zones":{"description":"The availability zones to create subnets within","type":"array","items":{"type":"string"}}},"required":["zones","vpc_cidr","public_subnets","private_subnets"]},"description":{"type":"string"},"dest":{"description":"The path within `installer/` to place the generated file. Defaults to `amazon_eks.tf`","type":"string"},"existing_vpc":{"description":"The existing VPC to use for the EKS cluster","type":"object","properties":{"private_subnets":{"description":"The private subnets to use within the VPC. All workers will be placed on these subnets","type":"array","items":{"type":"string"}},"public_subnets":{"description":"The public subnets to use within the VPC","type":"array","items":{"type":"string"}},"vpc_id":{"description":"The ID of the existing VPC to use","type":"string"}},"required":["vpc_id","public_subnets","private_subnets"]},"mode":{"description":"Ignored","type":"integer"},"region":{"description":"The AWS region to build the cluster in. At time of writing, AWS supports EKS in us-east and us-west","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["cluster_name","region","autoscaling_groups"],"oneOf":[{"required":["created_vpc"]},{"required":["existing_vpc"]}]},"azure_aks":{"description":"An `azure_aks` asset generates a terraform file that will create an Azure AKS Cluster.","extended_description":"It also populates a template function `AzureAKS` that takes the name of the cluster and returns the path to the generated kubeconfig for the cluster. This template function is only valid after the asset has been generated as part of the `render` lifecycle step, but can be used by later assets within that step. The file itself is created when the generated terraform is applied, whether by the `terraform` lifecycle step or otherwise. This is intended to be used within the [kubectlApply](/api/ship-lifecycle/kubectlapply/) lifecycle step.","examples":[{"tenant_id":"5c87f096-eafc-41e1-82f3-1d2282887dff","subscription_id":"75cfa510-7123-4812-89bb-fc0286968bf5","service_principal_id":"651ed514-6d89-4e51-adaf-c3d3f6dac5a3","service_principal_secret":"hvS/lhixCYsPxXgFt04Ilj14NLU4o8LOAIDSAktrwbo=","resource_group_name":"DefaultResourceGroup-EUS","location":"East US","kubernetes_version":"v1.11.2","cluster_name":"AKS cluster","public_key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDdEcdAqClaNZdHAGHhiSBobJo5ZUL3sDfrZbBQinLvx3HN/9UaXp5mimlzhUkUQwX4jPqJ78w52idmXItd55HVboSQ8uKaRicgLLaNhSqrNpb+W3k2RToRPsjuaCi6a8XET0kcma6NaIbae9n0+nKzTtadX/hkrPEMS56BYpnHjQ== user@example.com","node_count":"3","node_type":"Standard_D1_v2","disk_gb":"50"}],"type":"object","properties":{"cluster_name":{"description":"The name of the cluster.","type":"string"},"description":{"description":"A description for the cluster.","type":"string"},"dest":{"description":"The path within `installer/` to place the generated file. Defaults to `azure_aks.tf`","type":"string"},"disk_gb":{"description":"The size of the disk the the operating system will be installed on for each node in the cluster","type":"string"},"kubernetes_version":{"description":"The cluster version to create","type":"string"},"location":{"description":"The location of the resource group specified in resource_group_name","type":"string"},"mode":{"description":"Ignored","type":"integer"},"node_count":{"description":"The number of nodes to create in the cluster","type":"string"},"node_type":{"description":"The size of VM to create for each node in the cluster","type":"string"},"public_key":{"description":"Enables SSH access to the nodes in the cluster with the corresponding private key","type":"string"},"resource_group_name":{"description":"The name of a resource group within the subscription specified in subscription_id","type":"string"},"service_principal_id":{"description":"The Application ID of a registered application.","type":"string"},"service_principal_secret":{"description":"A key associated with a registered application.","type":"string"},"subscription_id":{"description":"An Azure subscription ID","type":"string"},"tenant_id":{"description":"The tenant ID, also known as Directory ID, from Azure Active Directory","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["cluster_name","location","node_count","node_type","resource_group_name","service_principal_id","service_principal_secret","subscription_id","tenant_id"]},"docker":{"description":"A `docker` asset will pull an image from a public docker registry, registry.replicated.com, or a configured third party registry and produce a tar archive of the container image.","examples":[{"image":"quay.io/cooltool-enterprise/api:1.0.1","source":"quayio-private","dest":"images/api.tar"},{"image":"registry.replicated.com/cooltool/worker:1.1.0","dest":"images/worker.tar","source":"replicated"},{"image":"postgres:9.6","dest":"images/postgres.tar","source":"public","mode":600}],"type":"object","properties":{"description":{"type":"string"},"dest":{"description":"The destination for the docker image, such as `api.tar` or `docker-images/worker.tar`.","type":"string"},"image":{"description":"The docker image URL","type":"string"},"mode":{"description":"The unix file permissions to be set on the image tar archive, e.g `600`.","type":"integer"},"source":{"description":"The source for the image. Should be either `public`, `replicated`, or the name of a third-party private registry previously configured on [console.replicated.com](https://console.replicated.com)","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["dest","image","source"]},"dockerlayer":{"description":"A `dockerlayer` asset will pull an image from a public docker registry, registry.replicated.com, or a configured third party registry and produce a tar archive of the container image.","examples":[{"image":"quay.io/cooltool-enterprise/configs:1.0.1","dest":"config/","source":"quayio-private","layer":"f7126e84abc96fbc8495c33052724fad48115829e86987adbf556474f0ead5c1"}],"type":"object","properties":{"description":{"type":"string"},"dest":{"description":"The directory in which the layer should be unpacked","type":"string"},"image":{"description":"The docker image URL","type":"string"},"layer":{"description":"a SHA256 of the layer to extract. You can inspect the layer SHAs of a docker image by running something like `docker save myimage > myimage.tar && tar xvf myimage.tar -C /tmp`. Ship will unpack the archive at `<layer sha>/layer.tar` to the `dest` directory.","type":"string"},"source":{"description":"The source for the image. Should be either `public`, `replicated`, or the name of a third-party private registry previously configured on [console.replicated.com](https://console.replicated.com)","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["dest","image","source","layer"]},"github":{"description":"A `github` asset is created from files downloaded from either a public or a linked Github repo.","examples":[{"repo":"github.com/replicatedhq/superbigtool-k8s","ref":"8fcaebe55af67fe6789fa678faaa76fa867fbc","path":"k8s-yamls/","dest":"./k8s/","source":"private","strip_path":""},{"repo":"github.com/replicatedhq/ship","ref":"master","path":"hack/docs/","dest":"./docs{{repl Add 1 1}}/","source":"public","mode":644,"strip_path":"{{repl ParseBool \"true\"}}"}],"type":"object","properties":{"description":{"type":"string"},"dest":{"description":"Destination directory","type":"string"},"mode":{"description":"If present, overrides the file mode of all files included by this asset.","type":"integer"},"path":{"description":"Path in repo from which to pull file or directory","type":"string"},"ref":{"description":"Reference to a github commit to pull, usually a SHA or a tag -- usage of branches is supported but discouraged as content could change within a single Ship release","type":"string"},"repo":{"description":"The GitHub repository to pull from, formated as `owner`/`repo` e.g. `replicatedhq/ship`","type":"string"},"source":{"description":"One of `public` or `private`, if `private`, access to the repo can be validated on release creation","type":"string"},"strip_path":{"description":"If true, the github directory will not be included in the filepath of the generated files. For instance, when outputting all files within 'source/' in the repository to the 'dest/' directory, the file 'source/a/file.txt' would be placed at 'dest/source/a/file.txt' when this is false and 'dest/a/file.txt' when this is true.","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["repo","path","dest","source"]},"google_gke":{"description":"A `google_gke` asset generates a terraform file that will create a Google GKE Cluster.","extended_description":"It also populates a template function `GoogleGKE` that takes the name of the cluster and returns the path to the generated kubeconfig for the cluster. This template function is only valid after the asset has been generated as part of the `render` lifecycle step, but can be used by later assets within that step. The file itself is created when the generated terraform is applied, whether by the `terraform` lifecycle step or otherwise. This is intended to be used within the [kubectlApply](/api/ship-lifecycle/kubectlapply/) lifecycle step.","examples":[{"credentials":"<BASE64 ENCODED STRING>","project":"my-project","region":"us-east","cluster_name":"cluster-with-all-options","zone":"us-east1-b","initial_node_count":"5","machine_type":"n1-standard-4","additional_zones":"us-east1-c,us-east1-d","min_master_version":"1.10.6-gke.1"}],"type":"object","properties":{"additional_zones":{"description":"A comma separated list of additional Google Compute Engine locations in which the cluster's nodes should be located. If additional zones are configured, the number of nodes specified in initial_node_count is created in all specified zones.","type":"string"},"cluster_name":{"description":"The name of the cluster.","type":"string"},"credentials":{"description":"Base64 encoded contents of a file that contains your service account private key in JSON format.","type":"string"},"description":{"type":"string"},"dest":{"description":"The path within `installer/` to place the generated file. Defaults to `google_gke.tf`","type":"string"},"initial_node_count":{"description":"The number of nodes to create in this cluster (not including the Kubernetes master). Defaults to 3.","type":"string"},"machine_type":{"description":"The name of a Google Compute Engine machine type. Defaults to n1-standard-1.","type":"string"},"min_master_version":{"description":"The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version).","type":"string"},"mode":{"description":"Ignored","type":"integer"},"project":{"description":"The ID of the project to apply any resources to.","type":"string"},"region":{"description":"The region to operate under, if not specified by a given resource.","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"},"zone":{"description":"The zone that the master and the number of nodes specified in initial_node_count should be created in.","type":"string"}},"required":["cluster_name"]},"helm":{"description":"A `helm` asset will template and render an existing helm chart. You can either reference an existing chart in a private or public github repo, or your installer runbook can include assets to drop an existing helm chart at `local.chart_root`.","examples":[{"github":{"repo":"github.com/replicatedhq/superbigtool-k8s","ref":"8fcaebe55af67fe6789fa678faaa76fa867fbc","path":"k8s-yamls/","source":"private"},"dest":"charts/rendered/"},{"values":{"AppFlavor":"ship","NginxReplicas":"{{repl ConfigOption \\\"nginx_replicas\\\"}}"},"helm_opts":["--name","{{repl Installation \\\"channel_name\\\"}}-{{repl Installation \\\"semver\\\"}}"],"local":{"chart_root":"charts/src/nginx/"},"dest":"charts/rendered/"}],"type":"object","properties":{"description":{"type":"string"},"dest":{"description":"The directory in which to render the chart. If the source chart is at `charts/src/nginx`, and `dest` is set to `charts/rendered/`, then the chart will be templated at `charts/rendered/nginx`","type":"string"},"github":{"description":"Configuration for indicating a chart hosted in a private or public github repo. Fields are same as `assets.v1.github`","type":"object","properties":{"description":{"type":"string"},"path":{"description":"Path in repo from which to pull file or directory","type":"string"},"ref":{"description":"Reference to a github commit to pull, usually a SHA or a tag -- usage of branches is supported but discouraged as content could change within a single Ship release","type":"string"},"repo":{"description":"The GitHub repository to pull from, formated as `owner`/`repo` e.g. `replicatedhq/ship`","type":"string"},"source":{"description":"One of `public` or `private`, if `private`, access to the repo can be validated on release creation","type":"string"},"when":{"type":"string"}},"required":["repo","ref","path"]},"helm_fetch":{"description":"Configuration for indicating a chart hosted somewhere that would be accessible to the `helm fetch` function.","type":"object","properties":{"chart_ref":{"description":"`chart URL | repo/chartname` as would be passed to `helm fetch`","type":"string"},"repo_url":{"description":"repository URL as would be passed to `helm fetch` with the `--repo` flag","type":"string"},"version":{"description":"version as would be passed to `helm fetch` with the `--version` flag","type":"string"}},"required":["chart_ref"]},"helm_opts":{"description":"Additional options as would be passed to `helm template`","type":"array","items":{"type":"string"}},"local":{"description":"Configuration for indicating an already existing source chart to render from.","type":"object","properties":{"chart_root":{"description":"The base directory of the existing chart.","type":"string"}},"required":["chart_root"]},"values":{"description":"Values to set during rendering, overrides defaults in `values.yaml` if present in the chart root.","type":"object","additionalProperties":true,"patternProperties":{".*":{"description":"Key-value pairs to set.","type":["string","number","boolean"]}}},"values_from":{"description":"values_from","type":"object","properties":{"lifecycle":{"type":"object"}}},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["dest"]},"inline":{"description":"An `inline` asset is one that is specified directly in your Ship application's spec.","examples":[{"dest":"install.sh","mode":755,"contents":"#!/bin/sh\nkubectl apply -f ./deploy.yml -n {{repl ConfigOption \"k8s_namespace\" }}"},{"dest":"deploy.yml","contents":"\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: api\nspec:\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: retraced\n        tier: api\n    spec:\n      volumes:\n        - name: var-run\n          hostPath:\n            path: /var/run/retraced/\n      imagePullSecrets:\n        - name: quayio\n      containers:\n        - name: api\n          image: quay.io/retracedhq/api:{{ tag }}\n          ports:\n            - containerPort: 3000\n\n"}],"type":"object","properties":{"contents":{"description":"The contents of the file","type":"string"},"description":{"type":"string"},"dest":{"description":"A path to which the file should be written when generating assets","type":"string"},"mode":{"description":"Specifies file mode of the created asset, defaults to `0644`","type":"integer"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["contents","dest"]},"terraform":{"description":"A `terraform` asset is text specified directly in your Ship application's spec.","examples":[{"inline":"resource \"random_id\" \"server\" { byte_length = {{repl ConfigOption \"id_length\" | ParseInt}}}"},{"dest":"terraform/random_id.tf","inline":"resource \"random_id\" \"server\" { byte_length = {{repl ConfigOption \"id_length\" | ParseInt}}}"}],"type":"object","properties":{"description":{"type":"string"},"dest":{"description":"A path to which the file should be written when generating assets. Defaults to `main.tf`","type":"string"},"inline":{"description":"The contents of the file","type":"string"},"mode":{"description":"Specifies file mode of the created asset, defaults to `0644`","type":"integer"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["inline"]},"web":{"description":"A `web` asset delivers web content from a private or public URL","examples":[{"url":"https://my_bucket.s3.amazonaws.com/path-to-file","dest":"./my-bucket-contents"}],"type":"object","properties":{"body":{"description":"Content to send with a `POST` request","type":"string"},"bodyFormat":{"description":"Content type of the body sent with a `POST` request","type":"string"},"description":{"type":"string"},"dest":{"description":"A path to which the file should be written when generating assets","type":"string"},"headers":{"description":"HTTP request headers to send with the request","patternProperties":{".*":{"description":"Header values","type":"array"}},"type":"object","properties":{".*":{"type":"array"}}},"method":{"description":"Defaults to `GET` if not present, supports `POST`","type":"string"},"mode":{"description":"Unix file permissions to set on the asset","type":"integer"},"url":{"description":"A public or private URL to pull content from","type":"string"},"when":{"description":"This asset will be included when 'when' is omitted or true","type":"string"}},"required":["url","dest"]}}}}}},"config":{"description":"Config allows you to describe your application's environment-specific configuration options. This can be things like\n\n- External database configuration\n- Infrastructure topology details\n- internal container or artifact repositories\n- TCP Ports to listen on","type":"object","properties":{"v1":{"type":"array","items":{"type":"object","properties":{"description":{"description":"The `description` of a config item should tell end users what data needs to be collected and how it will be used.","examples":["Configure application authentication below."],"type":"string"},"items":{"description":"The `items` property is a grouping of similar config items.","examples":[{"name":"http_enabled","title":"HTTP Enabled","help_text":"When enabled we will listen to http","type":"bool","default":"0"}],"type":"array"},"name":{"description":"The `name` is used to reference an item in a template function.","examples":["authentication"],"type":"string"},"title":{"description":"The `title` is the header of an item displayed to the end user.`","examples":["Authentication"],"type":"string"},"when":{"description":"The `when` property is used to control whether an item will be shown to the end user.","examples":["'{{repl or (ConfigOptionEquals \"select_one\" \"external\") (ConfigOptionEquals \"select_one\" \"embedded\")}}'"],"type":"string"}},"required":["name","items"]}}}},"lifecycle":{"description":"Lifecycle allows you to customize the messaging and workflow for your end customer.","type":"object","properties":{"v1":{"description":"v1 defines lifecycle/v1 steps","type":"array","items":{"type":"object","properties":{"config":{"description":"A `config` step will present the user with a screen to customize options as defined in your top-level `config` section.","examples":[{}],"type":"object","properties":{"description":{"type":"string"},"id":{"type":"string"},"invalidates":{"type":"array","items":{"type":"string"}},"requires":{"type":"array","items":{"type":"string"}}},"required":[]},"kubectlApply":{"description":"A `kubectlApply` step will run `kubectl apply` with the provided file path and kubeconfig.","examples":[{"path":"config.yml"},{"path":"k8s/another.yml","kubeconfig":"k8s/generated_kubeconfig"},{"path":"k8s/another.yml","kubeconfig":"{{repl AmazonEKS \"eks_cluster_name\" }}"}],"type":"object","properties":{"description":{"type":"string"},"id":{"type":"string"},"invalidates":{"type":"array","items":{"type":"string"}},"kubeconfig":{"description":"the kubeconfig file to use, overriding the system default","type":"string"},"path":{"description":"the file to apply","type":"string"},"requires":{"type":"array","items":{"type":"string"}}},"required":["path"]},"kustomize":{"description":"Kustomize adds an interactive step for last-mile customization of kubernetes YAML manifests. The user will be able to examine all output manifests, and store any desired changes/tweaks separate from the base yaml. For more info on Kustomize, see [kustomize.io](https://kustomize.io).","examples":[{"base":"./k8s/base","overlay":"./overlays/production","dest":"./rendered.yaml"}],"type":"object","properties":{"base":{"type":"string"},"description":{"type":"string"},"dest":{"type":"string"},"id":{"type":"string"},"invalidates":{"type":"array","items":{"type":"string"}},"overlay":{"type":"string"},"requires":{"type":"array","items":{"type":"string"}}},"required":["base"]},"message":{"description":"A `message` step will print a message to the console or UI.","examples":[{"contents":"This tool will prepare assets to deploy CoolTool Enterprise to your Kubernetes cluster"},{"contents":"You may be missing a required prerequisite for this application. Please ensure docker is configured on the target server.","level":"warn"}],"type":"object","properties":{"contents":{"description":"the message to display","type":"string"},"description":{"type":"string"},"id":{"type":"string"},"invalidates":{"type":"array","items":{"type":"string"}},"level":{"description":"the severity of the message -- defaults to `info`. Other options are `debug`, `warn`, and `error`","type":"string"},"requires":{"type":"array","items":{"type":"string"}}},"required":["contents"]},"render":{"description":"A `render` step will do the work of collecting configuration values from a user and using them to generate the final assets that can be used to deploy an application.","examples":[{}],"type":"object","properties":{"description":{"type":"string"},"id":{"type":"string"},"invalidates":{"type":"array","items":{"type":"string"}},"requires":{"type":"array","items":{"type":"string"}},"root":{"type":"string"}},"required":[]},"terraform":{"description":"A `terraform` step will deploy terraform resources.","examples":[{},{"path":"terraform/"}],"type":"object","properties":{"description":{"type":"string"},"id":{"type":"string"},"invalidates":{"type":"array","items":{"type":"string"}},"path":{"description":"the directory within `installer` within which to run terraform.","type":"string"},"requires":{"type":"array","items":{"type":"string"}}},"required":[]}}}}}}},"required":["assets","lifecycle","config"]};
export default schema;
