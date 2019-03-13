#!/bin/bash
echo "test 1"
if [ -e  /home/ubuntu/codedeploy-got-it-rebrand-wp-new/deploy/change_permissions.sh ]
then
    sudo chmod -R 755 /home/ubuntu/codedeploy-got-it-rebrand-wp-new/deploy/change_permissions.sh
else
    exit 0
fi
