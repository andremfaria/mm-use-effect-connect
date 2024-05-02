
# Starting the server
``` 
pnpm install 
pnpm dev --host
```

1. Access `https://<your-local-ip>/5174` from the Chrome browser on an Android device.
2. Check the logs (with chrome://inspect/devices#devices). You will notice that the `.connect()` call never returns.
