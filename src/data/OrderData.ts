import type { Order } from "../types/Order";

export const orderData: Order[] = [
    {
        id: "ORD-001",
        customerId: "1",
        customerName: "Conor McGregor",
        items: [
            {
                stockId: "STK-001",
                stockName: "Samsung Galaxy S24",
                price: 125000.00,
                quantity: 1,
                total: 125000.00
            },
            {
                stockId: "STK-004",
                stockName: "Sony WH-1000XM5",
                price: 45000.00,
                quantity: 1,
                total: 45000.00
            }
        ],
        totalAmount: 170000.00,
        orderDate: "2024-01-15",
        status: "completed",
        paymentMethod: "card"
    },
    {
        id: "ORD-002",
        customerId: "2",
        customerName: "Israel Adesanya",
        items: [
            {
                stockId: "STK-005",
                stockName: "iPad Air",
                price: 95000.00,
                quantity: 1,
                total: 95000.00
            }
        ],
        totalAmount: 95000.00,
        orderDate: "2024-01-16",
        status: "pending",
        paymentMethod: "cash"
    },
    {
        id: "ORD-003",
        customerName: "Walk-in Customer",
        items: [
            {
                stockId: "STK-003",
                stockName: "Dell XPS 13",
                price: 220000.00,
                quantity: 1,
                total: 220000.00
            }
        ],
        totalAmount: 220000.00,
        orderDate: "2024-01-17",
        status: "completed",
        paymentMethod: "mobile"
    },
    {
        id: "ORD-004",
        customerId: "3",
        customerName: "Jon Jones",
        items: [
            {
                stockId: "STK-006",
                stockName: "PlayStation 5",
                price: 185000.00,
                quantity: 1,
                total: 185000.00
            }
        ],
        totalAmount: 185000.00,
        orderDate: "2024-01-18",
        status: "completed",
        paymentMethod: "card"
    },
    {
        id: "ORD-005",
        customerId: "4",
        customerName: "Valentina Shevchenko",
        items: [
            {
                stockId: "STK-007",
                stockName: "Apple Watch Series 9",
                price: 75000.00,
                quantity: 2,
                total: 150000.00
            }
        ],
        totalAmount: 150000.00,
        orderDate: "2024-01-19",
        status: "pending",
        paymentMethod: "cash"
    },
    {
        id: "ORD-006",
        customerId: "5",
        customerName: "Alexander Volkanovski",
        items: [
            {
                stockId: "STK-008",
                stockName: "MacBook Pro M3",
                price: 450000.00,
                quantity: 1,
                total: 450000.00
            }
        ],
        totalAmount: 450000.00,
        orderDate: "2024-01-20",
        status: "completed",
        paymentMethod: "card"
    }
];

export default orderData;
