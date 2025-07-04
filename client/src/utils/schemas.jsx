import {z} from 'zod';

// Define the schema for validation
const campingSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 characters long'),
    price: z.coerce.number().min(0, 'Price must be a positive number'),
    description: z.string().max(50, 'Description must be less than 50 characters'),
})

export default campingSchema