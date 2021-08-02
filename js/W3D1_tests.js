let assert = chai.assert;


let savingAccount = new SavingAccount(1, 14.5);
savingAccount._balance = 100; // sets the balance property of the Account object.

describe("getInterest(), SavingAccount", () => {
    it("Interest of the saving account", () => {
        assert.deepEqual(savingAccount.getInterest(), 14.5);
    });
});

describe("setInterest(value), SavingAccount", () => {
    it("Throwing RangeError if the value passed is less than 0", () => {
        assert.throw(() => {
            savingAccount.setInterest(-10) // interest = -10
        }, RangeError);
    });
    it("New set value to property 'interest' if its value is greater than 0.", () => {
        assert.deepEqual(savingAccount.setInterest(14.5), undefined); // interest = 14.5
    });
});

describe("addInterest(), SavingAccount", () => {
    it("Returns a balance ", () => {
        assert.deepEqual(savingAccount.addInterest(), 114.5);
    });
});

describe("toString(), SavingAccount", () => {
    it("Display the string representation of the SavingAccount", () => {
        assert.deepEqual(savingAccount.toString(), `Balance after interest for Saving Account 1 is: 114.5`);
    });
});
describe("endOfMonth(), SavingAccount", () => {
    it("Display Saving Account Statements at the end of a month", () => {
        assert.deepEqual(savingAccount.endOfMonth(), `Interest added SavingAccount 1: balance: 131.1025 interest:14.5`)
    });
});


let checkAccount = new CheckingAccount(2, 500);

describe("getOverDraftLimit(), CheckingAccount", () => {
    it("Fetching the overdraft limit of the checking account", () => {
        assert.deepEqual(checkAccount.getOverDraftLimit(), 500);
    });
});

describe("setOverDraftLimit(value), CheckingAccount", () => {
    it("Throwing RangeError if the value passed is less than zero", () => {
        assert.throw(() => {
            checkAccount.setOverDraftLimit(-500) // overdraft limit = -500
        }, RangeError);
    });
    it("Setting a new value to property 'overDraftLimit' if the value is greater than zero.", () => {
        assert.deepEqual(checkAccount.setOverDraftLimit(500), undefined); // overdraft limit  = 500
    });
});

describe("withdraw(value), CheckingAccount", () => {
    it("Throwing RangeError if the value passed is less than zero", () => {
        assert.throw(() => {
            checkAccount.withdraw(-400) // overdraft limit  = -400
        }, RangeError);
    });
    it("Throwing RangeError if the person attempts to withdraw beyond the allowed overdraft limit", () => {
        assert.throw(() => {
            checkAccount.withdraw(-200) // overdraft limit  = -200
        }, RangeError);
    });
    it("Setting new value to property 'overDraftLimit' if the value is greater than zero.", () => {
        assert.deepEqual(checkAccount.withdraw(500), undefined);
    });
});

describe("toString(), CheckingAccount", () => {
    it("should display the string representation of the CheckingAccount", () => {
        assert.deepEqual(checkAccount.toString(), `Balance of Checking Account 2 after withdrawal is: -500`);
    });
});
describe("endOfMonth(), CheckingAccount", () => {
    it("Display Checking Account statements at the end of a month", () => {
        assert.deepEqual(checkAccount.endOfMonth(), `Warning, low balance CheckingAccount 2: balance: -500 limit: 500`)
    });
});


/* ::::   Class Name => Bank   :::: */
let bank = new Bank();

describe("addAccount(), Bank", () => {
    it("Creates an instance of Account, add it to array property in Bank, and return nextNumber", () => {
        assert.deepEqual(bank.addAccount(), 2); // returns 2 as a nextNumber.
    });
});

describe("addSavingAccount(), Bank", () => {
    it("Creates an instance of Saving Account, add it to array property in Bank, and return nextNumber", () => {
        assert.deepEqual(bank.addSavingAccount(14.5), 3); // returns 3 as a nextNumber.
    });
});

describe("addCheckingAccount(), Bank", () => {
    it("Creates an instance of Checking Account, add it to array property in Bank, and return nextNumber", () => {
        assert.deepEqual(bank.addCheckingAccount(500), 4); // returns 4 as a nextNumber.
    });
});

describe("closeAccount(), Bank", () => {
    it("Closes an Account of any time", () => {
        assert.deepEqual(bank.closeAccount(3), 2); // returns 4 as a nextNumber.
    });
});

describe("accountReport(), Bank", () => {
    it("Report details all accounts", () => {
        assert.deepEqual(bank.accountReport(3), undefined); // returns undefined. It simply logs to the console.
    });
});

describe("endOfMonth(), Bank", () => {
    it("Display statements of all Accounts at the end of a month", () => {
        assert.deepEqual(bank.endOfMonth(), undefined);// returns undefined. It simply logs to the console.
    });
});