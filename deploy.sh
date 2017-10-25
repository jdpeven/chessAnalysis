docker container rm -f $(docker ps -aq)
docker build -t chess .
docker container run --name chessApp -e AUTHOR="Jackson Peven" -d -P chess
docker container ls
