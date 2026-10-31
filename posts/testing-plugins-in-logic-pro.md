---
title: 'Testing Plugins in Logic Pro'
date: '2026-10-20'
---

Writing the code is only half of the work. A plugin must also load, behave and save its state correctly inside the host. Here is the checklist I follow when testing an Audio Unit in Logic Pro.

## 1. Validate with auval

macOS includes a command line tool called `auval` that checks whether an Audio Unit follows the rules. Logic Pro will not load a plugin that fails validation.

- `auval -a` lists the Audio Units installed on the machine.
- `auval -v aufx Abcd Manu` validates an effect (type `aufx`) with the given subtype and manufacturer codes.

## 2. Rescan in Logic Pro

Open the **Plug-in Manager** in Logic Pro, rescan, and make sure your plugin is listed and not marked as failed. Then add it to a channel strip.

## 3. Listen and check the basics

- Does the sound pass through correctly when the plugin is bypassed and when it is active?
- Do the controls respond smoothly, without clicks or zipper noise?
- Is CPU use stable when you play and when you stop?

## 4. Automation and recall

Automate a parameter and play the project back. Then save the project, close it and open it again. Every setting should come back exactly as you left it.

Testing on a real song, not only on test tones, often reveals problems that numbers do not show.
