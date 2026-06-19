const assert = require('assert');
const platform = require('./app.logic.js');

assert.strictEqual(platform.modules.length >= 14, true, 'should include core, specialisation, capstone and career modules');
assert.ok(platform.modules.find(m => m.id === 'data-security-privacy'), 'Data Security and Privacy module missing');
assert.ok(platform.modules.find(m => m.id === 'principles-security-engineering'), 'Principles of Security Engineering module missing');
assert.ok(platform.modules.find(m => m.id === 'digital-forensics'), 'Digital Forensics module missing');
assert.ok(platform.modules.find(m => m.id === 'advanced-penetration-testing'), 'Advanced Penetration Testing module missing');
assert.ok(platform.modules.find(m => m.id === 'cyber-law'), 'Cyber and the Law module missing');

const plan = platform.buildStudyPlan({ weeks: 24, hoursPerWeek: 8, track: 'security-engineering' });
assert.strictEqual(plan.weeks.length, 24, '24 week plan should have 24 weeks');
assert.ok(plan.weeks[0].tasks.length >= 3, 'each week should have multiple tasks');
assert.ok(plan.capstone.name.includes('Capstone'), 'plan should include capstone');
assert.ok(plan.portfolioProjects.length >= 6, 'should include portfolio projects');

const score = platform.scoreProgress({ completedLessons: 28, completedLabs: 8, completedQuizzes: 7, totalLessons: 84, totalLabs: 20, totalQuizzes: 14 });
assert.ok(score.percent > 35 && score.percent < 60, 'progress percent should be weighted realistic');
assert.strictEqual(score.level, 'Apprentice');

const quiz = platform.getQuiz('network-security');
assert.ok(quiz.questions.length >= 4, 'network security quiz should have questions');
assert.ok(quiz.questions.every(q => q.answer !== undefined), 'quiz questions need answers');

const lab = platform.getLab('incident-response-home-lab');
assert.ok(lab.steps.length >= 5, 'incident response lab should have actionable steps');
assert.ok(lab.tools.includes('Wireshark'), 'lab should include Wireshark');

const weekly = platform.getTodayRecommendation({ track: 'security-engineering', availableMinutes: 45, weakArea: 'linux' });
assert.ok(weekly.action.length > 10, 'recommendation should be actionable');
assert.ok(weekly.resource.length > 5, 'recommendation should include resource');

console.log('cyber_learning_platform_tests_ok');
