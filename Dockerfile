FROM jdpeven/nginx-python3-pip3
#FROM nginx
#ENV AUTHOR=JacksonPeven
#RUN apt-get update && apt-get install python3 -y && apt-get install python3-pip -y
#pip install python-chess[engine,gaviota]
WORKDIR /usr/share/nginx/html
COPY homePage.html /usr/share/nginx/html/index.html

CMD cd /usr/share/nginx/html ; nginx -g 'daemon off;'
