# How to Mine TurtleCoin with Google Cloud Platform (GCP)

## Setting Up the VM(Virtual Machine)

1.  Go [here](https://console.cloud.google.com/freetrial) and sign in with your Google Account. Enter the details requested to sign up for the free trial.
    *You will need a valid credit card to sign up for it*
2.  After signing up, go [here](https://console.cloud.google.com/compute/instances)
3.  If it asks you for a project name, enter one or let it be the defualt one, it doesn't really matter.
4.  On the top, click `CREATE INSTANCE`
5.  Give it a name, just one so that you can remember what it is and you can differentiate between the VM's you set up
6.  Choose a zone. Any zone will do, doesn't really matter.
    **Note: For every VM, you must choose a different zone. If `instance-1` has zone `us-east1-b`, then `instance-2` must have `us-west1-b` and `instance-3` must have `us-central1-b`, and so on and so forth.**
7.  Under `Machine Type` click `Customize`.
8.  Change `Cores` to `4` and `Memory` to `3.6 GB`. Change `CPU platform` to `Intel Skylake or later`
9.  Leave the rest as is, and click double check both `Allow HTTP traffic` and `Allow HTTPS traffic`
10. Click `Create`
11. Follow [instructions for setting it up](#instruct-set-up-linux)

## Mining Instructions For Debian Linux on GCP <a name="instruct-set-up-linux"></a>

SSH into the GCP instance and follow these steps-

*Guide sponsored by [Monerise](https://monerise.com)*

1.  Open the terminal and install dependencies by running this command-

    ```sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev git```

2.  Clone the package-

    ```git clone https://github.com/fireice-uk/xmr-stak.git```

3.  To remove donations, type-

    ```edit xmr-stak/xmrstak/donate-level.hpp```

    * Change-

    ```constexpr double fDevDonationLevel = 2.0 / 100.0;```

    * to

    ```constexpr double fDevDonationLevel = 0.0 / 100.0;```

4.  Make a directory-

    ```mkdir xmr-stak/build```

5.  Move over there-  

    ```cd xmr-stak/build```

6.  Run cmake-

    ```cmake .. -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF```

7.  Finish building it-

    ```make install```

8.  XMR-Stak will now be located in

    ```/home/user/xmr-stak/build/bin```

10. Move to where it's at-

    ```cd bin```

10. Launch XMR-Stak-

    ```./xmr-stak```

11. Check [XMR-Stak Setup and Configuration](#xmr-stak-setup-and-configuration)


## XMR-Stak Setup and Configuration

Upon first launching XMR-Stak, the software will ask you several setup and configuration questions.

1.  `Please enter: - Do you want to use the HTTP interface? Unlike the     screen display, browser interface is not affected by the GPU lag. If you don't want to use it, please enter 0, otherwise enter port number that the miner should listen on`

    Enter `0`, if you, like most people, do not need to remotely check your hashrate.

    If you do need to, then enter a port number.
    Let's take the port number as `0101` and your IP address as `26.24.105.14` as an example.

    To check the hashrate, enter in the address bar of your web browser, `<26.24.105.14>:<0101>`. It should show a page with your rig's hashrate.
    If you are checking from the same IP address, you can alternatively enter, `localhost:<0101>`

    Make sure to enter your own IP address if you enable this feature. You can choose any port you want(uptil 9999)!


2.
    ```
    Please enter:
    - Please enter the currency that you want to mine:
    - aeon7
    - bbscoin
    - croat
    - cryptonight
    - cryptonight_heavy
    - cryptonight_lite
    - cryptonight_lite_v7
    - cryptonight_v7
    - edollar
    - electroneum
    - graft
    - haven
    - intense
    - karbo
    - monero7
    - stellite
    - sumokoin
    - turtlecoin    
    ```

    Enter `turtlecoin`

3.  `- Pool address: e.g. pool.example.com:3333`

    Choose a pool from any of the [available pools](Pools) that is **closest to you** and enter its URL (you will be able to add more later).

4.  `- Username (Wallet address or pool login):`  

    If you have not yet downloaded and ran the TurtleCoin core software to sync the blockchain and create a wallet, you can make a [paper wallet](../wallets/Making-a-paper-wallet) to start mining towards now, and import the wallet later.

5.  `- Password (mostly empty or x):`  

    Enter `x`.

6.  `- Rig identifier for pool-side statistics (needs pool support). Can be empty:`

    Leave it empty and press enter.

7.  `- Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  

    In most cases, `N` is fine.

8.  `- Do you want to use nicehash on this pool? (y/n)`  

    Enter `n`(in case you do, enter `y`).

9.  `- Do you want to use multiple pools? (y/n)`  

    * Enter `y` if you would like to add more pools.
    * Give them all a weight of `10` if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  
    * XMR-Stak will prioritize the highest weight pool, and fall back to the others if it cannot connect.
    * If they are all given the same weight, it will connect to them in order of how they are listed, form top to bottom, in the configuration file.
    * If you are on Windows 7/8, it will ask for administrator permission again. Click `Yes` to grant it permission.
    * If you are on Windows 10, it will not ask for it again.


Done! The miner will now start scanning your hardware and will begin mining. Awesome!

![workubuntu](images/xmrstak-ubuntuwork.png)


XMR-Stak will save your configuration in `config.txt`  in the same directory from which it was first run.   
Your configuration for pools(algorithm to mine, address, port etc) will be saved in `pools.txt`.  
The configuration of the device it mines(CPU/AMD/NVIDIA) will be saved in `cpu.txt`, `amd.txt` or `nvidia.txt`, respectively.


Run XMR-Stak again from the same directory to reuse the configuration.

## Detaching it From the Shell

When you close the SSH window, the mining will also stop. To prevent this, follow these steps-

1.  Close XMR-Stak if it's running by entering `Ctrl + C` on your keyboard
2.  Type `clear`
3.  Type `screen`
4.  Press enter
5.  Type `./xmr-stak` to run the miner
6.  Once it starts mining, press `Ctrl + A` and `Ctrl + D` on your keyboard to detach it.

You can now close the SSH window safely

To restore the detached window, type-

```
screen -r
```
