import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const ExpensesPage = () => {
        const expenses = [
            {
                id: 1,
                title: "Groceries",
                description: "Weekly grocery shopping",
                amount: "$150.00",
                date: "2025-10-01",
                category: "Food"
            },
            {
                id: 2,
                title: "Gas",
                description: "Car fuel refill",
                amount: "$45.00",
                date: "2025-10-02",
                category: "Transportation"
            },
            {
                id: 3,
                title: "Netflix",
                description: "Monthly subscription",
                amount: "$15.99",
                date: "2025-10-01",
                category: "Entertainment"
            }
        ]
    return (
        <div className="flex w-full max-w-screen-md gap-4">
            {expenses.map((expense) => (
                <Card key={expense.id}>
                    <CardHeader>
                        <CardTitle>{expense.title}</CardTitle>
                        <CardDescription>{expense.description}</CardDescription>
                        <CardAction>{expense.amount}</CardAction>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center">
                            <p>{expense.amount}</p>
                            <p>{expense.date}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-2"> Category: {expense.category}</p>
                    </CardContent>
                    <CardFooter>
                     <Button>Button</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
            
     
    )
}

export default ExpensesPage