- create app.js
- npm init -y
- yarn add express
- install docker vscode extension
- add docker file
- docker build -t cmnode:1.0 . 
- docker images


- docker run -d -p 91:91 --name lek cmnode:1.0
- docker ps

- docker container stop container_id
- docker container start container_id
- docker container rm container_id
- docker container restart container_id

- docker exec -it lek sh

 Running docker clustering with swarm

 docker service create --replicas 3 --name cmswarm --publish 91:91 <image_name:tag>


docker service ls
docker service rm <service_name>
docker service create --replicas 3 --name node_clustering --publish 91:91 cmnode:1.0