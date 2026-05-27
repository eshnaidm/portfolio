---
title: "OtterOS — Technician Multi-Boot USB Toolkit"
description: "A production-ready bootable USB system for PC technicians — multi-language Windows installation, automated post-install configuration, and a full diagnostic toolkit, built for a real repair shop."
category: "development"
tags: ["PowerShell", "Windows", "Tooling", "PC Repair"]
date: "2026-05-01"
featured: true
order: 3
---

# OtterOS — Technician Multi-Boot USB Toolkit

> Built with AI-assisted development using Claude Code

## Overview

OtterOS transforms a 256GB USB drive into a complete PC technician toolkit. It was built for daily use at a real computer repair shop in Israel and covers the full workflow — from booting on a bare machine to a fully configured, clean Windows installation with drivers and software installed.

The project is deployed by running a PowerShell script that syncs the repository to the USB drive. No build system, no complexity — just a working tool.

---

## What It Does

| Phase | Capability |
|-------|-----------|
| **Boot** | Custom GRUB2 menu with organized categories: Windows ISOs, Recovery environments, Linux distros, Diagnostic tools |
| **Install** | Semi-unattended Windows setup — auto-skips EULA, Microsoft account, WiFi, privacy screens, Cortana |
| **Configure** | Post-install PowerShell toolkit: bloatware removal, telemetry disabling, performance tweaks, software installation |
| **Diagnose** | Portable diagnostic tools for CPU, GPU, storage, memory stress testing and health monitoring |

---

## Tech Stack

- **Boot Manager:** Ventoy — boots multiple ISOs from a single USB without reformatting
- **UI:** Custom GRUB2 dark theme with otter mascot branding
- **Automation:** PowerShell scripts (post-install toolkit), XML (Windows unattended setup), Batch (launcher)
- **Deployment:** `setup.ps1` copies from GitHub repo to USB — source of truth lives in version control

---

## Windows Installation

The `autounattend.xml` handles a three-pass unattended setup (windowsPE → specialize → oobeSystem):

- **Multi-language support** — a single XML works for English, Hebrew, and Russian without swapping files; technician selects language at boot
- **Automatic local account** — creates a "User" account with no password, bypasses Microsoft account requirement
- **Israel Standard Time** set automatically
- **Microsoft account servers blocked** via hosts file modification
- **Windows 11 bypass** — TPM, RAM, and Secure Boot checks skipped for compatibility with older hardware

---

## Post-Install Toolkit

After Windows boots, `_LAUNCH.bat` auto-detects the USB drive letter and opens a PowerShell menu:

**Bloatware Removal**
Xbox apps, Teams, Candy Crush, TikTok, Spotify, Clipchamp, OneDrive

**Telemetry & Privacy**
DiagTrack service disabled, activity history cleared, advertising ID removed

**Performance**
High Performance power plan, registry tweaks for responsiveness

**Software Installation** (via winget)
Chrome, 7-Zip, VLC, Notepad++, Discord, Steam

**Driver Management**
SDIO (Snappy Driver Installer) with 65 driver packs (~55GB), plus standalone GPU/chipset drivers with guided installation order

---

## Diagnostic Tools Included

| Category | Tools |
|----------|-------|
| System Info | CPU-Z, GPU-Z, HWInfo |
| Disk Health | CrystalDiskInfo, CrystalDiskMark, Victoria |
| Stress Testing | FurMark, OCCT |
| Driver Management | DDU (Display Driver Uninstaller) |
| Memory | Memtest86 |

---

## Bootable Environments

- **Windows 10/11** — English, Hebrew, Russian
- **Recovery** — Sergei Strelec WinPE, Hiren's BootCD PE, Rescuezilla
- **Linux** — Ubuntu, Kali, GParted, SystemRescue
- **Diagnostics** — Memtest86, HDAT2

---

## Project Structure

```
OtterOS/
├── ventoy/
│   ├── ventoy.json        — Boot menu config, Win11 bypass flags
│   └── theme/             — Custom GRUB2 dark theme
├── Toolkit/
│   ├── Scripts/           — PowerShell post-install menu
│   ├── Drivers/           — Driver packs and installers
│   └── Tools/             — Portable diagnostic utilities
├── autounattend.xml       — Unattended Windows setup config
└── setup.ps1              — USB deployment script
```

---

## Design Notes

**Why Ventoy?** Most multi-boot USB tools require reformatting to add new ISOs. Ventoy treats the drive as a regular storage device — drop in an ISO file and it's bootable immediately. New Windows versions or recovery tools are added in seconds.

**GRUB2 percentage constraint:** All theme element positions must use whole-number percentages — decimal values silently crash the boot menu. The custom theme was built with this constraint in mind.

**Self-detecting launcher:** `_LAUNCH.bat` uses `%~d0` to resolve its own drive letter at runtime, so the toolkit works regardless of which drive letter Windows assigns to the USB.
