docker build -t chess .
docker run --rm --name chessApp -e AUTHOR="Jackson Peven" -d -p 8080:80 chess
docker ls
