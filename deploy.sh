docker build -t chess .
docker container run --name chessApp -e AUTHOR="Jackson Peven" -d -P chess
