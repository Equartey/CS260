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

sudo ln -s /etc/nginx/sites-available/lab3b.frozonecodes.com /etc/nginx/sites-enabled/

sudo mkdir /var/www/lab3b.frozonecodes.com
sudo chown equartey /var/www/lab3b.frozonecodes.com

cd /var/www/lab3.frozonecodes.com

## clone git repo

sudo service nginx reload
