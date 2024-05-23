
const stripe = Stripe('your-publishable-key-here');
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

document.getElementById('donationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = getFormData();
    const message = document.getElementById('message');

    const validationMessage = validateFormData(formData);
    if (validationMessage) {
        displayMessage(validationMessage, 'red');
        return;
    }

    const {paymentMethod, error} = await stripe.createPaymentMethod('card', card, {
        billing_details: {
            name: formData.name,
            email: formData.email
        }
    });

    if (error) {
        displayMessage(error.message, 'red');
        return;
    }
    
    formData.paymentMethodId = paymentMethod.id;
    processDonation(formData);
});

function getFormData() {
    return {
        charity: document.getElementById('charity').value,
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        amount: document.getElementById('amount').value.trim(),
        donationType: document.getElementById('donationType').value,
        anonymous: document.getElementById('anonymous').checked
    };
}

function validateFormData(formData) {
    if (!formData.charity || !formData.name || !formData.email || !formData.amount) {
        return 'All fields are required.';
    }

    if (formData.amount <= 0) {
        return 'Donation amount must be greater than zero.';
    }

    return null;
}

function displayMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
}

async function processDonation(formData) {
    try {
        const response = await fetch('/process_donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        if (result.error) {
            displayMessage(result.error, 'red');
        } else {
            displayMessage('Thank you for your donation!', 'green');
        }
    } catch (error) {
        displayMessage(error.message, 'red');
    }
}
