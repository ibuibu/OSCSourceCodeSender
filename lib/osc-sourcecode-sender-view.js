'use babel';

export default class OSCSourceCodeSenderView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('osc-sourcecode-sender');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Enjoy Live Coding!!';
    message.classList.add('message');
    this.element.appendChild(message);

    const issue = document.createElement('div');
    issue.textContent = '#issue You need "cmd + delete" to modify or delete input text.';
    issue.classList = 'message issue';
    this.element.appendChild(issue);

    const host = document.createElement('input');
    host.setAttribute('type', 'text');
    host.setAttribute('id', 'host');
    host.setAttribute('placeholder', 'host');
    this.element.appendChild(host);

    const port = document.createElement('input');
    port.setAttribute('type', 'text');
    port.setAttribute('id', 'port');
    port.setAttribute('placeholder', 'port');
    this.element.appendChild(port);

    const send_button = document.createElement('button');
    send_button.textContent = 'setup osc';
    send_button.setAttribute('id', 'send');
    this.element.appendChild(send_button);

    const close_button = document.createElement('button');
    close_button.textContent = 'close';
    close_button.setAttribute('id', 'close');
    this.element.appendChild(close_button);

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
