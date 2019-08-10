---
title: Mining with XMR-Stak
---

XMR-Stak is a unified miner, which means the same program will be used to mine with both your CPU and your GPU. It will automatically detect your hardware and adjust the settings accordingly.

## Downloading for Windows

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest). It will auto-detect your hardware, and tune everything for you.

2. Extract the file to a directory of your choice

3. Double-click on `xmr-stak.exe`.

4. Click `Yes` when it asks if you want to run as Administrator. This is so that the program can see what hardware you're running.

5. Check how to [configure it](#xmr-stak-setup-and-configuration)

## Downloading and Installing for Mac

You will have to compile it yourself. See [here](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile/compile_macOS.md) for instructions.

Then, check how to [configure it](#xmr-stak-setup-and-configuration)

## Downloading and Installing for Linux

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest). It will auto-detect your hardware, and tune everything for you.
2. Extract the file to a directory of your choice
3. Double-click on `xmr-stak`
4. Check how to [configure it](#xmr-stak-setup-and-configuration)

### Compiling

If you'd like to compile XMR-Stak, see [the official guide](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile/compile_Linux.md) for instructions.

Then, check how to [configure it](#xmr-stak-setup-and-configuration)

## XMR-Stak Setup and Configuration

Upon first launching XMR-Stak, the software will ask you several setup and configuration questions.

1.  `Use simple setup method? (Y/n)`

    Press `Y` or just enter

2. 
```
Please enter:
- Please enter the currency that you want to mine: 
	- aeon7
	- bbscoin
	- bittube
	- cryptonight
	- cryptonight_bittube2
	- cryptonight_masari
	- cryptonight_haven
	- cryptonight_heavy
	- cryptonight_lite
	- cryptonight_lite_v7
	- cryptonight_lite_v7_xor
	- cryptonight_r
	- cryptonight_superfast
	- cryptonight_turtle
	- cryptonight_v7
	- cryptonight_v8
	- cryptonight_v8_double
	- cryptonight_v8_half
	- cryptonight_v8_reversewaltz
	- cryptonight_v8_zelerius
	- cryptonight_v7_stellite
	- cryptonight_gpu
	- cryptonight_conceal
	- graft
	- haven
	- lethean
	- masari
	- monero
	- qrl
	- ryo
	- torque
	- turtlecoin
	- plenteum
	- zelerius
	- xcash
``` 
Enter `cryptonight_turtle`

3.  `- Pool address: e.g. pool.example.com:3333`

    Choose a pool from any of the [available pools](Pools) that is **closest to you** and enter its URL (you will be able to add more later).

4.  `- Username (Wallet address or pool login):`

    Enter your TurtleCoin wallet address.

    - If you don't have one yet, you can find out how to create a wallet [here](../wallets/Making-a-Wallet)

5.  `- Password (mostly empty or x):`  

    Enter `x`.

6.  `- Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  

    In most cases, `N` is fine.


* If you are on Windows 7/8, it will ask for administrator permission again. Click `Yes` to grant it permission.
* If you are on Windows 10, it will not ask for it again.

Done! The miner will now start scanning your hardware and will begin mining. Awesome!


XMR-Stak will save your configuration in `config.txt`  in the same directory from which it was first run.  

Your configuration for pools(algorithm to mine, address, port etc) will be saved in `pools.txt`.  
The configuration of the device it mines(CPU/AMD/NVIDIA) will be saved in `cpu.txt`, `amd.txt` or `nvidia.txt`, respectively.

Run XMR-Stak again from the same directory to reuse the configuration.

### Advanced Configuration

In case you answer `n` to the first question(`Use simple setup method?`), the following questions will be asked, along with the ones covered above.
The order of the questions here may not be in order of questions asked by XMR-Stak.

1. 
```
Please enter:
- Do you want to use the HTTP interface?
Unlike the screen display, browser interface is not affected by the GPU lag.
If you don't want to use it, please enter 0, otherwise enter port number that the miner should listen on
```

Enter `0`, if you do not need to remotely check your hashrate(most people).

If you do need to, then enter a port number. Generally it is recommended to use a port number in the range 1025-65535.
For example purposes, lets say you used `1337` as the port.

To check the hashrate, enter in the address bar of your web browser, `localhost:1337`.  
Change the `1337` if you used a different port.

It should show a page with your rig's hashrate.

If you want to check your miners hashrate whilst you are on a different network, you will have to enter your computers IP address, followed by the port, for example, `198.51.100.0:1337`.

You can find your computers IP by visiting this website whilst on that computer: http://whatsmyip.org/

You will probably have to open the port you are running the interface on in your router admin panel. Instructions on how to do this are out of scope for this document.


2. `- Rig identifier for pool-side statistics (needs pool support). Can be empty:`

    Enter it if you know it, otherwise leave it empty and press enter.


3.  `- Do you want to use nicehash on this pool? (y/n)`  

    Enter `n`

4. `- Do you want to use multiple pools? (y/N)`

    This is recommended, so that your miner is still hashing if your pool goes down. However, it is not needed.  

- Enter `y` if you would like to add more pools.

* Give them all a weight of `10` if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  

* XMR-Stak will prioritize the highest weight pool, and fall back to the others if it cannot connect.

* If they are all given the same weight, it will connect to them in order of how they are listed, form top to bottom, in the configuration file.

---

## Tuning XMR-Stak 

*Note*: The following applies for **Version 2.10.4+** and for the **CN/Pico** or **cryptonight-turtle** algorithm.

Information taken from [here](https://github.com/fireice-uk/xmr-stak/blob/master/doc/tuning.md)

### CPU tweaks

There is some explanation of what each setting does at the top of the `cpu.txt` file, (`low_power_mode`, `no_prefetch`, `affine_to_cpu`), but it's pretty vague and confusing to most.  
We'll discuss some options that  have been shown to be beneficial / have a performance increase in most cases. However, results vary per system and these settings may not be beneficial in every case, so do your own experimentation.

The `cpu.txt` file is where you will set your cores, threads, and a few other settings. When you open the file you will see something like this

```json
/*
 * Thread configuration for each thread. Make sure it matches the number above.
 * low_power_mode - This can either be a boolean (true or false), or a number between 1 to 5. When set to true,
                    this mode will double the cache usage, and double the single thread performance. It will 
 *                  consume much less power (as less cores are working), but will max out at around 80-85% of 
 *                  the maximum performance. When set to a number N greater than 1, this mode will increase the
 *                  cache usage and single thread performance by N times.
 *
 * no_prefetch -    Some sytems can gain up to extra 5% here, but sometimes it will have no difference or make
 *                  things slower.
 *
 * affine_to_cpu -  This can be either false (no affinity), or the CPU core number. Note that on hyperthreading 
 *                  systems it is better to assign threads to physical cores. On Windows this usually means selecting 
 *                  even or odd numbered cpu numbers. For Linux it will be usually the lower CPU numbers, so for a 4 
 *                  physical core CPU you should select cpu numbers 0-3.
 *
 * On the first run the miner will look at your system and suggest a basic configuration that will work,
 * you can try to tweak it from there to get the best performance.
 * 
 * A filled out configuration should look like this:
 * "cpu_threads_conf" :
 * [ 
 *      { "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
 *      { "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
 * ],
 */

"cpu_threads_conf" :
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : false },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : false },
],
```

First, let's set our cores/threads. This is the beginning of your CPU setup, everything else will improve on that as the base.  

- Decide how much of your CPU you want to mine with (25%, 50%, 100%, etc.)

	Sometimes during this process it's a good idea to check how much cores and threads your CPU has.  
	For example, the [i5-4690k](https://ark.intel.com/content/www/us/en/ark/products/80811/intel-core-i5-4690k-processor-6m-cache-up-to-3-90-ghz.html) has 4 cores and 4 threads.

If you want to mine with 50% of your CPU, for example, then your config would look like so:

No tweaks so far, this is just the config the miner creates as a good starting point.

Example hashrate: ~1.8KH/s

```json
"cpu_threads_conf" :
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
],
```

If you wanted 75% usage, you'd use the following. Note it's just 1 more core since the CPU in our example has 4 cores.

Example hashrate: 2.2 KH/s

```json
"cpu_threads_conf" :
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 2 },
],
```

And a config for 100% usage; all 4 cores:

Example hashrate: 3 KH/s

```json
"cpu_threads_conf" :
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 2 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 3 },
],
```

For CPU's with hyperthreading(ex: 4 cores and 8 threads), you would add another line as you did before. However, take care with the `"affine_to_cpu"` part. Check out the notes at the top of the `cpu.txt` file for information on adjusting that.

Next, we'll tweak the `"low_power_mode"` option.     
For CN/Pico or cryptonight-turtle, `"true"` or `2` seems to be the sweet spot (for CPU's with enough cache). No increase has been seen for higher values ( 5 is max ).  
(Note: `"true"` and `2` are, in this case, the same value )

Example hashrate: ~5.2 KH/s; about 1.1 KH/s per core

```json
[
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 2 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 3 },
],
```

*Tip*: Change the `low_power_mode` option for only a few cores. Run the miner and see the performance ( Press `h` on your keyboard to see hashrate, while in miner window ) difference from the cores you did NOT change. Just to verify you're seeing an increase in performance - or not.

For example, a modified config after the above step may look like this:

```json
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 2 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 3 },
],
```

---

### Large Page support

More than likely, when you open XMR-Stak, you will see an error that mentions `MEMORY ALLOC FAILURE`.

This is normal, and most of the time you can get rid of it.
For example, in Windows, see [this guide](https://docs.microsoft.com/en-us/windows/win32/memory/large-page-support).  
Each operating system has a different way of setting it, so look up `Large page support <your os>` and follow any guides you find.

This setting often results in better performance, so do try and enable it.

---

### OS tweaks

If possible, use Linux ([Ubuntu](https://ubuntu.com/) is a beginner-friendly option). Higher performance has been seen on that OS compared to other operating systems.

---

### GPU tweaks

When looking at the config file(s) for the GPU(s) you will see a few things that are important.

`"index"` - this is the GPU's address that the miner saw ( starts at 0 and increments up )

`"intensity"` - the number of threads used to mine. The maximum intensity is `<your GPU's memory in MB> / 2 - 128`, however for cards with 4GB and more, the optimum is likely to be lower than that. 

