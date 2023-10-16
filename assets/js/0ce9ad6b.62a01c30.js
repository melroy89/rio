"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[6454],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=o.createContext({}),c=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=c(n.components);return o.createElement(s.Provider,{value:e},n.children)},f="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),f=c(t),p=i,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return t?o.createElement(m,r(r({ref:e},u),{},{components:t})):o.createElement(m,r({ref:e},u))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[f]="string"==typeof n?n:i,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8748:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const a={title:"Configuration file",language:"en"},r=void 0,l={unversionedId:"documentation/configuration-file",id:"documentation/configuration-file",title:"Configuration file",description:"The configuration should be the following paths otherwise Rio will use the default configuration.",source:"@site/docs/documentation/configuration-file.md",sourceDirName:"documentation",slug:"/documentation/configuration-file",permalink:"/rio/docs/documentation/configuration-file",draft:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/documentation/configuration-file.md",tags:[],version:"current",frontMatter:{title:"Configuration file",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Command-line interface",permalink:"/rio/docs/documentation/command-line-interface"},next:{title:"Default colors",permalink:"/rio/docs/documentation/default-colors"}},s={},c=[],u={toc:c},f="wrapper";function d(n){let{components:e,...t}=n;return(0,i.kt)(f,(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The configuration should be the following paths otherwise Rio will use the default configuration."),(0,i.kt)("p",null,"MacOS and Linux configuration file path is ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/rio/config.toml"),"."),(0,i.kt)("p",null,"Windows\tconfiguration file path is ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\USER\\AppData\\Local\\rio\\config.toml"),' (replace "USER" with your user name).'),(0,i.kt)("p",null,"Any file update in the configuration file will trigger a render operation in Rio terminal with the new configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# Cursor\n#\n# Default cursor is Block\n# Other available options are: \'_\' and \'|\'\n#\ncursor = \'\u2587\'\n\n# Blinking Cursor\n#\n# Default is false\n#\nblinking-cursor = false\n\n# Scroll Speed Multiplier\n# \n# You can change how many lines are scrolled each time by setting this option.\n# Defaul is 3.0.\n# Example:\n# scroll-multiplier = 3.0\n\n# Ignore theme selection foreground color\n#\n# Default is false\n#\n# Example\n# ignore-selection-fg-color = false\n\n# Performance\n#\n# Set WGPU rendering performance\n# High: Adapter that has the highest performance. This is often a discrete GPU.\n# Low: Adapter that uses the least possible power. This is often an integrated GPU.\n#\nperformance = "High"\n\n# Theme\n#\n# It makes Rio look for the specified theme in the themes folder\n# (macos and linux: ~/.config/rio/themes/dracula.toml)\n# (windows: C:\\Users\\USER\\AppData\\Local\\rio\\themes\\dracula.toml)\n#\n# Example\n#   theme = "dracula"\n\n# Padding-x\n#\n# define x axis padding (default is 10)\n#\n# Example\n#   padding-x = 10\n\n# Option as Alt\n#\n# This config only works on MacOs.\n# Possible choices: \'both\', \'left\' and \'right\'.\n#\n# Example\n# option-as-alt = \'left\'\n\n# Window configuration\n#\n# \u2022 width - define the intial window width.\n#   Default: 600\n#\n# \u2022 height - define the inital window height.\n#   Default: 400\n#\n# \u2022 mode - define how the window will be created\n#     - "Windowed" (default) is based on width and height\n#     - "Maximized" window is created with maximized\n#     - "Fullscreen" window is created with fullscreen\n#\n# Example\n#   [window]\n#   width = 600\n#   height = 400\n#   mode = "Windowed"\n\n# Background configuration\n#\n# \u2022 opacity - changes the background transparency state\n#   Default: 1.0\n#\n# \u2022 mode - defines background mode bewteen "Color" and "Image"\n#\n# \u2022 image - Set an image as background\n#   Default: None\n#\n# Example\n# [background]\n# mode = "Image"\n# opacity = 1.0\n#\n# [background.image]\n# path = "/Users/rapha/Desktop/eastward.jpg"\n# width = 200.0\n# height = 200.0\n# x = 0.0\n# y = 0.0\n\n# Window Height\n#\n# window-height changes the inital window height.\n#   Default: 400\n#\n# Example\n#   window-height = 400\n\n# Fonts\n#\n# Configure fonts used by the terminal\n#\n# Note: You can set different font families but Rio terminal\n# will always look for regular font bounds whene\n#\n# You can also set family on root to overwritte all fonts\n# [fonts]\n#   family = "cascadiamono"\n#\n# You can also specify extra fonts to load\n# [fonts]\n#   extras = [{ family = "Microsoft JhengHei" }]\n#\n#\n# Example\n#   [fonts]\n#   size = 18\n#\n#   [fonts.regular]\n#   family = "cascadiamono"\n#   style = "normal"\n#   weight = 400\n#\n#   [fonts.bold]\n#   family = "cascadiamono"\n#   style = "normal"\n#   weight = 800\n#\n#   [fonts.italic]\n#   family = "cascadiamono"\n#   style = "italic"\n#   weight = 400\n#\n#   [fonts.bold-italic]\n#   family = "cascadiamono"\n#   style = "italic"\n#   weight = 800\n\n# Navigation\n#\n# "mode" - Define navigation mode\n#   \u2022 NativeTab (MacOs only)\n#   \u2022 CollapsedTab\n#   \u2022 BottomTab\n#   \u2022 TopTab\n#   \u2022 Breadcrumb\n#   \u2022 Plain\n#\n# "clickable" - Enable click on tabs to switch.\n# "use-current-path" - Use same path whenever a new tab is created.\n# "color-automation" - Set a specific color for the tab whenever a specific program is running.\n# "macos-hide-window-buttons" - (MacOS only) Hide window buttons\n#\n# Example\n#   [navigation]\n#   mode = "CollapsedTab"\n#   clickable = false\n#   use-current-path = false\n#   color-automation = []\n#   macos-hide-window-buttons = false\n\n# Shell\n#\n# You can set `shell.program` to the path of your favorite shell, e.g. `/bin/fish`.\n# Entries in `shell.args` are passed unmodified as arguments to the shell.\n#\n# Default:\n#   - (macOS) user login shell\n#   - (Linux/BSD) user login shell\n#   - (Windows) powershell\n#\n# Example 1 using fish shell from bin path:\n#\n#   shell = { program = "/bin/fish", args = ["--login"] }\n#\n# Example 2 for Windows using powershell\n#\n#   shell = { program = "pwsh", args = [] }\n#\n# Example 3 for Windows using powershell with login\n#\n#   shell = { program = "pwsh", args = ["-l"] }\n\n# Startup directory\n#\n# Directory the shell is started in. If this is unset the working\n# directory of the parent process will be used.\n#\n# This configuration only has effect if use-fork is disabled\n#\n# Example\n#  working-dir = "/Users/raphael/Documents/"\n\n# Environment variables\n#\n# The example below sets fish as the default SHELL using env vars\n# please do not copy this if you do not need\n#\n# Example\n#   env-vars = []\n\n# Disable render when unfocused\n#\n# This property disable renderer processes while Rio is unfocused.\n#\n# Example\n#   disable-renderer-when-unfocused = false\n\n# Use fork\n#\n# Defaults for POSIX-based systems (Windows is not configurable):\n# MacOS: spawn processes\n# Linux/BSD: fork processes\n#\n# Example\n#   use-fork = false\n\n# Colors\n#\n# Colors definition will overwrite any property in theme\n# (considering if theme folder does exists and is being used)\n#\n# Example:\n#\n#   [colors]\n#   background = \'#0F0D0E\'\n#   foreground = \'#F9F4DA\'\n#   cursor = \'#F38BA3\'\n#   tabs = \'#443d40\'\n#   tabs-active = \'#F38BA3\'\n#   green = \'#0BA95B\'\n#   red = \'#ED203D\'\n#   blue = \'#12B5E5\'\n#   yellow = \'#FCBA28\'\n\n# Bindings\n#\n# Create custom Key bindings for Rio terminal\n# More information in: raphamorim.io/rio/docs/custom-key-bindings\n#\n# Example\n#   [bindings]\n#   keys = [\n#     { key = "q", with = "super", action = "Quit" },\n#     # Bytes[27, 91, 53, 126] is equivalent to "\\x1b[5~"\n#     { key = "home", with = "super | shift", bytes = [27, 91, 53, 126] }\n#   ]\n\n# Log level\n#\n# This property enables log level filter. Default is "OFF".\n#\n# Example\n#   [developer]\n#   log-level = "OFF"\n')),(0,i.kt)("p",null,"If you have any suggestion of configuration ideas to Rio, please feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/raphamorim/rio/issues/new"},"open an issue"),"."))}d.isMDXComponent=!0}}]);