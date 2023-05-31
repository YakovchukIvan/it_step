"use strict";
// void
function processAction(action) {
    switch (action) {
        case 'refund':
            console.log('refund');
            break;
        case 'checkout':
            console.log('chekout');
            break;
        case 'reject':
            console.log('reject');
            break;
        default:
            const _ = action;
            throw new Error('Немає такого action');
    }
}
processAction('refund');
