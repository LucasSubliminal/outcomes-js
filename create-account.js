function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;
    let currentPin = pin;

    // Helper function to validate the PIN
    function validatePin(inputPin) {
        return inputPin === currentPin;
    }

    return {
        checkBalance(inputPin) {
            if (!validatePin(inputPin)) {
                return "Invalid PIN.";
            }
            return `Current balance: $${balance}`;
        },

        deposit(inputPin, amount) {
            if (!validatePin(inputPin)) {
                return "Invalid PIN.";
            }
            balance += amount;
            return `Deposited $${amount}. Current balance: $${balance}`;
        },

        withdraw(inputPin, amount) {
            if (!validatePin(inputPin)) {
                return "Invalid PIN.";
            }
            if (amount > balance) {
                return "Withdrawal amount exceeds balance.";
            }
            balance -= amount;
            return `Withdrew $${amount}. Current balance: $${balance}`;
        },

        changePin(oldPin, newPin) {
            if (!validatePin(oldPin)) {
                return "Invalid PIN.";
            }
            currentPin = newPin;
            return "PIN successfully changed.";
        }
    };
}

module.exports = { createAccount };
