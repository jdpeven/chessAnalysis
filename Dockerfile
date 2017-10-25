FROM nginx
ENV AUTHOR=JacksonPeven

WORKDIR /usr/share/nginx/html
COPY homePage.html /usr/share/nginx/html/index.html

CMD cd /usr/share/nginx/html ; nginx -g 'daemon off;'
