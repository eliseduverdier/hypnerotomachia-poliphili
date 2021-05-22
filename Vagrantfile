Vagrant.configure('2') do |config|
  config.vm.box = 'hashicorp/bionic64'

  config.vm.synced_folder '.', '/vagrant'
  # config.disksize.size = '20GB'

  config.vm.network 'forwarded_port', guest: 8000, host: 8000
  config.vm.network 'forwarded_port', guest: 5433, host: 5433

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: '/vagrant/docker-compose.yml', run: 'always'

  # aliases
  config.vm.provision :shell, path: 'vagrant.sh', run: 'always', privileged: false

end
