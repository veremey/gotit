#!/bin/bash
cd /home/ubuntu/codedeploy-got-it-rebrand-wp-new
sudo cp -r /home/ubuntu/codedeploy-got-it-rebrand-wp-new/* /var/www/html/got-it-rebrand-wp.staging312.com/
cd /var/www/html/got-it-rebrand-wp.staging312.com
sudo /etc/init.d/apache2 reload
