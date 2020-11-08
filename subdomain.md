cd /etc/nginx/sites-available

```
server {
  listen 80;
  server_name lab2.frozonecodes.com;
  root /var/www/lab2.frozonecodes.com;
  index index.html;
  default_type "text/html";
  location / {
    try_files $uri $uri/ =404;
  }
}
```

sudo ln -s /etc/nginx/sites-available/creative3.frozonecodes.com /etc/nginx/sites-enabled/

sudo mkdir /var/www/creative3.frozonecodes.com
sudo chown equartey /var/www/creative3.frozonecodes.com

cd /var/www/lab3.frozonecodes.com

## clone git repo

sudo service nginx reload

cd ~/CS260

git pull

cd creative3/

npm install && npm run build && cp -rp dist/\* /var/www/creative3.frozonecodes.com
