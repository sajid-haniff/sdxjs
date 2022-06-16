# TCP Socket

1. Touch target once every second **watch -n 1 touch target.txt**
2. Run program **node net-watcher.js target.txt**
3. Connect to tcp socket **nc localhost 60300**

# Unix Socket

1. Touch target once every second **watch -n 1 touch target.txt**
2. Run program **node net-watcher-unix.js target.txt**
3. Connect to unix-socket **nc -U /tmp/watcher.sock


