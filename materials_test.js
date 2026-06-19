const assert = require('assert');
const resources = require('./resources.json');
assert.ok(resources.length >= 12, 'need at least 12 curated resources');
assert.ok(resources.some(r => r.provider === 'MIT OpenCourseWare' && r.area.includes('systems security')), 'MIT systems security missing');
assert.ok(resources.some(r => r.provider === 'PortSwigger' && r.area.includes('web security')), 'PortSwigger missing');
assert.ok(resources.some(r => r.provider === 'OpenSecurityTraining2' && r.area.includes('reverse engineering')), 'OST2 reverse engineering missing');
assert.ok(resources.some(r => r.area.includes('digital forensics')), 'digital forensics resources missing');
assert.ok(resources.every(r => r.url && r.title && r.useFor && r.priority), 'resources need url/title/useFor/priority');
console.log('cyber_course_materials_tests_ok');
