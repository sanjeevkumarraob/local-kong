#!/usr/bin/env bash

echo "============================================"
echo "     Destroying local kong environment      "
echo "============================================"

# Bring down all the containers that got created using the local docker compose file
docker compose -f docker-compose.yml down

# Clean up unused images and volumes to free up the space.

docker system prune -f
docker volume prune -f

printf "\n\nKong local cleanup completed\n\n"

