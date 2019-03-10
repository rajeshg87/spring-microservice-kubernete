docker build -t rajeshg87/user-ui-app:1.0 .
docker run -p 7000:80 --name angular-container -d rajeshg87/user-ui-app:1.0
docker push  rajeshg87/user-ui-app:1.0

kubectl create clusterrolebinding admin --clusterrole=cluster-admin --serviceaccount=default:default

kubectl apply -f mongodb-configmap.yaml 
kubectl apply -f mongodb-secret.yaml 
kubectl apply -f mongodb-deployment.yaml 
kubectl apply -f employee-deployment.yaml 
kubectl apply -f gateway-deployment.yaml 
kubectl apply -f ingress.yaml 
minikube ip

kubectl describe ing
kubectl get service

kubectl delete --all ing --namespace=default
kubectl delete --all configmap --namespace=default
kubectl delete --all secret --namespace=default
kubectl delete --all services --namespace=default
kubectl delete --all deployments --namespace=default

minikube stop
minikube delete

rm -rf  ~/.minikube
minikube addons enable ingress