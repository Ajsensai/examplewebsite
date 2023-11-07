// image-alt-text.js
const imageAltTextData = [
    {
      imageElement: document.getElementById('image1'),
      altText: `
        <b>Security configuration:</b> Radius authentication across network devices, mac address security, bpdu guards, DHCP tracking & ip source guard<br><br>
        <b>Wireless technology:</b> WLC controlling WAP. WLC also acts as a dhcp server for WAP for connecting guest devices, operating on vlan 300<br><br>
        <b>Voip:</b> Telephony service within a dhcp pool assigned to voice. Includes QOS configuration & DSCP mapping for heavy applications such as video streaming.<br><br>
        <b>Redundancy & Availability:</b> Spanning tree priority on distribution layer switch 1 to assist with load balancing, Spanning tree portfast to reduce redundant network traffic
        HSRP configured for high availability in case of a router failure. Link aggregation for high bandwidth. Dedicated NATIVE & PARKING vlan<br><br>
      `,
    },
    {
      imageElement: document.getElementById('image2'),
      altText: `
        <b>OSPFv3 Configuration:</b> Configured R2 & R3 into OSPFv3 address families, Assigned passive interfaces & router-id, stubbed area 1<br><br>
        <b>Named EIGRP:</b> Configured R1 & R2 in AS 101 & configured redistribution between OSPF & EIGRP & used an ACL to block advertising .3 route between R2 & R1.<br><br>
        <b>Security:</b> Enabled routing protocol authentication to secure EIGRP IPv4 & IPv6 using SHA256. <br><br>
        <b>BGP:</b> remote-as configuration and neighbor association included to route between BGP. Assigned backup & primary interfaces for high availability
      `,
    },
    {
      imageElement: document.getElementById('image3'),
      altText: `
        <b>Basic Security:</b> Scrypt encryption, password policy, Admin access, domain & ssh keys, vty lines, AAA local authentication, NTP security & Syslog<br><br>
        <b>Zone Based Firewall:</b> Inside to outside configuration including inside protocols (tcp,udp,icmp). Policy mapping, zone-pair security, service-policy (inspect) & zone members <br><br>
        <b>Intrustion Prevention System</b> Configured pubkey-chain & IPS rules. Enabled HTTP services & notification log, set categories & rules <br><br>
        <b>Layer Two Switch Security:</b> Basic Administration access control, SSH authentication & policy, AAA local authentication
        Vlan & trunking configuration, similar security to previous switching example <br><br>
        <b>Adaptive Security Appliance Firewall (VPN)</b> Configured for remote access using ASDM. Configured IPsec & IKE protocols, VPN tunnel forwarding & VPN security.
      `,
    },
    {
      imageElement: document.getElementById('image4'),
      altText: "Primarily using Kali, Experienced in identifying vulnerabilities within production and test environments using the following methods:<br><br><b>Surveillance</b> (nmap, web analysis, Sniffing)<br><b>Exploitation</b> (Msfconsole, searchsploit, Ddos, Brute, SQLI)<br><b>Post</b> (persistence, priv escalation, piveting)<br><b>Social Engineering</b> (Malicious hardware, SEToolkit, BeEF)",
    },
  ];
  
  // Loop through the array and set the alt text for each image
  imageAltTextData.forEach(item => {
    item.imageElement.alt = item.altText;
  });
  