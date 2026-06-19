const modules = [
  { id:'orientation', title:'Cyber Masters Orientation', area:'foundation', track:'all', weeks:1, lessons:['Program map','Cyber career paths','Lab setup','Study workflow'], labs:['Build cyber lab folder','Install VM tooling'], project:'Personal cyber learning dashboard' },
  { id:'network-security', title:'Network Security', area:'technical', track:'all', weeks:2, lessons:['TCP/IP review','Threat models','Firewalls and segmentation','VPNs and zero trust','Packet analysis'], labs:['Wireshark packet capture','Firewall rule simulation'], project:'Home network threat model' },
  { id:'linux-security', title:'Linux and Operating System Security', area:'technical', track:'security-engineering', weeks:2, lessons:['Linux filesystem','Users and permissions','Processes','Logs','Hardening basics'], labs:['Linux VM hardening','Audit logs'], project:'Linux hardening checklist' },
  { id:'fundamentals-c-assembler', title:'Fundamentals of Coding: C and Assembler', area:'technical', track:'security-engineering', weeks:2, lessons:['Memory model','Pointers','Stack/heap','Assembly basics','Debugging'], labs:['Compile vulnerable C','Trace with gdb'], project:'Buffer overflow explainer lab' },
  { id:'data-security-privacy', title:'Data Security and Privacy', area:'core', track:'all', weeks:2, lessons:['CIA triad','Privacy principles','Data classification','Encryption at rest','Data lifecycle'], labs:['Classify sample data','Design data retention policy'], project:'Data security plan for small business' },
  { id:'cybersecurity-ethics', title:'Cybersecurity Ethics', area:'core', track:'all', weeks:1, lessons:['Responsible disclosure','Authorisation','Dual-use tools','Professional conduct'], labs:['Write a rules-of-engagement note'], project:'Ethics decision checklist' },
  { id:'principles-security-engineering', title:'Principles of Security Engineering', area:'core', track:'all', weeks:2, lessons:['Secure design','Abuse cases','Least privilege','Defense in depth','Security architecture'], labs:['Threat model a web app','Design controls'], project:'Security architecture for NOVA SaaS' },
  { id:'cyber-operations', title:'Cyber Operations', area:'operations', track:'both-specialisations', weeks:2, lessons:['SOC workflow','Alert triage','SIEM concepts','Detection engineering','Escalation'], labs:['Triage mock alerts','Write detection notes'], project:'Mini SOC playbook' },
  { id:'cyber-risk-resilience', title:'Cyber Risk and Resilience', area:'management', track:'management-leadership', weeks:2, lessons:['Risk matrices','Business impact','Controls','Recovery objectives','Resilience planning'], labs:['Risk register','Business impact analysis'], project:'Cyber risk register for small business' },
  { id:'cyber-management-governance', title:'Cyber Management and Governance', area:'management', track:'management-leadership', weeks:2, lessons:['Governance frameworks','Policy writing','Security metrics','Board reporting'], labs:['Write security policy','Build KPI dashboard'], project:'Cyber governance pack' },
  { id:'cyber-threats-crime', title:'Cyber Threats and Crime', area:'management', track:'management-leadership', weeks:1, lessons:['Threat actors','Cybercrime economics','Fraud patterns','Attribution limits'], labs:['Threat actor profile'], project:'Threat briefing report' },
  { id:'cyber-law', title:'Cyber and the Law', area:'management', track:'management-leadership', weeks:1, lessons:['Australian cyber context','Privacy Act basics','Evidence handling','Contracts and liability'], labs:['Incident legal checklist'], project:'Legal escalation checklist' },
  { id:'cloud-security', title:'Cloud Security', area:'technical', track:'security-engineering', weeks:2, lessons:['Shared responsibility','IAM','Storage security','Logging','Cloud misconfigurations'], labs:['Cloud IAM design','S3/storage risk review'], project:'Cloud security baseline' },
  { id:'penetration-testing', title:'Penetration Testing', area:'technical', track:'security-engineering', weeks:2, lessons:['Methodology','Recon','Web testing','Reporting','Remediation'], labs:['DVWA/WebGoat lab','Write pentest finding'], project:'Pentest report sample' },
  { id:'advanced-penetration-testing', title:'Advanced Penetration Testing', area:'technical', track:'security-engineering', weeks:2, lessons:['Privilege escalation','Active Directory basics','Exploit chains','OPSEC','Professional reporting'], labs:['Priv-esc practice','Attack path diagram'], project:'Advanced pentest report' },
  { id:'digital-forensics', title:'Digital Forensics', area:'technical', track:'security-engineering', weeks:2, lessons:['Evidence handling','Disk images','Memory concepts','Timeline analysis','Reporting'], labs:['Autopsy case review','Timeline build'], project:'Forensics case report' },
  { id:'reverse-engineering', title:'Reverse Engineering', area:'technical', track:'security-engineering', weeks:2, lessons:['Static vs dynamic analysis','Strings','Disassembly basics','Malware safety','Report writing'], labs:['Analyse benign binary','Build IOC list'], project:'Reverse engineering note' },
  { id:'incident-response', title:'Incident Response', area:'operations', track:'all', weeks:2, lessons:['Preparation','Identification','Containment','Eradication','Recovery','Lessons learned'], labs:['Run IR tabletop','Draft comms'], project:'Incident response plan' },
  { id:'capstone', title:'Capstone Project', area:'capstone', track:'all', weeks:4, lessons:['Proposal','Build','Evaluate','Report','Presentation'], labs:['Milestone demo','Peer review'], project:'Capstone: secure a realistic small-business system' },
  { id:'career-portfolio', title:'Cyber Career Portfolio', area:'career', track:'all', weeks:2, lessons:['Resume positioning','GitHub portfolio','Lab writeups','Interview stories'], labs:['Publish writeup','STAR examples'], project:'Cyber job portfolio pack' }
];

