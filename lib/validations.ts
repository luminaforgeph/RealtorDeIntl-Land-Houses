import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(30),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z.string().trim().min(10, "Please add a little more detail (at least 10 characters).").max(2000),
});