`"worksize"` - is the number of threads working together to increase the miner performance. In the most cases a worksize of `16` or `8` is optimal.

Here is an example of what an `amd.txt` config file might look like for 1 GPU, on 1 thread.
```json
"GPU_threads_conf" :
[
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
],
```
Here is what an `amd.txt` file might look like for 1 GPU on 2 threads.

AMD has seen improvement with 2 threads per gpu. Note the `"index"` value is the same per entry - since it's the same GPU.

```json
"GPU_threads_conf" :
[
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
],
```

If you have multiple GPUs. In this example, we have 2 GPUs on 2 threads each.  
Note the `"index"` value for each in this example: `0` and `1` due to there being 2 different GPUs. 

```json
"GPU_threads_conf" :
[
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 1, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 1, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
],
```



#### Overclocking and Undervolting

**Note**: This can very involved, and very complicated for someone not familar with the process.

Most of the time a GPU will hash straight out of the box, but it wont be "the optimal" or the "best" performance. It will be the stable, "always works" setup.

- Overclocking:
  - It can lead to better performance
  - But, it may lead to stability issues
  - It may even result in a loss in performance

- Undervolting:
  - It can lead to cooler temperatures and lower power use
  - But, it may also lead to stability issues
  - It can also result in a loss in performance

#### BIOS modding