const labs = {
  'incident-response-home-lab': { id:'incident-response-home-lab', title:'Incident Response Home Lab', tools:['Wireshark','Linux VM','Windows Event Viewer','Sysmon optional'], steps:['Create a clean lab folder','Capture normal network traffic in Wireshark','Generate a harmless suspicious event such as failed logins','Record timeline: detection, triage, containment, recovery','Write an incident report with evidence and next actions','Add lessons learned to your playbook'] },
  'web-pentest-lab': { id:'web-pentest-lab', title:'Web Penetration Testing Lab', tools:['OWASP Juice Shop or DVWA','Burp Community','Browser devtools'], steps:['Start vulnerable app locally','Map pages and inputs','Test authentication and access control','Test common injection examples safely','Write one professional finding','Write remediation and retest notes'] },
  'forensics-lab': { id:'forensics-lab', title:'Digital Forensics Case Lab', tools:['Autopsy','hashdeep/sha256sum','Linux'], steps:['Create evidence folder','Hash evidence file','Inspect metadata','Build event timeline','Extract findings','Write evidence-safe report'] }
};

const quizzes = {
  'network-security': { id:'network-security', questions:[
    { q:'What does segmentation reduce?', options:['Blast radius','Password length','Clock drift','CPU usage'], answer:0 },
    { q:'Which tool is used for packet analysis?', options:['Wireshark','Excel','Figma','Blender'], answer:0 },
    { q:'VPNs mainly protect what?', options:['Traffic in transit','Physical screens','Keyboard wear','Disk space'], answer:0 },
    { q:'A firewall rule should be?', options:['Specific and justified','Always allow any','Never logged','Written after incident only'], answer:0 }
  ]},
  'security-engineering': { id:'security-engineering', questions:[
    { q:'Least privilege means?', options:['Only needed access','Admin for everyone','No passwords','One shared account'], answer:0 },
    { q:'Threat modelling is done to?', options:['Find abuse cases early','Replace testing','Avoid documentation','Guarantee zero bugs'], answer:0 },
    { q:'Defense in depth means?', options:['Multiple layers of controls','One perfect firewall','Only antivirus','No backups'], answer:0 },
    { q:'A secure design review should include?', options:['Assets, actors, threats, controls','Only UI colours','Only cost','Only marketing'], answer:0 }
  ]}
};

function eligibleModules(track){
  return modules.filter(m => m.track === 'all' || m.track === track || m.track === 'both-specialisations');
}
function buildStudyPlan({ weeks=24, hoursPerWeek=8, track='security-engineering' }){
  const chosen = eligibleModules(track);
  const weekList = [];
  for(let i=0;i<weeks;i++){
    const mod = chosen[i % chosen.length];
    weekList.push({ week:i+1, moduleId:mod.id, title:mod.title, hours:hoursPerWeek, tasks:[`Study: ${mod.lessons[i % mod.lessons.length]}`, `Lab: ${mod.labs[i % mod.labs.length] || 'Write notes'}`, `Portfolio: ${mod.project}`, 'Write one-page weekly reflection'] });
  }
  return { track, hoursPerWeek, weeks:weekList, capstone:{ name:'Capstone: secure a realistic small-business system', deliverables:['Threat model','Controls plan','Test evidence','Incident response plan','Final report'] }, portfolioProjects:[...new Set(chosen.map(m=>m.project))].slice(0,10) };
}
function scoreProgress({ completedLessons=0, completedLabs=0, completedQuizzes=0, totalLessons=1, totalLabs=1, totalQuizzes=1 }){
  const lp = completedLessons/Math.max(1,totalLessons), labp=completedLabs/Math.max(1,totalLabs), qp=completedQuizzes/Math.max(1,totalQuizzes);
  const percent = Math.round((lp*.4+labp*.4+qp*.2)*100);
  const level = percent >= 75 ? 'Operator' : percent >= 35 ? 'Apprentice' : 'Recruit';
  return { percent, level, breakdown:{ lessons:Math.round(lp*100), labs:Math.round(labp*100), quizzes:Math.round(qp*100) } };
}
function getQuiz(id){ return quizzes[id] || quizzes['security-engineering']; }
function getLab(id){ return labs[id] || labs['incident-response-home-lab']; }
function getTodayRecommendation({ track='security-engineering', availableMinutes=45, weakArea='linux' }){
  const mod = eligibleModules(track).find(m => m.title.toLowerCase().includes(weakArea) || m.lessons.join(' ').toLowerCase().includes(weakArea)) || eligibleModules(track)[0];
  return { action:`Spend ${availableMinutes} minutes on ${mod.title}: read one lesson, do one lab step, and write three evidence bullets.`, resource:`Use module ${mod.id} plus one practical lab from the platform.`, moduleId:mod.id };
}
const api = { modules, labs, quizzes, eligibleModules, buildStudyPlan, scoreProgress, getQuiz, getLab, getTodayRecommendation };
if(typeof module !== 'undefined') module.exports = api;
if(typeof window !== 'undefined') window.CyberPlatform = api;
