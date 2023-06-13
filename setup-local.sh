#!/usr/bin/env bash

# STEP - 1
# Create a different network for kong and start containers defined in docker-compose
docker-compose -f docker-compose.yml up -d

# STEP - 2
# Check if kong is running
is_kong_up=false
counter=0
while [ "$counter" -le 6 ] && [ "$is_kong_up" = false ]
do
  status_code=`curl -s -o /dev/null -I -w "%{http_code}" http://localhost:8001`
  if [ "$status_code" == "200" ]; then
    is_kong_up=true
  else
    counter=$((counter+1))
    if [ "$counter" -gt 6 ]; then
      echo "Kong failed to startup in 35 seconds"
      exit 1
    fi
    echo "Waiting for Kong to startup"
    sleep 5
  fi
done;

# Install deck
brew tap kong/deck
brew install deck

# sync intial example services

deck sync

printf "\nKong local setup is complete.\n\n"
echo "Go to http://localhost:8002/ to access Kong Admin Portal"