**NB:** This is only recommended for **ADVANCED USERS** and **NOT** for the *average user*

BIOS modding can lead to bad hashrates, black screens, and bricked cards.  
But it can also lead to better performance. 

There are repositories available on the internet for BIOS's for lots of algorithms. If one is not available for a particular one, then you can use others that are similar, but it's trial and error at that point; a dangerous game.  

For example, an Ethereum BIOS from ANORAK works for CN-Pico or cryptonight-turtle. However, as warned above, things can go wrong.


Take an AMD RX 580 8G GPU for example.

With a stock BIOS, it hashes about 3.5-5 KH/s.  
With a modded BIOS (ETH bios), it can achieve up to  9 KH/s

Most of the time, you need to set your Overclock profile appropriately to achieve these. These would be set in programs like MSI Afterburner (available for any GPU, not just MSI cards), or AMD Wattman

An example configuration:

- Core clock: 1150  
- Memory clock: 2150  
--
- Core Mv: 950
- Or, in MSI Afterburner: -160 power

The negative power is the undervolting; this will drop temperatues, fan speeds, and overall power consumption of the card.

These settings on the example GPU yield 62c and ~30% fan speeds at 8.2 KH/s

#### Amd Memory Tweaker 

*Note*: This guide explains the GUI Windows version, Non-XL version  
[This program](https://github.com/Eliovp/amdmemorytweak/releases/tag/0.2.3)

BIOS mods can be scary; they can permanently brick a card and can be confusing and compicated for the non-initiated. But the benefits can be enticing. Either way, let's talk about an alternative option.

AmdMemoryTweaker is similar to "The Ethlargement Pill" Nvidia GPU's use for Ethereum mining. It adjusts memory timing straps on the fly, meaning we can adjust the parts of a BIOS that help us acheive higher speeds without having to flash the BIOS.  

This leads to a few things:

- Easier reverting to stock settings (most of the time, when you close the miner/GPU the settings revert to default)
- Easier tuning as you can watch the speed change as you change settings
- More control over the changes, rather than just "loading" a BIOS ROM from the internet
- Import/Export feature for settings quick loading

Memory strap timings are different depending on the style of memory onboard your GPU (Samsung, Micron, Hynix, Elpida). Each type of memory reacts to changes differently. Thus, settings from a Hynix memory module may not work on a Samsung memory module (most likely it will NOT)

You can use [GPU-Z](https://www.techpowerup.com/gpuz/) to see the memory style on your GPU

As an example, a stock BIOS RX 580 8GB GPU with Samsung memory (MSI OC Armor) can go from 6.2 KH/s to 8.1 KH/s, with just some minor tweaks and little to no change in power consumption and temps of the GPU. 

When you open the Amd Memory Tweaker program it will load up the idle state of the GPU, now start the miner. After it's been running for a few seconds, and reached up full usage/speed, you can now "refresh" the readings. (Click the refresh icon in the bottom right)

This will give you the ACTIVE timings for the frequency it is at, at that time. This is where you will mine, so this is where you will change your settings.

There are a lot of fields to look at, all with labels that make little sense straight away. Don't worry; if you hover your cursor over a field or title it will give a small explination of what it is.

For this guide we will be ignoring most options, and only adjust a few to show how to start tuning your GPU.  
There are a lot of settings to change, and there is an "XL" version of this program that gives even MORE options. We cannot go over all of them here, and there are only a few that have been beneficial and easily adjusted.

When tweaking values, then always make SMALL CHANGES. Then apply, check speeds, check stability, and then continue tweaking further if needed.

(redTeamMiner v0.5.6 was used for tuning purposes/results, but results should be the same on XMR-Stak, or XMRig-AMD)

Stock, unmodified values at full speed:  
- 6.2 KH/s at 61c and ~80 watts
- tRFC setting - 219
- REF setting - 5 (this functions similar to rxboost in Claymore's miner, this is "Refresh rate")
- tRC setting - 87
- "timing level" - 0 (default)


So, lets see what we can do with that.

Change the "timing level" to 1, then apply. This will change the readings in the Amd Memory Tweaker, so check them again.

"timing level" set to 1:
- 7.4 KH/s at 62c and ~80 watts
- tRFC setting - 187
- REF setting - 5
- tRC setting - 77


Lets get a bit more, by tweaking a few settings.( drop in incrememnts of 10, apply and check for stability )

- tRFC setting - 170
- REF setting - 60
- tRC setting - 67

These setting pushed my GPU to 8.1 KH/s(!) at 61c and ~80 watts

Once you get a setting that works and is stable, you can export it, save it, and reload it everytime you want to mine cryptonight-turtle/cn-pico.


Crash warnings - 

- a tRFC setting below 130 would make the example gpu fail, stop hashing, and sometimes lock up the rig. (would sometimes take 5 minutes of running till it crashed)
- a tRC setting below 67 would cause the example GPU would fail, and stop hashing.
- REF 0-100 didn't crash anything

There is a command line version of Amd Memory Tweaker that can be used to change these settings during launch of the miner. If you are comfortable with that, you can utilize it to achieve some sort of automational and simplify your mining

### Notes

The miner will need to run for a few minutes to get stable and consistent. Your hashrate could fluctuate during that time, and you could see some cores/GPUs not hasing at all. Give the miner a few minutes to stabilize before changing or reverting config settings.
