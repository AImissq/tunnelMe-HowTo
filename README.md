tunnelMe-HowTo
==============

Create a public url for a static site from localhost


How to
======
 1. Install nodeJS http://nodejs.org/
 2. Install https://localtunnel.me/ or http://serveo.net/blog/remote-access-to-ssh-servers-using-serveo
 
 npm install -g localtunnel
 3. Dowload repo and inside 'view' folder put your static site. Be aware that in view folder
    must be present a 'index.html' file
 4. Start node app
 
 node app.js
 5. Check http://localhost:8080/      
 6. In a new tab of terminal run:
 
 lt --port 8080  (or use serveo which works well with autossh)
      
Now you will have a public url !!

------------------------------------------------------------------------------------------------------------------

Additional info by ackroydAI (aimissq)

if localtunnel won't punch thru say a gsm/mobile F/W box/isp or you are using DNSmasque/netshare on a LAN then try this - it works

http://serveo.net/blog/remote-access-to-ssh-servers-using-serveo

This is another free solution, albeit no option for a custom domain, but works well http://localhost.run/
