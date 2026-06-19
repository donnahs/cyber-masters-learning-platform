const P = window.CyberPlatform;
const STORAGE = 'nova-cyber-masters-progress';

function state(){ return JSON.parse(localStorage.getItem(STORAGE) || '{"completed":{},"quiz":{}}'); }
function save(s){ localStorage.setItem(STORAGE, JSON.stringify(s)); render(); }
function mark(id){ const s = state(); s.completed[id] = !s.completed[id]; save(s); }
function moduleProgress(){ const s = state(); const completed = Object.values(s.completed).filter(Boolean).length; return { completed, total:P.modules.length }; }
function progressScore(){ const mp = moduleProgress(); return P.scoreProgress({ completedLessons: mp.completed*4, completedLabs: mp.completed, completedQuizzes:Object.keys(state().quiz).length, totalLessons:P.modules.length*4, totalLabs:P.modules.length, totalQuizzes:14 }); }
function renderStats(){ const mp = moduleProgress(); const sc = progressScore(); document.querySelector('#stats').innerHTML = `<div class="stat"><strong>${mp.completed}/${mp.total}</strong><span>Modules done</span></div><div class="stat"><strong>${sc.percent}%</strong><span>Weighted progress</span></div><div class="stat"><strong>${sc.level}</strong><span>Current level</span></div><div class="stat"><strong>${P.modules.filter(m=>m.project).length}</strong><span>Portfolio projects</span></div>`; }
function renderModules(filter='all'){ const s=state(); const mods=P.modules.filter(m=>filter==='all'||m.area===filter); document.querySelector('#modules').innerHTML = mods.map(m=>`<article class="module ${s.completed[m.id]?'done':''}"><h3>${m.title}</h3><span class="tag">${m.area}</span><span class="tag">${m.track}</span><span class="tag">${m.weeks}w</span><p>${m.lessons.slice(0,3).join(' · ')}</p><p><b>Project:</b> ${m.project}</p><div class="progress"><div class="bar" style="width:${s.completed[m.id]?100:20}%"></div></div><button onclick="mark('${m.id}')">${s.completed[m.id]?'Mark not done':'Mark complete'}</button></article>`).join(''); }
function renderPlan(){ const plan=P.buildStudyPlan({track:document.querySelector('#track').value,weeks:Number(document.querySelector('#weeks').value),hoursPerWeek:Number(document.querySelector('#hours').value)}); document.querySelector('#planOutput').textContent = JSON.stringify({track:plan.track, first4Weeks:plan.weeks.slice(0,4), capstone:plan.capstone, portfolioProjects:plan.portfolioProjects}, null, 2); }
function renderLab(){ const lab=P.getLab(document.querySelector('#labSelect').value); document.querySelector('#labOutput').innerHTML = `<h3>${lab.title}</h3><p><b>Tools:</b> ${lab.tools.join(', ')}</p>${lab.steps.map((x,i)=>`<div class="lab-step"><b>${i+1}.</b> ${x}</div>`).join('')}`; }
function renderQuiz(){ const quiz=P.getQuiz(document.querySelector('#quizSelect').value); document.querySelector('#quizOutput').innerHTML = quiz.questions.map((q,i)=>`<div class="question"><b>Q${i+1}: ${q.q}</b>${q.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}<button onclick="answerQuiz('${quiz.id}',${i},${q.answer})">Check</button><span id="a-${quiz.id}-${i}"></span></div>`).join(''); }
function answerQuiz(id,i,answer){ const picked=document.querySelector(`input[name="q${i}"]:checked`); const span=document.querySelector(`#a-${id}-${i}`); if(!picked){ span.textContent=' Pick one.'; return; } const ok=Number(picked.value)===answer; span.textContent=ok?' Correct':' Try again'; if(ok){ const s=state(); s.quiz[`${id}-${i}`]=true; save(s); } }
function recommend(){ const r=P.getTodayRecommendation({track:document.querySelector('#track').value,availableMinutes:Number(document.querySelector('#minutes').value),weakArea:document.querySelector('#weakArea').value}); document.querySelector('#recommendOutput').textContent=JSON.stringify(r,null,2); }
async function loadResources(){ const box=document.querySelector('#resources'); if(!box) return; try{ const resources=await fetch('resources.json').then(r=>r.json()); box.innerHTML=resources.map(r=>`<article class="module"><h3>${r.title}</h3><span class="tag">Priority ${r.priority}</span><span class="tag">${r.provider}</span><p>${r.useFor}</p><p><b>Area:</b> ${r.area}</p><a class="button secondary" href="${r.url}" target="_blank" rel="noreferrer">Open material</a></article>`).join(''); }catch(err){ box.innerHTML='<p>Resource library failed to load. Open COURSE_MATERIALS.md instead.</p>'; } }
function exportProgress(){ const blob=new Blob([JSON.stringify({progress:state(), score:progressScore(), modules:P.modules},null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='nova-cyber-masters-progress.json'; a.click(); URL.revokeObjectURL(url); }
function render(){ renderStats(); renderModules(window.currentFilter || 'all'); }

document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{window.currentFilter=btn.dataset.filter; renderModules(window.currentFilter);}));
document.querySelector('#planBtn').addEventListener('click', renderPlan);
document.querySelector('#labBtn').addEventListener('click', renderLab);
document.querySelector('#quizBtn').addEventListener('click', renderQuiz);
document.querySelector('#recommendBtn').addEventListener('click', recommend);
document.querySelector('#exportBtn').addEventListener('click', exportProgress);
document.querySelector('#resetBtn').addEventListener('click', ()=>{localStorage.removeItem(STORAGE); renderPlan(); renderLab(); renderQuiz(); recommend(); loadResources(); render();});

window.mark=mark; window.answerQuiz=answerQuiz;
renderPlan(); renderLab(); renderQuiz(); recommend(); loadResources(); render();
