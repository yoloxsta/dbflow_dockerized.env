###just testing for db flow(mysql) local dockerized


`docker exec -it <container_name> mysql -u root -p`


`git rm --cached .env`

`docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' database-backend-1`

`docker exec -it database-backend-1 sh`


#