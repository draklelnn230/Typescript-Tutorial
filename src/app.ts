class Department {
    static fiscalYear = 2022
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }
    static createEmployee(name: string) {
        return { name: name}
    }
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;

    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if ( !value ) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const accounting = new AccountingDepartment('d2', [])

accounting.addEmployee('Max')
accounting.addEmployee('John');

accounting.addReport('Something wrong')

// Getter
accounting.printReports()

// Setter
accounting.mostRecentReport = 'Year'

accounting.describe();

console.log(accounting.mostRecentReport)

