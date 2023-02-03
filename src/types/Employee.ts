export type Employee = {
    employeeId: number;
    email: string;
    type: string;
    name: string;
    tickets: Ticket[];
}

export type Ticket = {
    ticketId: number;
    amount: number;
    status: string;
    description: string;
    submitter: Employee;
    submittedDate: string;
    reviewer: Employee | null;
    reviewedDate: string;
}
