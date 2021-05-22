echo ' *** loading shell config ***'
echo "cd /vagrant" >> ~/.profile
echo "alias dc='docker-compose'" >> ~/.profile
echo "alias dup='docker-compose up -d'" >> ~/.profile
echo "alias dex='docker exec'" >> ~/.profile
echo "alias l='ls -l'" >> ~/.profile
. ~/.profile