---
title: TurtleCoind config
---

## How to config TurtleCoind?

Run TurtleCoind with arg `--help` will print all options.

TurtleCoind can start with these options by command line args, or use `-c` followed a json file for configuration.

The option in config file will unwrap the front `--`, for example:
```json
// the config file
{
    "db-max-open-files": 125,
    "db-read-buffer-size": 128,
    "db-threads": 4,
    "db-write-buffer-size": 256
}
```

If you want to check the default options, use `--dump-config`.
