---
id: kubectl
title: kubectl
sidebar_label: kubectl
---

kubernetes cluster management
```bash
kubectl [command] [TYPE] [NAME] [flags]
```
## Installation

```bash
brew install kubectl 
```

## Common usages
```bash
kubectl apply -f manifest.yaml  
# apply a kubernetes manifest to cluster

kubectl get pods                
#list pods

kubectl set-context --current --namespace=<namespace> 
# set-context 

kubectl delete service <service-name> 
# delete previously defined service

kubectl delete deployment <deployment-name> 
# delete previously defined deployment
```