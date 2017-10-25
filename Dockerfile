FROM jdpeven/nginx-python3-pip3
#FROM nginx
#ENV AUTHOR=JacksonPeven
#RUN apt-get update && apt-get install python3 -y && apt-get install python3-pip -y
RUN pip3 install python-chess[engine,gaviota]
WORKDIR /usr/share/nginx/html
COPY ./* /usr/share/nginx/html/
ADD games /usr/share/nginx/html/games
COPY homePage.html /usr/share/nginx/html/index.html

CMD cd /usr/share/nginx/html ; nginx -g 'daemon off;'
RUN python3 gameParser.py
