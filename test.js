test = require('tape');

test('first test',(t) => {
    t.equals(1,1);
    t.end();
})

test('this test should fail',(t) => {
    t.equals(1,2);
    t.end();
})