const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3107'], { stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, SMTP_HOST: '', SMTP_USER: '', SMTP_PASSWORD: '', CONTACT_FROM_EMAIL: '', CONTACT_TO_EMAIL: '' } });
let output = '';
(async () => {
  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Server did not start: ' + output)), 15000);
      server.on('exit', (code) => { clearTimeout(timer); reject(new Error('Server exited: ' + code + ' ' + output)); });
      server.stdout.on('data', (chunk) => { output += chunk; if (output.includes('Ready')) { clearTimeout(timer); resolve(); } });
      server.stderr.on('data', (chunk) => { output += chunk; });
    });
    const origin = 'http://127.0.0.1:3107';
    for (const path of ['/', '/services', '/industries', '/our-work', '/about', '/free-website-review', '/privacy', '/sitemap.xml', '/robots.txt', '/raisa-website.jpg']) {
      const res = await fetch(origin + path);
      assert.equal(res.status, 200, path);
      console.log('200', path);
    }
    const home = await (await fetch(origin)).text();
    assert.match(home, /Three|three essentials/);
    assert.match(home, /Raisa Pugliese Cleaning Services/);
    const work = await (await fetch(origin + '/our-work')).text();
    assert.match(work, /offer=founding-build/);
    const form = await (await fetch(origin + '/free-website-review')).text();
    assert.match(form, /Open My Email Draft/);
    assert.match(form, /mailto:dan@createdrevolution.com/);
    assert.doesNotMatch(form, /<form/);
    const founding = await (await fetch(origin + '/free-website-review?offer=founding-build')).text();
    assert.match(founding, /Email your founding-build application/);
    assert.match(founding, /Founding%20website%20build%20application/);
    for (const [path, destination] of Object.entries({'/contact-us':'/free-website-review','/book-now':'/free-website-review','/allprojects':'/our-work','/aboutus':'/about'})) {
      const res = await fetch(origin + path, {redirect:'manual'});
      assert.equal(res.status, 308); assert.equal(res.headers.get('location'), destination);
      console.log('308', path, destination);
    }
    const res = await fetch(origin + '/api/contact-form', {method:'POST', headers:{'Content-Type':'application/json', Origin:origin}, body:JSON.stringify({name:'Launch test',company:'Created Revolution test',trade:'HVAC',serviceArea:'Sarasota',email:'test@example.com',offer:'founding-build'})});
    const payload = await res.json();
    assert.equal(res.status, 503); assert.equal(payload.ok, false); assert.ok(payload.requestId);
    console.log('503: missing SMTP settings returns a real error and request reference');
  } catch (error) { console.error(error); process.exitCode = 1; }
  finally { server.kill('SIGTERM'); }
})();
