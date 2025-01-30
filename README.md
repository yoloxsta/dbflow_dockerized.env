###just testing for db flow(mysql) local dockerized


`docker exec -it <container_name> mysql -u root -p`


`git rm --cached .env`

`docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' database-backend-1`

`docker exec -it database-backend-1 sh`

`curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name": "namexyz"}'`


##for ingress
Edit /etc/hosts
ip_address dns


##dir
```
project-directory/
├── backend/
│   ├── backend.js
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── .env
├── kubernetes/
│   ├── deployment-backend.yaml
│   ├── deployment-frontend.yaml
│   ├── ingress.yaml
│   ├── service-backend.yaml
│   ├── service-frontend.yaml
│   ├── tls.yaml
│   └── secret.yaml
│   └── pv.yaml
│   └── pvc.yaml
├── docker-compose.yml
└── README.md
```

##Install Jenkins by using Helm

```
helm install jenkins -n jenkins -f jenkins-values.yaml $chart

https://blog.devops.dev/deploying-jenkins-with-helm-a-step-by-step-guide-df63c2dc35d2 

```