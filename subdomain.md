cd /etc/nginx/sites-available

```
server {
  listen 80;
  server_name photobomb.frozonecodes.com;
  root /var/www/photobomb.frozonecodes.com;
  index index.html;
  default_type "text/html";
  location / {
    try_files $uri $uri/ =404;
  }
}
```

sudo ln -s /etc/nginx/sites-available/photobomb.frozonecodes.com /etc/nginx/sites-enabled/

sudo mkdir /var/www/photobomb.frozonecodes.com
sudo chown equartey /var/www/photobomb.frozonecodes.com

cd /var/www/photobomb.frozonecodes.com

## clone git repo

sudo service nginx reload

cd ~/CS260

git pull

cd creative3/

npm install && npm run build && cp -rp dist/\* /var/www/creative3.frozonecodes.com

server {
listen 80;
server_name photobomb.frozonecodes.com;
root /var/www/photobomb.frozonecodes.com;
index index.html;
default_type "text/html";
location / { # Serve static files from the root location above.
try_files $uri $uri/ /index.html;
}
location /api { # Serve api requests here. This will connect to your node # process that is running on port 3001.
proxy_pass http://localhost:3001;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}
}

sudo ln -s ../sites-available/photobomb.frozonecodes.com .

grep -R /etc/letsencrypt/live/creative.frozonecodes.com/fullchain.pem /etc/nginx/

rm -rf /etc/letsencrypt/live/creative.frozonecodes.com
rm -rf /etc/letsencrypt/renewal/creative.frozonecodes.com.conf
rm -rf /etc/letsencrypt/archive/creative.frozonecodes.com

certbot revoke --cert-path /etc/letsencrypt/live/creative.frozonecodes.com/fullchain.pem

server {
server_name museum.frozonecodes.com;
root /var/www/museum.frozonecodes.com;
index index.html;
default_type "text/html";
location / {
try_files $uri $uri/ =404;
}

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/creative.frozonecodes.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/creative.frozonecodes.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
if ($host = museum.frozonecodes.com) {
        return 301 https://$host$request_uri;
} # managed by Certbot

listen 80;
server_name museum.frozonecodes.com;
return 404; # managed by Certbot

}
