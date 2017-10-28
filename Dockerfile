FROM nginx:alpine
#ENV AUTHOR=JacksonPeven
WORKDIR /usr/share/nginx/html
RUN apk add --update python3 && pip3 install --upgrade pip && pip3 install python-chess[engine,gaviota]
COPY . .
RUN python3 gameParser.py
