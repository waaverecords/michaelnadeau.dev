---
title: Build a Spotify plugin for PowerToys Run
publishedOn: '2024-02-18'
---

A while ago, I stumbled on very neat project named [PowerToys](https://github.com/microsoft/PowerToys). After trying its many utilities for a week, I was hooked. I knew I had to contribute to this project; and so I started looking for something i could spend time on. It didn't take long: the Run utility is by far the most usefull to me, and I had already a few ideas on how to make it even better.

![PowerToys, a set of Windows utilities for power users](/images/posts/powertoys-run-plugin-spotify/powertoys.png "PowerToys, a set of Windows utilities for power users")

At the time, v0.76.0 was the current version of PowerToys. There existed fewer Run plugins than I anticipated, but assuming that the tool was just not known/used by many, I started looking into making my own Run plugin. Noticing that I would Alt+Tab and use the mouse many times a day to pick and play music on Spotify, it would save me time if I could do those inside a Run plugin.

[ShopifySharp](https://github.com/nozzlegear/ShopifySharp), a simple C# library would be the ideal way of accessing the Spotify API. But, using this library within the Run plugin architecture would prove to be impossible. The low plugin count was a consequence of PowerToys Run's plugin system not being able to load external dependencies... This meant I would have to write everything Spotify related from scratch 😕. Not wanting to do that, I spawned a console project on the side to write the necessary code to control Spotify using ShopifySharp. Now I was hoping that external dependencies would be supported eventually.

v0.77.0 came, and, hurray 😄! They were supported now. Which meant I could very quickly turn my console project into a proper Run plugin. And so, I developped the plugin.

## PowerToys-Run-Spotify

After a few hours of tinkering, I had a decent way of controling Spotify without using the mouse at all.

Here is what the plugin enables you to do:
- Search for songs, albums, artists and playlists
- Play songs, albums, artists and playlists
- Add a song to queue (Shift+Enter)
- Pause and resume the current track
- Go to previous or next track
- Turn shuffle mode on and off
- Set repeat mode to track, context or off

![PowerToys-Run-Spotify demo](/images/posts/powertoys-run-plugin-spotify/powertoys-run-spotify-demo.gif "PowerToys-Run-Spotify demo")

If you'd like to use the plugin, or contribute to it, feel free to visit the repo on Github ([PowerToys-Run-Spotify](https://github.com/waaverecords/PowerToys-Run-Spotify)).

Thank you for reading.

~ Michael