import {z} from 'zod';

// Define the schema for camping validation
export const campingSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 characters long'),
    price: z.coerce.number().min(0, 'Price must be a positive number'),
    description: z.string().max(1000, 'Description must be less than 1000 characters'),
    category: z.string().min(1, 'Category is required').max(20, 'Category must be less than 20 characters'),
    lat: z.coerce.number().optional(),
    lng: z.coerce.number().optional(),
    image: z.any()
})

// Define the schema for profile validation
export const profileSchema = z.object({
    firstname: z.string().min(1, 'Firstname must be at least 1 character long'),
    lastname: z.string().min(1, 'Lastname must be at least 1 character long'),
})
