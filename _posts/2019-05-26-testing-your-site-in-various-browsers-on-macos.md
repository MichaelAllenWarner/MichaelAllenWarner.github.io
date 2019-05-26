---
layout: post
title:  "Testing Your Site in Various Browsers on macOS"
date:   2019-05-26 10:00:00 -0400
categories: webdev
excerpt: >
  It took me a while to figure out how to test my web projects on various browsers with nothing but my MacBook Pro and Android phone. Here is what I’ve learned.
---
Several major desktop browsers run natively on macOS&mdash;Chrome, Firefox, Safari (of course), Opera, and [soon Microsoft Edge](https://blogs.windows.com/msedgedev/2019/05/20/microsoft-edge-macos-canary-preview/). But if you’ve got a Mac and an Android phone (like me), how do you test your web projects on your mobile browsers? And how do you test on old versions of Internet Explorer? What about mobile Safari, which isn’t available on Android?

## Testing on Your Android Browsers

On your Mac, open up System Preferences and click the Sharing icon. Activate the checkbox for Remote Management on the left. You should now see a message that says something like “Other users can manage your computer using the address 192.168.1.XXX”; that’s your Mac’s internal IP address, and you’ll want to jot it down.

Get your web project’s server up and running on your Mac. Say that the local site’s entry point is `http://localhost:PORT`. With your Android device connected to the same network as your Mac, open a browser on your phone and navigate to `http://192.168.1.XXX:PORT`. That should do the trick!

*If this doesn’t work*, it may be because your project’s HTTP server is only configured to listen for requests from the hosting machine’s internal IP. If that’s the case, you’ll need to explicitly tell it to listen on `0.0.0.0` instead. For example, this blog is powered by [Jekyll](https://jekyllrb.com/), and if I run it locally by entering `bundle exec jekyll serve` in the command line, I *cannot* view it in my mobile browsers! The fix is to run it like this: `bundle exec jekyll serve --host=0.0.0.0`.

## Testing on Internet Explorer 8&ndash;11 (or Edge)

Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads). Then download and install the [appropriate virtual machine from Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/). With your web project’s server running, open the browser on your virtual Windows machine, and navigate not to `http://localhost:PORT` [but rather to](https://www.virtualbox.org/manual/ch09.html#changenat) `http://10.0.2.2:PORT`. Done!

## Testing on Mobile Safari

Of all the modern browsers, Safari for iOS is maybe the quirkiest (e.g., the `window.innerHeight` property [remains unaffected](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html#//apple_ref/doc/uid/TP40014305-CH11-SW38) when the virtual keyboard is deployed, whereas it shrinks as you’d expect it to on all other major mobile browsers). So if you’re not testing on mobile Safari, you’re playing with fire!

Fortunately, if you’ve got a Mac but no iOS device, you can get yourself a *virtual* iOS device for free. First you’ll need [Xcode](https://developer.apple.com/xcode/). Once you have it, you’ll want to run the Simulator app that it comes with. You won’t find it in your Applications folder, but a Spotlight search will work (`command` + `spacebar`). In Simulator, go to Hardware > Device > iOS, and select the device you want. Get your web project’s server running, open Safari in your virtual iOS device, and navigate to `http://localhost:PORT`. (To get the virtual keyboard to deploy when clicking an input box, try `command` + `K`.)

Hope you found this guide helpful!