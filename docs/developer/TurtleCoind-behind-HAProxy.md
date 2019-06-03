---
title: TurtleCoind behind HAProxy
---

From polar-it on Discord

There is a lot to add to this to fill details, however this is enough for people familar to get going ;)

If you are not familar with HAProxy then check it out if you're a sysadmin/devops person it is pretty great. If you are a Containers / Kubernetes kind of person then this kind of thing is handle by the load balancers, sometimes they are HAProxy under the covers.

Combine the below with iburnmycd's [turtlecoind-ha](https://github.com/turtlecoin/turtlecoind-ha) and [turtlecoin-api-proxy](https://github.com/turtlecoin/turtlecoin-api-proxy) and you should have a farily reliable end point for daemon requests.

```
#---------------------------------------------------------------------
# main frontend which proxys to the backends
#---------------------------------------------------------------------
frontend  main *:11898

    default_backend            trtl-daemon 

#---------------------------------------------------------------------
# round robin balancing between the various backends
#---------------------------------------------------------------------
backend trtl-daemon 
    balance     roundrobin
    option httpchk GET /getinfo
    http-check expect rstring true

# Local node on port 11999
    server  app1 127.0.0.1:11999 check
    server  app2 < node host1 >:11898 check
    server  app3 < node host2 >.11898 check
    server  app4 < node host3 >:11898 check
```

_**polar-it:** This actually work on [trtl-explorer.xhub.cloud](https://trtl-explorer.xhub.cloud/)_
