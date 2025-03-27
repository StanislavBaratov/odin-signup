const signup = {
    form: document.querySelector('form'),
    leftSide: document.querySelector('.left-column'),
    rightSide: document.querySelector('.right-column'),

    addAsterisk: function (label) {
        const asterisk = document.createElement('span');
        asterisk.textContent = '*';
        label.appendChild(asterisk);
    },

    toCamelCase: function (string) {
        return string.toLowerCase().replace(/[^a-z0-9](.)/g, (_, c) => c.toUpperCase());
    },

    addTextInputField: function (fieldName, type, required, side) {

        const identifier = fieldName.toLowerCase().split(' ').join('-');
        const parameterName = this.toCamelCase(fieldName);
        const container = document.createElement('div');
        container.classList.add('form-field');
        
        const label = document.createElement('label');
        label.setAttribute('for', identifier);
        label.textContent = fieldName;
        
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('id', identifier);
        input.setAttribute('name', parameterName);
        
        if (required) {
            this.addAsterisk(label);
            input.setAttribute('required', '');
        }

        side === 'left' ? this.leftSide.appendChild(container) : this.rightSide.appendChild(container);
        container.append(label, input);

    }
}

signup.addTextInputField('First Name', 'text', true, 'left');
signup.addTextInputField('Email', 'email', true, 'left');
signup.addTextInputField('Password', 'password', true, 'left');

signup.addTextInputField('Last Name', 'text', true, 'left');
signup.addTextInputField('Phone number', 'text', false, 'left');
signup.addTextInputField('Confirm password', 'password', true, 'left');