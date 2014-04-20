/* Tigra Menu items structure */
var MENU_ITEMS = [
	['Home', '/', {'tw':'_top','sb':'Go to the index page'},
		['Objective', 'objective.php', {'tw':'_top','sb':'This site\'s objective, or mission'}],
		['News', 'news.php', {'tw':'_top','sb':'The latest news on changes and additions'}],
		['FAQ', 'faq.php', {'tw':'_top','sb':'Frequently Asked Questions - and the Answers'}],
		['Site Policy', 'sitepolicy.php', {'tw':'_top','sb':'Privacy policy, compatibility, disclaimer, etc.'}],
		['Credits', 'credits.php', {'tw':'_top','sb':'Acknowledgements'}],
		['The Making Of...', 'themakingof.php', {'tw':'_top','sb':'A list of tools that were used to create this site'}],
		['Contact', 'contact.php', {'tw':'_top','sb':'Questions? Contact me!'}],
		['Donate', 'donate.php', {'tw':'_top','sb':'Make a donation'}]
	],
	['Batch Files', 'batchfiles.php', {'tw':'_top','sb':'Batch Files'},
		['Getting Started', 'batchstart.php', {'tw':'_top','sb':'Things you need to know and do to get started with batch scripting'}],
		['Batch Techniques', 'battech.php', {'tw':'_top','sb':'Batch scripting techniques, how-tos and best practices'},
			['Debugging', 'battech_debugging.php', {'tw':'_top','sb':'Debug your batch files'}],
			['Data & Variables', 'battech.php#Data', {'tw':'_top','sb':'Work with environment variables, arrays, integers, random numbers, strings, etc.'}],
			['Devices', 'battech.php#Devices', {'tw':'_top','sb':'Work with logical and physical devices'}],
			['Files', 'battech.php#Files', {'tw':'_top','sb':'Working with files'}],
			['Folders', 'battech.php#Folders', {'tw':'_top','sb':'Working with folders'}],
			['Internet', 'battech.php#Internet', {'tw':'_top','sb':'Download files, send e-mail, and more'}],
			['Inventory', 'battech.php#Inventory', {'tw':'_top','sb':'Use batch files to gather inventories'}],
			['Math', 'battech.php#Math', {'tw':'_top','sb':'Batch 32-bit integer math, its limitations and some workarounds'}],
			['Miscellaneous', 'battech.php#Misc', {'tw':'_top','sb':'Debugging, UNIX ports, undocumented features and more'}],
			['Network', 'battech.php#Network', {'tw':'_top','sb':'Network and Internet related commands and techniques'}],
			['Printing', 'battech.php#Printing', {'tw':'_top','sb':'Control printers and printing from the command line'}],
			['Processes & Services', 'battech.php#Proc', {'tw':'_top','sb':'Manage processes and services from the command line'}],
			['Program Flow', 'battech.php#Flow', {'tw':'_top','sb':'IF statements, loops, errorlevels, etc.'}],
			['Registry', 'battech.php#Registry', {'tw':'_top','sb':'Manipulate the registry from the command line'}],
			['Samples Collections', 'battech.php#Examples', {'tw':'_top','sb':'Several collections of sample scripts'}],
			['Schedulers', 'battech.php#Schedulers', {'tw':'_top','sb':'Use batch files or the command line to manage scheduled tasks'}],
			['Security', 'battech.php#Security', {'tw':'_top','sb':'Manipulate security settings from the command line'}],
			['Time & Date', 'battech.php#Time', {'tw':'_top','sb':'Using date and time in batch files'}],
			['UNIX Ports', 'battech.php#UnixPorts', {'tw':'_top','sb':'UNIX commands ported to DOS/Windows'}],
			['User Interaction', 'battech.php#UI', {'tw':'_top','sb':'Prompt for input, popup messages, etc.'}]
		],
		['Batch HowTos', 'batchhowto.php', {'tw':'_top','sb':'A list of common tasks and the batch commands available to perform these tasks'}],
		['Commands', 'batchcommands.php', {'tw':'_top','sb':'Batch command reference'}],
		['Command Line Switches', 'commandlineswitches.php', {'tw':'_top','sb':'A collection of command line switches for several programs'}],
		['Shutdown Commands', 'shutdown.php', {'tw':'_top','sb':'Shutdown, reboot and logoff commands'}],
		['Short Command Line Tips', 'shorts.php', {'tw':'_top','sb':'Short Command Line Tips'}],
		['Admin One-Liners', 'ntadmincommands.php', {'tw':'_top','sb':'Useful commands for administrators'}],
		['Examples', 'batexamples.php', {'tw':'_top','sb':'General sample batch files'}],
		['Samples Collections', 'battech.php#Examples', {'tw':'_top','sb':'More samples collections'}],
		['Tools', 'batchtools.php', {'tw':'_top','sb':'Tools to create and enhance batch files'}],
		['Links', 'batlinks.php', {'tw':'_top','sb':'Links to batch related information'}],
		['Books', 'booksbat.php', {'tw':'_top','sb':'Books on batch files and batch scripting'}],
		['Challenges', 'challenges.php', {'tw':'_top','sb':'Test your batch scripting skills'}]
	],
	['C#', 'csharpstart.php', {'tw':'_top'},
		['Getting Started', 'csharpstart.php', {'tw':'_top','sb':'Getting started with C# programming'}],
		['Examples', 'csharpexamples.php', {'tw':'_top','sb':'C# source code examples'}],
		['Books', 'bookscs.php', {'tw':'_top','sb':'Books on C# programming'}],
		['Development Software', 'storevisualstudio.php', {'tw':'_top'}]
	],
	['KiXtart', 'kixtart.php', {'tw':'_top','sb':'The KiXtart scripting language'},
		['Getting Started', 'kixtartstart.php', {'tw':'_top','sb':'Things you need to know and do to get started with KiXtart'}],
		['Examples', 'kixtartexamples.php', {'tw':'_top','sb':'Sample KiXtart scripts'}],
		['Links', 'kixtartlinks.php', {'tw':'_top','sb':'Links to KiXtart related information'}],
		['Tools', 'kixtarttools.php', {'tw':'_top','sb':'Tools to write and compile KiXtart scripts'}],
		['Books', 'bookskix.php', {'tw':'_top','sb':'Books on KiXtart scripting'}]
	],
	['Perl', 'perl.php', {'tw':'_top','sb':'Perl scripting'},
		['Getting Started', 'perlstart.php', {'tw':'_top','sb':'Things you need to know and do to get started with administrative Perl scripting'}],
		['Examples', 'perlexamples.php', {'tw':'_top','sb':'Sample Perl scripts'}],
		['Links', 'perllinks.php', {'tw':'_top','sb':'Links to Perl related information'}],
		['Tools', 'perltools.php', {'tw':'_top','sb':'Tools to write and compile Perl scripts'}],
		['Books', 'booksperl.php', {'tw':'_top','sb':'Books on Perl administrative scripting'}]
	],
	['PowerShell', 'powershellstart.php', {'tw':'_top','sb':'Windows PowerShell scripting'},
		['Getting Started', 'powershellstart.php', {'tw':'_top','sb':'Things you need to know and do to get started with PowerShell'}],
		['Examples', 'powershellexamples.php', {'tw':'_top','sb':'Sample PowerShell scripts'}],
		['Links', 'powershelllinks.php', {'tw':'_top','sb':'Links to PowerShell related information'}],
		['Tools', 'powershelltools.php', {'tw':'_top','sb':'Tools to create PowerShell scripts'}],
		['Books', 'booksps.php', {'tw':'_top','sb':'Books on PowerShell scripting'}]
	],
	['Regular Expressions', 'regexp.php', {'tw':'_top','sb':'Regular Expressions'},
		['Getting Started', 'regexpstart.php', {'tw':'_top','sb':'Things you need to know and do to get started with regular expressions'}],
		['Expressions', 'regexpexp.php', {'tw':'_top','sb':'Sample expressions'}],
		['Examples', 'regexpexamples.php', {'tw':'_top','sb':'Sample scripts using regular expressions'}],
		['Links', 'regexplinks.php', {'tw':'_top','sb':'Links to regular expressions related information'}],
		['Tools', 'regexptools.php', {'tw':'_top','sb':'Tools to generate and test regular expressions, and regular expressions based find and replace tools'}],
		['Books', 'booksregexp.php', {'tw':'_top','sb':'Books on regular expressions'}]
	],
	['Rexx', 'rexx.php', {'tw':'_top','sb':'Rexx scripting for Windows and OS/2'},
		['Getting Started', 'rexxstart.php', {'tw':'_top','sb':'Things you need to know and do to get started with Rexx scripting'}],
		['Examples', 'rexxexamples.php', {'tw':'_top','sb':'Sample Rexx scripts for Windows and OS/2'}],
		['OS/2 LAN Server', 'lsrexxutil.php', {'tw':'_top','sb':'Sample OS/2 LAN Servers scripts'}],
		['Links', 'rexxlinks.php', {'tw':'_top','sb':'Links to Rexx related information'}],
		['Tools', 'rexxtools.php', {'tw':'_top','sb':'Tools to create, test and compile Rexx scripts, and Rexx extensions'}],
		['Books', 'booksrexx.php', {'tw':'_top','sb':'Books on Rexx scripting'}]
	],
	['VBScript & WSH', 'wsh.php', {'tw':'_top','sb':'Scripting with the Windows Script Host and VBScript'},
		['Getting Started', 'wshstart.php', {'tw':'_top','sb':'Things you need to get started with VBScript or other WSH base languages'}],
		['VBScript Techniques', 'vbstech.php', {'tw':'_top','sb':'VBScript scripting techniques, how-tos and best practices'},
			['Debugging', 'vbstech_debugging.php', {'tw':'_top','sb':'Debugging VBScript'}],
			['Data & Variables', 'vbstech.php#Data', {'tw':'_top','sb':'Work with arrays, lists, integers, random numbers, roman numerals, strings, etc.'}],
			['Databases', 'vbstech.php#Databases', {'tw':'_top','sb':'Work with databases and spreadsheets'}],
			['Engines', 'vbstech.php#Engines', {'tw':'_top','sb':'Scripting engine related info'}],
			['Files', 'vbstech.php#Files', {'tw':'_top','sb':'Work with plain text  files, XML, archive files, checksums, etc.'}],
			['Folders', 'vbstech.php#Folders', {'tw':'_top','sb':'Create and remove folders, work with special folders, etc.'}],
			['Internet', 'vbstech.php#Internet', {'tw':'_top','sb':'Send mail, download or upload files, query web pages, and more...'}],
			['Inventory', 'vbstech.php#Inventory', {'tw':'_top','sb':'Make hardware and software inventories'}],
			['Multimedia', 'vbstech.php#MultiMedia', {'tw':'_top','sb':'Work with multimedia files and devices'}],
			['Network', 'vbstech.php#Network', {'tw':'_top','sb':'Work with network connections, printers, query user, computer and domain names, ping, query whois, etc.'}],
			['Object Browsers', 'vbstech.php#ObjectBrowsers', {'tw':'_top','sb':'Work with object browsers, special editors and IDEs'}],
			['OLE Automation', 'vbstech.php#Automation', {'tw':'_top','sb':'Some MS-Office and WordPerfect Office automation samples'}],
			['Printing', 'vbstech.php#Printing', {'tw':'_top','sb':'Manage printers and issue print commands in VBScript'}],
			['Processes & Services', 'vbstech.php#Proc', {'tw':'_top','sb':'Work with processes and services'}],
			['Registry', 'vbstech.php#Registry', {'tw':'_top','sb':'Work with Windows\' registry'}],
			['Regular Expressions', 'vbstech_regexp.php', {'tw':'_top','sb':'WSH\'s RegExp object'}],
			['Shortcuts', 'vbstech.php#Shortcuts', {'tw':'_top','sb':'Work with shortcuts and URLs'}],
			['Time & Date', 'vbstech.php#Time', {'tw':'_top','sb':'Work with time and dates and time delays'}],
			['User Interaction', 'vbstech.php#UI', {'tw':'_top','sb':'Message boxes, login windows, prompt for input, progress bars, etc.'}]
		],
		['Examples', 'wshexamples.php', {'tw':'_top','sb':'Sample scripts in VBScript and some JScript'}],
		['HTA & WSC Examples', 'htaexamples.php', {'tw':'_top','sb':'Sample HTML Applications and Windows Script Components'}],
		['Links', 'wshlinks.php', {'tw':'_top','sb':'Links to VBScript and WSH related information'}],
		['Tools', 'wshtools.php', {'tw':'_top','sb':'Tools to create, debug and compile scripts, generate code, etc.'}],
		['Books', 'bookswsh.php', {'tw':'_top','sb':'Books on VBScript, and WSH in general'}],
		['Challenges', 'challenges.php#VBScript', {'tw':'_top','sb':'Test your VBScript scripting skills with these real-life challenges'}]
	],
	['WMI', 'wmistart.php', {'tw':'_top','sb':'Scripting with Windows Management Instrumentation'},
		['Getting Started', 'wmistart.php', {'tw':'_top','sb':'Things you need to get started with WMI scripting'}],
		['Examples', 'wmiexamples.php', {'tw':'_top','sb':'Sample scripts using WMI'}],
		['Links', 'wmilinks.php', {'tw':'_top','sb':'Links to WMI related information'}],
		['Books', 'bookswmi.php', {'tw':'_top','sb':'Books on Windows Management Instrumentation'}],
		['Tools', 'wmitools.php', {'tw':'_top','sb':'Tools to generate and test WMI queries'}]
	],
	['ADSI', 'adsistart.php', {'tw':'_top','sb':'Scripting with the Active Directory Scripting Interface'},
		['Getting Started', 'adsistart.php', {'tw':'_top','sb':'Things you need to get started with ADSI scripting'}],
		['Examples', 'http://gallery.technet.microsoft.com/ScriptCenter/en-us/site/search?f[0].Type=RootCategory&f[0].Value=activedirectory&f[0].Text=Active%20Directory', {'tw':'_blank','sb':'Technet ScriptCenter ADSI sample scripts'}],
		['Links', 'adsilinks.php', {'tw':'_top','sb':'Links to ADSI related information'}],
		['Books', 'booksadsi.php', {'tw':'_top','sb':'Books on ADSI and WMI'}],
		['Tools', 'adsitools.php', {'tw':'_top','sb':'Tools to generate and test ADSI queries'}]
	],
	['Silent Installs', 'unattended.php', {'tw':'_top','sb':'Commands for unattended and silent installations'},
		['General', 'unattended.php', {'tw':'_top','sb':'Unattended and silent installations'}],
		['Windows Installer', 'msiexec.php', {'tw':'_top','sb':'Windows Installer (MSIEXEC.EXE)'}],
		['Specific software', 'unattendedapps.php', {'tw':'_top','sb':'Unattended installation procedures for specific software'}],
		['Software requirements', 'softwarerequirements.php', {'tw':'_top','sb':'Check if a computer meets your software requirements'}],
		['Hardware requirements', 'hardwarerequirements.php', {'tw':'_top','sb':'Check hardware requirements'}]
	],
	['Books', 'books.php', {'tw':'_top','sb':'Books on scripting'},
		['Batch Files', 'booksbat.php', {'tw':'_top','sb':'Books on batch files and command references'}],
		['Windows', 'bookswin.php', {'tw':'_top','sb':'Windows administration, Windows registry'}],
		['Resource Kits', 'resourcekits.php', {'tw':'_top','sb':'Valuable reference material for every Windows version'}],
		['KiXtart', 'bookskix.php', {'tw':'_top','sb':'Books on KiXtart scripting'}],
		['Perl', 'booksperl.php', {'tw':'_top','sb':'Books on adminstrative scripting in Perl'}],
		['PowerShell', 'booksps.php', {'tw':'_top','sb':'Books on PowerShell scripting'}],
		['Regular Expressions', 'booksregexp.php', {'tw':'_top','sb':'Books on regular expressions'}],
		['Rexx', 'booksrexx.php', {'tw':'_top','sb':'Books on Rexx scripting for Windows and OS/2'}],
		['WSH & VBScript', 'bookswsh.php', {'tw':'_top','sb':'Books on administrative scripts using WSH and VBScript'}],
		['C#', 'bookscs.php', {'tw':'_top','sb':'Books on C# programming'}],
		['WMI', 'bookswmi.php', {'tw':'_top','sb':'Windows Management Instrumentation'}],
		['ADSI', 'booksadsi.php', {'tw':'_top','sb':'Active Directory Scripting Interface'}],
		['HTML, JavaScript & CSS', 'booksweb.php', {'tw':'_top','sb':'Books on HTML, CSS, JavaScript, etc.'}],
		['Off-Topic', 'storeofftopic.php', {'tw':'_top','sb':'DVDs and books on other subjects, not related to scripting at all'},
			['Books and Movies', 'storeofftopic.php', {'tw':'_top'}],
			['Birding and Outdoor', 'storebirding.php', {'tw':'_top'}],
			['Photography', 'storephotography.php', {'tw':'_top','sb':'Cameras, lenses, filters, bags, books and more...'}]
		]
	],
	['Scripting Tools', 'scriptingtools.php', {'tw':'_top','sb':'Tools to enhance your scripting experience'},
		['Batch Utilities', 'batchtools.php', {'tw':'_top','sb':'Third party command line utilities and other batch file enhancements'}],
		['Resource Kits', 'resourcekits.php', {'tw':'_top','sb':'Command line utilities and management and deployment tools for specific Windows versions'}],
		['Compilers', 'scriptcompilers.php', {'tw':'_top','sb':'Script compilers and packagers'}],
		['Editors', 'scripteditors.php', {'tw':'_top','sb':'Script editors and IDEs'}],
		['Code Generators', 'codegen.php', {'tw':'_top','sb':'Code generators, debuggers, object browsers & other developers\' tools'}],
		['Regular Expressions', 'regexptools.php', {'tw':'_top','sb':'Tools to build and test regular expressions, and regexp based find and replace tools'}],
		['Automation Tools', 'automationtools.php', {'tw':'_top','sb':'GUI tools to automate repetitive tasks (i.e. macro tools)'}],
		['VBScript Add-Ons', 'vbsaddons.php', {'tw':'_top','sb':'VBScript compatible components and extensions'}],
		['Code Search', 'search.php', {'tw':'_top','sb':'Search engines specialized in scripting languages'}],
		['Printing Tools', 'printtools.php', {'tw':'_top','sb':'Monitor ink levels, reset ink counters, migrate printer servers, and more'}],
		['Inventory Tools', 'inventorytools.php', {'tw':'_top','sb':'Inventory tools, list hardware and software for local or remote computers'}],
		['Shell Extensions', 'shellextensions.php', {'tw':'_top','sb':'Functionality that should have been included in Windows'}],
		['File viewers', 'fileviewers.php', {'tw':'_top','sb':'View files without requiring the (often bulky) software that created them'}],
		['Backup', 'backuptools.php', {'tw':'_top','sb':'Backup/restore and undelete/recovery tools'}],
		['Security', 'securitytools.php', {'tw':'_top','sb':'Anti-virus, anti-spyware, personal firewalls and more...'}],
		['The Making Of...', 'themakingof.php', {'tw':'_top','sb':'A list of tools that were used to create this site'}]
	],
	['Miscellaneous', 'misc.php', {'tw':'_top','sb':'Miscellaneous subjects: some web related stuff, credits, preferences, etc.'},
		['Failed Mail', 'failedmail.php', {'tw':'_top','sb':'Answers to questions sent in by e-mail, but with invalid return addresses'}],
		['Tweaks', 'tweaks.php', {'tw':'_top','sb':'Strange Windows tweaks and unusual work-arounds'}],
		['Web Stuff', 'webpub.php', {'tw':'_top','sb':'Some web related info, most of it used for this site'}],
		['Conversions', 'convert.php', {'tw':'_top','sb':'Convert temperatures, pressure, lengths, etc.'}],
		['Random page', 'randompage.php', {'tw':'_top','sb':'Displat a randomly selected page from this site'}],
		['My Photo Galleries', 'http://www.robvanderwoude.net/', {'tw':'_new','sb':'Did you come here looking for my wildlife photos? Follow this link.'}],
		['What\'s New', 'whatsnew.php', {'tw':'_top','sb':'List of latest updates'}],
		['Donate', 'donate.php', {'tw':'_top','sb':'Make a donation'}]
	],
	['Search', 'search.php', {'tw':'_top','sb':'Search this site'}],
	['<img src="./pictures/print.gif" border="0" width="20" height="20" alt="0"> Print This Page', 'javascript:print()', {'tw':'_top','sb':'Print this page'}]
];