import render from './render.js'
import event from './event.js';

window.login=(opts)=>{
    const container =opts.container;
    render(container);
    event();
};
