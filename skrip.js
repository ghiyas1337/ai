Konfigurasi umum DHCP
default-lease-time 600;max-lease-time 7200;authoritative;
Subnet konfigurasi
subnet 192.168.10.0 netmask 255.255.255.0 {  range 192.168.10.10 192.168.10.100;  option routers 192.168.10.1;  option subnet-mask 255.255.255.0;  option domain-name-servers 8.8.8.8, 8.8.4.4;  option domain-name "sekolah.local";}
