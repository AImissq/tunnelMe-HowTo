tunnelMe-HowTo
==============

1. Install nodeJS http://nodejs.org/

git clone https://github.com/AImissq/tunnelMe-HowTo.git  or download the zip

Create a public url for a static site from localhost


How to
======

 2. Get a free public URL for localhost from https://serveo.net/ example -  ssh -R 80:localhost:8080 serveo.net
 3. OR get a public URL from https://ngrok.com/
 4. OR get a public URL from https://localhost.run/
 5. Or get a publc URL from  https://pagekite.net/
 
 6. Dowload repo and inside 'view' folder put your static site. Be aware that in view folder
    must be present a 'index.html' file
    

 7. In a new tab of terminal run: node app.js
 
 8. Check http://localhost:8080/      

      
  9.Now you will have a public url !!

------------------------------------------------------------------------------------------------------------------

Additional info by ackroydAI (aimissq)

if localtunnel won't punch thru say a gsm/mobile F/W box/isp or you are using DNSmasque/netshare on a LAN then try this - it works

http://serveo.net/blog/remote-access-to-ssh-servers-using-serveo

This is another free solution, albeit no option for a custom domain, but works well http://localhost.run/

Also there is of course https://ngrok.com/

You may see the error msg "(node:5323) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated"
Switching to node v 10.11.0 removes the error.

