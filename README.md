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
│   ├── tls.yaml (example for presentation)
│   └── secret.yaml (example for presentation)
│   └── pv.yaml
│   └── pvc.yaml
├── docker-compose.yml
└── README.md
```

##Install Jenkins by using Helm

```
helm install jenkins -n jenkins -f jenkins-values.yaml $chart

https://blog.devops.dev/deploying-jenkins-with-helm-a-step-by-step-guide-df63c2dc35d2 

openssl req -new -newkey rsa:2048 -nodes -keyout private.key -out request.csr -subj "/C=US/ST=California/L=San Francisco/O=MyCompany/CN=soetintaungdev.com"

```

##rds

```
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - DB_HOST=${DB_HOST}
      - DB_USER=${DB_USER}
      - DB_PASS=${DB_PASS}
      - DB_NAME=${DB_NAME}

  frontend:
    build: ./frontend
    ports:
      - "80:80"

```
#
